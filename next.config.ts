import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    domains: ["api.kazshar.ru"],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
