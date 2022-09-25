import { join } from "path";

export default (inlineOptions, nuxt) => {
  // You can do whatever you like here..
  console.log('@HERE2 - FROM NUXT FILE');

  nuxt.hook('components:dirs', dirs => {
    dirs.push({
      path: join(__dirname, 'src/components'),
      prefix: '',
      extensions: ['vue']
    });
  });
};
