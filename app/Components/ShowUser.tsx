"use client"

import { useSession } from "next-auth/react"

export default function ShowUser() {
    const session=useSession();
    console.log(session);
  return (
    <div>
        {JSON.stringify(session)}
    </div>
  )
}
