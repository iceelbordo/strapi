'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

 const { makeTokenizer } = require('@tokenizer/http');
 const { parseFromTokenizer } = require('music-metadata');

module.exports = {
  fetchMetadataFromURL: async (audioTrackUrl) => {
    try {
      const httpTokenizer = await makeTokenizer(audioTrackUrl);
      const { format } = await parseFromTokenizer(httpTokenizer);
      return format
    } catch(err) {
      console.log(err);
      return {
        status: 'error',
        message: err.message
      };
    }
  },
};
