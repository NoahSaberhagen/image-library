module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      js: {
        src: 'src/js/*.js',
        dest: 'dist/js/scripts.js'
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-concat');
}