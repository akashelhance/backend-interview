const models = require('../models');



const createUserController = async (req, res) => {
    try {
      const { firstName, lastName,email,phone,address,company } = req.body;
    //   console.log(firstName,lastName,email,phone,address,company)

      const user =await models.User.create(req.body);
      return res.status(201).json({
        "messsage":"Hello",
        user
      });
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
  }
  

  const getAllUserController = async (req, res) => {
    try {
      
      const allUser = await models.User.findAll({});
      return res.status(201).send(allUser)
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
  }


  const getUserControllerById = async (req, res) => {
    try {
      const { UserId } = req.params;
      const user = await models.User.findOne({
        where: { id: UserId },
      });
      if (user) {
        return res.status(200).json({ user });
      }
      return res.status(404).json({"Message": 'User with the specified ID does not exists'})
    } catch (error) {
        return res.status(500).json({"Message":error.message});
    }
  }


  const deleteUserController = async (req, res) => {
    try {
        const { UserId } = req.params;
      const deleted = await models.User.destroy({
        where: { id: UserId }
      });
      if (deleted) {
        return res.status(204).json({"Message": "User deleted"});
      }
      throw new Error("User not found");
    } catch (error) {
      return res.status(500).json({"Message":error.message});
    }
  };



  const updatUserController  = async (req, res) => {
    try {
      const { UserId } = req.params;
      const [ updated ] = await models.User.update(req.body, {
        where: { id: UserId  }
      });
      if (updated) {
        const updatedUser = await models.User.findOne({ where: { id: UserId  } });
        return res.status(200).send(updatedUser)
      }
      throw new Error('User not found');
    } catch (error) {
        return res.status(500).json({"Message":error.message});
    }
  };

  

  module.exports = {
    createUserController,
    getAllUserController,
    getUserControllerById,
    deleteUserController,
    updatUserController 
    
  
  }