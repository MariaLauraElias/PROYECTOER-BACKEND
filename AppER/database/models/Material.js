module.exports = (sequelize, dataTypes) => {
  let alias = 'Material';
  let cols = {
      id: {
          type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      materiales: dataTypes.STRING,
      cod: dataTypes.STRING,
  };
  let config = {
      tableName: 'materiales',
      timestamps: false,
  };

  const Material = sequelize.define(alias, cols, config);

  Material.associate = function(models){
    Material.hasMany(models.Obra, {
        as:"obras",
        foreignKey: "material_id"
    })
  };

return Material;
};