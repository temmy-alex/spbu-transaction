class FuelStation {
    constructor(station_number){
        this.station_number = station_number;
        this.capacity = 50;
    }   

    getStationNumber()
    {
        return this.station_number;
    }

    setCapacity(capacity)
    {
        this.capacity = capacity;
    }

    getCapacity()
    {
        return this.capacity;
    }
}