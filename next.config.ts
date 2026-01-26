/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:4200/api/:path*'
            }
        ]
    }
};

module.exports = nextConfig;
