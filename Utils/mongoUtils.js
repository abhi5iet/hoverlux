import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config();

export async function connectDB() {
    const client = await MongoClient.connect(process.env.MONGODB_ATLAS_LINK);
    return client;
}

export async function insertDoc(client, collection, doc) {
    const db = client.db('events');
    const res = await db.collection(collection).insertOne(doc);
    return res;
}

export async function getAllDocs(client, collection, sort){
    const db = client.db('events');
    const documents = await db.collection(collection).find({}).sort(sort).toArray();
    return documents;
}