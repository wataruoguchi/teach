/* global module */

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			concat: {
				files: '<%= concat.dev.src %>',
				tasks: ['concat', 'uglify']
			}
		}
	});

	// Load Grunt.js plugins
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Task(s).
	//grunt.registerTask('bundle', ['concat', 'uglify']);
};
