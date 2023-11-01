title = "[OneButton]";

description = `A one button game.
`;

characters = [
  `
  bbbb
 bBBBBb
 bBBBBb
 bBBBBb
 bBBBBb
  bbbb
 `,
];

options = {
  viewSize: { x: 100, y: 100 },
};

let circleX;
let circleY;
let lineAngle = 0;
let lineLength = 50;
let canvas;
let ballX;
let ballY;
let ballVelX = 0;
let ballVelY = 0;
let gravity = 0;
let enemyStoneAngle;
let enemyStoneSpeed;
let enemyStoneSpeedVel;
let enemyStoneAngleVel;
let stoneSpeed;
let stoneAngle;
let stoneCount;
// Walls
let Wall_left;
let Wall_right;
let Wall_top;
let Wall_bottom;
let colorTimer =0;
const colorInterval = 10;

const centerPos = vec(50, 50);

function update() {
  if (!ticks) {
    canvas = document.querySelector('canvas');
    ballX = 50;
    ballY = 50;
    enemyStoneAngle = PI / 2;
    enemyStoneSpeed = 1;
    enemyStoneAngleVel = 1;
    stoneSpeed = 1;
    stoneAngle = PI / 2;
    enemyStoneSpeedVel = 1;
  }

  let lineX = circleX + Math.cos(lineAngle) * lineLength;
  let lineY = circleY + Math.sin(lineAngle) * lineLength;

  Wall_left = rect(0, 0, 5, 150);
  Wall_right = rect(95, 0, 5, 150);
  Wall_top = rect(0, 0, 95, 5);
  Wall_bottom = rect(0, 95, 95, 5);
  color("purple");
  rect(10, 119, 80, 1);

  // Update the ball's position
  ballX += ballVelX;
  ballY += ballVelY;

  // Apply gravity to the ball's velocity
  ballVelY += gravity;

// Left wall collision
if (ballX < 5) {
  ballX = 50;
  ballVelX = 0; // Stop the ball's horizontal velocity
  ballY = 50;   // Reset the ball's position to the center vertically
}

// Right wall collision
if (ballX > 95) {
  ballX = 50;
  ballVelX = 0; // Stop the ball's horizontal velocity
  ballY = 50;   // Reset the ball's position to the center vertically
}

// Top wall collision
if (ballY < 5) {
  ballY = 50;
  ballVelY = 0; // Stop the ball's vertical velocity
  ballX = 50;   // Reset the ball's position to the center horizontally
}

// Bottom wall collision
if (ballY > 95) {
  ballY = 50;
  ballVelY = 0; // Stop the ball's vertical velocity
  ballX = 50;   // Reset the ball's position to the center horizontally
}

  if (input.isJustPressed) {
    // Calculate the new velocity based on the bar's angle
    const shootSpeed = 5; // Adjust the shooting speed
    ballVelX = Math.cos(enemyStoneAngle) * shootSpeed;
    ballVelY = Math.sin(enemyStoneAngle) * shootSpeed;
  }

  // Draw the ball at its updated position
  box(ballX, ballY, 3 , 3);

  enemyStoneAngle += enemyStoneAngleVel * 0.03 * 1;

  bar(50, 50, enemyStoneSpeed * 7, 2, enemyStoneAngle, 0);
  
}
