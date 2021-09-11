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
  if (user.age > 18) {
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
    // ListaS simples
    frasesDoDia: [
      "Alguma coisa muito legal",
      "Outra frase qualquer"
    ]
  });
});

router.get("/contato", (req: Request, res: Response) => {
  res.send("Formulário de Contato");
});

router.get("/sobre", (req: Request, res: Response) => {
  res.send("Página institucional sobre a empresa");
});

export default router;
