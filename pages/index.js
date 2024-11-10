import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Company Name</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-blue-600">Company Name</span>
        </h1>

        <p className="mt-3 text-2xl">
          We are here to provide you with the best services.
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link href="/about" className="p-6 m-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">About Us &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn more about our company and our mission.
            </p>
          </Link>

          <Link href="/contact" className="p-6 m-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Contact Us &rarr;</h3>
            <p className="mt-4 text-xl">
              Get in touch with us for any inquiries or support.
            </p>
          </Link>
        </div>
      </main>
    </div>
  )
}
