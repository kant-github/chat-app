import Image from "next/image";
import ChatCards from "../base/ChatCards";
import CreateChatCard from "./CreateChatCard";
import { GroupChatType } from "types";
interface props {
    groups: GroupChatType[];
    session: any
}

export default async function ({ groups, session }: props) {
    return (
        <div className="w-full bg-[#f2f2f2]">
            <div className="md:pl-12 w-full flex flex-row justify-center gap-x-40 items-center">
                <CreateChatCard user={session?.user} />
                <div className="mr-36 md:block hidden">
                    <Image src="/images/dashboard-conversation.png" width={400} height={400} className="" alt="dashboard-conversation" />
                </div>
            </div>
            <div>
                <ChatCards groups={groups} />
            </div>
        </div>
    );
}