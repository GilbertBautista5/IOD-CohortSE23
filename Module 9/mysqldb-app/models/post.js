const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Post extends Model {}
//Sequelize will create this table if it doesn't exist on startup
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: true,
    },
   
  },
  {
    sequelize: sequelizeInstance,
    modelName: "Post", //use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Post;