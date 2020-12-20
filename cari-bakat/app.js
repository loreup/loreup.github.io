var userName = document.getElementById("input-name");

$(".card-option").hover(
  () => {
    $(this).children("h4").css("color", "#fff");
  },
  function () {
    $(".card-option h4").css("color", "#6266ea");
  }
);

function question01() {
  if (userName.value == "") {
    document.querySelector(".if-error").innerHTML =
      '<p class="text-warning d-flex align-items-center p-2 my-2" style="background-color: #FFFCE5; border-radius: 8px;"><svg class="mr-2" width="1em" height="1.2em" viewBox="0 0 16 16" class="bi bi-exclamation-circle" fill="currentColor"xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/></svg> Kolom ini tidak boleh kosong! </p>';
    $(".user-input").css("border", "2px solid #FFDD87");
  } else {
    transitionIn();

    setTimeout(() => {
      // transition remove
      transitionOut();

      // ganti pertanyaan
      $("#quest").html(
        userName.value + ", kira-kira kamu lebih suka belajar apa?"
      );

      //ganti opsi
      $(".question p").addClass("d-none");
      $("#q1").addClass("d-none");
      $("#q2").removeClass("d-none");
    }, 800);
  }
}

// Question 2 (Logika awal)
$(".card-option").click(function () {
  $(".card-option").not($(this)).removeClass("selected");
  $(this).addClass("selected");
});

function question02() {
  if ($(".card-option.selected").attr("data-question") == "tki") {
    transitionIn();

    setTimeout(() => {
      // transition remove
      transitionOut();

      // ganti pertanyaan
      $("#quest").html("Seputar Teknologi, kamu biasanya suka ngapain?");

      //ganti opsi
      $("#q2").addClass("d-none");
      $("#q3-tki").removeClass("d-none");
    }, 800);
  } else {
    transitionIn();

    setTimeout(() => {
      // transition remove
      transitionOut();

      // ganti pertanyaan
      $("#quest").html("Bidang mana yang paling kamu suka pelajari? ");

      //ganti opsi
      $("#q2").addClass("d-none");
      $("#q3-non-tki").removeClass("d-none");
    }, 800);
  }
}

// Question 3
$(".card-option-mini").click(function () {
  $(".card-option-mini").not($(this)).removeClass("selected");
  $(this).addClass("selected");
});

function question03() {
  if ($(".card-option-mini.selected").attr("data-question") == "fotografi") {
    transitionIn();

    setTimeout(() => {
      // transition remove
      transitionOut();

      // ganti pertanyaan
      $("#quest").html("Mana yang paling kamu sukai?");

      //ganti opsi
      $("#q3-tki").addClass("d-none");
      $("#q4-fotografi").removeClass("d-none");
    }, 800);
  } else if (
    $(".card-option-mini.selected").attr("data-question") == "videografi"
  ) {
    transitionIn();

    setTimeout(() => {
      // transition remove
      transitionOut();

      // ganti pertanyaan
      $("#quest").html("Mana yang paling kamu sukai?");

      //ganti opsi
      $("#q3-tki").addClass("d-none");
      $("#q4-videografi").removeClass("d-none");
    }, 800);
  } else if (
    $(".card-option-mini.selected").attr("data-question") == "developer"
  ) {
    transitionIn();

    setTimeout(() => {
      // transition remove
      transitionOut();

      // ganti pertanyaan
      $("#quest").html("Mana yang paling kamu sukai?");

      //ganti opsi
      $("#q3-tki").addClass("d-none");
      $("#q4-informatika").removeClass("d-none");
    }, 800);
  } else if (
    $(".card-option-mini.selected").attr("data-question") == "gaming"
  ) {
    transitionIn();

    setTimeout(() => {
      // transition remove
      transitionOut();

      // ganti pertanyaan
      $("#quest").html("Mana yang paling kamu sukai?");

      //ganti opsi
      $("#q3-tki").addClass("d-none");
      $("#q4-gaming").removeClass("d-none");
    }, 800);
  } else if (
    $(".card-option-mini.selected").attr("data-question") == "sejarah"
  ) {
    transitionIn();

    setTimeout(() => {
      // transition remove
      transitionOut();

      // ganti pertanyaan
      $("#quest").html("Mana yang paling kamu sukai?");

      //ganti opsi
      $("#q3-non-tki").addClass("d-none");
      $("#q4-history").removeClass("d-none");
    }, 800);
  } else if (
    $(".card-option-mini.selected").attr("data-question") == "math"
  ) {
    transitionIn();

    setTimeout(() => {
      // transition remove
      transitionOut();

      // ganti pertanyaan
      $("#quest").html("Mana yang paling kamu sukai?");

      //ganti opsi
      $("#q3-non-tki").addClass("d-none");
      $("#q4-math").removeClass("d-none");
    }, 800);
  }
}

