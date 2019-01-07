// Write your solution in this file!


const driver = {};

updateDriverWithKeyAndValue(driver, "address", "11 Broadway");
destructivelyUpdateDriverWithKeyAndValue(driver, "address", "12 Broadway");
deleteFromDriverByKey(driver, "name");
destructivelyDeleteFromDriverByKey(driver, "name");

function updateDriverWithKeyAndValue(obj, key, value) {
    const newObj = {...obj};
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromDriverByKey(obj, key) {
  const cloneObj = Object.assign({}, obj);
  delete cloneObj[key];
  return cloneObj;
}

function destructivelyDeleteFromDriverByKey(obj, key) {
  //const newObj = obj  // this would work too. Switching all of the names from obj to newObj but it's unecessary
  delete obj[key];
  return obj;
}
