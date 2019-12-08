import Head from "next/head"
import React from 'react'

export default ({ children }) => (
  <>
    <Head>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Head>
    <article>
      {children}
    </article>
  </>
)
