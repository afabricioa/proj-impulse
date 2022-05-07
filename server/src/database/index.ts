import { createConnection, getConnectionOptions } from "typeorm";
console.log("Arq database")

interface IOptions {
    host: string;
}
getConnectionOptions().then(options => {
    const newOptions = options as IOptions;
    newOptions.host = 'localhost'

    createConnection({
        ...options
    }).catch(error => console.log(error));;
});