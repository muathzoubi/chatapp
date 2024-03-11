import React from "react";

const ChatButton = (props: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  showChat: boolean;
}) => {
  return (
    <button
      onClick={props.onClick}
      className="chat-button"
      style={{ opacity: props.showChat ? 0.5 : 1 ,zIndex:9999}}
    >
      👋🏻
    </button>
  );
};
const ChatArea = () => {
  const [showChat, setShowChat] = React.useState(true);

  const handleChatBtnClicked = () => {
    setShowChat(!showChat);
  };
  return (
    <div className="chat-area">
      <ChatButton onClick={handleChatBtnClicked} showChat={showChat} />
      {showChat ? (
        <div
          className="form-container"
          style={{ opacity: showChat ? 1 : 0, transition: "opacity 0.5s" }}
        >
          <div className="chat-header">Chat</div>
          <div className="chat-window">
            <ul className="message-list"></ul>
          </div>
          <div className="chat-input">
            <div className="messageBox">
              <div className="fileUploadWrapper">
                <label htmlFor="file">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 337 337"
                  >
                    <circle
                      strokeWidth="20"
                      stroke="#6c6c6c"
                      fill="none"
                      r="158.5"
                      cy="168.5"
                      cx="168.5"
                    ></circle>
                    <path
                      strokeLinecap="round"
                      strokeWidth="25"
                      stroke="#6c6c6c"
                      d="M167.759 79V259"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeWidth="25"
                      stroke="#6c6c6c"
                      d="M79 167.138H259"
                    ></path>
                  </svg>
                  <span className="tooltip">Add an image</span>
                </label>
                <input type="file" id="file" name="file" />
              </div>
              <input
                required
                placeholder="Message..."
                type="text"
                id="messageInput"
              />
              <button id="sendButton">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 664 663"
                >
                  <path
                    fill="none"
                    d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                  ></path>
                  <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="33.67"
                    stroke="#6c6c6c"
                    d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default ChatArea;

export const Opp = () => {
  return (
    <div>
      <div className="arrow arrow--top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="270.11"
          height="649.9"
          overflow="visible"
        >
          <g className="item-to bounce-1">
            <path
              className="geo-arrow draw-in"
              d="M135.06 142.564L267.995 275.5 135.06 408.434 2.125 275.499z"
            />
          </g>
          <circle
            className="geo-arrow item-to bounce-2"
            cx="194.65"
            cy="69.54"
            r="7.96"
          />
          <circle
            className="geo-arrow draw-in"
            cx="194.65"
            cy="39.5"
            r="7.96"
          />
          <circle
            className="geo-arrow item-to bounce-3"
            cx="194.65"
            cy="9.46"
            r="7.96"
          />
          <g className="geo-arrow item-to bounce-2">
            <path
              className="st0 draw-in"
              d="M181.21 619.5l13.27 27 13.27-27zM194.48 644.5v-552"
            />
          </g>
        </svg>
      </div>
      <div className="arrow arrow--bottom">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31.35"
          height="649.9"
          overflow="visible"
        >
          <g className="item-to bounce-1">
            <circle
              className="geo-arrow item-to bounce-3"
              cx="15.5"
              cy="580.36"
              r="7.96"
            />
            <circle
              className="geo-arrow draw-in"
              cx="15.5"
              cy="610.4"
              r="7.96"
            />
            <circle
              className="geo-arrow item-to bounce-2"
              cx="15.5"
              cy="640.44"
              r="7.96"
            />
            <g className="item-to bounce-2">
              <path
                className="geo-arrow draw-in"
                d="M28.94 30.4l-13.26-27-13.27 27zM15.68 5.4v552"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};
