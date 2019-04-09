/* eslint-env node, mocha */
/* eslint no-unused-expressions: "off" */

'use strict';

const expect = require('chai').expect;
const Version = require('../../lib/version');
const version = new Version();

describe('Version', () => {
  describe('getVersion', () => {
    it('should get the correct version', () => {
      expect(version.getVersion()).to.equal('0.1.0');
    });
  });
  describe('getPackageJsonPath', () => {
    it('should get the correct path', () => {
      expect(version.getPackageJsonPath().endsWith('/express-package-version/package.json')).be.true;
    });
  });
});
