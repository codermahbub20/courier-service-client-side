/* eslint-disable react/prop-types */
import { useState } from 'react';

const TrackingForm1 = ({ book }) => {
    const [trackingInput, setTrackingInput] = useState('');
    const [trackingError, setTrackingError] = useState(false);
    const tracker = book?.packageTrackingNumber?.trackingNumber;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const tracking = form.tracking.value;
        setTrackingInput(tracking);

        if (tracking === tracker) {
            setTrackingError(false);
        } else {
            setTrackingError(true);
        }
    };

    return (
        <div>
           
            <form onSubmit={handleSubmit}>
                <label htmlFor="tracking-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="text"
                        id="tracking-search"
                        name="tracking"
                        className="block w-[300px] md:w-[400px] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter tracking number"
                        required
                    />
                    <button
                        type="submit"
                        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Search
                    </button>
                </div>
            </form>

            {trackingInput && (
                <div className="mt-4">
                    {trackingError ? (
                        <p className="text-red-500">Your Tracking Number is Invalid</p>
                    ) : (
                        <div className='text-xl bg-black text-white p-5 font-rancho'>
                            <h2>Package Details</h2>
                            <p className='text-green-600 font-bold'>Your Product Is  {book?.update}</p>
                            <p>Your Name: {book?.yourName}</p>
                            <p>Recipient: {book?.recipientName}</p>
                            <p>Your Adress: {book?.adress}</p>
                            <p>Destination: {book?.destination}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default TrackingForm1;
