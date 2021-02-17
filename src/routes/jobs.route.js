const express = require("express")
const router = express.Router()
const controller = require("../controllers/jobs.controller")

router.get("/test",controller.test)
router.get("/",controller.AccesoPrincipal)
router.post("/add",controller.GuardarDatos)
router.get("/delete/:id",controller.BorrarDato)

module.exports = router