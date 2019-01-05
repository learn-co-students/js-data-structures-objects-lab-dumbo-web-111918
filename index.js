// Write your solution in this file!

 const driver = {
  Albina: 'special student',
   Jerold: 'amazing student',
  Squirrel: 'unique creature'
};


function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value });
}
//but when you call it, key could be a string and if so use [''] notation.


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
	driver[key] = value; //key is a variable so use [] notation
	return driver; //dont forget to return the object
}


function deleteFromDriverByKey(driver, key){
	let newObj= Object.assign({}, driver);
	delete newObj[key];
	return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  //delete is before obj[key]
  return driver;
}

