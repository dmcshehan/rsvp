import { OPEN_MODAL, CLOSE_MODAL } from "../actionTypes/modal";

function onModalOpen(modalName) {
  return {
    type: OPEN_MODAL,
    payload: {
      modalName,
    },
  };
}
function closeModal() {
  return {
    type: CLOSE_MODAL,
  };
}

function openEventModal() {
  return onModalOpen("event");
}

function openInviteeModal() {
  return onModalOpen("invitee");
}

export { openEventModal, closeModal, openInviteeModal };
