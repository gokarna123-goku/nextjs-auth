import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";


connect();

export async function POST(request: NextRequest) {

    try {
        const reqBody = await request.json();

        const { email, password } = reqBody;
        console.log(reqBody, " req body");

        const user = await User.findOne({ email });

        if (!user) {

            return NextResponse.json({ error: "User does not exist" }, { status: 404 });
        }

        const isPasswordCorrect = await bcryptjs.compare(password, user.password);

        if (!isPasswordCorrect) {

            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        // Create token data
        const tokenData = {
            _id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
        }

        // Create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" });


        const response = NextResponse.json({
            message: "User logged in successfully",
            success: true,
        }, { status: 200 });

        // Set token in cookie
        response.cookies.set("token", token, {
            httpOnly: true,
            maxAge: 2 * 60 * 60 * 1000,
        })

        return response;

    } catch (error: any) {

        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}