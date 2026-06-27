import type { NextConfig } from "next";
import path from "path";

const siliconUiPath = path.resolve(
  __dirname,
  "node_modules/silicon-system/packages/silicon-ui"
);

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      "@silicon/ui": siliconUiPath,
    },
  },
};

export default nextConfig;
