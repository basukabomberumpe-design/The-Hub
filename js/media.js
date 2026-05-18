let storage = localStorage.getItem("media");
if (storage === null) {
    console.log("if you want you can change the media tab to be my collection of videos in settings");
} else {
    window.location.href = "/the-hub/sub-sites/mediac.html";
}
