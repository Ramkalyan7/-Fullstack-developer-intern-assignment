import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function User() {
  const { state } = useLocation();
  const { name, db, img, phnumber } = state; // Read values passed on state
  const [days, setDays] = useState(0);
  useEffect(() => {
    function calculateDays() {
      let today = new Date();
      let bday = new Date(db);

      let upcomingBday = new Date(
        today.getFullYear(),
        bday.getMonth(),
        bday.getDate()
      );

      if (today > upcomingBday) {
        upcomingBday.setFullYear(today.getFullYear() + 1);
      }

      var one_day = 24 * 60 * 60 * 1000;

      let daysLeft = Math.ceil(
        (upcomingBday.getTime() - today.getTime()) / one_day
      );
      setDays(daysLeft);
    }

    calculateDays();
  }, [db]);

  return (
    <>
      <section className="text-gray-600 body-font bg-gradient-to-r from-cyan-50 to-blue-50 sm:mt-5 mt-10">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={img}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {name}
            </h1>
            <p className="mb-8 leading-relaxed sm:text-2xl text-xl">
              <span className="font-bold">Phone number: </span> {phnumber}
            </p>
            <p className="sm:text-4xl text-3xl">
              <span className="font-bold"> {days} </span>
              {days > 1 ? "days" : "day"} to go for this person's next birthday
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default User;
