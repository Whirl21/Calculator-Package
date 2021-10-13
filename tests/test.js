/**
 * WITH TYPESCRIPT/ESM MODULES
 */
import calculator from "../index.js";
const { add, subtract, multiply, divide, power } = calculator;
/*add(1 , 2 , 2 , 4 , 99 , 77)
subtract(1 , 2 , 2 , 4 , 99 , 77)
multiply(1 , 2 , 2 , 4 , 99 , 77)
divide(1 , 2 , 2 , 4 , 99 , 77)
power(1 , 2 , 2 , 4 , 99 , 77)*/
/**
 * WITH NODE'S REQUIRE
 */
const { add, subtract, multiply, divide, power } = require("../index.js");
/*add(1 , 2 , 2 , 4 , 99 , 77)
subtract(1 , 2 , 2 , 4 , 99 , 77)
multiply(1 , 2 , 2 , 4 , 99 , 77)
divide(1 , 2 , 2 , 4 , 99 , 77)
power(1 , 2 , 2 , 4 , 99 , 77)*/
