import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Miguel's Contact Page",
    description: 'Generated with love by Vercel',
    keywords: ['Contact Page', 'Miguel', 'Información', ]
  }
  

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}