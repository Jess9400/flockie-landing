/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export → produces an `out/` folder of plain HTML/CSS/JS that can be
  // dragged straight onto Netlify Drop (no server, no git needed).
  output: "export",
  images: {
    // Static export can't run Next's image optimizer, so images load directly
    // from Unsplash. Fine for a demo/preview.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
