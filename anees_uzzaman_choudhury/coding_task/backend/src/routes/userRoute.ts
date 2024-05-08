import { Hono } from "hono"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const users = new Hono<{
    Bindings: {
        DATABASE_URL: string
    }
}>()

users.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json()
    console.log(body)
    if (!body.username) {
        return c.json({ message: 'Username is required' })
    }
    // no auth
    // create new user
    // first check if user already exists
    try {
        const existingUser = await prisma.user.findFirst({
            where: {
                username: body.username
            }
        })
        if (existingUser) {
            return c.json({ id: existingUser.userId, message: 'User already exists'})
        }
        
    } catch (error) {
        console.log(error)
        return c.json({ message: 'Error checking if user exists'})
    }
    
    try {
        const user = await prisma.user.create({
            data: {
                username: body.username
            }
        })
        return c.json({ id: user.userId, message: 'User created'})
        
    } catch (error) {
        console.log(error)
        return c.json({ message: 'Error creating user'})
    }
    
  })

export default users