module.exports = {
    images: {
      domains: ['picsum.photos','aeabdelhak.herokuapp.com','db336d2d3fd5.ngrok.io'],
    },

  
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}