import Agent from './agent';
import { HEIGHT, WIDTH } from './constants';
import './style.css';

const firstAgent = new Agent({
  name: '1',
  x: 100,
  y: 100,
  radius: 20,
  vx: 10,
  vy: 10,
});
const canvas = document.getElementById('canvas') as HTMLCanvasElement;
canvas.width = WIDTH;
canvas.height = HEIGHT;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

function step() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  firstAgent.step();
  firstAgent.draw(ctx);
  window.requestAnimationFrame(step);
}

requestAnimationFrame(step);
