import Link from 'next/link'
import Image from 'next/image'
//import Logo from './dojo-logo.png'
import Logo from './estrux.png'
import LogoutButton from './LogoutButton'

export default function Navbar({ user }) {
  return (
    <nav>
      <Image
        src={Logo}
        alt='Estrux Helpdesk logo'
        width={70}
        placeholder='blur'
        quality={100}
      />
      <h1>Estrux Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets" className="mr-auto">Tickets</Link>
      {user && <span>Hello, {user.email}</span>}
      <LogoutButton />
    </nav>
  )
}