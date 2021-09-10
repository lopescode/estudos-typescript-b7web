/*************************************** */
/** Entendendo import/exports em Common */
/************************************* */

/*
const Matematica = require('./matematica')
*/

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

/*
import express, { Request, Response } from "express";

const server = express();

server.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

server.listen(3000);
*/

/******************** */
/** Teoria das Rotas */
/****************** */

/*
import express, { Request, Response } from "express";

const server = express();

server.get("/contato", (req: Request, res: Response) => {
  res.send("Esta é a pagina de contato");
});

server.listen(3000);
*/

/****************************** */
/** Trabalhando com mais Rotas */
/**************************** */

/*
import express, { Request, Response } from "express";

const server = express();

server.get("/noticia/:slug", (req: Request, res: Response) => {
  let slug: string = req.params.slug;
  res.send(`Notícia: ${slug}`);
});

server.get("/voos/:origem-:destino", (req: Request, res: Response) => {
  let { origem, destino } = req.params;
  res.send(`Procurando voos de ${origem.toUpperCase()} e ${destino.toUpperCase()}`);
});

server.listen(3000);
*/

/*********************************** */
/** Separando as rotas no seu lugar */
/********************************* */

import express from "express";
import mainRoutes from './routes/index';
import painelRoutes from './routes/painel';

const server = express();

server.use('/', mainRoutes);
server.use('/painel', painelRoutes);

server.listen(80)