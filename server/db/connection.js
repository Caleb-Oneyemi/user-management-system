const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const con = await mongoose.connect('mongodb+srv://caleb:caleb@cluster1.rx7lq.mongodb.net/storybooks?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });

        console.log(`MongoDB connected: ${con.connection.host}`);
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;