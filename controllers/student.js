const Student = require('../models/student'); //import this from the models

exports.createStudent = (req, res, next) => {
  const student = new Student({
    name: req.body.name,
    institution: req.body.institution,
    course: req.body.course,
  });
  student.save().then(
    () => {
      res.status(201).json({
        message: 'Student added successfully!'
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

exports.getAStudent = (req, res, next) => {
  Student.findOne({
    _id: req.params.id
  }).then(
    (listOfStudents) => {
      res.status(200).json(listOfStudents);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.updateAStudent = (req, res, next) => {
  const student = new Student({
    _id: req.params.id,
    name: req.body.name,
    institution: req.body.institution,
    course: req.body.course
  });
  Student.updateOne({ _id: req.params.id }, student).then(
    () => {
      res.status(201).json({
        message: 'Student updated successfully!'
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

exports.deleteAStudent = (req, res, next) => {
  Student.deleteOne({ _id: req.params.id }).then(
    () => {
      res.status(200).json({
        message: 'Student Deleted!'
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

exports.getStudents = (req, res, next) => {
  Student.find().then(
    (listOfStudents) => {
      res.status(200).json(listOfStudents);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};
