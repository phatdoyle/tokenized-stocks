/**
 * Consistent color palette for multi-series charts.
 * Designed against the dark surface background.
 */
export const CHART_COLORS = [
  '#00E5C3', // teal accent
  '#4DA6FF', // sky blue
  '#FFB547', // warm amber
  '#FF6B9D', // pink
  '#A78BFA', // violet
  '#34D399', // emerald
  '#FB923C', // orange
  '#60A5FA', // light blue
  '#F472B6', // rose
  '#2DD4BF', // teal 400
];

export function getChartColor(index: number): string {
  return CHART_COLORS[index % CHART_COLORS.length]!;
}
