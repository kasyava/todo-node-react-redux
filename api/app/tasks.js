const express = require("express");
const multer = require('multer');

const Task = require("../models/Task");
const auth = require("../middlewares/middleware");



const storage = multer.diskStorage({
    destination(req, file, cd){
        cd(null, config.uploadPath)
    },
    filename(req, file, cd){
        cd(null, nanoid() + path.extname(file.originalname))
    }
});
const upload = multer({storage});



const router = express.Router();

router.get("/", auth, (req, res) => {
    Task.find({user: req.user._id}).populate('user')
        .then( results => res.send(results))
        .catch(e => res.send(e).status(500))
});

router.post("/", [auth, upload.none()],  (req, res) => {
    console.log(req.body);

    const taskData = req.body;

    const task = new Task(taskData);

    task.user = req.user._id;

    task.save()
        .then(() => res.send(taskData))
        .catch((e) => res.send(e).status(500));

});


router.put("/:id", auth,  (req, res) => {

    Task.updateOne({_id: req.params.id, user: req.user._id}, req.body)
        .then(result => res.send(result))
        .catch((e) => res.send(e).status(500));

});

router.delete("/:id", auth, (req, res) => {


    Task.deleteOne({_id: req.params.id, user: req.user._id})
        .then(result => res.send(result))
        .catch((e) => res.send(e).status(500));


});



module.exports = router;