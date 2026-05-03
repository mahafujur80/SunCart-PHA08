import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { NextResponse } from "next/server"



export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    console.log("Session in proxy:", session); // Debugging line to check session data

    if (session) {
        return NextResponse.next(); // Allow the request to proceed if the user is authenticated
    }
    return NextResponse.redirect(new URL('/login', request.url))

}

export const config = {
    matcher: ['/my-profile', '/ProductsDetails/:path*'], 
}