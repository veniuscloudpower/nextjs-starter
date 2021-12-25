import {Layout} from '../component/Layout'
import {useEffect} from "react";

export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        document.querySelector("body").classList.add("sidebar-mini");
    })
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
