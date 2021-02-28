module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });

        return config;
    },
    images: {
        domains: ['firebasestorage.googleapis.com'],
    }, async redirects() {
        return [
            {
                source: '/claims',
                destination: '/',
                permanent: true,
            },
        ]
    },
};
