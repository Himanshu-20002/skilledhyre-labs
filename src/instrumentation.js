// Ensures database connection is established during server startup
export async function register() {
  try {
    const { connectToDatabase } = await import("./utils/db.js");
    await connectToDatabase();
    // eslint-disable-next-line no-console
    console.log("[instrumentation] Database connected on startup");
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("[instrumentation] Failed to connect to database on startup", error);
  }
}
