module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      js: {
        src: 'src/js/*.js',
        dest: 'dist/js/scripts.js'
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'dist/styles/styles.css': 'src/scss/styles.scss',
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
}