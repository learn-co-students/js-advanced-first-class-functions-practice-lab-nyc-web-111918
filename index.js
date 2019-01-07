// Code your solution in this file!
function logDriverNames(drivers) {
	drivers.forEach(driver => {
		console.log(driver.name);
	});
}

function logDriversByHometown(drivers, hometown) {
	drivers.forEach(driver => {
		if (driver.hometown === hometown) {
			console.log(driver.name);
		}
	});
}


function driversByRevenue(drivers) {
  let driverSlicer = drivers.slice();
	return driverSlicer.sort((driverX, driverY) => {
    console.log(`Driver X Revenue: ${driverX.revenue},\nDriver YRevenue: ${driverY.revenue}`);
		return driverX.revenue - driverY.revenue;
	});
}

function driversByName(drivers) {
  let driverSlicer = drivers.slice();
	return driverSlicer.sort((driverX, driverY) => {
    console.log(`Driver X name: ${driverX.name},\nDriver Y name: ${driverY.name}`);
		return driverX.name.localeCompare(driverY.name);
	});
}

function totalRevenue(drivers) {
  let initialValue = 0;
  let driversRevenue = drivers.reduce(
    (acc, curVal) => acc+curVal.revenue,
    initialValue
  );
  return driversRevenue
}

function averageRevenue(drivers) {
    return (totalRevenue(drivers)/(drivers.length))
}
