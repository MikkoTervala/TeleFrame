/*
 * settings for Microsoft Surface 5 Pro
 *
 */
var screen = {
    name: "Microsoft Surface 5 Pro",
    xres: 2736,
    yres: 1824,
    aspectRatio: 1.0, // defines the aspect ratio of a pixel (width/height)
    hasTouch: true,
    hasBacklightCtl: true,
    hasBacklightDimming: false,
    cmdInit: "",
    // cmdBacklightOff: "sudo brightnessctl set 0%",
    // cmdBacklightOn:  "sudo brightnessctl set 50%",
    cmdBacklightOff: "touch /tmp/display_off",
    cmdBacklightOn:  "rm /tmp/display_off",
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
  module.exports = screen;
}
