const Query = {
  users: (root, args, ctx, info) =>
    ctx.db.query.users({}, info),
};

export default Query;
