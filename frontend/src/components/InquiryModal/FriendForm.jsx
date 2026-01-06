import { useState } from "react";
const API_BASE_URL = import.meta.env.VITE_API_URL;

function FriendForm({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); 
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          inquirytype: "friend",
          name,
          email,
          message,
        }),
      });

      if (!res.ok) throw new Error("Failed to submit");

      onClose();
      alert("Message sent successfully!");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="modal-form" onSubmit={handleSubmit}>
      <div className="modal-row">
        <input
          placeholder="Your Name *"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <textarea
        placeholder="Your Message"
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <div className="modal-actions">
        <button className="primary" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
        <button type="button" className="secondary" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default FriendForm;
