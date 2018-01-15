/*
    RecursionTest.js

    Test of Uglify bug concerning recursion
*/

var downCounter = (function( ) {
    'use strict';

    var api = {
        run: run
    };

    var counter = 2;

    return api;

    //=========================================================================

    function run( ) {
        countDown( );

        //-----------------------------------------------------------------

        function countDown( ) {
            doNext( );

            //-----------------------------------------------------------------

            function doNext( ) { //recursive
                if ( counter >= 0 ) {
                    console.log( counter-- );
                    doNext( );
                }
            }
        }
    }

})( );

downCounter.run( );
