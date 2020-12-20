"use strict";

// Dekalrasi modal
var modal = document.querySelector(".modal-join");
var button = document.querySelectorAll(".modal-join button"); // Array data video

var dataVideo = [{
  link: "https://youtube.com/embed/LzEzSTKRh5Q",
  title: "Pengenalan Materi",
  desc: "Dikelas ini kita akan belajar dasar Laravel seperti cara instalasi, routing, views, controller dll. Yang harus dipelajari sebelum belajar framework laravel ini kita harus tahu dulu PHP Dasar, OOP PHP, Konsep MVC, Composer dan lain sebagainya."
}, {
  link: "https://youtube.com/embed/xJ4uKMZeKnM",
  title: "Instalasi Part 1",
  desc: "Pada instalasi ini kita akan belajar cara menginstall Framework Laravel di komputer atau laptop kita. Untuk dokumentasi Laravel kalian bisa lihat di laravel.com"
}, {
  link: "https://youtube.com/embed/eXj3-2UrThE",
  title: "Instalasi Part 2",
  desc: ""
}, {
  link: "https://youtube.com/embed/bAHkKePuUwM",
  title: "Routing Part 1",
  desc: "Routing di sebuah website di ibaratkan alamat atau peta. Nah di file web.php ada route::get jadi jika ada yang mengakses route dengan method get ke halaman root atau halaman utama kalo ada maka dia akan memanggil view welcome."
}, {
  link: "https://youtube.com/embed/bAHkKePuUwM",
  title: "Routing Part 2",
  desc: ""
}];
var titleVid = document.getElementById("title-video"); // Menambahkan element box materi

for (var boxIn = 0; boxIn < dataVideo.length; boxIn++) {
  var boxContents = document.getElementById("content-box");
  boxContents.innerHTML += '<a href="#" style="color: #fff; text-decoration: none"> <div class="box-content"> <p>' + boxIn + '. ' + dataVideo[boxIn].title;
} // Close modal


button.forEach(function (e) {
  e.addEventListener("click", function () {
    modal.style.display = "none";
  });
}); // Active state box materi

var boxContent = document.querySelectorAll(".box-content");
boxContent[0].classList.add("active");
var linkVid = document.getElementById("link-video");
boxContent.forEach(box = function box(el) {
  el.addEventListener("click", function () {
    for (var index = 0; index < boxContent.length; index++) {
      var element = boxContent[index];
      element.classList.remove("active");
    }

    this.classList.add("active");
  });
}); // Change value materi & title

var _loop = function _loop(i) {
  var box = boxContent[i];
  box.addEventListener("click", function () {
    linkVid.setAttribute("src", dataVideo[i].link);
    titleVid.innerHTML = dataVideo[i].title;
    document.getElementById("desc-module").innerHTML = dataVideo[i].desc;
  });
};

for (var i = 0; i < boxContent.length; i++) {
  _loop(i);
}