const axios = require("axios");

module.exports = {
  modules: [
    [
      "storyblok-nuxt",
      { accessToken: "GaHO0tre64SXQQg7uSv7GQtt", cacheProvider: "memory" }
    ]
  ],
  plugins: [
    "~/plugins/components",
    "~/plugins/filters",
    "@/plugins/vue-lazyload",
    { src: "~/plugins/vue-product-zoomer", mode: "client" }
  ],
  router: {
    middleware: "setCacheVersion"
  },
  /*
   ** Headers of the page
   */
  head: {
    title: "vue-nuxt-storyblok-boilerplate",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js Storyblok Boilerplate"
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      { rel: 'stylesheet', href: 'https://cdn.snipcart.com/themes/v3.0.5/default/snipcart.css' }
    ],
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },

  generate: {
    routes: function (callback) {
      const token = `GaHO0tre64SXQQg7uSv7GQtt`; // replace with your key
      const per_page = 100;
      const version = "draft";
      let cache_version = 0;

      let page = 1;
      let routes = ["/"];

      // Load space and receive latest cache version key to improve performance
      axios
        .get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`)
        .then(space_res => {
          // timestamp of latest publish
          cache_version = space_res.data.space.version;

          // Call first Page of the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
          axios
            .get(
              `https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&per_page=${per_page}&page=${page}&cv=${cache_version}`
            )
            .then(res => {
              Object.keys(res.data.links).forEach(key => {
                if (
                  res.data.links[key].slug != "home" &&
                  res.data.links[key].is_folder == false
                ) {
                  routes.push("/" + res.data.links[key].slug);
                }
              });

              // Check if there are more pages available otherwise execute callback with current routes.
              const total = res.headers.total;
              const maxPage = Math.ceil(total / per_page);
              if (maxPage <= 1) {
                callback(null, routes);
              }

              // Since we know the total we now can pregenerate all requests we need to get all Links
              let contentRequests = [];
              for (let page = 2; page <= maxPage; page++) {
                contentRequests.push(
                  axios.get(
                    `https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&per_page=${per_page}&page=${page}`
                  )
                );
              }

              // Axios allows us to execute all requests using axios.spread we will than generate our routes and execute the callback
              axios
                .all(contentRequests)
                .then(
                  axios.spread((...responses) => {
                    responses.forEach(response => {
                      Object.keys(response.data.links).forEach(key => {
                        if (
                          response.data.links[key].slug != "home" &&
                          res.data.links[key].is_folder == false
                        ) {
                          routes.push("/" + response.data.links[key].slug);
                        }
                      });
                    });

                    callback(null, routes);
                  })
                )
                .catch(callback);
            });
        });
    }
  },
  /*
   ** Build configuration
   */
  build: {}
};
