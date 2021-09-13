import { Request, Response } from "express";

export const contato = (req: Request, res: Response) => {
  /** Mustache: Conteúdo parcial */
  res.render("pages/contato");
};

export const sobre = (req: Request, res: Response) => {
  /** Mustache: Conteúdo parcial */
  res.render("pages/sobre");
};
