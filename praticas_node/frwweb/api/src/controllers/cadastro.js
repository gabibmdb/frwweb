const Cadastro = require("../model/cadastro");

exports.buscarUm = (request, response, next) => {
    const id = request.params.id;

    Cadastro.findById(id)
        .then(cadastro => {
            if (cadastro) {
                response.send(cadastro);
            } else {
                response.status(404).send();
            }
        })
        .catch(error => next(error));
}