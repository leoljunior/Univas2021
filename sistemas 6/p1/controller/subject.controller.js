const service = require('../service/subject.service')

const createSubject = (req, res) => {
    if (req.body.name && req.body.workload && req.body.teacherName) {
        service.createSubject(req.body)
        res.status(200).send('Subject Created!!!')
    } else {
        res.status(400).send('Subject rejected!!')
    }
}

const listAllSubjects = (req, res) => {
    res.status(200).send(service.listAllSubjects())

}

const listSubjectById = (req, res) => {
    if (req.params.id) {
        const currentSubject = service.listSubjectById(req.params.id, req.body)
        res.send(currentSubject)
    } else {
        res.status(400).send('Subject rejected!!')
    }
}

const updateSubject = (req, res) => {
    service.updateSubject(req.params.id, req.body)
    res.send('Subject update!!')
}

const deleteSubject = (req, res) => {
    service.deleteSubject(req.params.id)
    res.send('Subject deleted!!')
}


module.exports = {
    createSubject,
    listAllSubjects,
    updateSubject,
    deleteSubject,
    listSubjectById
}