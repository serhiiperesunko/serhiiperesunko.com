import Head from 'next/head'
import {HTMLAttributes, ReactNode} from 'react'

type Props = HTMLAttributes<HTMLDivElement> & {
    children?: ReactNode
    title?: string
}

const Layout = ({ children, title = 'This is the default title', ...rest }: Props) => (
    <div {...rest}>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        {children}
    </div>
)

export default Layout
