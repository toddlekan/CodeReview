import fs = require('fs');
import { Basket } from "./basket";
import { Process } from "./process";

// receipt is produced which lists the name of all the items and their price
// (including tax), finishing with the total cost of the items, and the total
// amounts of sales taxes paid.

// print out the receipt details for these shopping baskets

// get basket file
// baskets are stored as individual text files in the inputs directory
// the file name is passed as the argument on the command line

const args:string[] = process.argv.slice(-2);
let basketFile:string = args[1];

basketFile = `./inputs/${basketFile}`;

fs.readFile(basketFile, (err, data) => {
    if (err) {
        return console.error(err);
    }

    const basket:object[] = Basket(data.toString());

    // Output
    Process.output(basket);

});
