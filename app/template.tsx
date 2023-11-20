'use client'
import Navbar from '@/components/navbar'
import { useEffect, useRef, useState } from 'react'

let prevscr: number = 0;
enum scroll {
    'hidden',
    'fixed'
}

export default function Template({ children }: { children: React.ReactNode }) {
    const [show, setShow] = useState<scroll>(1);
    const testRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (testRef && testRef.current) {
            testRef.current.addEventListener('scroll', () => handleScroll())
            return (
                testRef.current.removeEventListener('scroll', () => handleScroll())
            )
        }

    }, [testRef])

    const handleScroll = () => {
        let scr = testRef.current!.scrollTop;
        if (prevscr > scr || scr < 70) {
            setShow(1)
        } else {
            setShow(0)
        }
        prevscr = scr;
    }
    return (
        <div ref={testRef}>
            {show && <Navbar />}
            {children}
        </div>
    )
}