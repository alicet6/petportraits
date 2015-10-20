var packages = [{
  packageid: 0,
  name: "Package 1",
  description: "a luxury condo for your pet",
  price: 125
}, {
  packageid: 1,
  name: "Package 2",
  description: "a luxury boat for your pet",
  price: 120
}, {
  packageid: 2,
  name: "Package 3",
  description: "a luxury car for your pet",
  price: 130
}, {
  packageid: 3,
  name: "Package 4",
  description: "a luxury house for your pet",
  price: 140
}, ];

var select = document.getElementById("packages");

function update() {
  var y = this.select.value,
    desc = document.getElementById("description");
  desc.innerText = packages[y].name + " " + packages[y].description;
}

for (var x = 0; x < packages.length; x++) {
  var option = document.createElement("option");
  option.value = packages[x].packageid;
  option.innerText = packages[x].name;
  select.appendChild(option);
}
