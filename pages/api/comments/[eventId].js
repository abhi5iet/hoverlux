import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config();

export default async function handler(req, res) {
    const {eventId} = req.query;
    const client = await MongoClient.connect(process.env.MONGODB_ATLAS_LINK)

    if (req.method === 'POST') {
        const {email, name, text} = req.body;

        if(!email || !email.includes('@') || email.length <= 7 || !name || name.trim() === '' || !text || text.trim() === ''){
            return res.status(422).json({message : 'Invalid Input'})
        }

        const newComment = {
            email,
            name,
            text,
        }
        const db = client.db('events');
        const res = await db.collection('comments').insertOne(newComment);
        newComment.id = res.insertedId;

        return res.status(201).json({message : 'Comment Added', Comment : newComment});
    }
    if (req.method === 'GET') {
        const db = client.db('events');
        const documents = await db.collection('comments').find({}).sort({_id : -1}).toArray();

        res.send(200).json({comments : documents});
    }

    client.close();
}