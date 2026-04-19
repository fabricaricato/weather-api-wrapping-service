// ─── Core Dependencies ───
import express, { Request, Response } from "express"
import cors from "cors"
import { config } from "dotenv"

// ─── Internal Modules ───
import { connectDB } from "./config/database"
import { weatherRouter } from "./routes/weatherRouter"
// import { weatherRouter } from "./routes/weatherRouter"

// Load environment variables and establish database connection on startup
config()
connectDB()

const PORT = process.env.PORT

// Initialize Express server
const server = express()

// ─── Global Middleware ───
server.use(cors())              // Enable Cross-Origin Resource Sharing for all origins
server.use(express.json())      // Parse incoming JSON request bodies

// ─── Root Route ───
// Serves a styled HTML landing page with API documentation and endpoint overview
server.get('/', (req: Request, res: Response) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Weather API</title>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    </head>
    <body>
      <div>
        <p>Weather Example</p>
      </div>
    </body>
    </html>
  `)
})

// ─── API Routes ───
server.use('/api/weather', weatherRouter)

// Only start the HTTP server when NOT running on Vercel (Vercel handles this via serverless functions)
if (!process.env.VERCEL) {
  server.listen(PORT, () => {
    try {
      console.log(`Server listening on port: ${PORT}`)
    } catch (error) {
      const err = error as Error
      console.log(`Port listening failure, error message: ${err.message}`)
    }
  })
}

// Export the server instance for Vercel serverless function entry point
export default server