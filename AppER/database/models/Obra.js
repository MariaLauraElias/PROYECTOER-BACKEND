module.exports = (sequelize, dataTypes) => {
  let alias = "Obra";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
    cliente_id: {
      type: dataTypes.INTEGER,
      foreignKey: true
    },
    ubicacion: dataTypes.STRING,
    trabajo_id: {
      type: dataTypes.INTEGER,
      foreignKey: true
    },
    material_id: {
      type: dataTypes.INTEGER,
      foreignKey: true
    },
    fecha: dataTypes.DATE
  };
  let config = {
    tableName: "obras",
    timestamps: false
  };
  const Obra = sequelize.define(alias, cols, config);

  Obra.associate = function(models){
    Obra.belongsTo(models.Cliente, {
      as: "clientes",
      foreignKey: "cliente_id"
    });
    Obra.belongsTo(models.Trabajo, {
      as: "trabajos",
      foreignKey: "trabajo_id"
    });
    Obra.belongsTo(models.Material, {
      as: "materiales",
      foreignKey: "material_id"
    });
    Obra.hasMany(models.Imagen,{
      as: "imagenes",
      foreignKey:"obra_id"
    })

  };
  return Obra
};