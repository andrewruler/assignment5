function Chatbot() {
  return (
    <div className="chatbot-container">   
        <button className="chatbot-toggler">
            <span className="material-symbols-rounded">mode_comment</span>
            <span className="material-symbols-outlined">close</span>
          </button>
          <div className="chatbot">
            <header>
              <h2>Chatbot</h2>
              <span className="close-btn material-symbols-outlined">close</span>
            </header>
            <ul className="chatbox">
              <li className="chat incoming">
                <span className="material-symbols-outlined">smart_toy</span>
                <p>Hi there 👋<br>How can I help you today?</p>
              </li>
            </ul>
            <div className="chat-input">
              <textarea placeholder="Enter a message..." spellcheck="false" required></textarea>
              <span id="send-btn" className="material-symbols-rounded"><button type="submit">send</button></span>
            </div>
        </div>
    </div>
  )
}

export default Chatbot
