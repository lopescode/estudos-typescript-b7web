/*********************************** */
/** Separando as rotas no seu lugar */
/********************************* */
import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  /** Mustache: Exibindo informações */
  let user = {
    name: "Leonardo",
    age: 24,
  };

  /** Mustache: Exibição condicional */
  let showOld: boolean = false;
  if (user.age < 18) {
    showOld = true;
  }

  res.render("home", {
    /** Mustache: Exibindo informações */
    user,

    /** Mustache: Exibição condicional */
    //showWelcome: false // Não exibe
    showWelcome: true, // Exibe
    showOld,

    /** Mustache: Exibindo listas (loop) */
    products: [
      { title: "Produto X", price: 10 },
      { title: "Produto Y", price: 15 },
      { title: "Produto W", price: 20 }
    ],

    // Listas simples
    /*
    frasesDoDia: [
      "Alguma coisa muito legal",
      "Outra frase qualquer"
    ]*/

    /** Mustache: Else de listas */
    frasesDoDia: []
  });
});

router.get("/contato", (req: Request, res: Response) => {
  
  /** Mustache: Conteúdo parcial */
  res.render('pages/contato')
});

router.get("/sobre", (req: Request, res: Response) => {
  
  /** Mustache: Conteúdo parcial */
  res.render('pages/sobre')
});


router.get("/nome", (req: Request, res: Response) => {
  
  /** Recebendo dados na URL 1 */
  console.log(req.query)

  let nome: string = req.query.nome as string; // Especificando que o retorno será string
  let idade: string = req.query.idade as string;

  res.render('pages/nome', {
    nome,
    idade
  })
});

router.get("/idade", (req: Request, res: Response) => {

  /** Recebendo dados na URL 2 */
  let mostrarIdade: boolean = false;
  let idade: number = 0;

  if(req.query.ano) {
    let anoNascimento: number = parseInt(req.query.ano as string);
    let anoAtual: number = new Date().getFullYear();
    idade = anoAtual - anoNascimento;
    mostrarIdade = true;
  }

  res.render('pages/idade', {
    idade,
    mostrarIdade
  });
})


export default router;
