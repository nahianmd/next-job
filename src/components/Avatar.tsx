import {Avatar, AvatarFallback, AvatarImage,} from "@/components/ui/avatar"

export function UserAvatar({src}: { src: string }) {
    return (
        <Avatar>
            <AvatarImage src={src} alt="@shadcn"/>
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}
