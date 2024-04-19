import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("MongoDB connected successfully");
        })

        connection.on('error', (error) => {
            console.log("MongoDB connection error. Please make sure MongoDB is running. " + error);
            process.exit();
        })

        console.log('MongoDB connected');

    } catch (error) {
        console.log(error, " Something went wrong while connecting to MongoDB");
    }
}