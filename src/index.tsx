import { Hono } from 'hono'
import { cache } from 'hono/cache'
import { serveStatic } from 'hono/cloudflare-workers'
import IndexCtrl from './routes';
import LoginCtrl from './routes/login';

type Bindings = {
    DB: D1Database
}
  
const app = new Hono<{ Bindings: Bindings }>()
  

app.get('/static/*', cache({
    cacheName: 'static',
    cacheControl: 'max-age=86400',
}), serveStatic({ root: './' }))

app.get('/', IndexCtrl);
app.get('/login', LoginCtrl);

export default app;
