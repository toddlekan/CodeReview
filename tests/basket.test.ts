import { Basket } from "../src/basket";
import { expect } from 'chai';
import 'mocha';

describe('Basket function', () => {

  it('should return an array of strings', () => {

    const basket = `1 imported crate of Almond Snickers at 75.99
    1 Discman at 55.00
    1 Imported Bottle of Wine at 10.00
    1 300# bag of Fair-Trade Coffee at 997.99`;

    const result = Basket(basket);
    expect(result).to.be.an('array');

  });


});
