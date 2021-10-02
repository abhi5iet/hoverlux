import { connectDB, insertDoc, getAllDocs } from "../../../Utils/mongoUtils";

export default async function handler(req, res) {
    const { eventId } = req.query;

    let client;
    try{
      client = await connectDB();
    } catch(err){
      return res.status(500).json({message : 'Connecting with Database Failed !'});
    }

    if (req.method === 'POST') {
        const { email, name, text } = req.body;

        if (!email || !email.includes('@') || email.length <= 7 || !name || name.trim() === '' || !text || text.trim() === '') {
            res.status(422).json({ message: 'Invalid Input' });
            client.close();
            return;
        }

        const newComment = {
            email,
            name,
            text,
            eventId,
        }
        try{
            const ress = await insertDoc(client, 'comments', newComment);
            newComment._id = ress.insertedId;
            res.status(201).json({ message: 'Comment Added', Comment: newComment });
          } catch(err){
            res.status(500).json({message : 'Insertion to Database Failed !'});
          }
    }
    if (req.method === 'GET') {
        try{
            const documents = await getAllDocs(client, 'comments', {_id: -1});
            res.status(200).json({ comments: documents });
        } catch(err){
            res.status(500).json({message : 'Getting Comments Failed !'});
        }
    }
    client.close();
}