import Document, { Head, Main, NextScript } from "next/document"
import React from "react"

export default class HempstartDoc extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="google-site-verification" content="" />
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width,minimum-scale=1" />
          <meta name="robots" content="noindex,nofollow" />
          <meta name="googlebot" content="noindex,nofollow" />
          <meta name="google" content="notranslate" />
          <meta name="keywords" content="hemp, cannabis, advisory, industry" />
          <meta name="author" content="basement.studio" />
          <meta name="subject" content="Born to Grow" />
          <meta
            name="description"
            content="To shape the cannabis industry’s future by striving for constant evolution in products, places, and people."
          />
          <link rel="canonical" href="https://hempstart.co" />
          <meta name="referrer" content="no-referrer" />
          <meta name="format-detection" content="telephone=no" />
          <meta httpEquiv="x-dns-prefetch-control" content="off" />
          <meta httpEquiv="Window-Target" content="_value" />
          <link rel="stylesheet" href="./static/global.css" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="./static/icons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="./static/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="./static/icons/favicon-16x16.png"
          />
          <link
            rel="shortcut icon"
            href="./static/favicon.ico"
            type="image/x-icon"
          />
          <link rel="icon" href="./static/favicon.ico" type="image/x-icon" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Born to grow" />
          <meta
            property="og:description"
            content="To shape the cannabis industry’s future by striving for constant evolution in products, places, and people."
          />
          <meta property="og:url" content="https://hempstart.co" />
          <meta property="og:site_name" content="Born to Grow | hempstart.co" />
          <meta property="og:image" content="./static/OG.png" />
          <meta
            property="og:image:secure_url"
            content="https://hempstart.co/static/OG.png"
          />

          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:description"
            content="To shape the cannabis industry’s future by striving for constant evolution in products, places, and people."
          />
          <meta name="twitter:title" content="Born to Grow | hempstart.co" />
          <meta
            name="twitter:image"
            content="https://hempstart.co/static/OG.png"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
