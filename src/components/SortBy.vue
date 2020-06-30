<template>
    <AisSortBy
        :items="[
            { value: this.$indexName, label: 'Featured' },
            {
                value: `${this.$indexName}_price_asc`,
                label: 'Price: Low to High',
            },
            {
                value: `${this.$indexName}_price_desc`,
                label: 'Price: High to Low',
            },
        ]"
    />
</template>

<script>
import { AisSortBy } from 'vue-instantsearch';

export default {
    name: 'SortBy',
    components: { AisSortBy },
};
</script>
