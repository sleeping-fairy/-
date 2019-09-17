var look = document.getElementById("look");
var liuyan = document.getElementById("liuyan");
var list = document.getElementById("list");
var main = document.getElementById("main");

liuyan.onclick = function () {
    // alert("1")
    list.style.display = "none"
    main.style.display = "block";
    look.style.background = "#fff";
    liuyan.style.background = "#CDCDCD"

  }

look.onclick = function () {
  // alert("1")
  main.style.display = "none"
  list.style.display = "block";
  look.style.background = "#CDCDCD";
  liuyan.style.background = "#fff"

}