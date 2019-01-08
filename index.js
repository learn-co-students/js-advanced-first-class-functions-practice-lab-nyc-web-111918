// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, home){
  drivers.filter(function(driver){
    if (driver.hometown == home ){
      console.log(driver.name);
    }
  });
}

function driversByRevenue(drivers){
  return drivers.map(function(driver){ return driver }).sort(function (a,b){
    return a.revenue-b.revenue;
  });
}

function driversByName(drivers){
  return drivers.concat().sort(function(a,b){
    return a.name.localeCompare(b.name);
  })
  return test;
}

function getSum(total, driver){
  return total+driver.revenue;
}

function totalRevenue(drivers){
  return drivers.reduce(getSum, 0);
}
function averageRevenue(drivers){
  return drivers.reduce(getSum, 0)/drivers.length;
}
