"use client"
import { signOut } from "next-auth/react"
import Link from "next/link"
import React from 'react'

export default function Signout() {
  return (
    <Link href={"/"} onClick={() => signOut()}>SignOut</Link>
  )
}
