const Query = {
  users: (root, args, ctx, info) =>
    ctx.db.query.users({}, info),
  thats: (root, args, ctx, info) =>
    ctx.db.query.thats({}, info),
};

export default Query;
