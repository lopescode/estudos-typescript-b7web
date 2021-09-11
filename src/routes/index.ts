/*********************************** */
/** Separando as rotas no seu lugar */
/********************************* */
import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  /** Mustache: Exibindo informações */
  let user = {
    name: "Leonardo",
    age: 24
  }
  let showOld: boolean = false;

  if(user.age > 18) {
    showOld = true;
  }

  res.render('home', {
    user,
    /** Mustache: Exibição condicional */
    //showWelcome: false // Não exibe
    showWelcome: true, // Exibe
    showOld
  });
});

router.get("/contato", (req: Request, res: Response) => {
  res.send("Formulário de Contato");
});

router.get("/sobre", (req: Request, res: Response) => {
  res.send("Página institucional sobre a empresa");
});

export default router;
