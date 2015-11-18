var packages;

$().ready(function () {
   initPackages();

   $("#packages").change(function () {
       $("#description").html(packages[$(this).val()].description);


   });
});

function initPackages() {
  packages = [{
     packageid: 0,
     name: "Package 1 - $350",
     description: ["One free 16 x 20 photo of your choice, a CD of up to 35 low-resolution watermarked photos (sized appropriately for social media), and 25% off any additional A la carte products"],
     price: 350
   }, {
     packageid: 1,
     name: "Package 2 - $250",
     description: "One free 11 x 14 photo of your choice, a CD of up to 25 low-resolution watermarked photos (sized appropriately for social media), and 20% off any additional A la carte products.",
     price: 250
   }, {
     packageid: 2,
     name: "Package 3 - $125",
     description: "One free 8 x 10 photo of your choice, plus a CD of up to 10 low-resolution watermarked photos, sized appropriately for social media.",
     price: 125
   }, {
     packageid: 3,
     name: "Package 4 - A La Carte Items",
     description: "Contact me for a selection of A La Carte items such as framed prints, metal prints and gallery canvas wraps.",
     price: 140
   }, ];

   var select = this.document.getElementById("packages");

   for (var x = 0; x < packages.length; x++) {
     var option = this.document.createElement("option");
     option.value = packages[x].packageid;
     option.innerText = packages[x].name;
     select.appendChild(option);
   }
}
