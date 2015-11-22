module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jspm', 'jasmine', 'jasmine-matchers'],
    plugins: [ 'karma-jspm', 'karma-jasmine', 'karma-chrome-launcher', 'karma-phantomjs-launcher', 'karma-jasmine-matchers' ],

    files: [
      {pattern: 'jspm_packages/system.src.js', included: true, watched: false},
      {pattern: 'jspm_packages/npm/angular2@2.0.0-alpha.45/bundles/testing.js', included: true, watched: false},
      //{pattern: 'jspm_packages/npm/angular2@2.0.0-alpha.45/bundles/angular2.js', included: true, watched: true},
      {pattern: 'node_modules/angular2/bundles/angular2.js', included: true, watched: false},
      {pattern: 'karma-test-shim.js', included: true, watched: false},
      {pattern: 'test/matchers.js', included: true, watched: false},

      //{pattern: 'app/**/*.js', included: false, watched: true},
      //{pattern: 'app/**/*.html', included: false, watched: true},
      //{pattern: 'app/**/*.css', included: false, watched: true},
      //{pattern: 'test/**/*.js', included: false, watched: true}
    ],

    jspm: {
      config: 'config.js',
      loadFiles: [
        'app/**/*',
        'test/**/*.js'
      ],
      serveFiles: ['app/**/*.+(js|html|css)'],
      stripExtension: true
    },

    proxies: {
      "/app/": "/base/app/",
      '/jspm_packages/': '/base/jspm_packages/',
      '/base/jspm_packages': '/base/app/jspm_packages'
    },

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
};
