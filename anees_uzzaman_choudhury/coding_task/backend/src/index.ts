import { Hono } from 'hono'
import { upgradeWebSocket } from 'hono/cloudflare-workers'
import posts from './routes/postsRoute'
import comments from './routes/commentsRoute'
import users from './routes/userRoute'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/api/v1/posts', posts)

app.route('/api/v1/comments', comments)

app.route('/api/v1/users', users)


app.get('ws:/updates', upgradeWebSocket((c) => {
  return {
    onMessage(event, ws) {
      console.log(`Message from client: ${event.data}`)
      ws.send('Hello from server!')
    },
    onClose: () => {
      console.log('Connection closed')
    },
  }
}))

export default app


// Posts Management
// POST /api/v1/posts        // Create a new post
// GET /api/v1/posts         // Get all posts with optional filtering by category

// Comments Management
// POST /api/v1/comments     // Create a new comment on a post
// GET /api/v1/posts/{postId}/comments // Get all comments for a specific post

// User Management
// POST /api/v1/users         // Create a new user or login if user already exists

// Likes Management
// POST /api/v1/posts/{postId}/like   // Like a post
// DELETE /api/v1/posts/{postId}/like // Unlike a post

// Real-Time Updates
// WebSocket /updates   // WebSocket endpoint for real-time updates
