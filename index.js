// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function(el) {
    console.log(`${el.name}`);
  });
}

function logDriversByHometown(drivers, location){
  drivers.forEach(function(el) {
    if ((el.hometown) === location) {
      console.log(`${el.name}`);
    }
  });
}

// items.sort(function (a, b) {
//   return a.value - b.value;
// });

function driversByRevenue(drivers){
  const newArr = [...drivers];
  newArr.sort(function (a, b) {
    return a.revenue - b.revenue;
  });
  return newArr;
}

function driversByName(drivers){
  const newArr = [...drivers];
  newArr.sort(function (a, b) {
    return (a.name).localeCompare(b.name);
  });
  return newArr;
}

function totalRevenue(drivers){
    return drivers.reduce(function(acc, currentValue){
      return acc + currentValue.revenue;
    }, 0);
}

function averageRevenue(drivers){
  let total = totalRevenue(drivers);
  return (total / (Object.keys(drivers).length));
}
