import {sendError} from 'h3'
import { createUser } from '~~/server/db/user'
import { userTransformer } from '~~/server/transformers/user'
export default defineEventHandler(async (event)=>{
    const body = await useBody(event)
    const {username,password,repeatPassword,email,name,profileImage} = body

    if(!username||!password||!repeatPassword||!email||!name){
        return sendError(event,createError({statusCode:400,
        statusMessage:'Invalid params'}))
    }
    if(password!==repeatPassword){
        return sendError(event,createError({statusCode:400,
    statusMessage:'Password do not match'}))
    }
    if(!profileImage){
        return sendError(event,createError({statusCode:400,
            statusMessage:'No Avatar'}))
    }
    const userData = {
        username,
        email,
        password,
        name,
        profileImage
    }

    const user = await createUser(userData)
    return {
        body:userTransformer(user)
    }
})