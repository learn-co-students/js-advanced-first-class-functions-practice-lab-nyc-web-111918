// Code your solution in this file!
const logDriverNames = function(arrayOfDrivers) {
  arrayOfDrivers.forEach(function(driver){
    console.log(driver.name);
  });
}
const logDriversByHometown = function(drivers, location) {
  drivers.forEach(function(driver){
    if (driver.hometown === location) {
      console.log(driver.name)
    }
  });
}

const driversByRevenue = function(driversArr){
  return [...driversArr].sort(function(a, b){
    return a.revenue - b.revenue;
  });
}

const driversByName = function(driversArr) {
  return driversArr.slice().sort(function(d1, d2) {
    return d1.name.localeCompare(d2.name);
  });
}

const totalRevenue = function(driversArr) {
  return driversArr.reduce(function(acc, driver) {
    return acc + driver.revenue;
  }, 0);
}

const averageRevenue = function(driversArr) {
   return totalRevenue(driversArr) / driversArr.length;
}
