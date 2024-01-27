import { Context } from "hono";
import { deleteCookie } from 'hono/cookie'

export default async function LogoutCtrl(ctx: Context) {
    deleteCookie(ctx, 'farmfest-email');
    deleteCookie(ctx, 'farmfest-uuid');

    return ctx.redirect('/');
}