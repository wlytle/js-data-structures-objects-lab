const driver = {};

updateDriverWithKeyAndValue = (driver, key, value) => {
  return Object.assign({}, driver, { [key]: value });
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const temp = { ...driver };
  delete temp[key];
  return temp;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
