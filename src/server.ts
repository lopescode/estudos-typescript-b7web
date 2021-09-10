/*************************************** */
/** Entendendo import/exports em Common */
/************************************* */

//const Matematica = require('./matematica')

/************************************ */
/** Entendendo import/exports em ES6 */
/********************************** */

//import { somar, subtrair, multiplicar} from './matematica';
//import * as Matematica from './matematica';
import Matematica from "./matematica";

let n1: number = 10;
let n2: number = 10;

console.log(`SOMA: ${Matematica.somar(n1, n2)}`);
console.log(`SUBTRAÇÃO: ${Matematica.subtrair(n1, n2)}`);
console.log(`MULTIPLICAÇÃO: ${Matematica.multiplicar(n1, n2)}`);