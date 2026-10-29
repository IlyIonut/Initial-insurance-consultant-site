/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    const { productRedirects } = await import("./src/lib/product-redirects.mjs");
    return productRedirects;
  },
};

module.exports = nextConfig;
