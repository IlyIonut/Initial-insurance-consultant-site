/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    const { securityHeaders } = await import("./src/lib/security-headers.mjs");
    return [{ source: "/:path*", headers: securityHeaders({ development: process.env.NODE_ENV === "development" }) }];
  },
  async redirects() {
    const { productRedirects } = await import("./src/lib/product-redirects.mjs");
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.ilyasig.ro" }],
        destination: "https://ilyasig.ro/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "initial-insurance-consultant-site.vercel.app" }],
        destination: "https://ilyasig.ro/:path*",
        permanent: true,
      },
      {
        source: "/asigurari-bihor-cluj",
        destination: "/zone-deservite",
        permanent: true,
      },
      ...productRedirects,
    ];
  },
};

module.exports = nextConfig;
