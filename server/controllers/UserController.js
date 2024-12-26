
import { Webhook } from "svix"
import userModel from "../models/userModel.js"
//api controller function to manage clerk user with database

//https://localhost:4000/api/user/webhooks

const clerkWebhooks = async (req,res) =>{
    try{
        //create a svix instance with clerk webhook secret
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        await whook.verify(JSON.stringify(req.body) ,{
            'svix-id' : req.headers['svix-id'],
            'svix-timestamp' : req.headers['svix-timestamp'],
            'svix-signature' : req.headers['svix-signature']
        } )

        const{data,type} = req.body

        switch(type){
            case 'user.created':
                {
                    const userData = {
                        clerkId : data.id,
                        emailId : data.email_addresses[0].email_address,
                        photo : data.image_url,
                        firstname : data.first_name,
                        lastname : data.last_name,
                        

                    }

                    await userModel.create(userData)
                    res.json({})
                console.log('User created')
                break;
            }


            case 'user.updated':{

                const userData = {
                  
                    emailId : data.email_addresses[0].email_address,
                    photo : data.image_url,
                    firstname : data.first_name,
                    lastname : data.last_name,
                    

                }
                await userModel.findOneAndUpdate({clerkId:data.id},userData)

                res.json({})
                console.log('User updated')
                break;

            }
            case 'user.deleted':{
                await userModel.findOneAndDelete({clerkId:data.id})
                res.json({})
                console.log('User deleted')
                break;
            }
            
        }

    }
    catch (error) {
 console.log(error.message)
 res.json({success:false,message:error.message})
    }
}

export {clerkWebhooks}