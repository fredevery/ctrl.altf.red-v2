import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
initOpenNextCloudflareForDev();

const nextConfig = {
  compiler: {},
  transpilePackages: ['next-mdx-remote']
};

export default nextConfig;
