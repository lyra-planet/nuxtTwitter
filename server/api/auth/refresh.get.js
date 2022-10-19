import {sendError} from 'h3'
import { getRefreshTokenByToken } from '~~/server/db/refreshTokens'

export default defineEventHandler(async(event)=> {
    const cookies = useCookies(event)
    console.log(event)
    // const refreshToken = cookies.refresh_token

    // if (!refreshToken) {
    //     return sendError(event, createError({
    //         statusCode: 401,
    //         statusMessage: 'Refresh token is invalid'
    //     }))
    // }

    // const rToken = await getRefreshTokenByToken(refreshToken)

    // if (!rToken) {
    //     return sendError(event, createError({
    //         statusCode: 401,
    //         statusMessage: 'Refresh token is invalid'
    //     }))
    // }

    return cookies
});