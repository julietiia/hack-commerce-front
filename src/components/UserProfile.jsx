import React, { useState } from 'react'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import {logout} from "../redux/userSlice"



function UserProfile() {

    const user = useSelector((state) => state.user)
const dispatch = useDispatch()
  return (
    <div>
<h3 className='text-center mb-2'>{user.firstname} {user.lastname}</h3>
<p>{user.email}</p>
<p>{user.address}</p>

<button onClick={()=> dispatch(logout())} type="submit" className="col-12 btn btn-dark check-out-button rounded">
        Logout

      </button>

    </div>
  )
}

export default UserProfile