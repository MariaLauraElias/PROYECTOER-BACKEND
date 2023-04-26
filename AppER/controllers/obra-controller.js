const db = require('../database/models');
const sequelize = db.sequelize;
const Obras = db.Obra;

const obraController ={

  obras: (req,res)=>{
    Obras.findAll({
      include: [{association: "clientes"}, {association: "materiales"},{association:"trabajos"}, {association:"imagenes"}]
    })
    .then((obras)=>{
      return res.status(200).json({
        total: obras.length,
        data: obras,
        status: 200
      })
    })    
  }
}

module.exports = obraController;