(function() {
  var currentTime = new Date(), 
      second = currentTime.getSeconds() / 60 * 360,
      minute = currentTime.getMinutes() / 60 * 360 + currentTime.getSeconds() / 60 *6,
      hour = currentTime.getHours() / 12 * 360 + currentTime.getMinutes() / 60 * 30,
animation = [
    "@keyframes sec-hand{from{transform: rotate(" + second + "deg);}to{transform: rotate(" + (second  + 360) + "deg);}}",
    "@keyframes min-hand{from{transform: rotate(" + minute + "deg);}to{transform: rotate(" + (minute + 360) + "deg);}}",
    "@keyframes hr-hand{from{transform: rotate(" + hour + "deg);}to{transform: rotate(" + (hour + 360) + "deg);}}"
  ].join("");
  document.querySelector("#clock-animate").innerHTML = animation;
})();