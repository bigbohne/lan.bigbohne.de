import { Context } from "hono";
import IndexView from "../views";

export default async function IndexCtrl(ctx: Context) {
    return ctx.html(IndexView())
}