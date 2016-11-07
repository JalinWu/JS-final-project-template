var bgImg = document.createElement('img');
bgImg.src = "images/map.png";

var FPS = 60;
var enemyImg = document.createElement('img');
enemyImg.src = "images/slime.gif";
var enemy = {
  x: 96,
  y: 480-32,
  speedX: 0,
  speedY: -64,
  move: function() {
    this.x += this.speedX/FPS;
    this.y += this.speedY/FPS;
  }
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
//   console.log("x: " + event.offsetX + " y: " + event.offsetY);
  cursor = {
    x: event.offsetX,
    y: event.offsetY
  };
});

var isBuilding = false;
var tower = {};
$("#game-canvas").on("click", function(){
//   console.log("click: x: " + event.offsetX + " y: " + event.offsetY);
  if (isBuilding == false){
    isBuilding = true;
  }else{
    isBuilding = false;
    tower = {
      x: event.offsetX - event.offsetX % 32,
      y: event.offsetY - event.offsetY % 32
    };
  }
  console.log(isBuilding);
});

var canvas = document.getElementById("game-canvas");
//取得2D繪圖用的物件
var ctx = canvas.getContext("2d");

function draw() {
  ctx.drawImage(bgImg, 0, 0);
  ctx.drawImage(enemyImg, enemy.x, enemy.y);
  ctx.drawImage(towerBtnImg, towerBtn.x, towerBtn.y, towerBtn.width, towerBtn.height);
  if(isBuilding){
    ctx.drawImage(towerImg, cursor.x, cursor.y);
  }
  ctx.drawImage(towerImg, tower.x, tower.y);
  
}

setInterval(draw, 1000/FPS);


