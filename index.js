// Write your solution in this file!

const driver = {};

function updateDriverWithKeyAndValue(obj, k, v) {
  return Object.assign({}, obj, {[k] : v});
}

function destructivelyUpdateDriverWithKeyAndValue(obj, k, v) {
  return Object.assign(obj, {[k]: v})
}

function deleteFromDriverByKey(obj, key) {
  return delete Object.assign({}, obj).key;
}

function destructivelyDeleteFromDriverByKey(obj, key) {
  return delete obj[key]
}
