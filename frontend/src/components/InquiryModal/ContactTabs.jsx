function ContactTabs({ contactType, setContactType }) {
  return (
    <div className="contact-tabs">
      <button
        className={`contact-tab ${
          contactType === "friend" ? "active" : ""
        }`}
        onClick={() => setContactType("friend")}
      >
        Friend
      </button>

      <button
        className={`contact-tab ${
          contactType === "hr" ? "active" : ""
        }`}
        onClick={() => setContactType("hr")}
      >
        HR
      </button>
    </div>
  );
}

export default ContactTabs;
