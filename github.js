const https = require("https");

function getRepos(username, done) {
  const options = {
    hostname: "api.github.com",
    path: `/users/${username}/repos`,
    headers: { "User-Agent": "alvar91" },
  };
  https.get(options, (res) => {
    console.log(res.statusMessage);
  });
}

module.exports = {
  getRepos,
};
