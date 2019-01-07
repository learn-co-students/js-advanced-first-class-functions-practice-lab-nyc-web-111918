// Code your solution in this file!
function logDriverNames(drivers){
  return drivers.map(function(driver){
    console.log(driver.name);
  })
}

function logDriversByHometown(drivers, location){
  return drivers.filter(function(driver){
    if (driver.hometown === location){
      console.log(driver.name);
    }
  })
}

function driversByRevenue(drivers){
  let sortByRevenue = drivers.slice();
  return sortByRevenue.sort(function(a,b){
    return a.revenue - b.revenue;
  })
}

function driversByName(drivers){
  let sortByRevenue = drivers.slice();
  return sortByRevenue.sort(function(a,b){
    return (a.name).localeCompare(b.name);
  })
}

function totalRevenue(drivers){
  let total = 0;
  drivers.map(function(driver){
    total = total + driver.revenue
  })
  return total;
}

function averageRevenue(drivers){
  return (totalRevenue(drivers) / drivers.length)
}
