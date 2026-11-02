/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    const { productRedirects } = await import("./src/lib/product-redirects.mjs");
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "initial-insurance-consultant-site.vercel.app" }],
        destination: "https://ilyasig.ro/:path*",
        permanent: true,
      },
      ...productRedirects,
    ];
  },
};

module.exports = nextConfig;
