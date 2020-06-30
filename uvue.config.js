export default {
    plugins: [
        '@uvue/core/plugins/asyncData',
        '@uvue/core/plugins/middlewares',
        '@uvue/core/plugins/errorHandler',
        '@/plugins/algoliaState.js',
    ],
};
