import dotenv from 'dotenv'

dotenv.config()

export default {
    port:process.env.PORT,
    cnxStr:process.env.MONGO_CNX_STR
}