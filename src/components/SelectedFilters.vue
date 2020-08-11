<template>
    <div>
        <AisCurrentRefinements />
        <AisClearRefinements />
    </div>
</template>

<script>
import { AisClearRefinements, AisCurrentRefinements } from 'vue-instantsearch';

export default {
    name: 'SelectedFilters',
    components: {
        AisClearRefinements,
        AisCurrentRefinements,
    },
};
</script>
