$(function () {
  $("#datepicker").datepicker({
    format: "dd/mm/yyyy",
  });
});

// const a = document.getElementsByTagName("a");
// a.forEach((e) => {
//   e.addEventListener("click", function (el) {
//     window.scrollTo(window.offsetX - 100);
//   });
// });

function myFunction() {
  const nama = document.querySelector("#nama");
  const kelamin = document.querySelector("#jenis-kelamin");
  const tanggal = document.querySelector("#date");
  const komentar = document.querySelector("#komentar");
  const komentarDisplay = document.querySelector(".komentar-display");
  const alert = document.querySelector(".alert-success");
  komentarDisplay.innerHTML += `Nama: ${nama.value} <br> Jenis Kelamin: ${kelamin.value} <br> Tanggal Lahir: ${tanggal.value} <br> Komentar: ${komentar.value} <br>`;
  nama.value = "";
  tanggal.value = "";
  komentar.value = "";
  alert.style.display = "block";
  setTimeout(() => {
    alert.style.display = "none";
  }, 3000);
}
