import { Process } from "../src/process";
import { expect } from 'chai';
import 'mocha';

describe('Process.execute function', () => {

  it('should return an array of strings', () => {

    const basket = [
      {
        "name": "1 16lb bag of Skittles",
        "price": 16.00,
        "exempt": false,
        "imported": false
      }
    ];

    const result = Process.execute(basket);
    expect(result).to.be.an('array');

  });


});
