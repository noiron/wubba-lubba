import Agent from './agent';

type IEntity = Pick<Agent, 'x' | 'y' | 'radius'>;

export function isIntersect(a: IEntity, b: IEntity) {
  const d = a.radius + b.radius;
  return Math.abs(a.x - b.x) <= d && Math.abs(a.y - b.y) <= d;
}
