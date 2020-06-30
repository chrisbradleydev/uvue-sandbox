export default {
    sendSSRData(context) {
        const { app, error, isServer, ssr, url } = context;

        const route = url.split('?')[0];

        if (isServer && route === '/search') {
            try {
                const algoliaState = app.instantsearch.getState();
                ssr.bodyAdd = `<script>window.__ALGOLIA_STATE__=${JSON.stringify(
                    algoliaState,
                )}</script>`;
            } catch (e) {
                error(e);
            }
        }
    },
};
