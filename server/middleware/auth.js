import UrlPartten from 'url-pattern'
import { decodeAccessToken } from '../utils/jwt'
import {sendError} from 'h3'
import { getUserById } from '../db/user'

export default defineEventHandler(async(event)=>{
    const endpoints = [
        '/api/auth/user',
        '/api/user/tweets',
        '/api/tweets',
        '/api/tweets/:id',
    ]

    const isHandledByThisMiddleware = endpoints.some(endpoints=>{
        const partten = new UrlPartten(endpoints)

        return partten.match(event.req.url)
    })
    if(!isHandledByThisMiddleware){
        return
    }

    const token = event.req.headers['authorization']?.split(' ')[1]
    const decode = decodeAccessToken(token)
    if(!decode){
        return sendError(event,createError({
            statusCode:401,
            statusMessage:'Unauthorized'
        }))
    }

    

    try{
        const userId = decode.userId
        const user = await getUserById(userId)
        event.context.auth = {user}
    }catch(error){
        return
    }
})