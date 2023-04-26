const db = require('../database/models');
const sequelize = db.sequelize;
const Clientes = db.Cliente;

const clienteController = {
  clientes: (req, res)=>{
    Clientes.findAll()
      .then((clientes)=>{
        return res.status(200).json({
          total: clientes.length,
          data: clientes,
          status: 200
      })
      }
      )

  }
};

module.exports = clienteController;