class ElectricCar extends Car {
    constructor(brand, model, nbdoors, autonomy, statut, actualspeed){
        super(brand, model, nbdoors, statut, actualspeed)
        this._autonomy = autonomy
    }
    show_autonomy(){
        console.log("Autonomy for "+this._brand+" "+this._model+" is "+this._autonomy+" kms.")
    }
}