// Question 04
$(".card-option-list").click(function () {
  $(".card-option-list").not($(this)).removeClass("selected");
  $(this).addClass("selected");
});

// Cek Bakat

function submitBakat() {
  if ($(".card-option-list.selected").attr("data-question") == "uix") {
    transitionIn2();

    setTimeout(() => {
      // transition remove
      transitionOut2();

      // ganti pertanyaan
      $("#quest").html(
        userName.value + ", kamu cocok dan passionate banget di bidang"
      );
      $("#result").html("UI/UX Design");

      // Ganti foto
      $("#cover").attr("src", "../assets/img/woman-look-at-right.png");

      //ganti opsi
      $("#q4-fotografi").addClass("d-none");
      $("#end-screen").removeClass("d-none");
      $(".recommendation").removeClass("d-none");
    }, 4000);
  } else if (
    $(".card-option-list.selected").attr("data-question") == "poster"
  ) {
    transitionIn2();

    setTimeout(() => {
      // transition remove
      transitionOut2();

      // ganti pertanyaan
      $("#quest").html(
        userName.value + ", kamu cocok dan passionate banget di bidang"
      );
      $("#result").html("Graphic Design");

      // Ganti foto
      $("#cover").attr("src", "../assets/img/woman-look-at-right.png");

      //ganti opsi
      $("#q4-fotografi").addClass("d-none");
      $("#end-screen").removeClass("d-none");
    }, 4000);
  } else if (
    $(".card-option-list.selected").attr("data-question") == "animasi"
  ) {
    transitionIn2();

    setTimeout(() => {
      // transition remove
      transitionOut2();

      // ganti pertanyaan
      $("#quest").html(
        userName.value + ", kamu cocok dan passionate banget di bidang"
      );
      $("#result").html("Animation");

      // Ganti foto
      $("#cover").attr("src", "../assets/img/woman-look-at-right.png");

      //ganti opsi
      $("#q4-videografi").addClass("d-none");
      $("#q4-fotografi").addClass("d-none");
      $("#end-screen").removeClass("d-none");
    }, 4000);
  } else if (
    $(".card-option-list.selected").attr("data-question") == "menggambar"
  ) {
    transitionIn2();

    setTimeout(() => {
      // transition remove
      transitionOut2();

      // ganti pertanyaan
      $("#quest").html(
        userName.value + ", kamu cocok dan passionate banget di bidang"
      );
      $("#result").html("Illustration");

      // Ganti foto
      $("#cover").attr("src", "../assets/img/woman-look-at-right.png");

      //ganti opsi
      $("#q4-fotografi").addClass("d-none");
      $("#end-screen").removeClass("d-none");
    }, 4000);
  } else if (
    $(".card-option-list.selected").attr("data-question") == "memotret"
  ) {
    transitionIn2();

    setTimeout(() => {
      // transition remove
      transitionOut2();

      // ganti pertanyaan
      $("#quest").html(
        userName.value + ", kamu cocok dan passionate banget di bidang"
      );
      $("#result").html("Photography");

      // Ganti foto
      $("#cover").attr("src", "../assets/img/woman-look-at-right.png");

      //ganti opsi
      $("#q4-fotografi").addClass("d-none");
      $("#end-screen").removeClass("d-none");
    }, 4000);
  } else if (
    $(".card-option-list.selected").attr("data-question") == "filter"
  ) {
    transitionIn2();

    setTimeout(() => {
      // transition remove
      transitionOut2();

      // ganti pertanyaan
      $("#quest").html(
        userName.value + ", kamu cocok dan passionate banget di bidang"
      );
      $("#result").html("Color Grading");

      // Ganti foto
      $("#cover").attr("src", "../assets/img/woman-look-at-right.png");

      //ganti opsi
      $("#q4-fotografi").addClass("d-none");
      $("#end-screen").removeClass("d-none");
    }, 4000);
  } else if (
    $(".card-option-list.selected").attr("data-question") == "cinematic"
  ) {
    transitionIn2();

    setTimeout(() => {
      // transition remove
      transitionOut2();

      // ganti pertanyaan
      $("#quest").html(
        userName.value + ", kamu cocok dan passionate banget di bidang"
      );
      $("#result").html("MV Editing");

      // Ganti foto
      $("#cover").attr("src", "../assets/img/woman-look-at-right.png");

      //ganti opsi
      $("#q4-videografi").addClass("d-none");
      $("#end-screen").removeClass("d-none");
    }, 4000);
  } else if ($(".card-option-list.selected").attr("data-question") == "cgi") {
    transitionIn2();

    setTimeout(() => {
      // transition remove
      transitionOut2();

      // ganti pertanyaan
      $("#quest").html(
        userName.value + ", kamu cocok dan passionate banget di bidang"
      );
      $("#result").html("Visual Effect / 3D Animation");

      // Ganti foto
      $("#cover").attr("src", "../assets/img/woman-look-at-right.png");

      //ganti opsi
      $("#q4-videografi").addClass("d-none");
      $("#end-screen").removeClass("d-none");
    }, 4000);
  } else if (
    $(".card-option-list.selected").attr("data-question") == "filmmaker"
  ) {
    transitionIn2();

    setTimeout(() => {
      // transition remove
      transitionOut2();

      // ganti pertanyaan
      $("#quest").html(
        userName.value + ", kamu cocok dan passionate banget di bidang"
      );
      $("#result").html("Film Making / Director");

      // Ganti foto
      $("#cover").attr("src", "../assets/img/woman-look-at-right.png");

      //ganti opsi
      $("#q4-videografi").addClass("d-none");
      $("#end-screen").removeClass("d-none");
    }, 4000);
  } else if ($(".card-option-list.selected").attr("data-question") == "vlog") {
    transitionIn2();

    setTimeout(() => {
      // transition remove
      transitionOut2();

      // ganti pertanyaan
      $("#quest").html(
        userName.value + ", kamu cocok dan passionate banget di bidang"
      );
      $("#result").html("Creative Content");

      // Ganti foto
      $("#cover").attr("src", "../assets/img/woman-look-at-right.png");

      //ganti opsi
      $("#q4-videografi").addClass("d-none");
      $("#end-screen").removeClass("d-none");
    }, 4000);
  } else if (
    $(".card-option-list.selected").attr("data-question") == "colorgrading"
  ) {
    transitionIn2();

    setTimeout(() => {
      // transition remove
      transitionOut2();

      // ganti pertanyaan
      $("#quest").html(
        userName.value + ", kamu cocok dan passionate banget di bidang"
      );
      $("#result").html("Color Grading");

      // Ganti foto
      $("#cover").attr("src", "../assets/img/woman-look-at-right.png");

      //ganti opsi
      $("#q4-videografi").addClass("d-none");
      $("#end-screen").removeClass("d-none");
    }, 4000);
  } else if (
    $(".card-option-list.selected").attr("data-question") == "webdesign"
  ) {
    transitionIn2();

    setTimeout(() => {
      // transition remove
      transitionOut2();

      // ganti pertanyaan
      $("#quest").html(
        userName.value + ", kamu cocok dan passionate banget di bidang"
      );
      $("#result").html("Front-end Developer");

      // Ganti foto
      $("#cover").attr("src", "../assets/img/woman-look-at-right.png");

      //ganti opsi
      $("#q4-informatika").addClass("d-none");
      $("#end-screen").removeClass("d-none");
      $(".recommendation").removeClass("d-none");
    }, 4000);
  } else if (
    $(".card-option-list.selected").attr("data-question") == "database"
  ) {
    transitionIn2();

    setTimeout(() => {
      // transition remove
      transitionOut2();

      // ganti pertanyaan
      $("#quest").html(
        userName.value + ", kamu cocok dan passionate banget di bidang"
      );
      $("#result").html("Database Design/Managing");

      // Ganti foto
      $("#cover").attr("src", "../assets/img/woman-look-at-right.png");

      //ganti opsi
      $("#q4-informatika").addClass("d-none");
      $("#end-screen").removeClass("d-none");
    }, 4000);
  } else if (
    $(".card-option-list.selected").attr("data-question") == "hacking"
  ) {
    transitionIn2();

    setTimeout(() => {
      // transition remove
      transitionOut2();

      // ganti pertanyaan
      $("#quest").html(
        userName.value + ", kamu cocok dan passionate banget di bidang"
      );
      $("#result").html("Hacking");

      // Ganti foto
      $("#cover").attr("src", "../assets/img/woman-look-at-right.png");

      //ganti opsi
      $("#q4-informatika").addClass("d-none");
      $("#end-screen").removeClass("d-none");
    }, 4000);
  } else if (
    $(".card-option-list.selected").attr("data-question") == "developer"
  ) {
    transitionIn2();

    setTimeout(() => {
      // transition remove
      transitionOut2();

      // ganti pertanyaan
      $("#quest").html(
        userName.value + ", kamu cocok dan passionate banget di bidang"
      );
      $("#result").html("Web/App Development");

      // Ganti foto
      $("#cover").attr("src", "../assets/img/woman-look-at-right.png");

      //ganti opsi
      $("#q4-informatika").addClass("d-none");
      $("#end-screen").removeClass("d-none");
    }, 4000);
  } else if (
    $(".card-option-list.selected").attr("data-question") == "appdesign"
  ) {
    transitionIn2();

    setTimeout(() => {
      // transition remove
      transitionOut2();

      // ganti pertanyaan
      $("#quest").html(
        userName.value + ", kamu cocok dan passionate banget di bidang"
      );
      $("#result").html("Front-end App Developer");

      // Ganti foto
      $("#cover").attr("src", "../assets/img/woman-look-at-right.png");

      //ganti opsi
      $("#q4-informatika").addClass("d-none");
      $("#end-screen").removeClass("d-none");
    }, 4000);
  } else if (
    $(".card-option-list.selected").attr("data-question") == "uxengineer"
  ) {
    transitionIn2();

    setTimeout(() => {
      // transition remove
      transitionOut2();

      // ganti pertanyaan
      $("#quest").html(
        userName.value + ", kamu cocok dan passionate banget di bidang"
      );
      $("#result").html("UX Engineering");

      // Ganti foto
      $("#cover").attr("src", "../assets/img/woman-look-at-right.png");

      //ganti opsi
      $("#q4-informatika").addClass("d-none");
      $("#end-screen").removeClass("d-none");
    }, 4000);
  } else if ($(".card-option-list.selected").attr("data-question") == "gamer") {
    transitionIn2();

    setTimeout(() => {
      // transition remove
      transitionOut2();

      // ganti pertanyaan
      $("#quest").html(
        userName.value + ", kamu cocok dan passionate banget di bidang"
      );
      $("#result").html("E-Sport");

      // Ganti foto
      $("#cover").attr("src", "../assets/img/woman-look-at-right.png");

      //ganti opsi
      $("#q4-gaming").addClass("d-none");
      $("#end-screen").removeClass("d-none");
    }, 4000);
  } else if (
    $(".card-option-list.selected").attr("data-question") == "esport"
  ) {
    transitionIn2();

    setTimeout(() => {
      // transition remove
      transitionOut2();

      // ganti pertanyaan
      $("#quest").html(
        userName.value + ", kamu cocok dan passionate banget di bidang"
      );
      $("#result").html("E-Sport Magement");

      // Ganti foto
      $("#cover").attr("src", "../assets/img/woman-look-at-right.png");

      //ganti opsi
      $("#q4-gaming").addClass("d-none");
      $("#end-screen").removeClass("d-none");
    }, 4000);
  } else if (
    $(".card-option-list.selected").attr("data-question") == "developergame"
  ) {
    transitionIn2();

    setTimeout(() => {
      // transition remove
      transitionOut2();

      // ganti pertanyaan
      $("#quest").html(
        userName.value + ", kamu cocok dan passionate banget di bidang"
      );
      $("#result").html("Game Development");

      // Ganti foto
      $("#cover").attr("src", "../assets/img/woman-look-at-right.png");

      //ganti opsi
      $("#q4-gaming").addClass("d-none");
      $("#end-screen").removeClass("d-none");
    }, 4000);
  } else if (
    $(".card-option-list.selected").attr("data-question") == "sejarahid"
  ) {
    transitionIn2();

    setTimeout(() => {
      // transition remove
      transitionOut2();

      // ganti pertanyaan
      $("#quest").html(
        userName.value + ", kamu cocok dan passionate banget di bidang"
      );
      $("#result").html("Sejarah");

      // Ganti foto
      $("#cover").attr("src", "../assets/img/woman-look-at-right.png");

      //ganti opsi
      $("#q4-history").addClass("d-none");
      $("#end-screen").removeClass("d-none");
    }, 4000);
  } else if (
    $(".card-option-list.selected").attr("data-question") == "polhum"
  ) {
    transitionIn2();

    setTimeout(() => {
      // transition remove
      transitionOut2();

      // ganti pertanyaan
      $("#quest").html(
        userName.value + ", kamu cocok dan passionate banget di bidang"
      );
      $("#result").html("Politik");

      // Ganti foto
      $("#cover").attr("src", "../assets/img/woman-look-at-right.png");

      //ganti opsi
      $("#q4-history").addClass("d-none");
      $("#end-screen").removeClass("d-none");
    }, 4000);
  } else if (
    $(".card-option-list.selected").attr("data-question") == "leader"
  ) {
    transitionIn2();

    setTimeout(() => {
      // transition remove
      transitionOut2();

      // ganti pertanyaan
      $("#quest").html(
        userName.value + ", kamu cocok dan passionate banget di bidang"
      );
      $("#result").html("Leadership/Kepresidenan");

      // Ganti foto
      $("#cover").attr("src", "../assets/img/woman-look-at-right.png");

      //ganti opsi
      $("#q4-history").addClass("d-none");
      $("#end-screen").removeClass("d-none");
    }, 4000);
  } else if (
    $(".card-option-list.selected").attr("data-question") == "bahasaId"
  ) {
    transitionIn2();

    setTimeout(() => {
      // transition remove
      transitionOut2();

      // ganti pertanyaan
      $("#quest").html(
        userName.value + ", kamu cocok dan passionate banget di bidang"
      );
      $("#result").html("Sastra Bahasa");

      // Ganti foto
      $("#cover").attr("src", "../assets/img/woman-look-at-right.png");

      //ganti opsi
      $("#q4-history").addClass("d-none");
      $("#end-screen").removeClass("d-none");
    }, 4000);
  } else if (
    $(".card-option-list.selected").attr("data-question") == "aritmatika"
  ) {
    transitionIn2();

    setTimeout(() => {
      // transition remove
      transitionOut2();

      // ganti pertanyaan
      $("#quest").html(
        userName.value + ", kamu cocok dan passionate banget di bidang"
      );
      $("#result").html("Akutansi & Keuangan");

      // Ganti foto
      $("#cover").attr("src", "../assets/img/woman-look-at-right.png");

      //ganti opsi
      $("#q4-math").addClass("d-none");
      $("#end-screen").removeClass("d-none");
    }, 4000);
  } else if (
    $(".card-option-list.selected").attr("data-question") == "geometri"
  ) {
    transitionIn2();

    setTimeout(() => {
      // transition remove
      transitionOut2();

      // ganti pertanyaan
      $("#quest").html(
        userName.value + ", kamu cocok dan passionate banget di bidang"
      );
      $("#result").html("Arsitektur");

      // Ganti foto
      $("#cover").attr("src", "../assets/img/woman-look-at-right.png");

      //ganti opsi
      $("#q4-math").addClass("d-none");
      $("#end-screen").removeClass("d-none");
    }, 4000);
  } else if (
    $(".card-option-list.selected").attr("data-question") == "ilger"
  ) {
    transitionIn2();

    setTimeout(() => {
      // transition remove
      transitionOut2();

      // ganti pertanyaan
      $("#quest").html(
        userName.value + ", kamu cocok dan passionate banget di bidang"
      );
      $("#result").html("Mekanika Fisika");

      // Ganti foto
      $("#cover").attr("src", "../assets/img/woman-look-at-right.png");

      //ganti opsi
      $("#q4-math").addClass("d-none");
      $("#end-screen").removeClass("d-none");
    }, 4000);
  } else if (
    $(".card-option-list.selected").attr("data-question") == "ilmulistrik"
  ) {
    transitionIn2();

    setTimeout(() => {
      // transition remove
      transitionOut2();

      // ganti pertanyaan
      $("#quest").html(
        userName.value + ", kamu cocok dan passionate banget di bidang"
      );
      $("#result").html("Elektronika");

      // Ganti foto
      $("#cover").attr("src", "../assets/img/woman-look-at-right.png");

      //ganti opsi
      $("#q4-math").addClass("d-none");
      $("#end-screen").removeClass("d-none");
    }, 4000);
  }
}

// Transisi loading
function transitionIn() {
  $(".transition").addClass("fade-in");
  $(".transition").removeClass("d-none");
}

function transitionOut() {
  $(".transition").removeClass("fade-in");
  $(".transition").addClass("d-none");
}

function transitionIn2() {
  $(".transition").addClass("fade-in-long");
  $(".transition").addClass("d-flex");
  $(".transition").addClass("align-items-center");
  $(".transition").addClass("flex-column");
  $(".transition p").html("Mencari bakat yang cocok untuk " + userName.value);
  $(".transition").removeClass("d-none");
}

function transitionOut2() {
  $(".transition").removeClass("fade-in-long");
  $(".transition").removeClass("d-flex");
  $(".transition").removeClass("align-items-center");
  $(".transition").removeClass("flex-column");
  $(".transition").addClass("d-none");
}