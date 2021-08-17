const express = require('express')
const router = express.Router()
const Tutor = require('../models/tutor')

router.get('/', async (req, res) => {
    try {
        const tutors = await Tutor.find()
        res.json(tutors)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
//GET ONE
router.get('/:id', getTutor, (req, res) => {
    res.send(res.tutor)
})

router.post('/', async (req, res) => {
    const tutor = new Tutor({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        nativeLan: req.body.nativeLan

    })

    try {
        const newTutor = await tutor.save()
        res.status(201).json(newTutor)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }

})

async function getTutor(req, res, next) {
    let tutor;
    try {
        tutor = await Tutor.findById(req.params.id)
        if (tutor == null) {
            return res.status(404).json({ message: 'Cannot find User' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.tutor = tutor
    next()
}

module.exports = router