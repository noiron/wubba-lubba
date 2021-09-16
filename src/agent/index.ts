import { HEIGHT, WIDTH } from '../constants';

interface IAgent {
  name: number;
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
}

class Agent implements IAgent {
  // 基本信息
  name: number;
  // 位置信息
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;

  constructor({ name, x, y, radius, vx, vy }: IAgent) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.vx = vx;
    this.vy = vy;
  }

  step(agents: Agent[]) {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x + this.radius > WIDTH || this.x < this.radius) {
      this.vx = -this.vx;
    }
    if (this.y + this.radius > HEIGHT || this.y < this.radius) {
      this.vy = -this.vy;
    }

    // 检查 agent 之间是否有碰撞
    for (let agent of agents) {
      const d = dist(this, agent);
      if (this !== agent && d + 1 < this.radius + agent.radius) {
        this.vx = -this.vx;
        this.vy = -this.vy;
        break;
      }
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 360);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.font = '16px Arial';
    ctx.fillText(this.name, this.x - 5, this.y - this.radius);
  }
}

export default Agent;

function dist(agent1: Agent, agent2: Agent) {
  const dx = agent1.x - agent2.x;
  const dy = agent1.y - agent2.y;
  return Math.sqrt(dx * dx + dy * dy);
}
