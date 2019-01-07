// Code your solution in this file!


function logDriverNames (drivers) {
  drivers.forEach(function (el, i, arr) {
    console.log(`${el.name}`)
  })
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function (el, i, arr) {
    if (el.hometown === location) {
      console.log(`${el.name}`)
    }
  })
}

function driversByRevenue (drivers) {
  let newArray = drivers.slice(0)
  newArray.sort(function (num1, num2) {
    return num1.revenue - num2.revenue
  })
  return newArray
}

function driversByName(drivers) {
  let newArray = drivers.slice(0)
  return newArray.sort(function (a, b) {
    return (a.name).localeCompare(b.name);
  })
}

function totalRevenue(drivers) {
  return drivers.reduce(function (agg, el) {
    return agg + el.revenue
  }, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length
}
