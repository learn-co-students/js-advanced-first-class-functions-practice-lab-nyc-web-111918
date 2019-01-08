// Code your solution in this file!

const logDriverNames = (function(drivers){
  return drivers.forEach(function(driver){
    console.log(driver.name)
  })
})

const logDriversByHometown = function (drivers, location) {
  drivers.forEach(function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
};

const driversByRevenue = function(drivers){
  return [...drivers].sort(function(num1, num2){
     return num1.revenue - num2.revenue
  })
}

const driversByName = function(drivers){
  return [...drivers].sort(function(a, b){
      return a.name.localeCompare(b.name)
  })
}

const totalRevenue = function(drivers){
  let total = 0;
  drivers.forEach(function(rev){
    total += rev.revenue
  })
  return total
}

const averageRevenue = function(drivers){

    return totalRevenue(drivers) / drivers.length

}
