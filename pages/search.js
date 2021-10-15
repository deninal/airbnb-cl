import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function Search() {
  // capitalize the first letter of each word
  function capitalize(str) {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(" ");
  }

  // ES6 destructuring
  const router = useRouter(); // use router to get access to the query parameters
  const { location, startDate, endDate, nrOfGuests } = router.query; // pulled out each parameter so I can use them later

  // format date from string to actual date format
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header />

      <main className="flex-grow py-10 px-6">
        <section>
          <p className="text-sm">
            300+ stays • {range} • for {nrOfGuests} guests
          </p>
          <h1 className="text-3xl font-bold mt-2 mb-6">
            Stays in {capitalize(location)}
          </h1>

          <div className="hidden md:inline-flex space-x-2 whitespace-nowrap">
            {/* button styles are pulled from global.css */}
            <p className="button">Free cancelation</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Instant book</p>
            <p className="button">More filters</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;