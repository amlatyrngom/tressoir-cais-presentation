import React from 'react'
import { createRoot } from 'react-dom/client'
import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'

const root = createRoot(document.getElementById('root'))
root.render(
  React.createElement(Tldraw, {
    persistenceKey: 'tressoir-sketches',
  }),
)
