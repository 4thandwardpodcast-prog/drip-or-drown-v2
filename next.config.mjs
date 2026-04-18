/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com', 'your-s3-bucket.s3.amazonaws.com'], // add your real S3 domain later
  },
};

export default nextConfig;
