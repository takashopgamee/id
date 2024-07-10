 // take body to change the content
const body = document.getElementsByTagName('body');
// stop keyboard shortcuts
window.addEventListener("keydown", (event) => {
  if(event.ctrlKey && (event.key === "S" || event.key === "s")) {
     event.preventDefault();
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Maaf Halaman Ini Gabisa Di Inspeksi"
});
  }

  if(event.ctrlKey && (event.key === "C")) {
     event.preventDefault();
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Maaf Halaman Ini Gabisa Di Inspeksi"
});
  }
  if(event.ctrlKey && (event.key === "E" || event.key === "e")) {
     event.preventDefault();
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Maaf Halaman Ini Gabisa Di Inspeksi"
});
  }
  if(event.ctrlKey && (event.key === "I" || event.key === "i")) {
     event.preventDefault();
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Maaf Halaman Ini Gabisa Di Inspeksi"
});
  }
  if(event.ctrlKey && (event.key === "K" || event.key === "k")) {
     event.preventDefault();
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Maaf Halaman Ini Gabisa Di Inspeksi"
});
  }
  if(event.ctrlKey && (event.key === "U" || event.key === "u")) {
     event.preventDefault();
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Maaf Halaman Ini Gabisa Di Inspeksi"
});
  }
});
// stop right click
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
 Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Maaf Halaman Ini Gabisa Di Inspeksi"
});
});