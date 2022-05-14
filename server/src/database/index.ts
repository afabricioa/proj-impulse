import { AppDataSource } from "./databaseConfig"

AppDataSource.initialize().then(async () => {
    console.log("Iniciando Oracle")
}).catch(error => console.log("error: ", error))
