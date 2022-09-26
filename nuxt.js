import { join } from 'path';
import { defineNuxtModule, addComponentsDir, installModule } from '@nuxt/kit';

export default defineNuxtModule({
  async setup(moduleOptions, nuxt) {
    await addComponentsDir({
      path: join(__dirname, 'src/components'),
      prefix: '',
      extensions: ['vue']
    });

    await installModule('@nuxtjs/tailwindcss')
  }
});

// export default (inlineOptions, nuxt) => {
//   // await installModule('@nuxt/postcss8')

//   nuxt.hook('components:dirs', dirs => {
//     dirs.push({
//       path: join(__dirname, 'src/components'),
//       prefix: '',
//       extensions: ['vue']
//     });
//   });
// };
