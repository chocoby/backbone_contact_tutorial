module.exports = function (grunt) {
  [
    'grunt-contrib-connect',
    'grunt-contrib-jst',
    'grunt-contrib-requirejs',
    'grunt-contrib-watch'
  ].forEach(function (name) {
    grunt.loadNpmTasks(name);
  });

  grunt.initConfig({
    jst: {
      options: {
        processName: function (name) {
          return name.match(/((?:mobile|pc)\/.*).html$/)[1];
        },
        processContent: function (src) {
          return src.replace(/(^\s+|\s+$)/gm, '');
        },
        amd: true
      },
      pc: {
        files: {
          'assets/js/jst/pc.js': ['assets/js/templates/pc/*.html']
        }
      },
      mobile: {
        files: {
          'assets/js/jst/mobile.js': ['assets/js/templates/mobile/*.html']
        }
      }
    },

    watch: {
      jst: {
        files: ['assets/js/templates/**/*.html'],
        tasks: ['jst']
      }
    },

    requirejs: {
      options: {
        mainConfigFile: 'assets/js/require.config.js',
        baseUrl: './assets/js',
        paths: {
          requirejs: 'vendor/require-2.1.2'
        },
        include: ['requirejs'],
        optimize: 'none'
      },
      pc: {
        options: {
          out: 'assets/js/dist/pc.min.js',
          name: 'pc'
        }
      },
      mobile: {
        options: {
          out: 'assets/js/dist/mobile.min.js',
          name: 'mobile'
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 8001,
          base: './'
        }
      }
    }
  });

  grunt.registerTask('default', ['connect', 'watch']);
};
