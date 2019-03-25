const mongoose = require('mongoose');

const config = require('./config');

const User = require('./models/User');
const Task = require('./models/Task');


mongoose.connect(config.db.url + '/' + config.db.name);


const db = mongoose.connection;

db.once('open', async () => {
   try{
       await db.dropCollection('users');
       await db.dropCollection('tasks');

       console.log('Collection is dropped');
   }
   catch (e) {
       console.log('Collections where not present, skipping drop...');
   }



   const [user, admin] = await User.create({
       username: 'test',
       password: 'test',
       token:''
   },{
       username: 'admin',
       password: 'admin',
       token:''
   });

    console.log('User created');

    const [cpus, gpus, monitors, other] = await Task.create({
        title: 'CPUs',
        description: "Here is description for CPUs",
        user: user._id
    },
    {
        title: 'GPUs',
        description: "Here is description for GPUs",
        user: user._id
    },
    {
        title: 'Monitors',
        description: "Here is description for Monitors",
        user: admin._id
    },
    {
        title: 'Other',
        description: "Here is description for Other",
        user: admin._id
    });

    console.log('Tasks created');


    db.close();


});