module.exports = function(grunt) {

  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),
    
    jshint: {
      options: {
        reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
      },
      build: ['Gruntfile.js', 'src/**/*.js']
    },
    
    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      files: {
        'dist/game/js/lib.min.js': 'src/client/**/*.js'
      }
    },
    
    copy: {
        game: {
          files: [{
            cwd: 'src/client/game',  // set working folder / root to copy
            src: '**/*.html',           // copy all files and subfolders
            dest: 'dist/game',    // destination folder
            expand: true           // required when using cwd
          },{
            cwd: 'src/client/game/js',  // set working folder / root to copy
            src: '**/*.js',           // copy all files and subfolders
            dest: 'dist/game/js',    // destination folder
            expand: true           // required when using cwd
          }]
        },
        chat: {
          files: [{
            cwd: 'src/client/chat',  // set working folder / root to copy
            src: '**/*.html',           // copy all files and subfolders
            dest: 'dist/chat',    // destination folder
            expand: true           // required when using cwd
          },{
            cwd: 'src/client/chat/js',  // set working folder / root to copy
            src: '**/*.js',           // copy all files and subfolders
            dest: 'dist/chat/js',    // destination folder
            expand: true           // required when using cwd
          }]
        }
    }
    
    
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('dev',[]);
  grunt.registerTask('production', ['jshint','uglify','copy']);
  grunt.registerTask('default',['production']);

};