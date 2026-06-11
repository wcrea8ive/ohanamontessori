import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Join Our Mailing List — Ohana Montessori',
}

export default function MailingListPage() {
  redirect('/contact')
}
