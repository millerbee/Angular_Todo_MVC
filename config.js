exports.config = {
  framework: 'jasmine',
   allScriptsTimeout: 50000,
   useAllAngular2AppRoots: true,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js']
};