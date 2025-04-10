const Routes = (app) => {
    app.get('/', (req, res) => {
        res.send("Hello wordl");
    })
}

export default Routes;