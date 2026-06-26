/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/cashback-deals/:slug",
        destination: "/deals/:slug",
        permanent: true,
      },
    ];
  },
  devIndicators: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "logo.clearbit.com" },
      // When backend adds cloud image storage, add hostnames here:
      // { protocol: "https", hostname: "res.cloudinary.com" },
      // { protocol: "https", hostname: "*.s3.amazonaws.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  // Cache API responses for 60s in production (override per-route with revalidate)
  experimental: {
    staleTimes: {
      dynamic: 60,
    },
  },
};

export default nextConfig;
