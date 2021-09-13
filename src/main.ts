import Agent from './agent';
import { HEIGHT, WIDTH } from './constants';
import './style.css';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
canvas.width = WIDTH;
canvas.height = HEIGHT;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

const agents: Agent[] = [];

agents.push(
  new Agent({
    name: '1',
    x: 100,
    y: 100,
    radius: 20,
    vx: 5,
    vy: 5,
  }),
  new Agent({
    name: '2',
    x: 200,
    y: 200,
    radius: 30,
    vx: 2,
    vy: 2,
  }),
  new Agent({
    name: '3',
    x: 250,
    y: 250,
    radius: 30,
    vx: 3,
    vy: 2,
  })
);

function step() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let agent of agents) {
    agent.step(agents);
    agent.draw(ctx);
  }

  window.requestAnimationFrame(step);
}

requestAnimationFrame(step);
