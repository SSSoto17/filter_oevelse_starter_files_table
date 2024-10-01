const vehicles = [
  {
    type: "Bus",
    fuel: "Diesel",
    passengers: 45,
    stops: ["Nørrebrogade", "Elmegade"],
  },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 0,
    ownedBy: "Jonas",
    isElectric: true,
  },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 2,
    ownedBy: "Vingegård",
    isTandem: true,
  },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");

function isVehicleElectric(vehicle) {
  if (vehicle.isElectric) {
    return true;
  }
}
function vehicleSeats(vehicle) {
  if (vehicle.passengers > 2) {
    return true;
  }
}
function vehicleOwnedBy(vehicle) {
  if ((vehicle.ownedBy === "Jonas") & vehicle.isElectric) {
    return true;
  }
}
function vehicleFueledBy(vehicle) {
  if ((vehicle.fuel === "Rugbrød") & (vehicle.passengers > 1)) {
    return true;
  }
}

const allElectricVehicles = vehicles.filter(isVehicleElectric);
const seatsAboveTwo = vehicles.filter(vehicleSeats);
const ownedByJonas = vehicles.filter(vehicleOwnedBy);
const fueledByRye = vehicles.filter(vehicleFueledBy);

showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${ifUndefined(each.type)}</td>
  <td>${ifUndefined(each.fuel)}</td>
  <td>${ifUndefined(each.passengers)}</td>
  <td>${ifUndefined(each.stops)}</td>
  <td>${ifUndefined(each.ownedBy)}</td>
  <td>${ifUndefined(each.isElectric)}</td>
  <td>${ifUndefined(each.isTandem)}</td>
</tr>`;
  });
}

function ifUndefined(item) {
  if (item) {
    return item;
  } else {
    return "";
  }
}

const btnAll = document.getElementById("all-vehicles");
const btnElectric = document.getElementById("is-electric");
const btnSeats = document.getElementById("above-two-seats");
const btnJonas = document.getElementById("owned-by-Jonas");
const btnFuel = document.getElementById("fueled-by-rye");

btnAll.addEventListener("click", () => {
  showTheseVehicles(vehicles);
});

btnElectric.addEventListener("click", () => {
  showTheseVehicles(allElectricVehicles);
});
btnSeats.addEventListener("click", () => {
  showTheseVehicles(seatsAboveTwo);
});
btnJonas.addEventListener("click", () => {
  showTheseVehicles(ownedByJonas);
});
btnFuel.addEventListener("click", () => {
  showTheseVehicles(fueledByRye);
});
