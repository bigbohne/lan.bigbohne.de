import { Context } from "hono";
import { getCookie, setCookie, deleteCookie } from 'hono/cookie'

interface User {
    email: string,
    uuid: string,
    admin: boolean
}

export async function Auth(ctx: Context, next) {
    const email = getCookie(ctx, 'farmfest-email');
    const uuid = getCookie(ctx, 'farmfest-uuid');

    if (email == null || uuid == null) {
        console.log("Auth: email or uuid empty");
        return ctx.redirect('/');
    }

    const user = (await JSON.parse(await ctx.env.KV.get(`User:${email}`)) as User);
    if (user === null) {
        console.log("Auth: user is null");
        return ctx.redirect('/');
    }

    if (user.uuid != uuid) {
        console.log("Auth: user.uuid != uuid")
        return ctx.redirect('/');
    }

    console.log("Auth: successful");

    await next();
}

export async function login(ctx: Context, email: string, uuid: string) : Promise<boolean> {
    if (email == null || uuid == null) {
        console.log("login: email or uuid empty");
        return false;
    }

    console.log(`email: ${email}`);
    console.log(`uuid: ${uuid}`);

    const user = (JSON.parse(await ctx.env.KV.get(`User:${email}`)) as User);
    if (user === null) {
        console.log("login: user is null");
        return false;
    }

    if (user.uuid != uuid) {
        console.log(`Auth: ${user.uuid} != ${uuid}`)
        return false;
    }

    return true;
}