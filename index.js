// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name)
  });
};

function logDriversByHometown(drivers, location){
  const drive = drivers.filter(function(driver){
    return driver.hometown === location
  });

  drive.forEach(function(driver){
    console.log(driver.name);
  });
};

function driversByRevenue(drivers){
  const driverSorter = function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  };

  return drivers.slice(0).sort(driverSorter)
};

function driversByName(drivers){
  const comparator = function (driver1, driver2) {
    return driver1.name.localeCompare(driver2.name);
  };
  return drivers.slice(0).sort(comparator)
};

function totalRevenue(drivers){
  return drivers.reduce(function(total, driver){
    return driver.revenue + total;
  },0);
};

function averageRevenue(drivers){
  return totalRevenue(drivers) / drivers.length
}
