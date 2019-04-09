'use strict';

const path = require('path');

class Version {
  getVersion() {
    const packageJson = require(this.getPackageJsonPath());
    return packageJson.version;
  }
  getPackageJsonPath() {
    const directory = process.cwd();
    return path.join(directory, 'package.json');
  }
}

module.exports = Version;
