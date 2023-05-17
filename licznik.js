setInterval(Odliczanie, 1000);

function Odliczanie() {
  let matura = new Date("10 May 2024 9:00:00 GMT+0100 ");
  matura = Date.parse(matura) / 1000;
  let dzis = new Date();
  dzis = Date.parse(dzis) / 1000;
  let czas = matura - dzis;
  let d = Math.floor(czas / 86400);
  let h = Math.floor((czas - d * 86400) / 3600);
  let min = Math.floor((czas - d * 86400 - h * 3600) / 60);
  let sec = Math.floor(czas - d * 86400 - h * 3600 - min * 60);

  if (h < "10") {
    h = "0" + h;
  }
  if (min < "10") {
    min = "0" + min;
  }
  if (sec < "10") {
    sec = "0" + sec;
  }

  $("#days").html(d + "<span>Dni</span>");
  $("#hours").html(h + "<span>Godzin</span>");
  $("#minutes").html(min + "<span>Minut</span>");
  $("#seconds").html(sec + "<span>Sekund</span>");
}
