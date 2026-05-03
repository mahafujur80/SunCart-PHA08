import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { NextResponse } from "next/server"



export async function proxy(request) {
    const {pathname} = request.nextUrl
    const signInUrl = new URL('/login', request.url)
    signInUrl.searchParams.set('callbackUrl', pathname)

    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (session) {
        return NextResponse.next(); // Allow the request to proceed if the user is authenticated
    }
    return NextResponse.redirect(signInUrl); // Redirect to the login page if the user is not authenticated

}

export const config = {
    matcher: ['/my-profile', '/ProductsDetails/:path*'], 
}