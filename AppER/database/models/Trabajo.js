module.exports = (sequelize, dataTypes) => {
  let alias = 'Trabajo';
  let cols = {
      id: {
          type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      trabajos: dataTypes.STRING,
      cod: dataTypes.STRING,
  };
  let config = {
      tableName: 'trabajos',
      timestamps: false,
  };

  const Trabajo = sequelize.define(alias, cols, config);

  Trabajo.associate = function(models){
    Trabajo.hasMany(models.Obra, {
        as:"obras",
        foreignKey: "trabajo_id"
    })
  };

return Trabajo;
};