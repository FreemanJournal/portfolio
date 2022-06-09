import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="flex h-24 w-full items-center justify-center border-t hover:text-emerald-400 duration-300">
            <Link
                className="flex items-center justify-center gap-2 "
                href="/"
            >
                Developed By Md Ishaq
            </Link>
        </footer>
    )
}
