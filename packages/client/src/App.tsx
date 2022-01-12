import React from 'react'
import './App.css'
import HelloWorld from './components/HelloWorld'
import DefaultLayout from './components/layouts/Default'
import { ErrorBoundary } from 'react-error-boundary'

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre className="text-red-600">{error.message}</pre>
    </div>
  )
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <DefaultLayout>
        <HelloWorld />
      </DefaultLayout>
    </ErrorBoundary>
  )
}

export default App
