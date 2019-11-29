const User = require('../models/user-model');
module.exports = {
    index: async (req, res, next) => {
        try {
            const users = await User.find({});
            res.status(200).json(users);
        }catch(err){
            next(err)
        }
    },
    create: async  (req,res , next) => {
        console.log(req.body);
        try {
            const newUser = new User(req.body);
            const user = await newUser.save();
            res.status(201).json(user);
        }catch(err){
            next(err)
        }
    },
    update: async (req,res) => {
        return res.json("not implemented");
    },
    show : async (req, res, next) => {
        try{
            const { userId } = req.params;
            const user = await User.findById(userId);
            res.status(200).json(user);
        }catch(err){
            next(err);
        }


    },
    _delete: async (req,res) => {
        try{
            const { userId } = req.params;
            const user = await User.findById(userId);
            User.remove(user);
            res.status(200).json('deleted');
        }catch(err){
            next(err);
        }
    }
};
