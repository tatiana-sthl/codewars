/*
PSEUDOCODE
1. Write a function that filters a list of strings
2. Return a list with only your friends name (with 4 letters) in it
*/

function friend(friends){
  return friends.filter(function (item) { return item.length === 4 });
}

/*
const friend = friends => friends.filter(friend => friend.length === 4);
*/

module.exports = friend