<template>
    <AisRefinementList attribute="brand" :limit="10">
        <!-- ATTN: createURL SSR doesn't work -->
        <template slot-scope="{ createURL, items, refine }">
            <ul class="ais-RefinementList-list">
                <li
                    v-for="item in items"
                    :key="item.value"
                    :class="[
                        'ais-RefinementList-item',
                        {
                            'ais-RefinementList-item--selected': item.isRefined,
                        },
                    ]"
                >
                    <a href="#" @click.prevent="refine(item.value)"
                        ># | {{ item.value }} ({{ item.count }})</a
                    >
                </li>
            </ul>
        </template>
    </AisRefinementList>
</template>

<script>
import { AisRefinementList } from 'vue-instantsearch';

export default {
    name: 'RefinementList',
    components: { AisRefinementList },
};
</script>
