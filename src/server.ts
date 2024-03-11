import { app } from "./app";
import { Request, Response } from "express";

app.get("/", (req: Request, res: Response) => {

    res.status(200).json({ message: "Primeira aplicação com docker" })
})

app.listen(3000, () => console.log("Server running..."))