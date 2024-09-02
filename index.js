import express from "express"
import cors from "cors"
import session from "express-session";
import dotenv from "dotenv"
import bodyParser from "body-parser";
import barangRoute from "./routes/barangRoute.js"

const app = express();

dotenv.config();
 
app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    })
)
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESS_SECRET,
}))

app.use(barangRoute)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})