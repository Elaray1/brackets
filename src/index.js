module.exports = function check(str, bracketsConfig) {
  let object = {};
  let objectSame = {};
  let openBrackets = [];
  isOpen = true;
  bracketsConfig.forEach(function(arr) {
    object[arr[0]] = arr[1];
    if (arr[0] == arr[1]) objectSame[arr[0]] == arr[1];
  });
  for (let i = 0; i < str.length; i++) {
    if (str[i] in object) {
      if (str[i] in objectSame && isOpen) {
        openBrackets.push(str[i]);
        isOpen = false;
      } else if (str[i] == object[openBrackets[openBrackets.length-1]]) {
        openBrackets.pop();
        isOpen = true;
      } else {
      openBrackets.push(str[i]);
      }
    } else {
      if (str[i] == object[openBrackets[openBrackets.length-1]]) {
      openBrackets.pop();
      } else return false;
    }
  }
  if (openBrackets.length == 0) {
    return true;
  } else return false;
}
