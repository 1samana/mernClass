import React, {useEffect, useState} from 'react'
import AdminNavbar from './AdminNavbar'
import { toast } from 'react-toastify';

function AdminAllUsers() {
  const [data, setData] = useState([]);
  async function deleteUser(id) {
    try {
      const response = await fetch(`/proxy/admin/delete/${id}`, {
        method: "DELETE",
      });
  
      const result = await response.json();
      toast.success(result.msg);
      //fetchUsers();
      setData(data.filter((user) => user._id !== id));
    } catch (error) {
      toast.error(error.message || "An error occurred");
    }
  }
  

    async function fetchUsers() {
        try {
          const response = await fetch("/proxy/admin/list", {
            headers: {
              "Content-Type": "application/json"},
            method: "GET"
          });
          const result = await response.json();
          console.log(result);
          if (result.data) {
            setData(result.data);
          } else {
            console.error("Unexpected response format:", result);
            toast.error("Failed to load users. Please try again.");
          }
          
        } catch (error) {
          toast.error(error.message);
        }
    }
    //it is used tp call the function on the page render
    useEffect(()=>{
      fetchUsers();
    },[]);
  return (
    <>
    <div className='flex'>
        <div>
        <AdminNavbar/>
        </div>
        <div className='flex-1 flex-col justify-center items-center '>
          <h1 className='text-5xl text-purple-700 font-extrabold text-center my-5'>All Users</h1>
          <div className='mr-10 ml-10'>
         
        
        <table className=" w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-purple-500 text-white">
              <th className="px-4 py-2 border border-white">User ID</th>
              <th className="px-4 py-2 border border-white">Name</th>
              <th className="px-4 py-2 border border-white">Email</th>
              
              <th className="px-4 py-2 border border-white">Role</th>
              <th className="px-4 py-2 border border-white">Phone</th>
              <th className="px-4 py-2 border border-white">Actions</th>
            </tr>
          </thead>
          <tbody>
          {data.length > 0 ? (
            data.map((user) => (
              <tr key={user._id} className="bg-white">
                <td className="px-4 py-2">{user._id}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">
                  {user.role}
                </td>
                <td className="px-4 py-2">
                  {user.phone && user.phone.length > 0
                    ? user.phone.join(", ")
                    : "N/A"}
                </td>
                <td className="px-4 py-2 flex items-center justify-center mt-6 ">
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => deleteUser(user._id)}>
                    Delete
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
                    Edit
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center py-4">
                No users available.
              </td>
            </tr>
          )}
        </tbody>
        </table>
        </div>
        </div>
    </div>
    </>
  )
}

export default AdminAllUsers
