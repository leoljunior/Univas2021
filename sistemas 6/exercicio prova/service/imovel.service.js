const database = []

const create = imovel => {
    database.push(imovel)
}

const listAll = () => database

const update = (imovelId, imovel) => {
    const index = database.findIndex(i => i.id == imovelId)
    if (index != -1) {
        database[index] = imovel
    }
}

const remove = id => {
    const index = database.findIndex(i => i.id == id)
    if (index != -1) {
        database.splice(index, 1)
    }
}

module.exports = {
    create,
    listAll,
    update,
    remove
}