import { Hono } from "hono"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { setCookie, getCookie } from 'hono/cookie'

const users = new Hono<{
    Bindings: {
        DATABASE_URL: string
    }
}>();



users.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const username = body.username;

    if (!username || username.trim() === '') {
        return c.json({ message: 'Username is required' }, 400); // Bad Request
    }

    try {
        // Check if user already exists
        let user = await prisma.user.findUnique({
            where: { username },
        });

        if (!user) {
            // Create user if not exists
            user = await prisma.user.create({
                data: { username },
            });
        }

        // Return only the userId in the response
        return c.json({ userId: user.userId, message: 'User logged in/created successfully' }, 201);

    } catch (error) {
        console.error('Error in user creation or login:', error);
        return c.json({ message: 'Error creating or logging in user' }, 500); // Internal Server Error
    }
});

export default users