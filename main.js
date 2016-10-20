var bgImg = document.createElement('img');
bgImg.src = "images/map.png";

var canvas = document.getElementById("game-canvas");
//取得2D繪圖用的物件
var ctx = canvas.getContext("2d");

var enemyImg = document.createElement('img');
enemyImg.src = "images/slime.gif";
var enemy = {
  x: 96,
  y: 480-32
};

function draw() {
  ctx.drawImage(bgImg, 0, 0);
  ctx.drawImage(enemyImg, enemy.x, enemy.y);
}

setTimeout(draw, 1000);
