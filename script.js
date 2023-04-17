$(function () {
  $("#datepicker").datepicker({
    format: "dd/mm/yyyy",
  });
});

function myFunction() {
  const nama = document.querySelector("#nama");
  const kelamin = document.querySelector("#jenis-kelamin");
  const tanggal = document.querySelector("#date");
  const komentar = document.querySelector("#komentar");
  const komentarDisplay = document.querySelector(".komentar-display");
  const alert = document.querySelector(".alert-success");
  komentarDisplay.innerHTML += `Nama: ${nama.value} <br> Jenis Kelamin: ${kelamin.value} <br> Tanggal Lahir: ${tanggal.value} <br> Komentar: ${komentar.value} <br>`;
  alert.style.display = "block";
  setTimeout(() => {
    alert.style.display = "none";
  }, 3000);
}
