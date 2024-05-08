import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const comments = new Hono<{
    Bindings: {
        DATABASE_URL: string
    }
}>()


comments.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    const { postId, userId, content } = await c.req.json()

    if (!postId || !postId.trim()) {
        return c.json({ message: 'PostId is required' })
    }

    if (!userId || !userId.trim()) {
        return c.json({ message: 'UserId is required' })
    }

    if (!content || !content.trim()) {
        return c.json({ message: 'Content is required' })
    }

    try {
        const post = await prisma.post.findFirst({
            where: {
                postId
            }
        })

        return c.json(post)
    } catch (error) {
        console.error("Failed to find post:", error)
        return c.json({ message: 'Error finding post' })
    }

})

export default comments;


// populate the comments table
// { postId, userId, content }
// "postId": "1",
// "userId": "1",
// "content": "This is a comment"