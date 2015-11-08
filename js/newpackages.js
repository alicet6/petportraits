



var package1 = [
   "One free 16 x 20 photo of your choice",
   "A CD of up to 35 low-resolution watermarked photos, sized appropriately for social media",
   "25% off any additional A la carte products"
];

var html = "";
for (var i =0; i < package1.length; i++) {
    html += "<li>" + package1[i]+ "</li>";
}

document.getElementById("package1").innerHTML = html;

var package2 = [
   "One free 11 x 14 photo of your choice",
   "A CD of up to 25 low-resolution watermarked photos, sized appropriately for social media",
   "20% off any additional A la carte products",
];

var html = "";
for (var i =0; i < package2.length; i++) {
    html += "<li>" + package2[i]+ "</li>";
}

document.getElementById("package2").innerHTML = html;

var package3 = [
   "One free 8 x 10 photo of your choice",
   "A CD of up to 10 low-resolution watermarked photos, sized appropriately for social media",
];

var html = "";
for (var i =0; i < package3.length; i++) {
    html += "<li>" + package3[i]+ "</li>";
}

document.getElementById("package3").innerHTML = html;

var package4 = [
   "Session fee: $175",
   "A la carte items here"
];

var html = "";
for (var i =0; i < package4.length; i++) {
    html += "<li>" + package4[i]+ "</li>";
}

document.getElementById("package4").innerHTML = html;
