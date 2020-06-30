<template>
    <AisPagination>
        <template
            slot-scope="{
                createURL,
                currentRefinement,
                isFirstPage,
                isLastPage,
                nbPages,
                pages,
                refine,
            }"
        >
            <ul class="ais-Pagination-list">
                <li
                    :class="[
                        'ais-Pagination-item ais-Pagination-item--firstPage',
                        { 'ais-Pagination-item--disabled': isFirstPage },
                    ]"
                >
                    <a
                        :href="createURL(0)"
                        class="ais-Pagination-link"
                        @click.prevent="refine(0)"
                        >‹‹</a
                    >
                </li>
                <li
                    :class="[
                        'ais-Pagination-item ais-Pagination-item--previousPage',
                        { 'ais-Pagination-item--disabled': isFirstPage },
                    ]"
                >
                    <a
                        :href="createURL(currentRefinement - 1)"
                        class="ais-Pagination-link"
                        @click.prevent="refine(currentRefinement - 1)"
                        >‹</a
                    >
                </li>
                <li
                    v-for="page in pages"
                    :key="page"
                    :class="[
                        'ais-Pagination-item',
                        {
                            'ais-Pagination-item--selected':
                                page === currentRefinement,
                        },
                    ]"
                >
                    <a
                        :href="createURL(page)"
                        class="ais-Pagination-link"
                        @click.prevent="refine(page)"
                        >{{ page + 1 }}</a
                    >
                </li>
                <li
                    :class="[
                        'ais-Pagination-item ais-Pagination-item--nextPage',
                        { 'ais-Pagination-item--disabled': isLastPage },
                    ]"
                >
                    <a
                        :href="createURL(currentRefinement + 1)"
                        class="ais-Pagination-link"
                        @click.prevent="refine(currentRefinement + 1)"
                        >›</a
                    >
                </li>
                <li
                    :class="[
                        'ais-Pagination-item ais-Pagination-item--lastPage',
                        { 'ais-Pagination-item--disabled': isLastPage },
                    ]"
                >
                    <a
                        :href="createURL(nbPages - 1)"
                        class="ais-Pagination-link"
                        @click.prevent="refine(nbPages - 1)"
                        >››</a
                    >
                </li>
            </ul>
        </template>
    </AisPagination>
</template>

<script>
import { AisPagination } from 'vue-instantsearch';

export default {
    name: 'Pagination',
    components: { AisPagination },
};
</script>
