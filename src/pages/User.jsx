import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";

export default function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  useEffect(() => {
    // Fetch data
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((err) => {
        setError("Gagal mengambil data user. Silakan coba lagi.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const nextPage = () => {
    if (currentPage * itemsPerPage < users.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const errorInfo = error && (
    <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
      <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
      {error}
    </div>
  );

  const loadingInfo = loading && (
    <div className="bg-gray-200 mb-5 p-5 text-sm rounded flex items-center">
      <ImSpinner2 className="me-2 animate-spin" />
      Sedang memuat data user...
    </div>
  );

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center flex items-center justify-center">
        <FaUserAlt className="mr-2 text-xl" />
        Data User
      </h2>

      {errorInfo}
      {loadingInfo}

      {!loading && !error && (
        <div className="overflow-x-auto ">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Nama</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Email</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Telepon</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Kota</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b text-sm text-gray-800">
                    {user.firstName} {user.lastName}
                  </td>
                  <td className="px-4 py-2 border-b text-sm text-gray-800">{user.email}</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-800">{user.phone}</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-800">{user.address.city}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 flex justify-between items-center">
            <button
              onClick={prevPage}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm"
              disabled={currentPage === 1}
            >
              Sebelumnya
            </button>
            <button
              onClick={nextPage}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm"
              disabled={currentPage * itemsPerPage >= users.length}
            >
              Selanjutnya
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
