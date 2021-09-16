const express = require('express')
const router = express.Router()
const controller = require('../controller/subject.controller')

router.post('/', controller.createSubject)
router.get('/', controller.listAllSubjects)
router.get('/:id', controller.listSubjectById)
router.put('/:id', controller.updateSubject)
router.delete('/:id', controller.deleteSubject)

module.exports = router