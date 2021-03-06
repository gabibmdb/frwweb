const mysql = require('mysql');
const environment = "development";
const config = require("../config/config.js")[environment];

const con = mysql.createConnection({
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.database
});


con.connect((err) => {
    if(err) {
        console.log('Erro ao conectar!', err)
        return
    }
    console.log('Conexão realizada!')
})

const agendamento = {nome:'Gabi Barbosa', email: 'fujimail@uol.com.br', ativo:0 }


con.query('UPDATE agendamento SET nome = ?, email = ? where ID = ? ', ['Gabi','email@email.com','1'], (err,rows) => {
    if(err) throw err
    console.log("Registro Atualizado com sucesso");
})


con.query('DELETE FROM agendamento where ID = ? ', ['2'], (err,resultado) => {
    if(err) throw err
    console.log(`Foram excluida(s) ${resultado.affectedRows} linha(s)`);

})

con.query('select * from agendamento', (err,rows) => {
    if(err) throw err
    console.log('Agendamentos', rows, '\n\n')
})

con.query('select * from agendamento', (err,rows) => {
    if(err) throw err

    rows.forEach(row => {
        console.log(`${row.nome} - ${row.email}`);
    })
})


con.end((err) => {
    if(err) {
        console.log('Erro ao finalizar conexão', err)
        return
    }
    console.log('Conexão encerrada!')
})