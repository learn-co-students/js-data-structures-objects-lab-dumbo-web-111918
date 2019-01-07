// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue (driver, key, value) {
    return Object.assign({}, driver, { [key]: value });

}

//updateDriverWithKeyAndValue(driver, "name", "jaime")
//output { name: 'jaime' }

function destructivelyUpdateDriverWithKeyAndValue (driver, key, value) {
     driver[key] = value;
     return driver;
    //forcibly reassigns and mutates the original object
}

function deleteFromDriverByKey (driver, key) {
    //create copy of the new object
    const newObj = Object.assign({}, driver)
    //delete the key in the new obj copy
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromDriverByKey (driver, key) {
    delete driver[key];
    return driver;
}