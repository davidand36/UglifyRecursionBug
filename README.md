# Uglify Recursion Bug

There appears to be a bug in certain versions of *uglify-js*: when it is used to minimize a certain structure of code that nests a recursive function, the code it produces fails with a `ReferenceError`. This project demonstrates that bug.

The code in question is in `RecursionTest.js`, and I have reduced it just about as far as I can while maintaining the phenomenon. (We originally discovered it in the context of a considerably larger application, of course.)

Interestingly, version *3.1.1* of uglify-js produces correct code. Some earlier versions, such as *^2.5.5* produced the error. But also more recent versions, including *3.3.6*, which is the latest at this time, produce the bad minimized code.

The `RunTests` shell script tests this by setting *package.json* with specified version of *uglify-js* and (re)installing, then running a JavaScript program that uses `UglifyJS.minify()` to produce an uglified version, `RecursionTest.min.js`. (It uses the default settings for UglifyJS.) It then runs the regular and uglified versions. It does this three times, once for version *3.1.1*, which is fine, once for version *3.3.6*, which fails, and once for version *^3.1.1*, which should get the latest *3.x*, to see whether the bug has been fixed.
