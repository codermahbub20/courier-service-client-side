/* eslint-disable react/prop-types */
import { Dialog, Transition } from '@headlessui/react'
import { Elements } from '@stripe/react-stripe-js'
import { Fragment } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from '../Form/CheckoutForm'

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const BookingModal = ({ closeModal, isOpen, bookingInfo }) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                <Dialog.Title
                                    as='h3'
                                    className='text-lg font-medium text-center leading-6 text-gray-900'
                                >
                                    Review Info Before Booked
                                </Dialog.Title>
                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>
                                       Your Name: {bookingInfo?.yourName}
                                    </p>
                                </div>
                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>
                                        Recipient Name: {bookingInfo?.recipientName}
                                    </p>
                                </div>
                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>
                                        Destination: {bookingInfo?.destination}
                                    </p>
                                </div>
                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>
                                       Tracking Number: {bookingInfo?.packageTrackingNumber?.trackingNumber}
                                    </p>
                                </div>

                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>
                                        Weight:{bookingInfo?. weight}
                                    </p>
                                </div>
                                <div className='mt-2'>
                                    <p className='text-sm text-green-500'>
                                        Delivery Charge: ${bookingInfo?.price}
                                    </p>
                                </div>
                                <hr className='mt-8 ' />
                                {/* Card data form */}

                                {/* CheckOut Form */}
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm closeModal={closeModal} bookingInfo={bookingInfo} />
                                </Elements>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default BookingModal