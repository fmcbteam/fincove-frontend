import mongoose from "mongoose";

const { MONGO_URL } = process.env

if (MONGO_URL) {
    throw new Error("invalid environment variables: MONGODB")
}

export const connectToMongoDb = async () => {
    try {
        const {connection} =  await mongoose.connect(MONGO_URL)

        if (connection.readyState === 1) {
            return Promise.resolve(true)
        }
    } catch (error) {
        return Promise.reject(error)
    }
}