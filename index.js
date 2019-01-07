// Code your solution in this file!
function logDriverNames (drivers) {
  drivers.forEach(function(el)  {
    console.log(el.name);
  });
}

function logDriversByHometown (drivers, location) {
  driverMatches = drivers.filter(function(driver) {return driver.hometown === location})
  logDriverNames(driverMatches)
}

function driversByRevenue (drivers) {
  return drivers.slice().sort(function (a, b) {
    return a.revenue - b.revenue
  })
}

function driversByName (drivers) {
  return drivers.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name)
  });
}

function totalRevenue (drivers) {
  let initialValue = 0;
  return drivers.reduce(function (a, b) {
    return a + b.revenue
  }, initialValue)
}

function averageRevenue (drivers) {
  return totalRevenue(drivers) / drivers.length
}
