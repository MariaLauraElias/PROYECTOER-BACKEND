module.exports = (sequelize, dataTypes) => {
  let alias = 'Cliente';
  let cols = {
      id: {
          type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      nombre: dataTypes.STRING,
      cod: dataTypes.STRING,
  };
  let config = {
      tableName: 'clientes',
      timestamps: false,
  };

  const Cliente = sequelize.define(alias, cols, config);

  Cliente.associate = function(models){
    Cliente.hasMany(models.Obra, {
        as:"obras",
        foreignKey: "cliente_id"
    })
  };

return Cliente;
};