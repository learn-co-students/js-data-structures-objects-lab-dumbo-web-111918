const driver = {}

function updateDriverWithKeyAndValue(obj,key,value){
  return Object.assign({}, obj, {[key]: value})
};

function destructivelyUpdateDriverWithKeyAndValue(obj,key,value){
  return Object.assign(driver,obj,{[key] : value})
};

function deleteFromDriverByKey(obj,key){
  return delete driver.key
}

function destructivelyDeleteFromDriverByKey(obj,key){
  return delete obj[key]
};


// function destructivelyUpdateObject (obj, key, value) {
//   obj[key] = value;
//
//   return obj;
