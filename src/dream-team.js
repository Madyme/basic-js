const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let membersNames = [];
  for (let i = 0; i < members.length; i++) {
    let index = 0;
    if(typeof(members[i]) == 'string') {
      let j = 0;
      while (members[i].charCodeAt(j) < 65) {
        index++;
        j++;
      }
    }
    membersNames.push(members[i][index].toUpperCase());
  }
  return (membersNames.sort((a, b) => a.localeCompare(b)).join(""))
}

module.exports = {
  createDreamTeam
};
