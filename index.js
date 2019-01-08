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

// function getSum(total, driver){
//   return total+driver.revenue;
// }

function totalRevenue(drivers){
  let reduced = drivers.reduce(function(acc, curr){
    return (acc + curr.revenue);
  }, 0);
  return reduced;
}

function averageRevenue(drivers){
  return (totalRevenue(drivers)/drivers.length);
}
