import { prisma } from "."

export const createRefreshToken = (refreshToken,userId)=>{
    return prisma.refreshToken.create({
        data:refreshToken,
        userId
    })
}

export const getRefreshTokenByToken = (token)=>{
    return prisma.refreshToken.findUnique({
        where:{
            token
        }
    })
}