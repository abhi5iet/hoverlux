import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config();

export default async function handler(req, res) {
  
  if(req.method === 'POST'){
    const {email} = req.body;

    if(!email || !email.includes('@') || email.length <= 7){
      return res.status(422).json({message : 'Invalid Email Address !'});
    }

    const client = await MongoClient.connect(process.env.MONGODB_ATLAS_LINK)
    const db = client.db('events');
    await db.collection('newsletter').insertOne({email : email});
    client.close();
    return res.status(201).json({message : 'Signed Up !'});
  }

}
