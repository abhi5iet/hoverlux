import { connectDB, insertDoc } from "../../Utils/mongoUtils";

export default async function handler(req, res) {
  
  if(req.method === 'POST'){
    const {email} = req.body;

    if(!email || !email.includes('@') || email.length <= 7){
      return res.status(422).json({message : 'Invalid Email Address !'});
    }
    let client;
    try{
      client = await connectDB();
    } catch(err){
      return res.status(500).json({message : 'Connecting with Database Failed !'});
    }

    try{
      await insertDoc(client, 'newsletter', {email : email})
      client.close();
    } catch(err){
      return res.status(500).json({message : 'Insertion to Database Failed !'});
    }
    
    return res.status(201).json({message : 'Signed Up !'});
  }

}
