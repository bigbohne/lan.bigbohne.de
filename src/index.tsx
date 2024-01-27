import { Hono } from 'hono'
import { cache } from 'hono/cache'
import { serveStatic } from 'hono/cloudflare-workers'
import IndexCtrl from './routes';
import LoginCtrl from './routes/login';
import UserAddCtrl from './routes/user_add';
import { Auth } from './middleware/auth';
import LogoutCtrl from './routes/logout';
import InternalIndexCtrl from './routes/internal';

type Bindings = {
    KV: KVNamespace
}
  
const app = new Hono<{ Bindings: Bindings }>()

app.get('/static/*', cache({
    cacheName: 'static',
    cacheControl: 'max-age=86400',
}), serveStatic({ root: './' }))

app.get('/', IndexCtrl);
app.get('/login', LoginCtrl);
app.get('/logout', LogoutCtrl);

app.use('/internal/*', Auth);
app.get('/internal', InternalIndexCtrl);


app.get('/user/add', UserAddCtrl);

export default app;
