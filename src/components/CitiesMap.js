export class CitiesMap {
  constructor() {
    this._map = document.querySelector('.map__image');

    this._menu = document.querySelector('.menu');
    this._items = this._menu.querySelectorAll('.menu__item');
    this._mapItems = this._map.querySelectorAll('.map__item');

    this._nordWest = this._map.querySelectorAll('.nord-west');
    this._center = this._map.querySelectorAll('.center');
    this._south = this._map.querySelectorAll('.south');
    this._volga = this._map.querySelectorAll('.volga');
    this._ural = this._map.querySelectorAll('.ural');
    this._siberia = this._map.querySelectorAll('.siberia');
    this._farEast = this._map.querySelectorAll('.far-east');

    // this._spb = this._map.querySelectorAll('.spb');
    // this._moscow = this._map.querySelectorAll('.moscow');
    // this._voronezh = this._map.querySelectorAll('.voronezh');
    // this._belgorod = this._map.querySelectorAll('.belgorod');
    // this._rostovOnDon = this._map.querySelectorAll('.rostov-on-don');
    // this._krasnodar = this._map.querySelectorAll('.krasnodar');
    // this._kazan = this._map.querySelectorAll('.kazan');
    // this._samara = this._map.querySelectorAll('.samara');
    // this._nNovgorod = this._map.querySelectorAll('.n-novgorod');
    // this._orenburg = this._map.querySelectorAll('.orenburg');
    // this._ekb = this._map.querySelectorAll('.ekb');
    // this._perm = this._map.querySelectorAll('.perm');
    // this._surgut = this._map.querySelectorAll('.surgut');
    // this._tyumen = this._map.querySelectorAll('.tyumen');
    // this._novosibirsk = this._map.querySelectorAll('.novosibirsk');
    // this._krasnoyarsk = this._map.querySelectorAll('.krasnoyarsk');
    // this._irkutsk = this._map.querySelectorAll('.irkutsk');
    // this._khabarovsk = this._map.querySelectorAll('.khabarovsk');
    // this._tomsk = this._map.querySelectorAll('.tomsk');
    // this._omsk = this._map.querySelectorAll('.omsk');
    // this._izhevsk = this._map.querySelectorAll('.izhevsk');
    // this._chelyabinsk = this._map.querySelectorAll('.chelyabinsk');
    // this._ufa = this._map.querySelectorAll('.ufa');
    // this._volgograd = this._map.querySelectorAll('.volgograd');
    // this._yaroslavl = this._map.querySelectorAll('.yaroslavl');
    // this._kaliningrad = this._map.querySelectorAll('.kaliningrad');
    // this._vladivostok = this._map.querySelectorAll('.vladivostok');
  }

  toggleCitiesVisibility() {
    console.log(this._mapItems)
    this._menu.addEventListener('click', (evt) => {
      this._items.forEach((item) => {
        if (item.classList.contains("menu__item_selected") && item !== evt.target) {
          item.classList.remove("menu__item_selected");
        }
      });

      evt.target.classList.add("menu__item_selected");
      console.log(evt.target.id)
      this._mapItems.forEach((item) => {
        if (!item.classList.contains(evt.target.id)) {
          item.style.visibility = "hidden";
        } else {
          item.style.visibility = "visible";
        }
      });
    });
  }
}
