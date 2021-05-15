const withCSS= require('@zeit/next-css')
require('dotenv').config();
// const withCSS = require('@zeit/next-css')
module.exports = withCSS({
    typescript: {
        ignoreDevErrors: true,
    },
    use: {
        loader: "url-loader"
    },
    target: "serverless", // Next.js 빌드 대상을 "serverless"로 설정하여 서버리스 빌드를 활성화 한다.
     webpack: (config, options) => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: "empty",
        };
        config.module.rules.push(
            {
              test: /\.md$/,
              use: 'raw-loader',
            },
        )
        return config;

    },
    env: {
        VERSION : process.env.REACT_APP_SERVICE_VERSION,
    },
});


