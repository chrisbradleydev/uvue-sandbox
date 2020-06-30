import Vue from 'vue';
import App from './App.vue';
import createRouter from './router';
import { createServerRootMixin } from 'vue-instantsearch';
import algoliasearch from 'algoliasearch/lite';
import createInstantSearchRouting from './modules/createInstantSearchRouting.js';

const defaultIndex = 'instant_search';

const indexName = process.env.VUE_APP_ALGOLIA_INDEX_NAME || defaultIndex;

const searchClient = algoliasearch(
    process.env.VUE_APP_ALGOLIA_APP_ID || 'latency',
    process.env.VUE_APP_ALGOLIA_API_KEY || '6be0576ff61c053d5f9a3225e2a90f76',
);

Vue.prototype.$defaultIndex = defaultIndex;

Vue.prototype.$indexName = indexName;

Vue.config.productionTip = false;

export default context => {
    return new Vue({
        mixins: [
            createServerRootMixin({
                searchClient,
                indexName,
                routing: createInstantSearchRouting({ context, indexName }),
            }),
        ],
        serverPrefetch() {
            return this.instantsearch.findResultsState(this);
        },
        beforeMount() {
            if (typeof window === 'object' && window.__ALGOLIA_STATE__) {
                this.instantsearch.hydrate(window.__ALGOLIA_STATE__);
                delete window.__ALGOLIA_STATE__;
            }
        },
        router: createRouter(),
        render: h => h(App),
    });
};
