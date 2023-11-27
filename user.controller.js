export const postUser = async (req,res) => {
    try {
        const newUser = req.body;
        //https://github.com/chafroudtarek/kafka-and-nodejs-blog/tree/main
        
        if(!req.body.email){
            res.status(400).send({message:"ERROR MISSING FIELD"})
            return
        }

c

    } catch (error) {
        
    }
}