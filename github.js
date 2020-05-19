const https = require("https");

function getRepos(username = "alvar91", done) {
  const options = {
    hostname: "api.github.com",
    path: `/users/${username}/repos`,
    headers: { "User-Agent": `${username}` },
  };
  https.get(options, (res) => {
    res.setEncoding("utf-8");
    let body = "";
    res.on("data", (data) => (body += data));
    res.on("end", () => {
      const result = JSON.parse(body);
      done(null, result);
    });
  });
}

module.exports = {
  getRepos,
};
