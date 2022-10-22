// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ["~/assets/css/tailwind.css"],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
        transpile:['@heroicons/vue']
    },

    runtimeConfig:{
        jwtAccessSecret:process.env.JWT_ACCESS_TOKEN_SECRET,
        jwtRefreshSecret:process.env.JWT_REFRESH_TOKEN_SECRET,
        cloudinaryCloudName:process.env.CLOUDINARY_CLOUD_NAME,
        cloudinaryApiSecret:process.env.CLOUDINARY_API_SECRET,
        cloudinaryApiKey:process.env.CLOUDINARY_API_KEY,
    }
})
