"use client"
import React, { useEffect } from 'react'

export default function BootstrapComponet() {
    useEffect(()=>{
        import('@/public/assets/js/bootstrap');
    },[])
  return null;
}
