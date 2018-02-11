const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/dogsclub', { logging: false });


const Dog = db.define('dog', {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  }, 
  image: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isUrl: true
    }
  }
})


module.exports = {db, Dog}