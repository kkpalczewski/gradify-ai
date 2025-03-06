/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Only ignore during builds if you're sure about your linting
    ignoreDuringBuilds: false,
  },
  typescript: {
    // Only ignore during builds if you're sure about your types
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: false,
  },
  experimental: {
    serverActions: true,
  },
  // Add proper output configuration
  output: 'standalone',
  // Ensure proper transpilation
  transpilePackages: ['@radix-ui/react-icons', 'lucide-react'],
  // Enable proper module resolution
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
}

export default nextConfig
