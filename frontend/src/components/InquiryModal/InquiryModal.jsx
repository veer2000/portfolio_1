import { useEffect, useState } from "react";
import ContactTabs from "./ContactTabs";
import FriendForm from "./FriendForm";
import HrForm from "./HrForm";
import "./InquiryModal.css";

function InquiryModal({ isOpen, onClose }) {
  const [contactType, setContactType] = useState("friend");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="modal-title">Contact Me</h2>

        <ContactTabs
          contactType={contactType}
          setContactType={setContactType}
        />

        {contactType === "friend" ? (
          <FriendForm onClose={onClose} />
        ) : (
          <HrForm onClose={onClose} />
        )}
      </div>
    </div>
  );
}

export default InquiryModal;
