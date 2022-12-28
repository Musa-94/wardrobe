import Head from 'next/head'
import { Wardrobe } from '../ui/pages'

export default function HomePage() {
    return (
        <>
            <Head>
                <title>wardrobe</title>
            </Head>
            <Wardrobe />
        </>
    )
}
