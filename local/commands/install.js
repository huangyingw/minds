const Listr = require('listr');
const prompts = require('prompts');

module.exports.handler = async argv => {
  let renderer = 'default';

  if (argv.verbose) {
    renderer = 'verbose';
  } else if (argv.silent) {
    renderer = 'silent'
  }

  if (process.platform === 'win32') {
    console.log('\nWARNING: Close any tool that might be watching Minds folder (e.g. VSCode, TortoiseGit, etc.)\n');
  }

  const tasks = new Listr([
    require('../tasks/stop'),
    require('../tasks/cleanup'),
    require('../tasks/build-front'),
    require('../tasks/provision-elasticsearch'),
    require('../tasks/install-minds'),
    require('../tasks/restart'),
  ], {
    renderer
  });

  await tasks.run();
};

module.exports.builder = {};
