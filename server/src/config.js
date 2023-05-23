import dotenv from 'dotenv'

dotenv.config()

export default {
    port: process.env.PORT,
    uri_mongo: process.env.URI_MONGO,
    
}


