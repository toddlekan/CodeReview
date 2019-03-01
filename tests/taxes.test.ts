import { Taxes } from "../src/taxes";
import { expect } from 'chai';
import 'mocha';

describe('Taxes.calculate function', () => {

  it('should return 0', () => {

    const item = {
      "name": "exempt, local",
      "price": 16.00,
      "exempt": true,
      "imported": false
    };

    const result = Taxes.calculate(item);
    expect(result).to.equal(0);

  });

  it('should return 10', () => {

    const item = {
      "name": "non-exempt, local",
      "price": 99.99,
      "exempt": false,
      "imported": false
    };

    const result = Taxes.calculate(item);
    expect(result).to.equal(10);

  });

  it('should return 0.55', () => {

    const item = {
      "name": "exempt, imported",
      "price": 11.00,
      "exempt": true,
      "imported": true
    };

    const result = Taxes.calculate(item);
    expect(result).to.equal(0.55);

  });

  it('should return 1.5', () => {

    const item = {
      "name": "non-exempt, imported",
      "price": 10.00,
      "exempt": false,
      "imported": true
    };

    const result = Taxes.calculate(item);
    expect(result).to.equal(1.5);

  });

});
