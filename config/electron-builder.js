/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
module.exports = {
  directories: {
    output: 'dist/app',
    buildResources: 'build',
    app: 'dist/source',
  },
  win: {
    target: '7z',
  },
  linux: {
    target: '7z',
  },
};
