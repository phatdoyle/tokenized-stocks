import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { ChartTooltip } from './ui/ChartContainer';

export interface TreemapNode {
  name: string;
  value?: number;
  fill?: string;
  stock_ticker?: string;
  children?: TreemapNode[];
}

interface D3TreemapProps {
  data: TreemapNode[];
  total: number;
  fmtValue: (v: number) => string;
  onNodeClick?: (node: TreemapNode) => void;
  className?: string;
}

export function D3Treemap({
  data,
  total,
  fmtValue,
  onNodeClick,
  className = '',
}: D3TreemapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredNode, setHoveredNode] = useState<{ node: TreemapNode; value: number } | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current || !svgRef.current || data.length === 0) return;

    const update = () => {
      if (!containerRef.current || !svgRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      if (width <= 0 || height <= 0) return;

      const rootData: TreemapNode = { name: 'root', children: data };
      const root = d3.hierarchy(rootData, (d: TreemapNode) => d.children)
        .sum((d) => (d as TreemapNode).value ?? 0)
        .sort((a, b) => (b.value ?? 0) - (a.value ?? 0));

      d3.treemap<TreemapNode>()
        .tile(d3.treemapSquarify)
        .size([width, height])
        .padding(1)
        .round(true)(root);

      const svg = d3.select(svgRef.current);
      svg.selectAll('*').remove();
      svg.attr('width', width).attr('height', height);

      const nodes = root.descendants().filter((d) => d.depth > 0);

      const node = svg
        .selectAll('g')
        .data(nodes)
        .join('g')
        .attr('transform', (d) => `translate(${(d as d3.HierarchyRectangularNode<unknown>).x0},${(d as d3.HierarchyRectangularNode<unknown>).y0})`)
        .style('cursor', (d) => (d.children ? 'default' : 'pointer'));

      node
        .append('rect')
        .attr('width', (d) => (d as d3.HierarchyRectangularNode<unknown>).x1 - (d as d3.HierarchyRectangularNode<unknown>).x0)
        .attr('height', (d) => (d as d3.HierarchyRectangularNode<unknown>).y1 - (d as d3.HierarchyRectangularNode<unknown>).y0)
        .attr('fill', (d) => {
          const n = d.data as TreemapNode;
          return n.fill ?? '#666';
        })
        .attr('fill-opacity', (d) => (d.children ? 0.15 : 0.9))
        .attr('stroke', 'rgba(255,255,255,0.1)')
        .attr('stroke-width', 1);

      node
        .filter((d) => {
          const r = d as d3.HierarchyRectangularNode<unknown>;
          return (r.x1 - r.x0) > 40 && (r.y1 - r.y0) > 24;
        })
        .append('text')
        .attr('x', (d) => {
          const r = d as d3.HierarchyRectangularNode<unknown>;
          return (r.x1 - r.x0) / 2;
        })
        .attr('y', (d) => {
          const r = d as d3.HierarchyRectangularNode<unknown>;
          return (r.y1 - r.y0) / 2;
        })
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('fill', 'rgb(226 232 240)')
        .attr('font-size', (d) => {
          const r = d as d3.HierarchyRectangularNode<unknown>;
          return Math.min(11, Math.min(r.x1 - r.x0, r.y1 - r.y0) / 8);
        })
        .attr('font-family', 'JetBrains Mono, monospace')
        .text((d) => {
          const n = d.data as TreemapNode;
          const val = d.value ?? 0;
          return `${n.name} ${fmtValue(val)}`;
        });

      node
        .on('click', (_, d) => {
          const n = d.data as TreemapNode;
          if (n.stock_ticker) onNodeClick?.(n);
        })
        .on('mouseenter', function (event, d) {
          const n = d.data as TreemapNode;
          const val = d.value ?? 0;
          setHoveredNode({ node: n, value: val });
          setMousePos({ x: event.pageX, y: event.pageY });
        })
        .on('mouseleave', () => {
          setHoveredNode(null);
        });
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(containerRef.current);

    return () => {
      ro.disconnect();
      d3.select(svgRef.current).selectAll('g').remove();
    };
  }, [data, fmtValue, onNodeClick]);

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      <svg ref={svgRef} className="block" />
      {hoveredNode && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{ left: mousePos.x + 12, top: mousePos.y + 12 }}
        >
          <ChartTooltip active>
            {(hoveredNode.node.name === 'Ondo' || hoveredNode.node.name === 'xStock') && hoveredNode.node.stock_ticker ? (
              <p className="text-xs text-secondary mb-1">{hoveredNode.node.stock_ticker} — {hoveredNode.node.name}</p>
            ) : (
              <p className="text-xs text-secondary mb-1">{hoveredNode.node.name}</p>
            )}
            <p className="font-mono text-surface-100">{fmtValue(hoveredNode.value)}</p>
            <p className="text-xs text-secondary">
              {total > 0 ? ((hoveredNode.value / total) * 100).toFixed(1) : '0'}% share
            </p>
          </ChartTooltip>
        </div>
      )}
    </div>
  );
}
