module.exports = {
    images: {
      domains: ['picsum.photos','aeabdelhak.herokuapp.com','localhost'],
    },

  
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}