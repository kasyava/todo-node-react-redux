const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    description: String,

    status: {
        type: String,
        default: 'new',
        enum: ['new', 'in_progress', 'complete']
    },

    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

});

const Product = mongoose.model("Task", TaskSchema);

module.exports = Product;