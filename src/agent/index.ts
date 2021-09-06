import { HEIGHT, WIDTH } from '../constants';

interface IAgent {
  name: string;
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
}

class Agent implements IAgent {
  // 基本信息
  name: string;
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

  step() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x + this.radius > WIDTH || this.x < this.radius) {
      this.vx = -this.vx;
    }
    if (this.y + this.radius > HEIGHT || this.y < this.radius) {
      this.vy = -this.vy;
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
