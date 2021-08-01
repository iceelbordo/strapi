module.exports = {
  query: `
    meetsCount(where: JSON): Int!
  `,
  resolver: {
    Query: {
      meetsCount: {
        description: 'Return the count of meets',
        resolverOf: 'application::meet.meet.count',
        resolver: async (obj, options, ctx) => {
          return await strapi.api.meet.services.meet.count(options.where || {});
        },
      },
    },
  },
};
