'use server'
import { NextResponse } from "next/server";
import { validateToken } from "./app/functions/validateToken";

export const middleware = (request) => {

    const token = request.cookies.get('token')?.value;
    const urlLogin = new URL('/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c', request.url);
    const lista = new URL('./pages/dashboard', request.url); 
    const isTokenValidated = validateToken(token);

    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/dashboard' ||
        request.nextUrl.pathname === '/pages/alterar' || request.nextUrl.pathname === '/pages/registrar'
        ) {
            return NextResponse.redirect(urlLogin);
        }
    }
    if (isTokenValidated) {
        if (request.nextUrl.pathname === '/') {
            return NextResponse.redirect(Lista);
        }
    }
    NextResponse.next();
};
export const config = {
    matcher: ['/', '/pages/dashboard', '/pages/alterar', '/pages/registrar']
};

