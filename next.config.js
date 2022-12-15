/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avro-ra.ru',
            },
            {
                protocol: 'https',
                hostname: 'cdn.dsmcdn.com',
            },
        ],
    },
}

module.exports = nextConfig
