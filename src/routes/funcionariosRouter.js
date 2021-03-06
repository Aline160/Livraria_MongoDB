const express = require ("express");
const router = express.Router();
const controller = require ("../controller/funcionariosController");

router.get ("/",controller.getAll);
router.get ("/funcionarios", controller.getAll);
router.get ("/:cpf",controller.getByCpf);
router.post ("/",controller.postFuncionarios);
router.delete ("/:id",controller.deleteFuncionario);
router.put("/:id",controller.putFuncionarios);



module.exports = router;