const { Schema, model } = require('mongoose');


const taskSchema = new Schema({
    nametask:{
        type:String
    },
    typetask:{type:String},   
    done:{type:Boolean},
    timing:String,
    pending:{
        type:Boolean,
        default:true
    },
    initialized:{
        type:Boolean,
        default:false
    },
    description:{
        type:String,
        default:`Tareas hechas por`
    },
    done:{type:Boolean,default:false},
    parts:[{type:String}],
    author:{type:Schema.Types.ObjectId,ref:"User"}
},{
    timestamps:true,
    autoIndex:true,
    versionKey:false
});

module.exports = model("Task", taskSchema);