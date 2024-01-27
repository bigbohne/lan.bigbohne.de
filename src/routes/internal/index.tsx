import { Context } from "hono";
import { Page } from "../../views/page";

export default async function InternalIndexCtrl(ctx: Context) {
    return ctx.html(<Page title="Farmfest 2024">Internal</Page>)
}