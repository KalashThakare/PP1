import ridemodel from "../models/ride.model";
// import mapservice


//function to calculate fare
async function getfare(pickup,destination){

    if(!pickup || !destination){
        throw new Error('Pickup and destination are required');
    }

    //const distanceTime= await :- here we will call the function from mapService that will give us pickup and destination distance

    const basefair={
        auto:10,
        car:15,
        moto:8
    };

    const ratePerMinute={
        auto:2,
        car:3,
        moto:1.5
    };

    const fair={
        // auto:fair algorithm based on distance and time that we will get from distanceTime,
        // car:fair algorithm based on distance and time that we will get from distanceTime
        // auto:fair algorithm based on distance and time that we will get from distanceTime
    };

    return fair;

}


const createRide=async ({user,pickup,destination,vehicleType})=>{
    if(!user || !destination || !pickup || !vehicleType){
        throw new Error('All fields are necessary');
    }

    const fare = await getfair(pickup,destination)

    const ride = ridemodel.create({
        user,
        pickup,
        destination,
        fare:fare[vehicleType]
    })

    return ride;
}