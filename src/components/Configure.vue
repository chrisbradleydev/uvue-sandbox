<template>
    <AisConfigure v-if="sweetwaterInventory" v-bind.camel="searchParameters" />
</template>

<script>
import { AisConfigure } from 'vue-instantsearch';

export default {
    name: 'Configure',
    components: { AisConfigure },
    props: {
        searchParameters: {
            type: Object,
            required: true,
        },
        sweetwaterInventory: {
            type: Boolean,
            required: true,
        },
    },
};
</script>
