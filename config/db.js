const { default: mongoose } = require("mongoose");


const db = async () => {
    try {
        await mongoose.connect('mongodb+srv://phpatelsd21:12345@cluster0.y7m4e27.mongodb.net/BookStore');
        console.log('Connected to the database successfully');
    } catch (error) {
        console.log('Error connecting to the database:', error);
        
    }
}

module.exports = db;