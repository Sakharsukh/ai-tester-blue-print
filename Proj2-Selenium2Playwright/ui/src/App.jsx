import { useState } from 'react'
import axios from 'axios'
import ReactDiffViewer from 'react-diff-viewer-continued'
import './App.css'

function App() {
  const [folderPath, setFolderPath] = useState('')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([])
  const [selectedFile, setSelectedFile] = useState(null)
  const [error, setError] = useState('')

  const handleConvert = async () => {
    if (!folderPath) {
      setError('Please enter a folder path')
      return
    }
    setLoading(true)
    setError('')
    setResults([])
    setSelectedFile(null)

    try {
      const response = await axios.post('http://localhost:8000/convert', {
        folder_path: folderPath
      })
      if (response.data.status === 'success') {
        setResults(response.data.data)
        if (response.data.data.length > 0) {
          setSelectedFile(response.data.data[0])
        }
      }
    } catch (err) {
      console.error(err)
      setError(err.response?.data?.detail || 'Conversion failed. Make sure backend is running.')
    } finally {
      setLoading(false)
    }
  }

  const handleLoadDefaults = async () => {
    try {
      const response = await axios.get('http://localhost:8000/defaults')
      setFolderPath(response.data.test_data_path)
    } catch (err) {
      setError('Could not load defaults')
    }
  }

  return (
    <div className="container">
      <header className="header">
        <h1>🚀 Selenium to Playwright Converter</h1>
      </header>

      <div className="controls">
        <input
          type="text"
          placeholder="Enter local folder path (e.g., E:\my-tests)"
          value={folderPath}
          onChange={(e) => setFolderPath(e.target.value)}
          className="path-input"
        />
        <button onClick={handleLoadDefaults} className="demo-btn" title="Load project test_data folder">
          📂 Load Demo Data
        </button>
        <button onClick={handleConvert} disabled={loading} className="convert-btn">
          {loading ? 'Converting...' : 'Convert Scripts'}
        </button>
      </div>

      {error && <div className="error-msg">{error}</div>}

      <div className="workspace">
        <div className="sidebar">
          <h3>Files ({results.length})</h3>
          <ul>
            {results.map((file, idx) => (
              <li
                key={idx}
                className={selectedFile === file ? 'active' : ''}
                onClick={() => setSelectedFile(file)}
              >
                {file.filename}
              </li>
            ))}
          </ul>
        </div>

        <div className="editor-area">
          {selectedFile ? (
            <div className="diff-container">
              <h3>{selectedFile.filename} -> Playwright</h3>
              <ReactDiffViewer
                oldValue={selectedFile.original}
                newValue={selectedFile.converted}
                splitView={true}
                useDarkTheme={true}
                leftTitle="Selenium (Python)"
                rightTitle="Playwright (JS)"
              />
            </div>
          ) : (
            <div className="placeholder">
              Select a file to view changes
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
