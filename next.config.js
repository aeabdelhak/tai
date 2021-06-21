module.exports = {
    images: {
      domains: ['picsum.photos','aeabdelhak.herokuapp.com','ff2c283ec086.ngrok.io'],
    },

  
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}