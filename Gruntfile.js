module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	uglify: {
		dist: {
			options: {
				sourceMap: true,
				banner: '/*! MyLib.js 1.0.0 | Aurelio De Rosa (@AurelioDeRosa) | MIT Licensed */'
			},
			files: {
				'dest/output.min.js': ['src/*.js'],
			}
		}
	}
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};