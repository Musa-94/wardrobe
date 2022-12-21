import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../stores'
import { Layout } from '@/components/layout'
import { ThemeProvider } from 'styled-components'
import { Themes, themes } from '../themes'
import 'antd/dist/reset.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <ThemeProvider theme={themes as Themes}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </Provider>
    )
}
