import Head from 'next/head'
import { Main } from '../ui/pages'

export default function Home() {
    return (
        <>
            <Head>
                <title>wardrobe</title>
                <meta name="description" content="my personal wardrobe" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Main />
        </>
    )
}
