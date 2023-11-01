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
let ball;

function update() {
  if (!ticks) {
     canvas = document.querySelector('canvas');
     ball = canvas.getContext('2d');
  }
  ball.fillStyle = 'black';
  ball.beginPath();
  ball.arc(50, 50, 3, 0, 2 * Math.PI);
  ball.fill();
  let lineX = circleX + Math.cos(lineAngle) * lineLength;
  let lineY = circleY + Math.sin(lineAngle) * lineLength;

  
  color("red");
  circleX(circleX, circleY, 30);

  color("black");
  line(circleX, circleY, lineX, lineY);
  lineAngle += 0.02;
}
