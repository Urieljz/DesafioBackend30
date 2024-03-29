const mongoose = require("mongoose");
//Nota: cambiar despues del @ el string de conexion de la base de datos local
const URI = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@cluster0.tznp10q.mongodb.net/${process.env.NAME_DB}`;
async function connect() {
  try {
    let connection = await mongoose.connect(URI);
    if (connection) console.log("Conexion a BD establecida");
  } catch (error) {
    throw new Error(error);
  }
}

function disconnect() {
  mongoose.disconnect();
}

module.exports = {
  connect,
  disconnect,
};

/*module.exports = {
    connect: async () => {
        try {
            let connection = await mongoose.connect(URI)
            if (connection) console.log("Conexion a BD establecida")  
          } catch (error) {
             throw new Error(error)
          }
    }
    disconnect: async () => {
        mongoose.disconnect()
    } 
}*/
