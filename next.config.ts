import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
 images:{
  domains:["apibackendkz.space"]
 }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
 