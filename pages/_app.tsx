import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../stores'
import 'antd/dist/reset.css'
import { GlobalStyled } from '../ui/layout/layout/styled'
import { Layout } from '../ui/layout'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <GlobalStyled />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}
