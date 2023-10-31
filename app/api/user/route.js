import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import * as z from 'zod'



// Define a schema for input validation
const userSchema = z.object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have more than 8 characters')
})


export async function POST( request ) {
    try {
        const body = await request.json();
        const { name, email, username, password } = userSchema.parse(body);
        
        // check if email already exists
        const existingUserByEmail = await prisma.user.findUnique({
            where: {email: email}
        });
        if(existingUserByEmail) {
            return NextResponse.json({user: null, message: "User with this email already exists"}, { status: 409 })
        }

        //check if username already exists
        const existingUserByUsername = await prisma.user.findUnique({
            where: {username: username}
        });
        if(existingUserByUsername) {
            return NextResponse.json({user: null, message: "User with this username already exists"}, { status: 409 })
        }

        // create new user
        const hashedPassword = await hash(password, 15);
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                username,
                password: hashedPassword
            }
        });

        const  { password: newUserPassword, ...rest} = newUser

        return NextResponse.json({user: rest, message: "User created successfully"}, {status: 201})


    } catch (error) {
        
        return NextResponse.json({ message: "Something went wrong!"}, {status: 500 })
        
    }
}
