// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.forEach(function (el) {
    console.log(el.name)
  })
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function (el) {
    if (el.hometown === location) {
      console.log(el.name)
    }
  })
}

function driversByRevenue(drivers) {
  let array = [...drivers]
  return array.sort(function (driver1, driver2) {
    return (driver1.revenue - driver2.revenue)
  })
}

function driversByName(drivers) {
  let array = [...drivers]
  return array.sort(function (driver1, driver2) {
    return driver1.name.localeCompare(driver2.name)
  })
}

function totalRevenue(drivers) {
  let array = [...drivers]
  i = 0
  return array.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.revenue
  } ,i)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
