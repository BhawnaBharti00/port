const stage = new createjs.Stage("demoCanvas");

// Load images
const purpleCat = new createjs.Bitmap("c.png");
const whiteDog = new createjs.Bitmap("d.png");

// Scale and position
purpleCat.scaleX = purpleCat.scaleY = 0.4;
whiteDog.scaleX = whiteDog.scaleY = 0.4;

purpleCat.x = 50;
purpleCat.y = 100;

whiteDog.x = 220;
whiteDog.y = 100;

// Add interactivity
purpleCat.cursor = "pointer";
whiteDog.cursor = "pointer";

purpleCat.addEventListener("click", () => {
  createjs.Tween.get(purpleCat)
    .to({ y: purpleCat.y - 30 }, 200, createjs.Ease.bounceOut)
    .to({ y: purpleCat.y }, 200, createjs.Ease.bounceOut);
});

whiteDog.addEventListener("click", () => {
  createjs.Tween.get(whiteDog)
    .to({ rotation: 360 }, 500)
    .call(() => (whiteDog.rotation = 0));
});

// Bounce-in intro
purpleCat.y += 100;
whiteDog.y += 100;

createjs.Tween.get(purpleCat).to({ y: 100 }, 700, createjs.Ease.bounceOut);
createjs.Tween.get(whiteDog).to({ y: 100 }, 900, createjs.Ease.bounceOut);

// Add to stage
stage.addChild(purpleCat, whiteDog);
createjs.Ticker.framerate = 60;
createjs.Ticker.addEventListener("tick", stage);
