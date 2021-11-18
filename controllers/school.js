const School = require('../models/school'); //import this from the models


exports.createSchool = (req, res, next) => {
  const school = new School({
    institution: req.body.institution,
    location: req.body.location,
    course: req.body.course
  });
  school.save().then(
    () => {
      res.status(201).json({
        message: 'New institution added successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getASchool = (req, res, next) => {
  School.findOne({
    _id: req.params.id
  }).then(
    (listOfSchools) => {
      res.status(200).json(listOfSchools);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.updateASchool = (req, res, next) => {
  const school = new School({
    _id: req.params.id,
    institution: req.body.institution,
    location: req.body.location,
    course: req.body.course
  });
  School.updateOne({ _id: req.params.id }, school).then(
    () => {
      res.status(201).json({
        message: 'Institution updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.deleteASchool = (req, res, next) => {
  School.deleteOne({ _id: req.params.id }).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getSchools = (req, res, next) => {
  School.find().then(
    (listOfSchools) => {
      res.status(200).json(listOfSchools);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};
