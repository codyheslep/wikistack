const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', { logging: false });

db.authenticate().
  then(() => {
    console.log('connected to the database');
  });

const Page = db.define('page', {
  title: Sequelize.STRING,
  slug: Sequelize.STRING,
  content: Sequelize.TEXT,
  status: Sequelize.BOOLEAN
})

const User = db.define('user', {
  name: Sequelize.STRING,
  email: Sequelize.STRING
})

module.exports = { Page, User, db };
