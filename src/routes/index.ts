/*********************************** */
/** Separando as rotas no seu lugar */
/********************************* */
import { Router } from "express";

/** Trabalhando com Controllers */
import * as HomeController from "../controllers/homeController";
import * as InfoController from "../controllers/infoController";
import * as UserController from "../controllers/userController";

const router = Router();

/** Trabalhando com Controllers */
router.get("/", HomeController.home);
router.get("/contato", InfoController.contato);
router.get("/sobre", InfoController.sobre);
router.get("/nome", UserController.nome);
router.get("/idade", UserController.idadeForm);
router.post("/idade-resultado", UserController.idadeAction); //Recebendo dados via POST

export default router;

/*
router.get("/idade", (req: Request, res: Response) => {

  // Recebendo dados na URL 2
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
*/
