import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './index.css'

function App() {

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Sentiment Feedback Analyze</h1>
        <form className="mb-4">
          <textarea
            className="w-full p-2 border rounded mb-2"
            placeholder="Enter the Feedback ..."
            rows="4" />
          <button type='submit' className='px-4 py-2 rounded bg-blue-600 text-white'>Submit Feedback</button>
        </form>
        <h2 className='text-xl font-semibold mb-2'>Feedback History</h2>
        <table className="table-auto w-full text-sm text-left text-gray-500">
          <thead className="text-gray-700 bg-gray-50">
            <tr>
              <th>Feeback</th>
              <th>Score</th>
              <th>Sentiment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Feeback Feedback Feedback</td>
              <td>0.5</td>
              <td>Positive</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
