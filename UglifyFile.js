/*
    UglifyFile.js

    Script to Uglify a JavaScript file
*/

var fs = require( 'fs' );
var UglifyJS = require( 'uglify-js' );

if ( process.argv.length < 3 ) {
    console.log( 'Specify a file' );
    process.exit( 1 );
}

var filename = process.argv[ 2 ];
filename = filename.slice( 0, -3 ); //remove '.js'
var inputfile = filename + '.js';
var outputfile = filename + '.min.js';

var plainText = fs.readFileSync( inputfile, 'utf8' );
//console.log( plainText );

var uglified = UglifyJS.minify( plainText );
//console.log( uglified.code );
fs.writeFileSync( outputfile, uglified.code );
