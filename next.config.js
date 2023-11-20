/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'themes-themegoods.b-cdn.net',
                protocol: 'https',
            }, {
                hostname: 'live.staticflickr.com',
                protocol: 'https',
            }
        ]
    }
}

module.exports = nextConfig
