import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
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

  res.render("pages/home", {
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
      { title: "Produto W", price: 20 },
    ],

    // Listas simples
    /*
      frasesDoDia: [
        "Alguma coisa muito legal",
        "Outra frase qualquer"
      ]*/

    /** Mustache: Else de listas */
    frasesDoDia: [],
  });
};
