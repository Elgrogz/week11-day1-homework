var catArray = [{name: "Boba", favFood: "Sock Fluff", image: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"}, {name: "Barnaby", favFood: "Tuna", image: "https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg"}, {name: "Max", favFood: "'Whiskas Tempations'", image: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"}];



var Cat = function(name, favFood, imageSource) {
  this.name = name;
  this.favFood = favFood;
  this.imageSource = imageSource;
}

var addCatToArray = function(cat) {
  catArray.push(cat); 
}

var createLine = function(text) {
  var catLine = document.createElement('li');
  catLine.innerText = text;
  return catLine;
}

var createCatProfile = function() {
  var catProfile = document.createElement('ul');
  catProfile.classList.add('cat');
  return catProfile;
}

var createCatName = function(name) {
  return createLine("Name: " + name);
}

var createCatFavFood = function(favFood) {
  return createLine("Favourite Food: " + favFood);
}

var createCatImage = function(imageSource) {
  var catImage = document.createElement('img');
  catImage.src = imageSource;
  catImage.width = "400";
  return catImage;
}

var appendElements = function(cats, catProfile, catName, catFavFood, catImage) {
  catProfile.appendChild(catName);
  catProfile.appendChild(catFavFood);
  catProfile.appendChild(catImage);
  cats.appendChild(catProfile);
}

var addCat = function(name, favFood, imageSource) {
  var catProfile = createCatProfile();
  var catName = createCatName(name);
  var catFavFood = createCatFavFood(favFood);
  var catImage = createCatImage(imageSource);
  var cats = document.getElementById('cats');
  appendElements(cats, catProfile, catName, catFavFood, catImage);
} 

var app = function() {
  for (var cat of catArray) {
    addCat(cat.name, cat.favFood, cat.image)
  }
}

window.onload = app;