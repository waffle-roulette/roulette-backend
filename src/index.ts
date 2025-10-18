// Express
import express from "express";
import baseRoute from "./routes/base.routes";

const PORT = 3000

const app = express()

app.use(baseRoute)

app.listen(PORT, () => {
    console.log("3000");
});

// Homework: Learn about RESTFUL API's

// Decide on API Arcitexture