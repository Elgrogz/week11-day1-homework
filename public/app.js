var catArray = [{name: "Boba", favFood: "Sock Fluff", image: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"}, {name: "Barnaby", favFood: "Tuna", image: "http://65.media.tumblr.com/8a827e13ebb5db7d16e2b1c4cbe7ce70/tumblr_odtp4ftIhB1uhevdso1_400.jpg"}, {name: "Max", favFood: "Whiskas Tempations", image: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"}];


var createCatProfile = function() {
  var catProfile = document.createElement('ul');
  catProfile.classList.add('cat');
  return catProfile;
}

var createCatName = function(name) {
  var catName = document.createElement('li');
  catName.innerText = name;
  return catName;
}

var createCatFavFood = function(favFood) {
  var catFavFood = document.createElement('li');
  catFavFood.innerText = favFood;
  return catFavFood;
}

// var createCatImage = function(imageSource) {
//   var catImage = document.createElement('img');
//   catImage.innerText = imageSource;
//   return catImage;
// }

var appendElements = function(cats, catProfile, catName, catFavFood) {
  catProfile.appendChild(catName);
  catProfile.appendChild(catFavFood);
  // catProfile.appendChild(catImage);
  cats.appendChild(catProfile);
}

var addCat = function(name, favFood) {
  var catProfile = createCatProfile();
  var catName = createCatName(name);
  var catFavFood = createCatFavFood(favFood);
  // var catImage = createCatImage(imageSource);
  var cats = document.getElementById('cats');
  appendElements(cats, catProfile, catName, catFavFood);
} 

var app = function() {
  for (var cat of catArray) {
    addCat(cat.name, cat.favFood)
  }
}

window.onload = app;