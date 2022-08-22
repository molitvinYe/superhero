import express from 'express'
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import cors from 'cors'
import superheroRouter from './routes/SuperheroRouter.js';

const PORT = 5000;
const DB_URL = "mongodb+srv://molitvin:Molitvin2001@cluster0.z3f44ft.mongodb.net/?retryWrites=true&w=majority"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))

app.use('/', superheroRouter)

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
    app.listen(PORT, () => console.log("Server started on port " + PORT))
  } catch (e) {
    console.log(e)
  }
}

startApp()

