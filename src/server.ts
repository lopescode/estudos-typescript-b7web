/*************************************** */
/** Entendendo import/exports em Common */
/************************************* */

//const Matematica = require('./matematica')

/************************************ */
/** Entendendo import/exports em ES6 */
/********************************** */
/*
//import { somar, subtrair, multiplicar} from './matematica';
//import * as Matematica from './matematica';
import Matematica from "./matematica";

let n1: number = 10;
let n2: number = 10;

console.log(`SOMA: ${Matematica.somar(n1, n2)}`);
console.log(`SUBTRAÇÃO: ${Matematica.subtrair(n1, n2)}`);
console.log(`MULTIPLICAÇÃO: ${Matematica.multiplicar(n1, n2)}`);
*/

/************************************ */
/** Importando arquivos de terceiros */
/********************************** */
/*
import validator from "validator";

console.log(validator.isEmail("suporte@krolik.com.br"));
console.log(validator.isIP("127.0.0.1"));
console.log(validator.isLowercase("Leonardo"));
*/


/********************************************** */
/** Instalando o Express e criando um servidor */
/******************************************** */

import express, { Request, Response } from "express";

const server = express();

server.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

server.listen(3000);