const houses = [
  {
    name: "Kost Monggo Mlebet",
    address: "Jalan Kaurangan no 23 Jurangmangu",
    price: 300000,
    longitude: -6.28129,
    latitude: 106.731233,
    cover:
      "https://id2-cdn.pgimgs.com/listing/16267193/UPHO.91001965.C400X300/Rumah-Cluster-Sutera-Narada-Alam-Sutera-Tangerang-Selatan-Indonesia.jpg"
  },
  {
    name: "Kost Andrean",
    address: "Jalan Dealova no 34 Sawah Lama",
    price: 240000,
    longitude: -6.28392,
    latitude: 106.723822,
    cover:
      "https://cdn1-production-images-kly.akamaized.net/-R-MC5UiFfF97UD8h0BCAk27E0w=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/861628/original/073424800_1429960385-3.JPG"
  },
  {
    name: "Kost Ibu Dea",
    address: "Jalan Ciater Raya no 11 Ciater Raya",
    price: 120000,
    longitude: -6.28229,
    latitude: 106.722812,
    cover:
      "https://storage.jualo.com/original/13513595/rumah-kost-mewah-387-kost-dijual-13513595.jpg"
  },
  {
    name: "Kost Dor Dor",
    address: "Jalan Descute no 65 Ciater Raya",
    price: 290000,
    longitude: -6.27713,
    latitude: 106.739182,
    cover:
      "https://merahputih.com/media/f0/0e/00/f00e00aa78e4983995f4c01cb2787dea.jpg"
  },
  {
    name: "Rawabuntu Home",
    address: "Rawabuntu Cicentang RT. 5 RW. 5",
    price: 190000,
    longitude: -6.287666,
    latitude: 106.74031,
    cover:
      "https://apollo-singapore.akamaized.net/v1/files/3mpiwre5zf4x-ID/image;s=966x691;olx-st/_1_.jpg"
  },
  {
    name: "Ciledug Homebase",
    address: "Jalan Ciledug no 76 Ciledug Tangerang",
    price: 143000,
    longitude: -6.282206,
    latitude: 106.727602,
    cover:
      "https://www.simplyhomy.com/wp-content/uploads/2018/08/bisnis-kos-kosan.jpg"
  }
];

let card = document.getElementById("listhome");
console.log(card);
for (let i = 0; i < houses.length; i++) {
  card.innerHTML +=
    '<div class="col-6 mt-3"><div class="card shadow-sm" style="width: 16rem; border-radius:10px;margin: 10;"><img style="width: 255px; height: 150px; border-radius: 10px;" src="' +
    houses[i].cover +
    '" class="card-img-top" ><button="#" class="btn btn-success shadow" style="border-radius: 20px; position: absolute; padding: 5px 25px 5px 25px; margin: 126px 0px 0px 170px;">' +
    houses[i].price +
    '</button="#"><div class="card-body"><p class="card-title">' +
    houses[i].name +
    '</p><p class="card-text">' +
    houses[i].address +
    '</p><button class="btn-outline-dark" style="border-radius: 20px; font-size: 12px;" disabled>Desctray</button><button class="btn-outline-dark ml-2" style="border-radius: 20px; font-size: 12px;" disabled>34ms<sup>2</sup></button></div></div></div>';
}

var map = L.map("map").setView([-6.28129, 106.731233], 15);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: ""
}).addTo(map);

for (let i = 0; i < houses.length; i++) {
  L.marker([houses[i].longitude, houses[i].latitude])
    .addTo(map)
    .bindPopup(
      '<img class="card-img-top" style="width: 230px; height: 130px; border-radius: 10px;" src="' +
        houses[i].cover +
        '"><button="#" class="btn btn-success shadow" style="border-radius: 20px; position: absolute; padding: 5px 25px 5px 25px; margin: 294px 0px 0px -170px;">' +
        houses[i].price +
        '</button="#"><p class="card-title" id="houseName">' +
        houses[i].name +
        '</p><p class="card-text" style="font-size:20px">' +
        houses[i].address +
        '</p><button class="btn-outline-dark mb-4" style="border-radius: 20px; font-size: 12px;" disabled>Desctray</button><button class="btn-outline-dark ml-2 mb-4" style="border-radius: 20px; font-size: 12px;" disabled>34ms<sup>2</sup></button>',
      {
        maxWidth: 230
      }
    )
    .openPopup();
}
