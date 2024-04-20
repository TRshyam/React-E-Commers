import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState} from 'react';
import {Link} from 'react-router-dom';
// import Header from '../components/Header';



import {
    updateUserStart,
    updateUserSuccess,
    updateUserFailure,} from '../redux/user/userSlice' 
import Navbar from '../components/Navbar';


// import Header from '../components/Header';

function Profile() {

    const { currentUser } = useSelector((state) => state.user);

    console.log(currentUser.user.email)
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({});
    const [mess, setMess] = useState(''); // State for success message content
    const [updateSuccess, setUpdateSuccess] = useState(false); // State for success message




    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      };
      console.log(formData)


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          dispatch(updateUserStart());
          const res = await fetch(`/api/user/update/${currentUser._id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          const data = await res.json();
          if (data.success === false) {
            dispatch(updateUserFailure(data.mes));
            return;
          }
    
          dispatch(updateUserSuccess(data));
          setUpdateSuccess(true);
          setMess('Updated Successfully'); // Set the success message

          
        } catch (error) {
          dispatch(updateUserFailure(error.mes));
        }
      };
    



  
    return (
      <div>
        {/* <Header/> */}
        <Navbar/>
        <div className="h-screen w-full ">
            <div className='bg-red-200 w-full flex justify-center p-10  h-full  '>
                <div className='bg-lime-100  w-[20rem]    '>
                    <div className='bg-fuchsia-200 p-2 my-5'>
                        <div className='flex justify-around items-center'>
                            <img src="https://avatars.githubusercontent.com/u/93422564?v=4" alt="" className='w-[5rem] rounded-full ' />
                            <div>
                                <h1>Hello,</h1>
                                <h1>{currentUser.user.email}</h1>
                            </div>
                        </div>


                    </div>
                </div>
                <div className='bg-lime-600  mx-5 w-[70rem]   '>
                    <div className="bg-white  l p-8 rounded-lg shadow-md ">
                 <h1 className="text-2xl font-semibold mb-4">My Profile</h1>
                 {updateSuccess && (
           <div className="text-green-500 mb-4">{mess}</div> // Display the success message
         )}
                 <form onSubmit={handleSubmit} >
                     <div className="mb-4">
                         <label htmlFor="username"   className="text-gray-600 block">Username:</label>
                         <input type="text"  id="username" name="username" className="w-full border rounded-md px-3 py-2" placeholder="Your username" defaultValue={currentUser.message} onChange={handleChange} />
                     </div>
                     <div className="mb-4">
                         <label htmlFor="email" className="text-gray-600 block">Email:</label>
                         <input type="email" onChange={handleChange} id="email" name="email" className="w-full border rounded-md px-3 py-2" placeholder="youremail@example.com" defaultValue={currentUser.user.email} />
                     </div>
                     <div className="mb-4">
                         <label htmlFor="phoneNumber" className="text-gray-600 block">Phone Number:</label>
                         <input type="tel" onChange={handleChange} id="phoneNumber" name="phoneNumber" className="w-full border rounded-md px-3 py-2" placeholder="Phone number" defaultValue={currentUser.phoneNumber} />
                     </div>
 
                     <div className="mb-4">
                         <label htmlFor="address" className="text-gray-600 block">Address:</label>
                         <textarea id="address" onChange={handleChange} name="address" className="w-full border rounded-md px-3 py-2" placeholder="Your address" rows="3" defaultValue={currentUser.address} ></textarea>
                     </div>
                     <div className="mb-4">
                         <label htmlFor="zipcode" className="text-gray-600 block">Zip code:</label>
                         <input type="tel" onChange={handleChange} id="zipcode" name="zipcode" className="w-full border rounded-md px-3 py-2" placeholder="Zip code"  />
                     </div>
                     <div className="mb-4">
                         <label htmlFor="password" className="text-gray-600 block">Update Password:</label>
                         <input type="password" id="password" name="password" className="w-full border rounded-md px-3 py-2" placeholder="********" />
                     </div>
                     <button type="submit"   className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Update Profile</button>
                 </form>
 
 
             <Link to={"/"}>
               <span className='text-cyan-500'>Home Page</span>
             </Link>
             </div>
                </div>

            </div>

           
             
         </div>
      </div>


    );
}

export default Profile;