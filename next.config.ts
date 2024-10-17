import type { NextConfig } from 'next';
import withLinaria from 'next-with-linaria';

const nextConfig: NextConfig = {
  experimental: {
    typedRoutes: true,
  },
};

export default withLinaria(nextConfig);
