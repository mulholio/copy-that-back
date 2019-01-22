import { ThatCreateInput } from "../generated";

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
    // TODO handle tag - check exists, create if not
    // TODO handle skill - check exists, create if not
    // TODO validate url
    // TODO delete this args console log
    console.log('args: ===============================================', args);

    interface NameJoin { name: string }
    interface PartialData {
      connect?: NameJoin[];
      create?: NameJoin[];
    }

    async function getDataForItems(itemType: string): Promise<PartialData | []> {
      // return empty array if there are no items provided
      if(args[itemType].length === 0) {
        return {}
      };

      // get all the items that already exist
      const existingItems = await ctx.db.query[itemType]({
        where: {
          OR: args[itemType].map(item => (
            { name: item }
          )),
        },
      });
      console.log('existingItems: ', existingItems);

      const existingItemNames: string[] = existingItems
        .map(({ name }) => name);

      const isNotInExistingItemNames = name =>
        (existingItemNames.findIndex(element => element === name) === -1);

      const nonExistingItemNames: string[] = args[itemType]
        .filter(isNotInExistingItemNames);
      console.log(`${itemType} args: `, args[itemType])
      console.log(`existing ${itemType}s: `, existingItemNames);
      console.log(`non-existing ${itemType}s: `, nonExistingItemNames);

      const nameObjects = (names: string[]): NameJoin[] =>
        names.map(name => ({ name }));

      // connect existing items, create non-existing ones
      return {
        ...(existingItemNames.length > 0 && {
          connect: nameObjects(existingItemNames)
        }),
        ...(nonExistingItemNames.length > 0 && {
          create: nameObjects(nonExistingItemNames)
        }),
      };
    }
    const tags = await getDataForItems('tags');
    const skills = await getDataForItems('skills');

    const data: ThatCreateInput = {
      ...args,
      tags,
      skills,
      // TODO change this to ctx.request.userId later
      // this is currently hard coded as the 1 default user
      user: { connect: { id: 'cjpme1kus7api0947y4hl8wcr' } },
    };
    const that = await ctx.db.mutation.createThat({ data }, info );
    console.log('that', that);
    return that;
  },
};

export default Mutation;
