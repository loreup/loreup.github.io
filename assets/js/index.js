const btn = document.getElementById("toggle-nav");
const nav = document.getElementById("nav");
const togline = document.getElementsByClassName("line");

btn.addEventListener("click", function () {
  nav.classList.toggle("nav-active");
  togline[0].classList.toggle("l1");
  togline[0].classList.toggle("l2");
  togline[2].classList.toggle("l2-2");
  togline[2].classList.toggle("l1-1");
});

let indexImg = 1;

function next() {
  indexImg++;

  transitionIn();
  setTimeout(() => {
    slider();
  }, 400);
  setTimeout(() => {
    transitionOut();
  }, 800);
}

function prev() {
  indexImg--;

  transitionIn();
  setTimeout(() => {
    slider();
  }, 400);
  setTimeout(() => {
    transitionOut();
  }, 800);
}

function transitionIn() {
  $(".transition").addClass("fade-in");
  $(".transition").removeClass("d-none");
}

function transitionOut() {
  $(".transition").removeClass("fade-in");
  $(".transition").addClass("d-none");
}

function slider() {
  if (indexImg < 1) {
    indexImg++;
  } else if (indexImg == 1) {
    $("#name").html("Tamara Otsuki");
    $("#role").html("Lead Designer di Bukangapa.com");
    $("#review").html(
      "Materinya daging semua kalian bakal nyesel kalau gak join kelas di BrainUp"
    );
    $(".box-img.slide-1").css(
      "background-image",
      "url(./assets/img/slider/img-1.png)"
    );
    $(".next").addClass("btn-slider");
    $(".prev").removeClass("btn-slider");
    $(".prev").addClass("btn-slider-muted");
  } else if (indexImg == 2) {
    $("#name").html("Sai Halim");
    $("#role").html("UI/UX Designer di Konohapedia");
    $("#review").html(
      "Seneng banget belajar di BrainUp, dari awal gak tau bakat sampai sukses."
    );
    $(".box-img.slide-1").css(
      "background-image",
      "url(./assets/img/slider/img-2.png)"
    );
    $(".next").addClass("btn-slider");
    $(".next").removeClass("btn-slider-muted");
    $(".prev").removeClass("btn-slider-muted");
    $(".prev").addClass("btn-slider");
  } else if (indexImg == 3) {
    $("#name").html("Brandon Kenz");
    $("#role").html("Lead Developer di Sandbox");
    $("#review").html(
      "Kalian udah lihat saya sukes, tunggu apalagi? Langsung join aja!"
    );
    $(".box-img.slide-1").css(
      "background-image",
      "url(./assets/img/slider/img-3.png)"
    );

    $(".next").removeClass("btn-slider");
    $(".next").addClass("btn-slider-muted");
    $(".prev").removeClass("btn-slider-muted");
  } else if (indexImg > 3) {
    indexImg--;
  }
}

function popUp() {
  $(".pop-up").removeClass("d-none");
  $(".card-pop").addClass("slide-in");
  setTimeout(() => {
    $(".card-pop").removeClass("slide-in");
  }, 400);
}

function closePop() {
  $(".card-pop").addClass("slide-in-out");
  setTimeout(() => {
    $(".card-pop").removeClass("slide-in-out");
    $(".pop-up").addClass("d-none");
  }, 500);
}

function toCariBakat() {
  window.location.href = "/cari-bakat";
}

function toClass() {
  window.location.href = "/class";
}
