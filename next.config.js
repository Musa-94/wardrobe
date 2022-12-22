/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: {
            displayName: true,
            ssr: true,
            fileName: true,
        },
    },
}

module.exports = nextConfig
