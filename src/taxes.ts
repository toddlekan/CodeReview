export class Taxes {

    /* *
     * Returns the sales tax for an item
     * @param {object} item
     * @returns {number}
     */
    public static calculate(item:object):number {

      let price:number = item["price"];
      let exempt:boolean = item["exempt"];
      let imported:boolean = item["imported"];

      // Basic sales tax is applicable at a rate of 10% on all goods, except
      // candy, popcorn and coffee, which are exempt.
      let salesTax:number = 0;

      if(!exempt){
        salesTax = price * .1;
      }

      // Import duty is an additional sales tax applicable on all imported goods
      // at a rate of 5%, with no exemptions.
      let importDuty:number = 0;

      if(imported){
        importDuty = price * .05;
      }

      // Sales tax is rounded up to the nearest multiple of $0.05. This rounding
      // is done by item, by type of tax (basic sales and import duty)
      salesTax = this.roundUp(salesTax);
      importDuty = this.roundUp(importDuty);

      return salesTax + importDuty;

    }

    /* *
     * Returns the number rounded up to the nearest multiple of 0.05
     * @param {number} amount
     * @returns {number}
     */
    private static roundUp(amount:number):number {

        const multiple:number = amount * 20;
        const ceiling:number = Math.ceil(multiple);
        const dividend:number = ceiling/20;
        const fixed:string = dividend.toFixed(2);

        return parseFloat(fixed);

    }

}
