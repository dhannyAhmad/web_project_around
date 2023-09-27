// Mengambil elemen-elemen yang diperlukan
const editButton = document.querySelector(".profile__edit-button");
const editProfilePopup = document.querySelector(".popup");
const closePopupButton = editProfilePopup.querySelector(".popup__close");
const nameInput = editProfilePopup.querySelector(".popup__input_name");
const aboutInput = editProfilePopup.querySelector(".popup__input_about");

const saveButton = editProfilePopup.querySelector(".popup__submit");
const profilName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");

// Fungsi untuk menampilkan popup dan mengisi input dengan data profil yang ada
function openEditPopup() {
  nameInput.value = profilName.textContent;
  aboutInput.value = profileAbout.textContent;
  editProfilePopup.classList.add("popup_opened");

  saveButton.disable = true;
}

// Fungsi untuk menutup popup
function closeEditPopup() {
  editProfilePopup.classList.remove("popup_opened");
}

// Fungsi untuk menyimpan perubahan profil
function saveProfileChanges() {
  profilName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closeEditPopup();
}

// Mendengarkan klik tombol "Edit Profil"
editButton.addEventListener("click", openEditPopup);

// Mendengarkan klik tombol "Tutup"
closePopupButton.addEventListener("click", closeEditPopup);

// Mendengarkan klik tombol "Simpan"
saveButton.addEventListener("click", saveProfileChanges);

submitButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  profilName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  saveProfileChanges();
});
