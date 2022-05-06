const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/',
    domains: [
      'lh3.googleusercontent.com',
    ],
  },
  env: {
    // API: 'https://thewebxapi.axoncodes.com',
    API: 'https://thewebxapistage.axoncodes.com',
    Axg: 'https://axg.axoncodes.com',
    RexfontAPI: 'https://api.rexfont.com/rexfontIcons',
  },
}

module.exports = nextConfig
