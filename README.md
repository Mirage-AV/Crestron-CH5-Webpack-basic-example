6. Fix issue with Crestron's Com Library that prevents importing direct into index.js file

   - Open the following file: node_modules/@crestron/ch5-crcomlib/package.json
   - Replate
     `"types": "build_bundles/umd/@types/index.d.ts"`
   - With
     "types": "build_bundles/cjs/@types/index.d.ts",
     "main": "build_bundles/cjs/cr-com-lib.js",


webserver allowedsharedsession
4-Series control systems use session management and session cookies that are sent a web browser to keeptrack of a given user's login status. If you host am HTML5 Web XPanel project on an independent webserver than the one provided by the control system, or you are using web development tools to host a webserver on your workstation during project development, the web browser will not be able to access the 4Series control system CIP protocol.
For maximum security, the session cookies provided by a 4-Series control system are accessibly only by webpages served by the control system web server and are not accessible by web pages served up byindependent web servers. If you plan to deploy your HTML5 Web XPanel project on an independent webserver, or if you plan to develop your project using a web server hosted on your workstation, you mustchange the default configuration using the
webserver allowedsharedsession on
command.
Issue
webserver allowedsharedsession
without a parameter to view the current value for this setting
