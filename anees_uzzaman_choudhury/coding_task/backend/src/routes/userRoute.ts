import { Hono } from "hono"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const users = new Hono<{
    Bindings: {
        DATABASE_URL: string
    }
}>();

users.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())
    
    const body = await c.req.json()
    console.log(body)
    if (!body.username || body.username.trim() === '') {
        return c.json({ message: 'Username is required' }, 400); // Bad Request
    }

    try {
        const existingUser = await prisma.user.findFirst({
            where: {
                username: body.username,
            },
        });
        if (existingUser) {
            return c.json({ id: existingUser.userId, message: 'User already exists' }, 409); // Conflict
        }

        const user = await prisma.user.create({
            data: {
                username: body.username,
            },
        });
        return c.json({ id: user.userId, message: 'User created' }, 201); // Created
    } catch (error) {
        console.error('Error in user creation:', error);
        return c.json({ message: 'Error creating user' }, 500); // Internal Server Error
    }
    
})

export default users