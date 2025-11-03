const express = require("express")
const router = express.Router();
const {exportAsPDFk exportAsDocument} = require("../controllers/exportController")
const {protect} = require("../middlewares/authMiddleware");
const { route } = require("./aiRoutes");

router.get("/:id/pdf", protect, exportAsPDF);
router.get("/:id/doc", protect, exportAsDocument)

module.exports = router;