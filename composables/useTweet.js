export default ()=>{
    const postTweet = (formData)=>{
        const form = new FormData()

        form.append('text',formData.text)
        formData.mediaFiles.forEach((mediaFile,index)=>{
            console.log(index)
            form.append('media_file_'+index,mediaFile)
        })
        console.log(form.get('media_file_0'))
        return useFetchApi('/api/user/tweets',{
            method:'POST',
            body:form
        })
    }

    const getHomeTweets = ()=>{
        return new Promise(async(resolve,reject)=>{
            try {
                const responese = await useFetchApi('/api/tweets',{
                    method:'GET'
                })
                resolve(responese)
            } catch (error) {
                reject(error)
            }
        })
    }
    const getTweetById= (tweetId)=>{
        return new Promise(async(resolve,reject)=>{
            try {
                console.log(tweetId)
                const responese = await useFetchApi(`/api/tweets/${tweetId}`,{
                    method:'GET'
                })
                console.log(responese)
                resolve(responese)
            } catch (error) {
                reject(error)
            }
        })
    }
    return {
        postTweet,
        getHomeTweets,
        getTweetById,
    }
}