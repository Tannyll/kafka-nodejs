import { run } from "../utils/producer.js"
import User from "../models/User.js"

export const postUser = async (req,res) => {
console.log(req.body);
    try {
        const newUser = new User(req.body)
        //https://github.com/chafroudtarek/kafka-and-nodejs-blog/tree/main
        
        if(!req.body.email){
            res.status(400).send({message:"ERROR MISSING FIELD"})
            return
        }

/*         const user = await User.findOne({ email:req.body.email})

        if(user){
            res.status(400).send({message:"ERROR USERR ALREADY EXIST"});
            return;
        } */

        const response = await newUser.save();

        res.send({response:response, message:"User successfully created"})
console.log(response);
        run(response)

    } catch (error) {
        res.status(500).send({ message:error})
    }
}