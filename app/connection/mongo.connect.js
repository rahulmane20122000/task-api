import { connect } from 'mongoose';

export const connectToMongo = async () => {
    try {
        const { MONGO_CONNECTION_STRING } = process.env;
        await connect(MONGO_CONNECTION_STRING);
        console.log("CONNECTED TO MONGODB")
        return true;
    } catch (e) {
        console.log(e)
        throw 'COULD NOT CONNECT TO MONGO DB';
    }
}