import React from 'react'

import Page from '../components/Page'
import { attributes, react as HomeContent } from '../content/home.md'

export default () => {
  let { title, cats } = attributes;
  return (
    <Page>
      <h1>{title}</h1>
      <HomeContent />
      <ul>
        {cats.map((cat, k) => (
          <li key={k}>
            <h2>{cat.name}</h2>
            <p>{cat.description}</p>
          </li>
        ))}
      </ul>
    </Page>
  )
}
