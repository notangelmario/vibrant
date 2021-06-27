import React from 'react'


export function usePWAInstalled() {
    if(process.browser) {
        if (window.matchMedia('(display-mode: standalone)').matches) {
            return true
        } else {
            return false
        }
    }
}