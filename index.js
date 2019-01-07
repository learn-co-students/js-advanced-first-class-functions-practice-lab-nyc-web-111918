// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function(element) {
    console.log(element.name);
  });
};
function logDriversByHometown(drivers, hometown){
  drivers.filter(driver => driver.hometown === hometown).forEach(function(driver){
    console.log(driver.name)
  })
}

function driversByRevenue(drivers){
  return drivers.slice().sort(function(a,b){
     return a.revenue - b.revenue
  })
};

function driversByName(drivers){
  return drivers.slice().sort(function(a,b){
    let nameA = a.name
    let nameB = b.name
    if(nameA < nameB){
      return -1;
    } else if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
};

function totalRevenue(drivers){
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return drivers.map(function(driver){
    return driver.revenue}).reduce(reducer)
}

function averageRevenue(drivers){
  return totalRevenue(drivers)/drivers.length
}
