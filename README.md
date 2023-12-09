# Welcome
I created this basic project to get the hang of Webpack and some Javascript.

# Info
Now works with 2.6.1 version of the ch5-crcomlib, thanks to Justin Phillips @Crestron.

Edit package.json scripts, replace the IP addresses with the ones for your devices.
Also edit index.js file for the Web Xpanel configuration to match your processor IP.

If using the dev server (npm run start) you may need to login to the processor using the browser if you have auth enabled before it will work. (Use F12, you'll see link in console if it hasn't been able to login)

# Node modules setup
Open terminal and use "npm install" command to load all the required packages.

A post install script will handle the below for you so you don't have to edit the @crestron package.json (thanks to 
Onio Interactive for this tip, info here - https://youtu.be/tZL5xOCtf6Y?si=BQ_uihYaRqqVFbcY&t=5659)

Fix issue with Crestron's Com Library that prevents importing direct into index.js file

   - Open the following file: node_modules/@crestron/ch5-crcomlib/package.json
   - Replace
     "types": "build_bundles/umd/@types/index.d.ts"
   - With
     "types": "build_bundles/cjs/@types/index.d.ts",
     "main": "build_bundles/cjs/cr-com-lib.js",


# Processor setup
This will allow you to use a browser running from your development server to connect to the processor, you may need to login to the processor web interface first.
Use "npm run start" in terminal to get a development server running, any changes to source will be automatically built and loaded when you save them.

Console into the processor and use the command;
webserver allowedsharedsession on

4-Series control systems use session management and session cookies that are sent a web browser to keeptrack of a given user's login status. If you host am HTML5 Web XPanel project on an independent webserver than the one provided by the control system, or you are using web development tools to host a webserver on your workstation during project development, the web browser will not be able to access the 4Series control system CIP protocol.
For maximum security, the session cookies provided by a 4-Series control system are accessibly only by webpages served by the control system web server and are not accessible by web pages served up byindependent web servers. If you plan to deploy your HTML5 Web XPanel project on an independent webserver, or if you plan to develop your project using a web server hosted on your workstation, you must change the default configuration using the
webserver allowedsharedsession on
command.
Issue webserver allowedsharedsession
without a parameter to view the current value for this setting
