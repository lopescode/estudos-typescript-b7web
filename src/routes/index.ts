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
  res.render('contato')
});

router.get("/sobre", (req: Request, res: Response) => {
  
  /** Mustache: Conteúdo parcial */
  res.render('sobre')
});


router.get("/nome", (req: Request, res: Response) => {
  
  /** Recebendo dados na URL 1 */
  console.log(req.query)

  let nome: String = req.query.nome as string; // Especificando que o retorno será string

  res.render('nome', {
    nome
  })
});


export default router;
