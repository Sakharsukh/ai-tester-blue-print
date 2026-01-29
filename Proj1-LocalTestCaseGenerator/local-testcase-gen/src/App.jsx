import { useState, useEffect } from 'react'
import { OllamaService } from './services/ollama'
import { ChatInterface } from './components/ChatInterface'
import './App.css'

function App() {
  const [status, setStatus] = useState('checking'); // checking, connected, error, missing_model
  const [modelName, setModelName] = useState('llama3.2');
  const [view, setView] = useState('onboarding'); // onboarding, chat

  useEffect(() => {
    checkContext();
  }, []);

  const checkContext = async () => {
    setStatus('checking');
    const isConnected = await OllamaService.checkConnection();
    if (!isConnected) {
      setStatus('error');
      return;
    }

    const hasModel = await OllamaService.hasModel(modelName);
    if (!hasModel) {
      setStatus('missing_model');
    } else {
      setStatus('connected');
    }
  };

  const startSession = () => {
    setView('chat');
  };

  const renderContent = () => {
    if (view === 'chat') {
      return <ChatInterface modelName={modelName} />;
    }

    switch (status) {
      case 'checking':
        return <div className="status-badge">Connecting to Local Brain...</div>;

      case 'error':
        return (
          <div className="glass-panel error-panel" style={{ padding: 'var(--spacing-lg)', border: '1px solid #ff4444' }}>
            <h3 style={{ color: '#ff4444' }}>Connection Failed</h3>
            <p>Ensure Ollama is running (`ollama serve`) and accessible.</p>
            <button className="btn-primary" onClick={checkContext} style={{ marginTop: '1rem', background: '#ff4444' }}>Retry Connection</button>
          </div>
        );

      case 'missing_model':
        return (
          <div className="glass-panel warning-panel" style={{ padding: 'var(--spacing-lg)', border: '1px solid #ffaa00' }}>
            <h3 style={{ color: '#ffaa00' }}>Model Missing</h3>
            <p>Your local Ollama instance needs the `{modelName}` model.</p>
            <code style={{ display: 'block', background: 'rgba(0,0,0,0.3)', padding: '10px', margin: '10px 0' }}>ollama pull {modelName}</code>
            <button className="btn-primary" onClick={checkContext} style={{ marginTop: '1rem', background: '#ffaa00', color: 'black' }}>I've Pulled It</button>
          </div>
        );

      case 'connected':
        return (
          <>
            <h2 style={{ marginBottom: 'var(--spacing-md)' }}>System Online</h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-xl)', maxWidth: '400px' }}>
              Connected to <strong>{modelName}</strong>. Ready to generate test cases.
            </p>
            <button className="btn-primary" onClick={startSession}>Start New Session</button>
          </>
        );
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', padding: 'var(--spacing-md)' }}>
      <header className="glass-panel" style={{ padding: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '1.5rem' }}>TestGen <span style={{ color: 'var(--color-brand-main)' }}>AI</span></h1>
        <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', display: 'flex', gap: '10px', alignItems: 'center' }}>
          <span style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: status === 'connected' ? 'var(--color-accent-main)' : 'gray',
            boxShadow: status === 'connected' ? '0 0 10px var(--color-accent-main)' : 'none'
          }} />
          Local Ollama • {modelName}
        </div>
      </header>

      <main className="glass-panel" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: 'var(--spacing-xl)' }}>
        {renderContent()}
      </main>
    </div>
  )
}

export default App
