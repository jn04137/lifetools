import Link from 'next/link'

export default function Navbar() {
  return(
    <div className="grid grid-cols-3 py-1.5 px-8 shadow">
      <h1 className="text-xl">&lt;twocoins&gt;</h1>
      <div className="flex justify-center items-center">
        <ul className="flex space-x-3">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  )
}
