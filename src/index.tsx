import { Hono } from 'hono'
import { Page } from './page';
import { Layout } from './layout';

const app = new Hono()

app.get('/', (ctx) => {
  return ctx.html(<Page title="lan.bigbohne.de"><Layout><h1>lan.bigbohne.de</h1></Layout></Page>)
})

export default app;
