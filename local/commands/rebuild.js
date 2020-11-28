const Listr = require('listr');

module.exports.handler = async argv => {
  let renderer = 'default';

  if (argv.verbose) {
    renderer = 'verbose';
  } else if (argv.silent) {
    renderer = 'silent'
  }

  const tasks = new Listr([
    require('../tasks/build-containers'),
    require('../tasks/build-front'),
  ], {
    renderer
  });

  await tasks.run();
};

module.exports.builder = {};
