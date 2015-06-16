'use strict';


module.exports = function copyto(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-copy-to');

    // Options
    return {
        build: {
            files: [
                {
                    cwd: 'public',
                    src: ['**/*'],
                    dest: '.build/'
                }, {
                    cwd: 'node_modules/angular',
                    src: ["**"],
                    dest: "public/components/angular/"
                }
            ],
            options: {
                ignore: [
                    'public/templates/**/*'
                ]
            }
        }
    };
};
