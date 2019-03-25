const User = require('../models/User');

const middleware = (req, res, next) =>{

    const token = req.get('Token');

    if(!token){
        return res.status(401).send({error: 'Token not provided'});
    }


    User.findOne({token}).then(user =>{
        if(!user) return res.sendStatus(401);
        req.user = user;
        next();
    });



};

module.exports = middleware;