const Mutation = {
  // TODO convert this to a login option
  createUser: async (root, args, ctx, info) => {
    const res = await ctx.db.mutation.createUser({
      data: {
        ...args,
        permissions: { set: ['ADMIN'] },
      },
    }, info);
    return res;
  },
  createThat: async (root, args, ctx, info) => {
    // TODO check user is logged in
    const res = await ctx.db.mutation.createThat({
      data: {
        ...args,
        user: {
          connect: {
            // TODO change this to ctx.request.userId later
            // this is currently hard coded as the 1 default user
            id: 'cjpme1kus7api0947y4hl8wcr'
          },
        },
      },
    }, info);
    return res;
  },
};

export default Mutation;
