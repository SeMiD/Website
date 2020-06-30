import Vue from "vue";

export default ({ app }: any) => {
  const gql = (query: string) =>
    new Promise((resolve, reject) => {
      let headers = {
        Authorization: `bearer ${process.env.GITHUB_TOKEN}`
      };
      app
        .$axios({
          url: "https://api.github.com/graphql",
          method: "POST",
          headers: headers,
          data: {
            query: query
          }
        })
        .then(({ data }: any) => resolve(data.data))
        .catch(reject);
    });

  app.$graphql = gql;
  Vue.prototype.$graphql = gql;
};
