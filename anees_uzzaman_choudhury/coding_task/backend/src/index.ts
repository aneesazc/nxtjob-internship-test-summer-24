import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { upgradeWebSocket } from 'hono/cloudflare-workers'
import posts from './routes/postsRoute'
import users from './routes/userRoute'
import comments from './routes/commentsRoute'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono<{
    Bindings: {
        DATABASE_URL: string
    }
}>()

app.use('/*', cors()) 

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/api/v1/posts', posts)

app.route('/api/v1/comments', comments)

app.route('/api/v1/users', users)

app.get('/api/v1/counts', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
}).$extends(withAccelerate())
  try {
      const counts = await prisma.post.groupBy({
          by: ['channelId'],
          _count: {
              channelId: true,
          },
          where: {
              // Any filters if needed, e.g., isActive, not deleted, etc.
          },
      });

      // Transform the data into a more friendly format for the frontend
      const formattedCounts = counts.reduce((acc: any, curr: any) => {
          acc[curr.channelId] = curr._count.channelId;
          return acc;
      }, {});

      return c.json(formattedCounts, 200);
  } catch (error) {
      console.error('Failed to fetch counts:', error);
      return c.json({ message: 'Error fetching counts' }, 500);
  }
});


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
