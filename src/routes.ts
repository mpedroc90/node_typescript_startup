import { Router } from "express";
const router = Router();
// we will add routes to this default router in future

router.get("/", (req, res) => {
  return res.end("Hello Word");
})
export default router;