module.exports = app => {
    app.get('/unipe', (req, res) =>
        res.send('Get UNIPE Fujioka')
    )
    app.post('/unipe', (req, res) => {
        console.log(req.body);
        res.send('Post UNIPE Fujioka')
    }
    )
}