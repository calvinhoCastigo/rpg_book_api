import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

// router.get("/clientes", clienteController.getClientes);
// router.get("/cliente/:idCliente", clienteController.getCliente);
// router.get("/contasareceber/:idCliente", transacaoController.getContasAReceber);
// router.get("/contasapagar/:idCliente", transacaoController.getContasAPagar);
// router.get("/transacao/:idTransacao", transacaoController.getTransacao);
// router.post(
//   "/contasareceber/:idCliente",
//   transacaoController.insertContasAReceber
// );
// router.put(
//   "/statuspendente/:idTransacao",
//   transacaoController.alteraStatusPendenteContasAReceber
// );
// router.post("/contasapagar/:idCliente", transacaoController.insertContasAPagar);
export default router;
