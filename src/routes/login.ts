import { Context } from "hono";
import { getCookie, setCookie } from 'hono/cookie'

export default async function LoginCtrl(ctx: Context) {
    let id = ctx.req.query("id");
    console.log(`/login id=${id}`);

    let { results } = await ctx.env.DB.prepare("SELECT * FROM users WHERE uuid = ?").bind(id).all()
    console.log(results);

    setCookie(ctx, "id", id);

    return ctx.redirect("/");
}