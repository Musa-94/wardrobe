import Head from 'next/head'
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>wardrobe</title>
        <meta name="description" content="my personal wardrobe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Link href="/wardrobe">
            Wardrobe
        </Link>
    </div>
  )
}
