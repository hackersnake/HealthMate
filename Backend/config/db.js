import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
            .then(res => console.log(`Connected To DB ${res.connection.host}`))
            .catch((err) => console.log(err));
    } catch (error) {
        console.log(`Error connecting to DB`, error);
    }
}

export default connectToDB;