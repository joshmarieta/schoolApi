const express = require('express');

const router = express.Router();

const studentCtrl = require('../controllers/student')


router.get('/', studentCtrl.getStudents);
router.post('/', studentCtrl.createStudent);
router.get('/:id', studentCtrl.getAStudent);
router.put('/:id', studentCtrl.updateAStudent);
router.delete('/:id', studentCtrl.deleteAStudent);




module.exports = router;
