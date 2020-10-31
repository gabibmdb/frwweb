module.exports = app => {
    app.get('/agendamento', (req, res) =>
        res.send('Get Agendamento Fujioka')
    )
    app.post('/agendamento', (req, res) => {
        console.log(req.body);
        res.send('Post Agendamento Fujioka')
    }
    )
    app.delete('/agendamento', (req,res) => {
        console.log(req.body);
        res.send('Delete nome')
    }
    )
    app.put('/agendamento', (req, res) => {
        console.log(req.body);
        res.send('Delete nome')
    }
    )
}