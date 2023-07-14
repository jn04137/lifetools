import Image from 'next/image'
import Layout from '../components/layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <div className="flex justify-center">
        <div className="w-[500px] text-center space-y-4">
          <div>
            <h1 className="text-6xl font-bold">twocoins</h1> 
            <div className="text-xl space-y-2">
              <p>
                A site with tools to assist people in their adventures through life.
              </p>
              <p>Some tools (will) even have cool visualizations.</p>
            </div>
          </div>
          <div className="space-y-4 flex flex-col">
            <Link 
              href="/tools/compoundinterest"
              className="py-2 bg-indigo-600 text-white rounded-xl shadow"
            >
            Compound Interest Tool
            </Link>
            <Link 
              href="/tools/loancalculator"
              className="py-2 bg-indigo-600 text-white rounded-xl shadow"
            >
              Loan Calculator 
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
