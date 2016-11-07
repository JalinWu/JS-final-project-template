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
  pathDes: 0,
  move: function(){
        if( isCollided(enemyPath[this.pathDes].x, enemyPath[this.pathDes].y, this.x, this.y, 64/FPS, 64/FPS) ){

            // 首先，修正位置到目標路徑點
            this.x = enemyPath[this.pathDes].x;
            this.y = enemyPath[this.pathDes].y;

            // 指定下一個路徑點為目標路徑點
            this.pathDes++;

            // 重新設定設定前往目標路徑點的所需的水平/垂直速度
            if (enemyPath[this.pathDes].x>this.x) {
              this.speedX = 64;
              this.speedY = 0;
            } else if (enemyPath[this.pathDes].x<this.x) {
              this.speedX = -64;
              this.speedY = 0;
            } else if (enemyPath[this.pathDes].y>this.y) {
              this.speedX = 0;
              this.speedY = 64;
            } else if (enemyPath[this.pathDes].y<this.y) {
              this.speedX = 0;
              this.speedY = -64;
            }

        } else {
            this.x = this.x + this.speedX/FPS;
            this.y = this.y + this.speedY/FPS;
        }
    }
};

var enemyPath = [
    {x:96, y:64},
    {x:384, y:64},
    {x:384, y:192},
    {x:224, y:192},
    {x:224, y:320},
    {x:544, y:320},
    {x:544, y:96}
];

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
  
  enemy.move();
  
  ctx.drawImage(bgImg, 0, 0);
  ctx.drawImage(enemyImg, enemy.x, enemy.y);
  ctx.drawImage(towerBtnImg, towerBtn.x, towerBtn.y, towerBtn.width, towerBtn.height);
  if(isBuilding){
    ctx.drawImage(towerImg, cursor.x, cursor.y);
  }
  ctx.drawImage(towerImg, tower.x, tower.y);
  
}

setInterval(draw, 1000/FPS);

function isCollided(pointX, pointY, targetX, targetY, targetWidth, targetHeight) {
    if(     pointX >= targetX
        &&  pointX <= targetX + targetWidth
        &&  pointY >= targetY
        &&  pointY <= targetY + targetHeight
    ){
        return true;
    } else {
        return false;
    }
}
