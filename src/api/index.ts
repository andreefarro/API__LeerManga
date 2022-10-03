import express from "express";
import main from "./prime";

const router = express.Router();

// Main router.
router.use(main);

export { router };