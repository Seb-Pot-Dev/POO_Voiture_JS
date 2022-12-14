class Car {
  constructor(brand, model, nbdoors) {
    this._brand = brand;
    this._model = model;
    this._nbdoors = nbdoors;
    this._statut = false;
    this._actualspeed = 0;
  }
  // SHOW
  showModel() {
    document.getElementById("showmodel").innerHTML =
      "<img src='https://storage.googleapis.com/benzin/lead/original/img_5f7ef21c99eca.jpg'>";
  
    console.log("Model is : " + this._model + ".");
  }
  // START
  start() {
    if (this._statut == false) {
      this._statut = true;
      document.getElementById("state").innerHTML =
        '<i size=1000px class="fa-solid fa-play"></i><b> ' +
        this._actualspeed +
        " km/h";
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
      document.getElementById("state").innerHTML =
        '<i class="fa-solid fa-gauge-simple-high"></i><b> ' +
        this._actualspeed +
        " km/h";
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
      document.getElementById("state").innerHTML =
        '<i class="fa-solid fa-gauge-simple"></i><b> ' +
        this._actualspeed +
        " km/h";
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
    if (this._statut == true && this._actualspeed==0) {
      this._statut = false;
      this._actualspeed = 0;
      document.getElementById("state").innerHTML =
        '<i class="fa-solid fa-stop"></i><b> ' + this._actualspeed + " kmh/h";
      console.log(this + " is now turned off.");
    } 
    else if(this._statut == true && this._actualspeed>0){
      alert(this + " is moving. Please slow down to 0 km/h before stoping.");
      console.log(this + "is moving. Please slow down to 0 km/h before stoping.");
    }
    else {
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


  //TO STRING
  toString() {
    return this._brand + " " + this._model;
  }
}
