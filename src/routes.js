module.exports = (app) => {
  app.get("/api/all", (req, res) => {
    res.send(require("./res/get-all.json"));
  });

  app.get("/api/:keyName/:keyValue.(json)", (req, res) => {
    res.send(require("./res/get-one.json"));
  });

  app.post("/api/post", (req, res) => {
    res.send(require("./res/post.json"));
  });

  app.get("/signal", (req, res) => {
    res.send(require("./res/signal.json"));
  });

  app.get("/performance", (req, res) => {
    res.send(require("./res/performance.json"));
  });

  app.get("/location", (req, res) => {
    res.send(require("./res/location.json"));
  });

  app.get("/goKo", (req, res) => {
    res.send(require("./res/goKo.json"));
  });

  app.all("*", (req, res) => {
    console.log("testttt");
    res.send(require("./res/all.json"));
  });
};
