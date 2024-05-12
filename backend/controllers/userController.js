const { User } = require("../models");
const messages = require("../constants/messages");

const create = async (req, res) => {
  try {
    const userDetails = {
      name: req.body.name,
      email: req.body.email,
      dob: req.body.dob,
      phone: req.body.phone,
    };
    const user = await User.create(userDetails);
    return res.status(201).json({
      success: true,
      data: user,
      message: messages.success.userCreated,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {},
      message: messages.error.internalServerError,
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const userDetails = await User.findAll({});
    return res.status(200).json({
      success: true,
      message: messages.success.userGet,
      data: userDetails,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: messages.error.internalServerError,
      data: {},
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedFields = {
      name: req.body.name,
      email: req.body.email,
      dob: req.body.dob,
      phone: req.body.phone,
    };
    const updatedUser = await User.update(updatedFields, {
      where: { id: userId },
    });

    if (!updatedUser[0]) {
      return res.status(404).json({
        success: false,
        message: messages.error.userNotFound,
        data: {},
        err: {},
      });
    }

    return res.status(200).json({
      success: true,
      message: messages.success.userUpdated,
      data: updatedFields,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {},
      message: messages.error.internalServerError,
      err: error,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.destroy({
      where: { id: userId },
    });

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: messages.error.userNotFound,
        data: {},
        err: {},
      });
    }

    return res.status(200).json({
      success: true,
      message: messages.success.userDeleted,
      data: deletedUser,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {},
      message: messages.error.internalServerError,
      err: error,
    });
  }
};

module.exports = { create, get, update, deleteUser };
