import mongoose from "mongoose";

// keys
const db = { "URI" : "mongodb://localhost:27017/ts_crud"}

// models

// settings
mongoose.connect(db.URI)
// .then(res => console.log(`db is conected ${res}`))
.catch(err => console.log("conected error",err))
/* 

wsl run mongodb $ sudo mongod --dbpath ~/data/db
$ mongo
$ use ts_crud
$ show collections
$ db.model.find
$ db.blocks.find
*/