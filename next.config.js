/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,

  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      fileName: false,
    },
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['127.0.0.1', 'ui-avatars.com', 'localhost', '3.149.244.237'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
};


module.exports = nextConfig;
