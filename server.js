
import express from "express";
import { logger } from "./Middleware/logger.js";
import itemsRouter from "./Routes/items.js";

const app = express();

app.use(express.json());
app.use(logger); 

app.use("/api/resources", itemsRouter);

// Global fallthrough route: Catches invalid paths.
app.use((req, res) => {
    res.status(404).json({ error: "Resource Route Path requested could not be resolved." });

});

app.listen(3000, () => {
 
    console.log("Server is running on http://localhost:3000");
    
});
