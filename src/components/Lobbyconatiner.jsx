import React from "react";
import { useState } from "react";
const Lobbyconatiner = () => {
  const [displayName, setDisplayName] = useState(
    sessionStorage.getItem("display_name")
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(displayName);
    sessionStorage.setItem("display_name", e.target.name.value);

    let inviteCode = e.target.room.value;
    if (!inviteCode) {
      inviteCode = String(Math.floor(Math.random() * 10000));
    }
    window.location = `room.html?room=${inviteCode}`;
  };
  return (
    <div>
      <main id="room__lobby__container">
        <div id="form__container">
          <div id="form__container__header">
            <p> Create or Join Room</p>
          </div>

          <form onSubmit={(e) => handleSubmit(e)} id="lobby__form">
            <div className="form__field__wrapper">
              <label>Your Name</label>
              <input
                type="text"
                value={displayName ? displayName : ""}
                name="name"
                onChange={(e) => setDisplayName(e.target.value)}
                required
                placeholder="Enter your display name..."
              />
            </div>

            <div className="form__field__wrapper">
              <label>Room Name</label>
              <input type="text" name="room" placeholder="Enter room name..." />
            </div>

            <div className="form__field__wrapper">
              <button type="submit">
                Go to Room
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Lobbyconatiner;
