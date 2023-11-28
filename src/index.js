import * as CrComLib from "@crestron/ch5-crcomlib";
import * as WebXPanel from "@crestron/ch5-webxpanel";
import './styles/main.scss'

import { bridgeReceiveIntegerFromNative, bridgeReceiveBooleanFromNative, bridgeReceiveStringFromNative, bridgeReceiveObjectFromNative }
from "@crestron/ch5-crcomlib";
window.CrComLib = CrComLib;
window["bridgeReceiveIntegerFromNative"] = bridgeReceiveIntegerFromNative;
window["bridgeReceiveBooleanFromNative"] = bridgeReceiveBooleanFromNative;
window["bridgeReceiveStringFromNative"] = bridgeReceiveStringFromNative;
window["bridgeReceiveObjectFromNative"] = bridgeReceiveObjectFromNative;

//Web Xpanel

const configuration = {
    host: "192.168.1.218",
    ipId: "0x42"
}

if (WebXPanel.isActive) {

    console.log(`WebXPanel version: ${WebXPanel.getVersion()}`);
    console.log(`WebXPanel build date: ${WebXPanel.getBuildDate()}`);

    WebXPanel.default.initialize(configuration);
    WebXPanel.default.addEventListener(WebXPanel.WebXPanelEvents.CONNECT_CIP, ({ detail }) => {
        const { url, ipId, roomId } = detail;
        console.log(`Connected to ${url}, 0x${ ipId.toString(16)}, ${roomId}`);
    });
    WebXPanel.default.addEventListener(WebXPanel.WebXPanelEvents.DISCONNECT_CIP, ({ detail }) => {
        const { reason } = detail;
        console.log(`Disconnected from CIP. Reason: ${reason}`);
    });
}



// Basic Example of a single button
const button = document.getElementById("hello");

button.addEventListener("click", function() {
    CrComLib.publishEvent("b", "1", true);
    CrComLib.publishEvent("b", "1", false);
});  


CrComLib.subscribeState("b",  "1",   (value)  =>  {         
    if  (value)  {       button.classList.add("demo--selected");          }        
    else  {             button.classList.remove("demo--selected");         }            
});   
document.getElementById("hello").click();  