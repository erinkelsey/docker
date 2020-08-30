const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient({
  // running inside container -> Docker Compose automatically
  // figures out how to handle this host
  host: "redis-server",
  port: 6379, // default port for Redis
});
client.set("visits", 0); // set visits to 0

app.get("/", (req, res) => {
  client.get("visits", (err, visits) => {
    res.send("Number of visits is " + visits);
    client.set("visits", parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log("Listening on prot 8081");
});
