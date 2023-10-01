// Mengambil elemen-elemen yang diperlukan
const editButton = document.querySelector(".profile__edit-button");
const editProfilePopup = document.querySelector(".popup");
const closePopupButton = editProfilePopup.querySelector(".popup__close");
const nameInput = editProfilePopup.querySelector(".popup__input_name");
const aboutInput = editProfilePopup.querySelector(".popup__input_about");

const profilName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const editProfileForm = document.querySelector(".popup__container");

// Fungsi untuk menampilkan popup dan mengisi input dengan data profil yang ada
function openEditPopup() {
  nameInput.value = profilName.textContent;
  aboutInput.value = profileAbout.textContent;
  editProfilePopup.classList.add("popup_opened");
}

// Fungsi untuk menutup popup
function closeEditPopup() {
  editProfilePopup.classList.remove("popup_opened");
}

// Mendengarkan klik tombol "Edit Profil"
editButton.addEventListener("click", openEditPopup);

// Mendengarkan klik tombol "Tutup"
closePopupButton.addEventListener("click", closeEditPopup);

editProfileForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profilName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closeEditPopup();
});
