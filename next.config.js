module.exports = {
  styledComponents: true,
  images: {
    domains: [],
  },
  env: {
    // environment varianles
  },
  poweredByHeader: false,
  crossOrigin: "anonymous",
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: false,
  },
  async headers() {
    // Here i just catch all fonts
    return [
      {
        source: "/:all*(woff|woff2)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, must-revalidate",
          },
        ],
      },
    ];
  },
};
