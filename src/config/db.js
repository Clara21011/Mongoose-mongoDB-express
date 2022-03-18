import mongoose from "mongoose";

const conectarDB = async () => { // try-catch, porque, en caso de que haya un error, queremos saber cual
    try {
        const db = await mongoose.connect(process.env.MONGO_URI, { //llaves en .env
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const url = `${db.connection.host}:${db.connection.port}` //dara URL y pruerto donde se conecta
        console.log(`MongoDB conectado en: ${url}`); //este archivo es la conexion. En el siguiente hay que decirle que este archivo existe
    
    } catch (error) {
        console.log(`error: ${error.message}`);
        process.exit(1); //brinda mensaje de error
    }
};

export default conectarDB;