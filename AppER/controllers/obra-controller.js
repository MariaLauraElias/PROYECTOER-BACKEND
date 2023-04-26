const db = require('../database/models');
const sequelize = db.sequelize;
const Obras = db.Obra;

const obraController ={

  list: (req,res)=>{
    Obras.findAll({
      include: [{association: "clientes"}, {association: "materiales"},{association:"trabajos"}, {association:"imagenes"}]
  })
  .then(obras => {

        console.log(obras)
      })

    
  }

  }

module.exports = obraController;