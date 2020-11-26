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

  const scope = [];

  if (argv.front) {
    scope.push('front build');
  }

  if (argv.stack) {
    scope.push('local stack');
  }

  const tasks = new Listr([
    require('../tasks/stop'),
    argv.stack && require('../tasks/cleanup-stack'),
    argv.stack && require('../tasks/provision-elasticsearch'),
    argv.stack && require('../tasks/install-minds'),
    require('../tasks/restart'),
  ].filter(Boolean), {
    renderer
  });

  await tasks.run();
};

module.exports.builder = {
  front: {
    default: true,
  },
  stack: {
    default: true,
  },
};
