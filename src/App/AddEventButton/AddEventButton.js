import React from "react";

import { useDispatch } from "react-redux";
import { openEventModal } from "../../store/actionCreators/modal";

export default function AddEventButton({ ...props }) {
  const dispatch = useDispatch();

  function openModal() {
    dispatch(openEventModal());
  }

  return (
    <button className='button is-success' onClick={openModal} {...props}>
      Add Event
    </button>
  );
}
