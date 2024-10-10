 import "./env.mjs"

const isDev = process.argv.indexOf('dev') !== -1
const isBuild = process.argv.indexOf('build') !== -1
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = '1'
  const { build } = await import('velite')
  await build({ watch: isDev, clean: !isDev })
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  eslint: {
    // This option disables ESLint checks during the build process
    ignoreDuringBuilds: true,
  },
  typescript: {
      // This option disables TypeScript type checking during the build process
      ignoreBuildErrors: true,
    },
}

export default nextConfig
