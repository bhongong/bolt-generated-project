import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>About Us - Company Name</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          About <span className="text-blue-600">Company Name</span>
        </h1>

        <p className="mt-3 text-2xl">
          We are a company dedicated to providing innovative solutions.
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link href="/" className="p-6 m-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Home &rarr;</h3>
            <p className="mt-4 text-xl">
              Go back to the home page.
            </p>
          </Link>
        </div>
      </main>
    </div>
  )
}
