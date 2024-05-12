const messages = require("../constants/messages");

const validateUserCreation = (req, res, next) => {
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.dob ||
    !req.body.phone
  ) {
    return res.status(400).json({
      success: false,
      data: {},
      message: messages.error.fieldMissing,
      err: {},
    });
  }
  next();
};

module.exports = {
  validateUserCreation,
};
