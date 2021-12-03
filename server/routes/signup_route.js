import express from "express";

const router = express.Router();

import api from "../controllers/db-controllers.js";

router.route("/signup").post(api.SignUp);

// router.route("/").get((res, req) => res.send("Hello World!"));

export default router;