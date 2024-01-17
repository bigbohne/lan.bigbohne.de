import { Hono } from 'hono'
import { cache } from 'hono/cache'
import { serveStatic } from 'hono/cloudflare-workers'
import IndexCtrl from './routes';

const app = new Hono()

app.get('/static/*', cache({
    cacheName: 'static',
    cacheControl: 'max-age=86400',
}), serveStatic({ root: './' }))
app.get('/', IndexCtrl);

export default app;
