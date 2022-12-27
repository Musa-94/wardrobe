import { Settings } from '@/pages/settings'
import Head from 'next/head'

export default function SettingsPage() {
    return (
        <>
            <Head>
                <title>settings</title>
                <meta name="description" content="settings" />
            </Head>

            <Settings />
        </>
    )
}
