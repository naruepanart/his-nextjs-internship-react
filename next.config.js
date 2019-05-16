const withPlugins = require('next-compose-plugins');
const withImages = require('next-images')
const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts');

module.exports = withPlugins([
  [withImages],
  [withCSS],
  [withFonts],
]);