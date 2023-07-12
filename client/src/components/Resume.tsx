import ErrorPage from './ErrorPage'

export default function Resume({ result }) {
  if (JSON.stringify(result) === '{}') {
    return <ErrorPage />
  }

  const handlePrint = () => alert('Print Successful!')
  return (
    <>
      <button onClick={handlePrint}>Print Page</button>
      <main className="container">
        <p>Hello!</p>
      </main>
    </>
  )
}
