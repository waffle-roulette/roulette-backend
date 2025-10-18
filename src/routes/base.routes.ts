import { Router } from "express";

const baseRoute = Router();

baseRoute.get('/', (req, res) => {
    res.send("Hello World!");
})

baseRoute.get('/sub', (req, res) => {
    res.send("bob");
})

export default baseRoute;