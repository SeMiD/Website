const { Router } = require("express");
let axios = require("axios");

const router = Router();

//@ts-ignore
router.get("/activity", async (req, res, next) => {
  let headers = {
    Authorization: `bearer ${process.env.GITHUB_TOKEN}`
  };

  await axios({
    url: "https://api.github.com/graphql",
    method: "POST",
    headers: headers,
    data: {
      query: `
      query {
        user(login: "SeMiD") {
          contributionsCollection {
            commitContributionsByRepository {
              repository {
                name
                owner {
                  login
                }
              }
              contributions {
                totalCount
              }
            }
            pullRequestContributionsByRepository {
              repository {
                name
                owner {
                  login
                }
              }
              contributions {
                totalCount
              }
            }
          }
        }
      }`
    }
  }).then(data => res.json(data.data.data));
});

module.exports = router;
