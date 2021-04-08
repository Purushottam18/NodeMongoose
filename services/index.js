const mongoose  = require("mongoose");


mongoose.connect("mongodb://localhost:27017/mydata", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connection Succesful"))
    .catch((err)=>console.log(err));

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    number: Number,
    email: String,
    username: String,
})

const playlist = new mongoose.model("Playlist", playlistSchema);


module.exports = class Docs{

    async createDocument() {
        let result;
        try {
            const reactplaylist = new playlist({
                name: "React",
                number: 123,
                email: "xyz@rediffmail.com",
                username: "xyz@123"
            })
    
            const javaScriptplaylist = new playlist({
                name: "JavaScript New",
                number: 123,
                email: "xyz@rediffmail.com",
                username: "xyz@123"
            })
    
    
            const jsplaylist = new playlist({
                name: "JS",
                number: 456,
                email: "efg@rediffmail.com",
                username: "efg@123"
            })
    
            const nativeplaylist = new playlist({
                name: "Native",
                number: 789,
                email: "hij@rediffmail.com",
                username: "hij@123"
            })
            const result = await playlist.insertMany([reactplaylist,javaScriptplaylist, jsplaylist, nativeplaylist]);
            console.log(result);
    
        } catch (err) {
            console.log(err);
        }
        return result;
    }
    
    async getDocument() {
        let result;
        try {
            // const result = await playlist.find({ name: "JS" })
            //     .select({ name: 1 });
            // console.log(result);
            result = 'xyz';
        } catch (err) {
            console.log(err);
        }
        return result;
    }


    async getDocuments (){
        try {
            // const result = await playlist.find({});
            // console.log(result);
            result = 'abc';

        } catch (err) {
            console.log(err);
        }
    
    }

    async updateDocument(_id){
        try {
            // const result = await playlist.findByIdAndUpdate({ _id }, {
            //     $set: {
            //         name: "JavaScript New"
            //     }
            // }, {
            //     new:true,
            //     useFindAndModify:false
            // });
            // console.log(result);
            result = 'pqr';

        } catch (err) {
            console.log(err);
        }
    }


    async deleteDocument(_id){
        try {
            // const result = await playlist.deleteMany({ _id })
            // console.log(result);
            result = 'dhjkh';

        } catch (err) {
            console.log(err)
        }
    }
    
}
