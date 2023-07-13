import Image from 'next/image'
import Layout from '../components/layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <div className="flex justify-center">
        <div className="w-[450px] text-center space-y-4">
          <div>
            <h1 className="text-5xl font-bold">twocoins</h1> 
            <p>
              A site with tools to assist people in their adventures through life.
            </p>
            <p>Some tools even have cool visualizations.</p>
          </div>
          <ul>
            <li>
              <Link 
                href="/tools/compoundinterest"
                className="px-8 py-2 bg-blue-500 text-white rounded-xl shadow"
              >
              Compound Interest Tool
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
