import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  deleteEvent,
  setUpdatableEvent,
} from "../../store/actionCreators/event";

export default function EventControlDropdown({ _id }) {
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.event);
  const specificEvent = events.find((event) => event._id === _id);

  function onDeleteEvent(event) {
    event.stopPropagation();
    if (
      window.confirm(
        `Are you sure you want to delete ${specificEvent.title} from your list?`
      )
    ) {
      dispatch(deleteEvent(_id));
    }
  }

  function onUpdateEvent(event) {
    event.stopPropagation();
    dispatch(setUpdatableEvent(_id));
  }

  return (
    <div>
      <div className={`dropdown is-right is-hoverable`}>
        <div className='dropdown-trigger'>
          <button
            className='button is-small'
            aria-haspopup='true'
            aria-controls='dropdown-menu'
          >
            <span className='icon is-small'>
              <i className='fas fa-ellipsis-h'></i>
            </span>
          </button>
        </div>
        <div className='dropdown-menu' id='dropdown-menu' role='menu'>
          <div className='dropdown-content'>
            <button
              className='button is-white dropdown-item'
              onClick={onUpdateEvent}
            >
              <span className='icon'>
                <i className='far fa-edit'></i>
              </span>
              <span>Update Event</span>
            </button>
            <button
              className='button is-white dropdown-item'
              onClick={onDeleteEvent}
            >
              <span className='icon'>
                <i className='far fa-trash-alt'></i>
              </span>
              <span>Delete Event</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
