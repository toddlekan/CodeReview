/* *
 * This is the input parsing for the program.
 * In production, we might replace this file with a connection to a
 * persistent data store.
 *
 * Also in production, we might have some way of programmatically identifying
 * different brands of candy
 */

/* *
 * Parses basket string into array of objects
 * @param {string} basket
 * @returns {object[]}
 */
export const Basket = (input:string):object[] => {

  const output:object[] = [];

  const basketArr:string[] = input.split("\n");

  basketArr.forEach( (item) => {

    if(item){

      const itemArr:string[] = item.split(" at ");

      // only continue if there are two items in the array
      if(itemArr.length === 2){

        let name:string = itemArr[0].trim();

        let exempt:boolean = false;

        // Basic sales tax is applicable at a rate of 10% on all goods, except
        // candy, popcorn and coffee, which are exempt.
        if(
          name.indexOf("Skittles") > -1 ||
          name.indexOf("Snickers") > -1 ||
          name.indexOf("Popcorn") > -1 ||
          name.indexOf("Coffee") > -1
        ) {
          exempt = true;
        }

        let imported:boolean = false;

        // Import duty is an additional sales tax applicable on all imported
        // goods at a rate of 5%, with no exemptions.
        if(
          name.indexOf("imported") > -1 ||
          name.indexOf("Imported") > -1
        ) {
          imported = true;
        }

        let price:string = itemArr[1];

        price = price.replace(",", "");

        let priceNum:number = parseFloat(price);

        // there is one output where "Imported" is changed to lower case
        if(name === "1 Imported Bottle of Wine"){

          name = name.replace("Imported", "imported");

        }

        // there is one output where "bag" is changed to upper case
        if(name === "1 300# bag of Fair-Trade Coffee"){

          name = name.replace("bag", "Bag");

        }

        const itemObj:object = {
          "name": name,
          "price": priceNum,
          "imported": imported,
          "exempt": exempt
        }

        output.push(itemObj)

      } else {

        throw new Error("Invalid Item Format");

      }

    }
    
  });

  return output;

}
