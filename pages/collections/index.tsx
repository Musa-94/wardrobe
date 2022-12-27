import { Collections } from '@/pages/collections'
import Head from 'next/head'

export default function CollectionsPage() {
    return (
        <>
            <Head>
                <title>collections</title>
                <meta name="description" content="collections" />
            </Head>
            <Collections />
        </>
    )
}
