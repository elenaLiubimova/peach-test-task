export class CitiesPopup {
  constructor() {
    this._popup = document.querySelector('.cities-popup');
  }

  toggle() {
    this._popup.classList.toggle('cities-popup_opened');
  }
}
