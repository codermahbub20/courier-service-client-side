import { useEffect, useState } from "react";
import { addPackage } from "../../../api/package";
import toast from "react-hot-toast";


const CreatePackage = () => {

    const [packageTrackingNumber, setPackageTrackingNumber] = useState([])

    const generateTrackingNumber = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let trackingNumber = '';
        for (let i = 0; i < 10; i++) {
            trackingNumber += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return trackingNumber;
    };

    useEffect(() => {
        // Set initial tracking number when component mounts
        setPackageTrackingNumber(prevData => ({
            ...prevData,
            trackingNumber: generateTrackingNumber()
        }));
    }, []);


    const handleSubmit =async (e) => {
        e.preventDefault()
        const form = e.target;
        const senderName = form.senderName.value;
        const recipientName = form.recipientName.value;
        const origin = form.origin.value;
        const destination = form.destination.value;
        const pickup = form.pickup.value;
        const delivery = form.delivery.value;
        
        const packageData = {packageTrackingNumber,senderName,recipientName,origin,destination,pickup,delivery}

        console.log(packageData)

        try {
            const response = await addPackage( packageData);
            console.log('Package created:', response);
            toast.success("Package Added!");
        } catch (error) {
            toast.error(error.message);
        }
     form.reset()
    }


    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div className='md:flex md:px-24'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-rancho text-xl">Sender Name</span>
                        </label>
                        <input type="text" placeholder="Enter Sender name" className="input input-bordered" name='senderName' required />

                    </div>
                    <div className="form-control md:ml-4 md:w-1/2">
                        <label className="label">
                            <span className="label-text font-rancho text-xl">Recipient Name</span>
                        </label>
                        <input type="text" placeholder="Enter coffee chef" className="input input-bordered" name='recipientName' required />
                    </div>
                </div>


                <div className='md:flex md:px-24'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-rancho text-xl">Origin</span>
                        </label>
                        <input type="text" placeholder="Enter Origin" className="input input-bordered" name='origin' required />

                    </div>
                    <div className="form-control md:ml-4 md:w-1/2">
                        <label className="label">
                            <span className="label-text font-rancho text-xl">Destination</span>
                        </label>
                        <input type="text" placeholder="Enter Destination" className="input input-bordered" name='destination' required />
                    </div>
                </div>
                <div className='md:flex md:px-24'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-rancho text-xl">Delivery Date</span>
                        </label>
                        <input type="date" placeholder="Enter Delivery Date" className="input input-bordered" name='delivery' required />

                    </div>
                    <div className="form-control md:ml-4 md:w-1/2">
                        <label className="label">
                            <span className="label-text font-rancho text-xl">Pickup Date</span>
                        </label>
                        <input type="date" placeholder="Enter Pickup Date" className="input input-bordered" name='pickup' required />
                    </div>
                </div>
                <div className="form-control md:px-24  w-full">
                    <input className='btn mt-3 w-full mx-auto border-2 border-primary text-xl text-white hover:bg-primary bg-secondary' type="submit" value="Create Package" />
                </div>

            </form>

        </div>
    );
};

export default CreatePackage;