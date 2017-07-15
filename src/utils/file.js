const fs = require('fs');

const fileExists = path => {

  try {

    return fs.statSync(path).isFile();

  } catch (error) {

    return false;

  }

};

const dbExists = idbName => fileExists(`./${idbName}/.idb`);

module.exports = {
  dbExists
};
