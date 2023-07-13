export const generateId = (myKey, seedNum) => {
  var key = myKey + seedNum;
  if (document.getElementById(key) != null) {
    return generateId(myKey, ++seedNum);
  } else {
    return key;
  }
};
