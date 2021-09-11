/*********************************** */
/** Separando as rotas no seu lugar */
/********************************* */
import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  /**Mustache: Exibindo informações */
  let user = {
    name: "Leonardo",
    age: 24
  }

  res.render('home', {
    user
  });
});

router.get("/contato", (req: Request, res: Response) => {
  res.send("Formulário de Contato");
});

router.get("/sobre", (req: Request, res: Response) => {
  res.send("Página institucional sobre a empresa");
});

export default router;
