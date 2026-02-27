import { db } from "ponder:api";
import { sql } from "drizzle-orm";

// Helper function to execute SQL queries
export async function executeSQLQuery(sqlQuery: string): Promise<any[]> {
    // Validate inputs
    if (!sqlQuery || typeof sqlQuery !== 'string') {
      const error = new Error("Invalid SQL query: query must be a non-empty string");
      console.error(error.message);
      throw error;
    }

    try {
      // Log query execution for debugging
      console.log("Executing SQL query...");
      
      // Use sql.raw for raw SQL queries (assert type for compatibility with ponder:api db)
      const result = await db.execute(sql.raw(sqlQuery) as Parameters<typeof db.execute>[0]);
      
      // Validate result structure
      if (!result) {
        throw new Error("Database returned null or undefined result");
      }

      if (!result.rows) {
        console.warn("Query returned result without rows property");
        return [];
      }

      console.log(`Query returned ${result.rows.length} rows`);
      return result.rows;
    } catch (error) {
      // Enhanced error logging
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error("SQL query execution failed:");
      console.error("  Error:", errorMessage);
      console.error("  Query preview:", sqlQuery.substring(0, 100) + "...");
      
      if (error instanceof Error) {
        console.error("  Stack:", error.stack);
      }
      
      // Re-throw with enhanced context
      throw error;
    }
  }
  