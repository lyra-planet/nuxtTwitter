import { getTweetById } from "~~/server/db/tweets"
import { tweetTransformer } from "~~/server/transformers/tweet"

export default defineEventHandler(async(event)=>{
    
    const {id} = event.context.params
    console.log(id)
    const tweet =  await getTweetById(id,{
        include:{
            author:true,
            mediaFiles:true,
            replyTo:{
                include:{
                    author:true
                }
            },
            replies:{
                include:{
                    author:true,
                    mediaFiles: true,
                    replyTo:{
                        include:{
                            author:true
                        }
                    }
                }
            }
        }
    })
    console.log(tweet)
    return {
        tweet:tweetTransformer(tweet)
    }
})