const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');
const userSchema = new Schema(
  {
    email: String,
    name: String,
    password:String,
    pass:String,
    tasks:[{ type: Schema.Types.ObjectId, ref: "Tasks" }]
  },
  {
    timestamps: true,
    versionKey: false
  }
);
userSchema.plugin(PLM, { usernameField: 'email', passwordField:"password" });

module.exports = model('User', userSchema);
