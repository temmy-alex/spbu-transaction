class Customer extends Person
{
    constructor(name, tank_capacity)
    {
        super(name);
        this.member = false;
        this.tank = 1; // Per Liter
        this.reload = 0; 
        this.tank_capacity = tank_capacity;
    }

    greeting(){
        super.greeting();
        console.log('Welcome back!');
    }

    getName(){
        return this.name;
    }

    activeMember(){
        return this.member;
    }

    setActiveMember(status){
        this.member = status;
    }

    addPetrol(petrol){
        this.tank += petrol;
    }

    setUsedPetrol(petrol){
        this.petrol -= petrol;
    }

    getTankInfo(){
        return this.tank;
    }

    reloadPetrol(){
        this.reload++;
    }

    getReload(){
        return this.reload;
    }

    getMaxTank(){
        return this.tank_capacity;
    }

    getUsedPetrol(distance){
        const kmPerLiter = 10;
        const petrolUsed = distance / kmPerLiter;

        this.setUsedPetrol(petrolUsed);
        console.log(`Distance ${distance} KM, Total Petrol used ${petrolUsed}`);
        this.tank == 0 ? console.log(`Your petrol must reload`) : console.log(`Your petrol is enough`)
    }
}