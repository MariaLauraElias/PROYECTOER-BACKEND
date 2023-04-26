module.exports = (sequelize, dataTypes) => {
  let alias = 'Imagen';
  let cols = {
      id: {
          type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      obra_id: {
        type: dataTypes.INTEGER,
        foreignKey: true
    },
      nombre: dataTypes.STRING
  };
  let config = {
      tableName: 'imagenes',
      timestamps: false,
  };

  const Imagen = sequelize.define(alias, cols, config);

  Imagen.associate = function(models){
    Material.belongsTo(models.Obra, {
        as:"obras",
        foreignKey: "obra_id"
    })
  };

return Imagen;
};