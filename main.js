var bgImg = document.createElement('img');
bgImg.src = "images/map.png";

var enemyImg = document.createElement('img');
enemyImg.src = "images/slime.gif";
var enemy = {
  x: 96,
  y: 480-32
};

var towerBtnImg = document.createElement('img');
towerBtnImg.src = "images/tower-btn.png";
var towerBtn = {
  x: 540,
  y: 380,
  width: 100,
  height: 100
};

var towerImg = document.createElement('img');
towerImg.src = "images/tower.png";

var cursor = {};
$("#game-canvas").on("mousemove",function(event){
  console.log("x: " + event.offsetX + " y: " + event.offsetY);
  cursor = {
    x: event.offsetX,
    y: event.offsetY
  };
});

var canvas = document.getElementById("game-canvas");
//取得2D繪圖用的物件
var ctx = canvas.getContext("2d");

function draw() {
  ctx.drawImage(bgImg, 0, 0);
  ctx.drawImage(enemyImg, enemy.x, enemy.y);
  ctx.drawImage(towerBtnImg, towerBtn.x, towerBtn.y, towerBtn.width, towerBtn.height);
  ctx.drawImage(towerImg, cursor.x, cursor.y);
}

setInterval(draw, 16);


