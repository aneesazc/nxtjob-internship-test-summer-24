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


posts.post("/", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())
    
    const body: PostInput = await c.req.json()

    if (!body.content || !body.content.trim()) {
        return c.json({ message: 'Content is required' }, 400);
    }
    
    if (!body.userId || !body.userId.trim()) {
        return c.json({ message: 'Login to start posting' }, 400);
    }
    
    if (!body.channelId || !body.channelId.trim()) {
        return c.json({ message: 'ChannelId is required' }, 400);
    }



    try {
        const post = await prisma.post.create({
            data: body
        });
        return c.json({ postId: post.postId, message: 'Post created' }, 201);
    } catch (error) {
        console.error("Failed to create post:", error);
        return c.json({ message: 'Error creating post' }, 500);
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
        return c.json(posts, 200);
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        return c.json({ message: 'Error fetching posts' }, 500);
    }

    
})

// get all comments for a specific post
posts.get('/:postId/comments', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    const { postId } = c.req.param()

    if (!postId || !postId.trim()) {
        return c.json({ message: 'PostId is required' }, 400);
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
                fromUserId: true,
                postId: true,
            }
        });
        return c.json(comments, 200);
    } catch (error) {
        console.error("Failed to fetch comments:", error);
        return c.json({ message: 'Error fetching comments' }, 500);
    }
})

// like a post
posts.post('/:postId/like', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())
    const { postId } = c.req.param();  

    if (!postId.trim()) {
        return c.json({ message: 'PostId is required' }, 400);
    }

    try {
        const post = await prisma.post.findUnique({
            where: { postId }
        });

        if (!post) {
            return c.json({ message: 'Post not found' }, 404);
        }

        const likedPost = await prisma.post.update({
            where: { postId },
            data: {
                likes: {
                    increment: 1
                }
            }
        });

        return c.json(likedPost, 200);
    } catch (error) {
        console.error("Failed to like post:", error);
        return c.json({ message: 'Error liking post' }, 500);
    }
});

// Unlike a post
posts.delete('/:postId/like', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    const { postId } = c.req.param();

    if (!postId.trim()) {
        return c.json({ message: 'PostId is required' }, 400);
    }

    try {
        const post = await prisma.post.findUnique({
            where: { postId }
        });

        if (!post) {
            return c.json({ message: 'Post not found' }, 404);
        }

        const unlikedPost = await prisma.post.update({
            where: { postId },
            data: {
                likes: {
                    decrement: 1
                }
            }
        });

        return c.json(unlikedPost, 200);
    } catch (error) {
        console.error("Failed to unlike post:", error);
        return c.json({ message: 'Error unliking post' }, 500);
    }
});

export default posts;