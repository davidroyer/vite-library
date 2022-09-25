import { join } from 'path';

export default (inlineOptions, nuxt) => {
  nuxt.hook('components:dirs', dirs => {
    dirs.push({
      path: join(__dirname, 'src/components'),
      prefix: '',
      extensions: ['vue']
    });
  });
};
