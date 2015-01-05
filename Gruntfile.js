<<<<<<< HEAD
module.exports = function(grunt) {

  // Project configuration.
grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	uglify: {
		options: {
			banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
		},
		build: {
			src: 'js/*.js',
			dest: 'js/output.min.js'
		}
	},
	sass: {
		dist: {
			options: {                       // Target options
				style: 'compressed',
				compass : true
			},
			files: [{
				expand: true,
				cwd: 'sass',
				src: ['*.scss'],
				dest: 'css',
				ext: '.css'
			}]
		}
	},
	imagemin: {
		dist: {
			options: {
				optimizationLevel: 5
			},
			files: [{
				expand: true,
				cwd: 'img/',
				src: ['**/*.{png,jpg,gif}'],
				dest: 'dist/'
			}]
		}
	},
	cssmin:{
		dist: {
			options: {
			banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			files: {
				'css/screen.min.css': ['css/*.css']
			}
		}
	},
	jshint: {
		// define the files to lint
		files: ['gruntfile.js', 'js/*.js'],
		// configure JSHint (documented at http://www.jshint.com/docs/)
		options: {
		// more options here if you want to override JSHint defaults
			globals: {
				jQuery: true,
				console: true,
				module: true
			}
		}
	}
});

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-newer');
  

  // Default task(s).
  grunt.registerTask('default', ['jshint','newer:uglify','newer:sass','newer:imagemin','newer:cssmin']);

};
=======
module.exports = function(grunt) {

  // Project configuration.
grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	uglify: {
		options: {
			banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
		},
		build: {
			src: 'js/*.js',
			dest: 'js/output.min.js'
		}
	},
	sass: {
		dist: {
			options: {                       // Target options
				style: 'compressed',
				compass : true
			},
			files: [{
				expand: true,
				cwd: 'sass',
				src: ['*.scss'],
				dest: 'css',
				ext: '.css'
			}]
		}
	},
	imagemin: {
		dist: {
			options: {
				optimizationLevel: 5
			},
			files: [{
				expand: true,
				cwd: 'img/',
				src: ['**/*.{png,jpg,gif}'],
				dest: 'dist/'
			}]
		}
	},
	cssmin:{
		dist: {
			options: {
			banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			files: {
				'css/screen.min.css': ['css/*.css']
			}
		}
	},
	jshint: {
		// define the files to lint
		files: ['gruntfile.js', 'js/*.js'],
		// configure JSHint (documented at http://www.jshint.com/docs/)
		options: {
		// more options here if you want to override JSHint defaults
			globals: {
				jQuery: true,
				console: true,
				module: true
			}
		}
	}
});

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-newer');
  

  // Default task(s).
  grunt.registerTask('default', ['jshint','newer:uglify','newer:sass','newer:imagemin','newer:cssmin']);

};