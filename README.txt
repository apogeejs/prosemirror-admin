Prosemirror Lib
------------

Inside the prosemirror admin directory, we have some code to help work with the prosemirror.

The following libraries are used in the application (as of 4/6/21)

prosemirror-commands
prosemirror-gapcursor
prosemirror-keymap
prosemirror-model
prosemirror-state
prosemirror-transform
prosemirror-view

CONVERSION OF LIBRARIES TO ES MODULES:
-------------------------------------

We are publishing the needed prose mirror libraries as es modules so we can use them in our es builds. We 
will store the 3 lib files along with a css file and a "manifest" file that tells which versions of the prosemirror
libraries are included.

Because ES modules require we specify exact URLs, we must reference a given library with the same URL everywhere we use it.
To make sure we do this, we are publishing the group of lib files together in a single bundle.

BUILDING THE MODULES

In the directory "releaseimports" we have some stubs to convert the npm modules to es modules,
using rollup. To do this:

1) set the desired versions of the prose mirror libraries in the package.json file and install. 
2) update the destination for the created files, so they are placed in a properly versioned directory.
3) run the command:

npm run-script buildlib

4) Insert the prosemirrorVersions.json file, to say which versions are in the bundle.
5) Add the appropriate CSS file to the release directory

This should create the output ES modules.

NOTE: MAKE SURE YOU WRITE THEM TO THE PROPER DIRECTORY - A NEW BUNDLED VERSION! DON'T OVERWRITE AN OLD VERSION.

DEBUGGING WITH REPOS
--------------------

(As of now, the repos are out of date.)

If we want to run the code using prose mirror source for debugging, we can use an alternate set of libraries.

1) Download the prosemirror repos needed into the child repos folder. Make sure the es modeuls stubs in the folder
devimports points at these properly.
2) The prosemirror repos are in ES format, but not standard format. Check the import statements. These can be updated our,
more convenently, the server can be setup to serve these files.
3) External libraries are needed. These can be made with ES stubs in extLib. Set that up for the needed modules. They should be
downloaded into node_modules if we have the proper prosemirror lib versions loaded in our package.json. These libs can be built with

npm run-script buildextlib

4) Update the apogee code to point to the proper prosemirror es stubs, in the devimports directory.

Now when we run the web version of apogee it should load these files.

Updating the CSS file
---------------------

For my original version of prosemirror libs, I compiled the CSS files and then I modified it. I did not change this (so far)
for other builds. 

If updating is desired. See the gule file to help with compiling these.