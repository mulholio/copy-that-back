const Mutation = {
  createUser: async (root, args, ctx, info) => {
    const res = await ctx.db.mutation.createUser({
        data: { name: args.name }
    }, info);
    return res;
  }
};

export default Mutation;
