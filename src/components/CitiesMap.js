export class CitiesMap {
  constructor() {
    this._map = document.querySelector('.map__image');

    this._menu = document.querySelector('.menu');
    this._items = this._menu.querySelectorAll('.menu__item');
    this._mapItems = this._map.querySelectorAll('.map__item');
  }

  toggleCitiesVisibility() {
    this._menu.addEventListener('click', (evt) => {

      if (!evt.target.classList.contains('menu')) {
        this._items.forEach((item) => {
          if (
            item.classList.contains('menu__item_selected') &&
            item !== evt.target
          ) {
            item.classList.remove('menu__item_selected');
          }
        });

        evt.target.classList.add('menu__item_selected');
        this._mapItems.forEach((item) => {
          if (!item.classList.contains(evt.target.id)) {
            item.style.visibility = 'hidden';
          } else {
            item.style.visibility = 'visible';
          }
        });
      };
    });
  }

  decreaseOpacity() {
    this._menu.style.opacity = '.1';
    this._map.style.opacity = '.1';
  }

  increaseOpacity() {
    this._menu.style.opacity = '1';
    this._map.style.opacity = '1';
  }
}
