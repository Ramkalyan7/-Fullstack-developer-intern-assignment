import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Table() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetechData = async () => {
      const { data } = await axios.get("https://randomuser.me/api/?results=10");
      setUsers(data.results);
    };
    fetechData();
  }, []);

  const handleClick = (name, image, dob, number) => {
    navigate(`/${name}`, {
      state: { name: name, db: dob, img: image, phnumber: number },
    });
  };

  return (
    <div className="flex items-center justify-center py-10 bg-gradient-to-r from-cyan-50 to-blue-50 sm:mt-10 mt-20">
      <div className="sm:w-auto w-[88%] overflow-x-scroll sm:px-0 ">
        <table className="shadow-lg bg-white ">
          <thead>
            <tr>
              <th className="bg-blue-100 border-2  text-left px-8 py-4">
                Name
              </th>
              <th className="bg-blue-100 border-2  text-left px-8 py-4">
                Gender
              </th>
              <th className="bg-blue-100 border-2  text-left px-8 py-4">
                City
              </th>
              <th className="bg-blue-100 border-2  text-left px-8 py-4">
                State
              </th>
              <th className="bg-blue-100 border-2  text-left px-8 py-4">
                Country
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => {
              return (
                <tr
                  key={user.name.first}
                  className="cursor-pointer"
                  onClick={() => {
                    handleClick(
                      `${user.name.first} ${user.name.last}`,
                      user.picture.large,
                      user.dob.date,
                      user.phone
                    );
                  }}
                >
                  <td className="border-2  px-8 py-4 font-semibold">
                    {`${user.name.first} ${user.name.last}`}
                  </td>
                  <td className="border-2  px-8 py-4">{user.gender}</td>
                  <td className="border-2  px-8 py-4">{user.location.city}</td>
                  <td className="border-2  px-8 py-4">{user.location.state}</td>
                  <td className="border-2  px-8 py-4">
                    {user.location.country}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
