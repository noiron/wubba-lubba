import Agent from './agent';
import { random } from 'lodash';
import { HEIGHT, WIDTH } from './constants';
import './style.css';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
canvas.width = WIDTH;
canvas.height = HEIGHT;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

let currentId = 1;
const agents: Agent[] = [];

agents.push(
  new Agent({
    name: currentId++,
    x: 100,
    y: 100,
    radius: 20,
    vx: 5,
    vy: 5,
  }),
  new Agent({
    name: currentId++,
    x: 200,
    y: 200,
    radius: 30,
    vx: 2,
    vy: 2,
  }),
  new Agent({
    name: currentId++,
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

// 随机添加元素
canvas.addEventListener('click', function (e) {
  // 减去 canvas 自身的位置
  // rect 和 clientX/Y 都是相对于 window 取值
  const rect = canvas.getBoundingClientRect();
  const styles = getComputedStyle(canvas);

  const x = e.clientX - rect.x - parseInt(styles.borderLeftWidth);
  const y = e.clientY - rect.y - parseInt(styles.borderTopWidth);
  addAgent(x, y);
});

function addAgent(x: number, y: number) {
  const radius = random(5, 30);

  // 确保不会和其他 agent 相接触
  for (let i = 0; i < agents.length; i++) {
    const agent = agents[i];
    const minDist = agent.radius + radius;
    if (Math.abs(agent.x - x) <= minDist && Math.abs(agent.y - y) <= minDist) {
      return;
    }
  }

  agents.push(
    new Agent({
      name: currentId++,
      x,
      y,
      radius,
      vx: random(0, 5),
      vy: random(0, 5),
    })
  );
}

// TODO: 整体的速度可通过一个拖动控件来控制


console.log('test.');
