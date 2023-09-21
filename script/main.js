// Mengambil elemen-elemen yang diperlukan
const editButton = document.querySelector(".profile__edit-button");
const editProfilePopup = document.querySelector(".popup");
const closePopupButton = editProfilePopup.querySelector(".popup__close");
const saveButton = editProfilePopup.querySelector(".popup__submit");
const nameInput = editProfilePopup.querySelector(".popup__input_name");
const aboutInput = editProfilePopup.querySelector(".popup__input_about");

// Inisialisasi nilai awal input
let originalName = nameInput.value;
let originalAbout = aboutInput.value;

// listen klik tombol "Edit Profil"
editButton.addEventListener("click", () => {
  // Mengisi input dengan data profil yang ada
  nameInput.value = document.querySelector(".profile__name").textContent;
  aboutInput.value = document.querySelector(".profile__about").textContent;
  // Menampilkan popup
  editProfilePopup.style.display = "block";

  // Mengatur nilai awal
  originalName = nameInput.value;
  originalAbout = aboutInput.value;

  // Menonaktifkan tombol "Simpan" saat pertama kali popup muncul
  saveButton.disabled = true;
});

// Mendengarkan perubahan pada input
nameInput.addEventListener("input", () => {
  // Memeriksa apakah nilai input telah berubah
  if (nameInput.value !== originalName || aboutInput.value !== originalAbout) {
    saveButton.disabled = false; // Aktifkan tombol "Simpan"
  } else {
    saveButton.disabled = true; // Nonaktifkan tombol "Simpan"
  }
});

aboutInput.addEventListener("input", () => {
  // Memeriksa apakah nilai input telah berubah
  if (nameInput.value !== originalName || aboutInput.value !== originalAbout) {
    saveButton.disabled = false; // Aktifkan tombol "Simpan"
  } else {
    saveButton.disabled = true; // Nonaktifkan tombol "Simpan"
  }
});

// Mendengarkan klik tombol "Tutup"
closePopupButton.addEventListener("click", () => {
  // Menutup popup
  editProfilePopup.style.display = "none";
});

// Mendengarkan klik tombol "Simpan"
saveButton.addEventListener("click", () => {
  // Mengambil nilai dari input dan memperbarui profil
  const newName = nameInput.value;
  const newAbout = aboutInput.value;
  document.querySelector(".profile__name").textContent = newName;
  document.querySelector(".profile__about").textContent = newAbout;
  // Menutup popup
  editProfilePopup.style.display = "none";
});
