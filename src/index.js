import app from './App.js'
import { connectDB } from './db.js'

connectDB();
app.listen(3000)
console.log('Listening on port 3000')