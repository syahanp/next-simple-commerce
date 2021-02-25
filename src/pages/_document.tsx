import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet as StyledStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>

                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>

                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" /> 
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
    
    // Render app and page and get the context of the page with collected side effects.
    const styledSheet = new StyledStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) =>
                    styledSheet.collectStyles(<App {...props} />),
                })

        const initialProps = await Document.getInitialProps(ctx)
        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    {styledSheet.getStyleElement()}
                </>
            ),
        }
    } 
    finally {
        styledSheet.seal()
    }
};
