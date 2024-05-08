import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const posts = new Hono<{
    Bindings: {
        DATABASE_URL: string
    }
}>()

interface PostInput {
    userId: string;
    channelId: string;
    content: string;
}

interface CommentInput {
    postId: string;
    userId: string;
    content: string;
}



posts.post("/", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())
    
    const body: PostInput = await c.req.json()

    if (!body.content || !body.content.trim()) {
        return c.json({ message: 'Content is required' });
    }
    
    if (!body.userId || !body.userId.trim()) {
        return c.json({ message: 'Login to start posting' });
    }
    
    if (!body.channelId || !body.channelId.trim()) {
        return c.json({ message: 'ChannelId is required' });
    }



    try {
        const post = await prisma.post.create({
            data: {
                content: body.content,
                userId: body.userId,
                channelId: body.channelId,
            }
        });
        return c.json({ id: post.postId, message: 'Post created' });
    } catch (error) {
        console.error("Failed to create post:", error);
        return c.json({ message: 'Error creating post' });
    }
});

posts.get('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const posts = await prisma.post.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            select: {
                postId: true,
                content: true,
                userId: true,
                channelId: true,
                likes: true,
                Comments: true,
            }
        });
        return c.json(posts);
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        return c.json({ message: 'Error fetching posts' });
    }

    
})

// get all comments for a specific post
posts.get('/:postId/comments', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    const { postId } = c.req.param()

    if (!postId || !postId.trim()) {
        return c.json({ message: 'PostId is required' });
    }

    try {
        const comments = await prisma.comment.findMany({
            where: {
                postId
            },
            orderBy: {
                createdAt: 'desc'
            },
            select: {
                commentId: true,
                content: true,
                userId: true,
                postId: true,
            }
        });
        return c.json(comments);
    } catch (error) {
        console.error("Failed to fetch comments:", error);
        return c.json({ message: 'Error fetching comments' });
    }
})

posts.post('/:postId/like', (c) => {
    return c.text('Like a post')
  })
  
posts.delete('/:postId/like', (c) => {
    return c.text('Unlike a post')
})

export default posts;