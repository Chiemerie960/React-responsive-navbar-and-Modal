import React from 'react'
import "./Modal.css"

const Modal = ({theModal, toggleModal}) => {
  // console.log(toggleModal);
  return (
    <div className='modalContent'>
      <p className={theModal ? "openModal": "closeModal"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque praesentium accusantium ut nihil modi illum amet quod repellat odio beatae reprehenderit vero corporis aliquid voluptatem, possimus illo dolore alias officia?
        </p>
      <button onClick={toggleModal}>{!theModal ? "Open Modal" : "Close Modal"}</button>
    </div>
  )
}

export default Modal