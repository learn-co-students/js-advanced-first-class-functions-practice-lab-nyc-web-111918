function logDriverNames(array){
  return array.forEach(function(driver){
    console.log(driver.name);
  })
}

function logDriversByHometown(array, location){
  return array.forEach(function(driver){
    if (driver.hometown === location){
      return console.log(driver.name);
    }
  })
}

function driversByRevenue(array){
  return array.slice().sort(function(driver1, driver2){
      return driver1.revenue - driver2.revenue;
    })
}

function driversByName(array){
  return array.slice().sort(function(driver1, driver2){
    return (driver1.name).localeCompare(driver2.name);
  })
}

function totalRevenue(array){
  return array.reduce(function(totalRev, driver){
    return totalRev + driver.revenue;
  }, 0)
}

function averageRevenue(array){
    return totalRevenue(array)/array.length;
}
