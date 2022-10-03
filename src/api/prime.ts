import express from "express";
import {PrimeController as Prime}  from "../controllers/PrimeController";

const router = express.Router();
const prime = new Prime()

// Main router.
router.get("/weekly", prime.weekly);
router.get("/popular", prime.popular);
router.get("/trending", prime.trending);
router.get("/latest", prime.latest);
router.get("/annual", prime.annual);

export default router;