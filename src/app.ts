import dotenv from "dotenv";
dotenv.config();

import express from "express";

async function bootstrap() {
  const app = express();

  app.get("/", (req, res) =>
    res.status(200).json({ message: "Koyeb Did It!!!" })
  );

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
  );
}

bootstrap();
