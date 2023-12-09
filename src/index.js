import CrComLib from "@crestron/ch5-crcomlib";
import { getWebXPanel, runsInContainerApp } from "@crestron/ch5-webxpanel";
import './styles/main.scss';

CrComLib = CrComLib.CrComLib; // Re-assign CrComLib local variable to the CrComLib.CrComLib object that exists in 2.6+
window.CrComLib = CrComLib; // Assign this CrComLib local variable to the Window object for WebXPanel access

window.bridgeReceiveIntegerFromNative = CrComLib.bridgeReceiveIntegerFromNative;
window.bridgeReceiveBooleanFromNative = CrComLib.bridgeReceiveBooleanFromNative;
window.bridgeReceiveStringFromNative = CrComLib.bridgeReceiveStringFromNative;
window.bridgeReceiveObjectFromNative = CrComLib.bridgeReceiveObjectFromNative;

const { WebXPanel, isActive, WebXPanelConfigParams, WebXPanelEvents, getVersion, getBuildDate } = getWebXPanel(!runsInContainerApp());

//Web Xpanel
const configuration = {
    host: "192.168.1.218",
    ipId: "0x42"
}

if (isActive) {

    console.log(`WebXPanel version: ${getVersion()}`);
    console.log(`WebXPanel build date: ${getBuildDate()}`);

    WebXPanel.initialize(configuration);

    window.addEventListener(WebXPanelEvents.CONNECT_CIP, ({ detail }) => {
        const { url, ipId, roomId } = detail;
        console.log(`Connected to ${url}, 0x${ ipId.toString(16)}, ${roomId}`);
    });
    window.addEventListener(WebXPanelEvents.DISCONNECT_CIP, ({ detail }) => {
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


CrComLib.subscribeState("b", "1", (value) => {
    if (value) { button.classList.add("demo--selected"); } else { button.classList.remove("demo--selected"); }
});
document.getElementById("hello").click();