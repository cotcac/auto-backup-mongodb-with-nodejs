const mongoose = require('mongoose');
// Connect to mongodb.
mongoose.connect('mongodb://localhost:27017/posts',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
).then(r=>{
    console.log("connect to mongodb success");
    console.log(r.models);
    
    
}).catch(e=>{
    console.log("Fail to connect to mongodb");
    console.log(e);
})
// Define Model
var PostSchema = new mongoose.Schema({
    title: String
});

var Post = mongoose.model('posts', PostSchema);
module.exports = Post;