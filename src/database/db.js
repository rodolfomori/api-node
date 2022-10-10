import mongoose from 'mongoose'

async function connectDatabase() {
  await mongoose.connect(
    'mongodb+srv://rodolfo:EQ16imi7PyJ7Zdx6@cluster0.2gmhhd1.mongodb.net/?retryWrites=true&w=majority',
  )
}


export default connectDatabase