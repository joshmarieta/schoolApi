const express = require('express');

const router = express.Router();

const schoolCtrl = require('../controllers/school')


router.get('/', schoolCtrl.getSchools);
router.post('/', schoolCtrl.createSchool);
router.get('/:id', schoolCtrl.getASchool);
router.put('/:id', schoolCtrl.updateASchool);
router.delete('/:id', schoolCtrl.deleteASchool);




module.exports = router;

