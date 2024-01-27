import { Context } from "hono";
import { login } from "../middleware/auth";
import { getCookie, setCookie, deleteCookie } from 'hono/cookie'

export default async function LoginCtrl(ctx: Context) {
    const email = ctx.req.query('email');
    const uuid = ctx.req.query('uuid');

    if (await login(ctx, email, uuid) == true) {
        setCookie(ctx, 'farmfest-email', email);
        setCookie(ctx, 'farmfest-uuid', uuid);
    }

    return ctx.redirect('/internal');
}