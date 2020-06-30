const path = require('path');

module.exports = {
    chainWebpack: config => {
        config.resolve.alias.set('@', path.resolve(__dirname, 'src'));
    },
    devServer: { disableHostCheck: true, port: 3000 },
    transpileDependencies: [/instantsearch\.js/, /vue-instantsearch/],
};
