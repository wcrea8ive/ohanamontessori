'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ClassroomCard({ room }: { room: { name: string; image: string; description: string } }) {
  const [active, setActive] = useState(false)

  return (
    <div
      className="group relative overflow-hidden rounded-[20px] cursor-pointer"
      style={{ border: '1px solid #fff', aspectRatio: '500 / 599' }}
      onClick={() => setActive((v) => !v)}
    >
      <Image
        src={room.image}
        alt={room.name}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
        className={`object-cover transition-transform duration-500 group-hover:scale-105 ${active ? '!scale-105' : ''}`}
      />
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-transform duration-500 ease-out translate-y-full group-hover:translate-y-0 ${active ? '!translate-y-0' : ''}`}
        style={{ background: 'var(--brown)', padding: '15px' }}
      >
        <p style={{ fontFamily: 'var(--font-work-sans)', fontWeight: 400, fontSize: '14px', lineHeight: '1.4em', color: '#fff', marginBottom: '10px' }}>
          {room.description}
        </p>
        <Link
          href="/our-facility#classrooms"
          className="transition-colors hover:bg-transparent hover:text-white"
          style={{
            fontFamily: 'var(--font-work-sans)',
            fontWeight: 500,
            textTransform: 'uppercase',
            fontSize: '12px',
            color: 'var(--brown)',
            background: '#fff',
            border: '1px solid #fff',
            borderRadius: '100px',
            padding: '8px 22px',
          }}
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}
