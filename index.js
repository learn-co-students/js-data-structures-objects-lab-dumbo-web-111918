// Write your solution in this file!
const driver = {};

// updateDriverWithKeyAndValue()- this function should take in a driver Object, a key and a value. The function should not mutate the driver parameter and return a new driver that has an updated value for the key passed in.
function updateDriverWithKeyAndValue(obj, key, value) {
    const newObj = {...obj};
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    obj[key] = value;
   
    return obj;
}

function deleteFromDriverByKey(driver, name) {
    const newDriver = {...driver}
    delete newDriver.name;
    return newDriver;
}  

function destructivelyDeleteFromDriverByKey(driver, name) {
    driver = delete driver.name;
    return driver;
}

 