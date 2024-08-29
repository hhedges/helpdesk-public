import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>Welcome to the Estrux Helpdesk.</p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>

      <div className="card">
        <h3>New member of the Estrux team...</h3>
        <p>Please welcome AI...</p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>What a lovely ui</p>
      </div>
    </main>
  )
}
