module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // watch
    watch: {
      options: {
        livereload: true,
      },

      express: {
        files:  [ 'app/server.js' ],
        options: {
          spawn: false // without this option specified express won't be reloaded
        }
      }
    },

    // express
    express: {
      options: {
        // Override defaults here
      },
      dev: {
        options: {
          script: 'app/server.js'
        },
      }
    },

    // open
    open: {
      dev: {
        path: 'http://localhost:3000'
      }
    },
  });

  // Used for delaying livereload until after server has restarted
  grunt.registerTask('wait', function () {
    grunt.log.ok('Waiting for server reload...');

    var done = this.async();

    setTimeout(function () {
      grunt.log.writeln('Done waiting!');
      done();
    }, 1500);
  });

  // Load plugins that provides tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-open');

  // Default task(s).
  grunt.registerTask( 'default', [
    'express:dev',
    'open:dev',
    'watch'
  ]);


};
