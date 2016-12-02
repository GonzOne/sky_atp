# sky_atp
Juniper SKYATP API Test App
## Dependencies
- node & npm - http://nodejs.org/download/
  - gulp: `npm install --global gulp` - http://gulpjs.com/
  - bower: `npm install --global bower` - http://bower.io
  
## Use Gulp tasks

* `gulp` or `gulp build` to build an optimized version of your application in `/dist`
* `gulp serve` to launch a browser sync server on your source files
* `gulp serve:dist` to launch a server on your optimized application
* `gulp test` to launch your unit tests with Karma
* `gulp test:auto` to launch your unit tests with Karma in watch mode
* `gulp protractor` to launch your e2e tests with Protractor
* `gulp protractor:dist` to launch your e2e tests with Protractor on the dist files

##Code base
```bash
# Install into a directory
git clone https://github.com/GonzOne/sky_atp.git
npm install # install node packages
bower install # install bower packages
gulp serve # to launch a browser sync server on your source files
