import { forwardTo } from 'prisma-binding';

const Query = {
  users: (root, args, ctx, info) =>
    ctx.db.query.users({}, info),
  thats: (root, args, ctx, info) =>
    ctx.db.query.thats({}, info),
  that: forwardTo('db'),
};

export default Query;
