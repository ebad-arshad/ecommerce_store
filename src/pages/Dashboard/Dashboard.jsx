import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from '../../firebase/firebase'
import { useNavigate } from 'react-router-dom';
import UploadImage from '../../components/UploadImage/UploadImage'
import { upload } from '../../utils/uploadImage'
import { RxCross2, RxDotFilled } from 'react-icons/rx'
import Alert_Modal from '../../components/Alert_Modal/Alert_Modal'
import { doc, setDoc } from "firebase/firestore";
import Tab from '../../components/Tab/Tab'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

const Dashboard = () => {

  const navigate = useNavigate()
  const [user, set_user] = useState('')
  const [show_modal, set_show_modal] = useState(false)

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        set_user(user.uid)
      } else {
        navigate('/admin/login')
      }
    });

  }, [])

  const uploadCurrentImage = async (arr) => {
    if (!arr || arr.length < 1) return set_show_modal(true)
    try {
      const imgURL = await upload(arr[0], `banner/banner.png`);
      const docRef = await setDoc(doc(db, "banner", 'banner'), { imgURL });
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {show_modal && <Alert_Modal set_show_modal={set_show_modal} placement='top' message='Error' desc='Image is incorrect.' icon={<RxCross2 />} />}
      <div className='min-h-screen px-16'>
        <Breadcrumb route_name={[{ name: 'Home', route: '/home', }, { name: 'Dashboard', route: '/admin/dashboard', }]} name='My Dashboard' separator={<RxDotFilled />} />
        <UploadImage button={true} uploadCurrentImage={uploadCurrentImage} />
        <Tab />
      </div>
    </>
  )
}

export default Dashboard