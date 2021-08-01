'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    // Called before an entry is created
    async beforeCreate(data) {
      data.audio.metadata = await strapi.services.sermon.fetchMetadataFromURL(data.audio.url);
    },
    // Called before an entry is updated
    async beforeUpdate(params, data) {
      if (data.audio !== undefined) {
        data.audio.metadata = await strapi.services.sermon.fetchMetadataFromURL(data.audio.url);
      }
    }
  },
};
