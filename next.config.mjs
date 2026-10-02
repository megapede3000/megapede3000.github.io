/** @type {import('next').NextConfig} */
// Static export for GitHub Pages. NEXT_PUBLIC_BASE_PATH is the repo name for project sites (e.g. "/employee-hub"), empty for a custom domain.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const nextConfig = { reactStrictMode: true, output: "export", trailingSlash: true, basePath, images: { unoptimized: true } };
export default nextConfig;
