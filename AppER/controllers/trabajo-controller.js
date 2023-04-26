const db = require('../database/models');
const sequelize = db.sequelize;
const Trabajos = db.Trabajo;

const trabajoController = {
  trabajos: (req, res)=>{
    Trabajos.findAll()
      .then((trabajos)=>{
        return res.status(200).json({
          total: trabajos.length,
          data: trabajos,
          status: 200
      })
      }
      )

  }
};

module.exports = trabajoController;