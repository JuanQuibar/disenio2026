import { ListadoWrapper } from "@/app/components/listado-sin-fotos/listado-wrapper";
import { ChatBotWrapper } from "@/app/components/chat-bot/chat-bot-wrapper";
import { HomePair } from "./home-pair";

export function LegionariusChatWrapper() {
  return HomePair({
    name: "legionarius-chat",
    first: ListadoWrapper(),
    second: ChatBotWrapper(),
  });
}
