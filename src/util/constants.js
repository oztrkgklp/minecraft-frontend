// Exports the default constants for the API.
const constants = {

  API_DOMAIN: process.env.API_DOMAIN,
  APP_DOMAIN: process.env.APP_DOMAIN,

  // Product types
  PRODUCT_TYPES : {
      VIP: 0,
      COSMETIC: 1,
      MARKET: 2,
      RV:3
  },

  HEADER: {
    AUTHENTICATION: 'x-auth'
  },

  ERRORS: {
    UNKNOWN: 'Bilinmeyen hata'
  }

};
export default constants;
