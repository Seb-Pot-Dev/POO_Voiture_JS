class Car{
    constructor(brand, model, nbdoors){
        this._brand = brand;
        this._model = model;
        this._nbdoors = nbdoors;
        this._statut = false;
        this._actualspeed = 0;
    }
    showModel(){
        console.log("Model is : "+this._model+".");
    }
    get_all_infos(){
        return `${this._brand+" "+this._model+" got "+this._nbdoors+" doors"}`;
    }
}