/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    typescript: {
        ignoreBuildErrors: true
    },
    eslint : {
        ignoreDuringBuilds : true,
      },
      images:{
        dangerouslyAllowSVG : true,
        remotePatterns : [
          {
            protocol: 'https',
            hostname: '*'
          }
        ]
      },
};
