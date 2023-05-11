class Asszinkron {
  constructor() {}
  adatbeolvas(vegpont, callbackFv) {
    fetch(vegpont, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        callbackFv(data);
      });
  }
  torles(vegpont, callbackFv) {
    fetch(vegpont, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
      })
  }
}
export default Asszinkron;
