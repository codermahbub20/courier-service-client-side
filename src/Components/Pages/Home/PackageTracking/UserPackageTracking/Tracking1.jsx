import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../../../../api/bookings";
import TrackingForm1 from "./TrackingForm1";


const Tracking1 = () => {

  const { data: bookings = [], refetch } = useQuery({
    queryKey: ['booking'],
    queryFn: async () => await getBookings(),
  })

  return (

    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://www.envistaforensics.com/media/mebd20dj/adobestock_568597769.jpeg?center=0.66971409574468088,0.49994438669522168&mode=crop&width=900&height=447&rnd=133426462407530000&format=webp&quality=80)",
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-2xl bg-black p-5">
          <h1 className="md:text-xl md:font-bold font-rancho text-primary">If You Book Online Track Here</h1>
          {bookings &&
            bookings.map(book => (
              <TrackingForm1
                key={book._id}
                book={book}
                refetch={refetch}
              />
            ))}        
        </div>
      </div>
    </div>

  );
};

export default Tracking1;
