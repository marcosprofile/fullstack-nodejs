const mongoose = require('mongoose')

const connectToDatabase = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.rh2mfsi.mongodb.net/?retryWrites=true&w=majority&appName=CursoNodeJs`)

    console.log("Conexão ao banco de dados realizada com sucesso!")
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = connectToDatabase