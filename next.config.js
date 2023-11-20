/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'themes-themegoods.b-cdn.net',
                protocol: 'https',
            }
        ]
    }
}

module.exports = nextConfig
