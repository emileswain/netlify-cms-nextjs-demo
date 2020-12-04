const nextConfig = {
    target: 'serverless',
    webpack: function (config) {
        config.module.rules.push({test: /\.yml$/, use: 'raw-loader'})
        return config
    },
}


module.exports = nextConfig;
