const subjectDb = []

const createSubject = subject => {
    if (!subject.id) {
        subject.id = (subjectDb.length + 1)
        subjectDb.push(subject)
    }
}

const listSubjectById = id => {
    const subject = subjectDb.find(data => data.id == id)
    console.log(subject)
    return subject
}

const listAllSubjects = () => subjectDb

const updateSubject = (id, subject) => {
    const index = subjectDb.findIndex(data => data.id == id)
    if (index != -1) {
        subject.id = Number(id)
        subjectDb[index] = subject
    }
}

const deleteSubject = id => {
    const index = subjectDb.findIndex(data => data.id == id)
    if (index != -1) {
        subjectDb.splice(index, 1)
    }
}

module.exports = {
    createSubject,
    listAllSubjects,
    updateSubject,
    deleteSubject,
    listSubjectById
}