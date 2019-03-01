import { Taxes } from "./taxes";

export class Process {

  /* *
   * Process basket and print to stdout
   * @param {object} input
   */
  public static output(basket:object[]):void {

    const details:string[] = this.execute(basket);

    // write the details to stdout
    details.forEach( (line) => {

      console.log(line);

    }); // details.forEach

    console.log("");

  }

  /* *
   * Process basket
   * @param {object} input
   * @returns {string[]}
   */
  public static execute(basket:object[]):string[] {

    // initialize output
    const details:string[] = [];

    let totalTax:number = 0;
    let subtotal:number = 0;

    basket.forEach( (item) => {

      let itemName:string = item["name"];
      let price:number = item["price"];

      // calculate sales tax and import duty
      let tax:number = Taxes.calculate(item);

      // add price to basket subtotal
      subtotal += price

      // add tax to basket total tax
      totalTax += tax;

      // add tax to price
      let fullPrice:number = price + tax;

      // format with commas
      let fullPriceFormatted:string = fullPrice.toLocaleString();

      // add ".00" to Full Price if integer
      fullPriceFormatted = this.addDotZeroZero(fullPriceFormatted);

      details.push(`${itemName}: ${fullPriceFormatted}`);

    }); // items.forEach

    let total:number = subtotal + totalTax;

    // format with commas
    let totalTaxFormatted:string = totalTax.toLocaleString();
    let totalFormatted:string = total.toLocaleString();

    // add ".00" to Sales Taxes if integer
    totalTaxFormatted = this.addDotZeroZero(totalTaxFormatted);

    details.push(`Sales Taxes: ${totalTaxFormatted}`);

    details.push(`Total: ${totalFormatted}`);

    return details;

  }

  /* *
   * Some outputs need to have ".00" added if they have no decimal
   * Returns the input with ".00" added if no "." detected
   * @param {string} input
   * @returns {string}
   */
  private static addDotZeroZero(input:string):string {

    if(input.indexOf('.') === -1){
      return `${input}.00`;
    }

    return input;

  }

}
