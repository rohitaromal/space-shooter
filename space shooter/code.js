var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["201b195c-57e8-49df-b7bc-bd6f4daf1155","29476980-1c67-4ab0-880a-fbf6ca821bb1","1bfc18b4-2d3b-4902-8a01-a401caa7e2e7","44da5b5d-66f1-4af4-8db1-130abdbb5883","79110549-4556-44a5-b41e-e44c8d9303fd","838e58e3-98cc-4d41-9185-375240c3f2a5"],"propsByKey":{"201b195c-57e8-49df-b7bc-bd6f4daf1155":{"name":"back","sourceUrl":"assets/api/v1/animation-library/gamelab/GeDUtGGrRf0BnCzfSwNnqTCYyJzrECcN/category_backgrounds/background_santa.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"GeDUtGGrRf0BnCzfSwNnqTCYyJzrECcN","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GeDUtGGrRf0BnCzfSwNnqTCYyJzrECcN/category_backgrounds/background_santa.png"},"29476980-1c67-4ab0-880a-fbf6ca821bb1":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":82,"y":84},"frameCount":1,"looping":true,"frameDelay":12,"version":"iINCB6VS6O0uqosCOVK6CtqFIZ5LT9ce","loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":84},"rootRelativePath":"assets/29476980-1c67-4ab0-880a-fbf6ca821bb1.png"},"1bfc18b4-2d3b-4902-8a01-a401caa7e2e7":{"name":"shooter","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"WypRbREh2.cPJdV5dM4VqLk4PpG1Ax5v","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/1bfc18b4-2d3b-4902-8a01-a401caa7e2e7.png"},"44da5b5d-66f1-4af4-8db1-130abdbb5883":{"name":"enemy2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"xezKu9f1e1ytkfuOdAHGRJLJv858SEKZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/44da5b5d-66f1-4af4-8db1-130abdbb5883.png"},"79110549-4556-44a5-b41e-e44c8d9303fd":{"name":"enemy3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"XeysHwEQYPFm_yrFqx9iNgepQ7M4WN0.","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/79110549-4556-44a5-b41e-e44c8d9303fd.png"},"838e58e3-98cc-4d41-9185-375240c3f2a5":{"name":"back2","sourceUrl":"assets/api/v1/animation-library/gamelab/qsn8Ge4D.d1mkoTRq2qUV3lrSTiKn_IH/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qsn8Ge4D.d1mkoTRq2qUV3lrSTiKn_IH","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qsn8Ge4D.d1mkoTRq2qUV3lrSTiKn_IH/category_backgrounds/background_space.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var back = createSprite(0,0,400,400);
back.setAnimation("back");
back.scale = 2.5;
back.y = back.y/2;

var shooter = createSprite(200, 350,20,20);
shooter.setAnimation("shooter");                       



 
  
        
  var bulletGroup = createGroup();
  var enemy1Group = createGroup();
  var enemy2Group = createGroup();
  var enemy3Group = createGroup();

    
var score = 0;


textSize(14);
textFont("Georgia");
stroke("red");
fill("orange");


function draw() {
  background(10);
 
  
 

  shooter.x = World.mouseX;
  createEdgeSprites();
  shooter.collide(bottomEdge);
  
  back.velocityY = 2;
  
  if (back.y > 500) {
    back.y = back.height/2;
  }
  
  if (keyDown("space")) {
    createBullet(shooter.x);
   playSound("assets/BULLET.mp3", false);
  }
  
  if (bulletGroup.isTouching(enemy1Group)) {
    enemy1Group.destroyEach();
    bulletGroup.destroyEach();
    score = score+1;
  } else if (bulletGroup.isTouching(enemy2Group)) {
    enemy2Group.destroyEach();
    bulletGroup.destroyEach();
        score = score+2;

  } else if  (bulletGroup.isTouching(enemy3Group)) {
    enemy3Group.destroyEach();  
    bulletGroup.destroyEach(); 
            score = score+4;

  }
  
  if (enemy1Group.isTouching(bottomEdge)) {
    score = score - 2;
  }
   if (enemy2Group.isTouching(bottomEdge)) {
    score = score - 3;
  }
  
   if (enemy3Group.isTouching(bottomEdge)) {
    score = score - 1;
  }
   var select_enemy = randomNumber(1,3);
   
   if (World.frameCount % 100 == 0) {
    if (select_enemy == 0) {
      createEnemy1();
    } else if (select_enemy == 1) {
        createEnemy2();
    
    } else {
      createEnemy3();
    }
    
  }
  
  
  drawSprites();
   text("shooter SCORE: "+ score, 267, 20);
}
  


function createEnemy1() {
  var enemy1 = createSprite(randomNumber(0, 400), 0, 10, 10);
  enemy1.setAnimation("enemy1");
 enemy1.velocityY = 0.7;
  enemy1.lifetime = 400;
  enemy1Group.add(enemy1);
}

function createEnemy2() {
  var enemy2 = createSprite(randomNumber(0, 400), 0, 10, 10);
  enemy2.setAnimation("enemy2");
  enemy2.velocityY = 0.8;
 enemy2.lifetime = 400;
  enemy2Group.add(enemy2);
}

function createEnemy3() {
  var enemy3 = createSprite(randomNumber(0, 400), 0, 10, 10);
 enemy3.setAnimation("enemy3")        ;
  enemy3.velocityY = 1.0;
  enemy3.lifetime = 400;
  enemy3Group.add(enemy3);
}

function createBullet(x) {
  var bullet= createSprite(100, 100, 5, 10);
  bullet.y = 360;
  bullet.x = x;                                           
  bullet.shapeColor = "red";
  bullet.velocityY = -1;
  bullet.lifetime = 1000;
  bulletGroup.add(bullet);
}

if (enemy1Group.isTouching(shooter)) {
  
  score = score-3;
  
}

if (enemy2Group.isTouching(shooter)) {
  
  score = score-2;
  
}
if (enemy3Group.isTouching(shooter)) {
  
  score = score-1;
  
}






// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
