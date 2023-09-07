import React, { useState } from 'react'
import Modal from '../modal/Modal'


const Home = () => {
  const [theModal, setTheModal] = useState(false)
  const toggleModal = () => setTheModal(!theModal)
  // console.log(toggleModal);
  return (
    <div>
      <Modal theModal={theModal} toggleModal={toggleModal}/>
    </div>
  )
}

export default Home