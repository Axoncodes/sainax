const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    Axg: 'https://axg.axoncodes.com',
    StagingAxg: 'https://staging.axg.axoncodes.com',
    BetaAxg: 'https://beta.axg.axoncodes.com',
    LocalAxg: 'http://localhost:3012',
    RexfontAPI: 'https://api.rexfont.com/rexfontIcons',
    MongodbApiKey: 'DYghw0Eo7ytqeFGOhTIGyxMB15Pr5YNYBnOgRZXGs93zWb4WcG9uT2FlZgre0Xxj'
  },
}

module.exports = nextConfig
