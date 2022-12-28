import Head from 'next/head'
import { Wardrobe } from '../ui/pages'

export default function HomePage() {
    return (
        <>
            <Head>
                <title>wardrobe</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1"
                />
            </Head>
            <Wardrobe />
        </>
    )
}
