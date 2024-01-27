import { Context } from "hono";

export default async function UserAddCtrl(ctx: Context) {
    
    await ctx.env.KV.put("User:bigbohne@gmx.net", JSON.stringify(
        {
            mail: "bigbohne@gmx.net",
            uuid: "963067c4-3711-4a5b-9e9a-c3551849fd29",
            admin: true
        }
    ))

    return ctx.text('ok');
}