class Car {
  constructor(brand, model, nbdoors) {
    this._brand = brand;
    this._model = model;
    this._nbdoors = nbdoors;
    this._statut = false;
    this._actualspeed = 0;
  }
  // START
  start() {
    if (this._statut == false) {
      this._statut = true;
      document.getElementById("start").innerHTML = this + " is starting...";
      console.log(this + " is starting...");
    } else {
      alert(this + " is already started !");
      console.log(this + " is already started !");
    }
  }
  // ACCELERATE
  accelerate(speed) {
    if (this._statut == true) {
      this._actualspeed += speed;
      document.getElementById("speed").innerHTML =
        this + " is accelerating to " + this._actualspeed;
      console.log(
        this +
          " accelerate of " +
          speed +
          " km/h. Its speed is now " +
          this._actualspeed +
          " km/h"
      );
    } else {
      alert(this + " is off. Please start before accelerating.");
      console.log(this + " is off. Please start before accelerating.");
    }
  }
  // SLOW
  slow(speed) {
    if (this._actualspeed > 0) {
      this._actualspeed -= speed;
      document.getElementById("slow").innerHTML =
        this + " is slowing down to " + this._actualspeed;
      console.log(
        this +
          " is slowing down of " +
          speed +
          " km/h. Its speed is now " +
          this._actualspeed +
          " km/h"
      );
    } else {
      alert(
        this +
          " doesn't have a speed at the moment. Please accelerate before slowing down."
      );
      console.log(
        this +
          " doesn't have a speed at the moment. Please accelerate before slowing down."
      );
    }
  }
  // STOP
  stop() {
    if (this._statut == true) {
      this._statut = false;
      this._actualspeed = 0;
      document.getElementById("stop").innerHTML = this + " does stop !";
      console.log(this + " is now turned off.");
    } else {
      alert(this + " is already stopped.");
      console.log(this + " is already stopped.");
    }
  }
  get_statut() {
    if (this._statut == true) {
      console.log(this + " is on.");
    } else {
      console.log(this + " is off.");
    }
  }
  // GETTERS
  get_all_infos() {
    return this + " got " + this._nbdoors + " doors";
  }
  get_brand() {
    return this._brand;
  }
  get_model() {
    return this._model;
  }
  get_nbdoors() {
    return this._nbdoors;
  }
  get_actual_speed() {
    return this._actualspeed;
  }

  // SHOW
  showModel() {
    document.getElementById("showmodel").innerHTML = //Avec getElementById on cherche un élément dans l'html qui possède un id précis, puis on place dans son code html (innerHTML) les éléments suivants le =
      "Model is : " + this._model + ".";

    console.log("Model is : " + this._model + ".");
  }

  //TO STRING
  toString() {
    return this._brand + " " + this._model;
  }
}
