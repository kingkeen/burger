module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
      } 
    }, {
      timestamps: false
    }, 
    
    {
    classMethods: {
      associate: function(models) {
        // future associations
      }
    }
  
  });
  return Burger;
};
