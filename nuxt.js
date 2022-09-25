export default async (inlineOptions, nuxt) => {
  // You can do whatever you like here..
  console.log('@HERE - FROM NUXT FILE');
  nuxt.hook('ready', async nuxt => {
    console.log('Nuxt is ready');
  });
};
