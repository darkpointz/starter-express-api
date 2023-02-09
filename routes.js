module.exports = (app) => {
    app.get("/signal", (req, res) => {
        console.log(req.query)
        res.send(require("./model/signal.json"))
    })
}