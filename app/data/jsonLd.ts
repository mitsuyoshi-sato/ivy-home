export const serializeJsonLd = (data: object) =>
  JSON.stringify(data).replace(/</g, '\\u003c')
