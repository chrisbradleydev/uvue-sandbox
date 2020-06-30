<template>
    <AisHits>
        <template slot="item" slot-scope="{ item }">
            <img
                v-if="sweetwaterInventory && item.image && item.image.path"
                :src="'https://www.sweetwater.com/' + item.image.path"
            />
            <img
                v-else-if="$indexName === $defaultIndex && item.image"
                :src="item.image"
            />
            <p>{{ sweetwaterInventory ? item.productName : item.name }}</p>
            <p>
                ${{
                    sweetwaterInventory && item.price
                        ? item.price.catalogPrice.toFixed(2)
                        : item.price.toFixed(2)
                }}
            </p>
        </template>
    </AisHits>
</template>

<script>
import { AisHits } from 'vue-instantsearch';

export default {
    name: 'Pagination',
    components: { AisHits },
    props: {
        sweetwaterInventory: {
            type: Boolean,
            required: true,
        },
    },
};
</script>

<style lang="css" scoped>
img {
    max-height: 100px;
    max-width: 50px;
}
</style>
