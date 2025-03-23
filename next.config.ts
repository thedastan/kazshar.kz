import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
 images:{
  domains:["www.kazshar.site"]
 }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
