const service = require('../service/imovel.service')

const create = (req, res) => {
    service.create(req.body)
    res.send('Imovel criado com sucesso!!')
}

const listAll = (req, res) => {
    res.send(service.listAll())
}

const update = (req, res) => {
    service.update(req.params.id, req.body)
    res.send('Imovel atualizado!!')
}

const remove = (req, res) => {
    service.remove(req.params.id)
    res.send('Imovel removido!')
}

module.exports = {
    create,
    listAll,
    update,
    remove
}