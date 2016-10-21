var bgImg = document.createElement('img');
bgImg.src = "images/map.png";

var enemyImg = document.createElement('img');
enemyImg.src = "images/slime.gif";
var enemy = {
  x: 96,
  y: 480-32
};

var towerImg = document.createElement('img');
towerImg.src = "images/tower-btn.png";
var tower = {
  x: 120,
  y: 120
};

var canvas = document.getElementById("game-canvas");
//取得2D繪圖用的物件
var ctx = canvas.getContext("2d");

function draw() {
  ctx.drawImage(bgImg, 0, 0);
  ctx.drawImage(enemyImg, enemy.x, enemy.y);
  ctx.drawImage(towerImg, tower.x, tower.y);
}

setInterval(draw, 16);
