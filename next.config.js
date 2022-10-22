/** @type {import('next').NextConfig} */
const withReactSvg = require("next-react-svg");
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withReactSvg({
  include: path.resolve(__dirname, "src/assets/svg"),
  webpack(config, options) {
    return config;
  },
  ...nextConfig,
});

// module.exports = nextConfig;
