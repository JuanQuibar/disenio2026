import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import { Chatbot } from "./chat-bot";

export function ChatBotWrapper() {
  return (
    <>
      <div
        id="chat-vox-dei"
        data-home-module="chat-vox-dei"
        className="chat-module mb-4 border-t-2 separadores pb-2 pt-1"
      >
        <h3 className="chat-mobile-heading text-cabezal font-sans font-bold uppercase color-cabezal pb-2">
          {" "}
          chat vox dei
        </h3>
        <div className="chat-panel p-2 bg-white rounded-lg shadow-md">
          <div className="chat-desktop-header">
            <div className="chat-desktop-heading">
              <ChatBubbleLeftRightIcon
                aria-hidden="true"
                className="chat-desktop-icon"
              />
              <h3>CHAT VOX DEI</h3>
            </div>
          </div>
          <Chatbot />
        </div>
      </div>
    </>
  );
}
