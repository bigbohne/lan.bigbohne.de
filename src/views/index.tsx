import { Page } from '../views/page';
import { Layout } from '../views/layout';

export default function IndexView() {
    return <Page title="lan.bigbohne.de">
        <Layout>
            <div class="d-flex justify-content-center">
                <img src="/static/logo_small.jpeg" alt="logo"></img>
            </div>
            <div class="d-flex justify-content-center">
                <h1>coming soon ...</h1>
            </div>
        </Layout>
    </Page>;
}