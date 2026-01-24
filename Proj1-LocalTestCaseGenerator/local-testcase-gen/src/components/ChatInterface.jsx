import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { OllamaService } from '../services/ollama';
import { TestGenTemplate } from '../services/templates';

export function ChatInterface({ modelName }) {
    const [messages, setMessages] = useState([
        { id: '1', role: 'assistant', content: 'IO Systems Ready. Please describe the feature or user story you need test cases for.' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg = { id: Date.now().toString(), role: 'user', content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        try {
            const prompt = TestGenTemplate.buildPrompt(input);
            const response = await OllamaService.generate(prompt, modelName);

            const assistantMsg = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: response
            };
            setMessages(prev => [...prev, assistantMsg]);
        } catch (error) {
            const errorMsg = {
                id: (Date.now() + 1).toString(),
                role: 'system',
                content: `Error: ${error.message}. Is Ollama running?`
            };
            setMessages(prev => [...prev, errorMsg]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="chat-container" style={{ width: '100%', maxWidth: '800px', height: '100%', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>

            {/* Messages Area */}
            <div className="glass-panel" style={{ flex: 1, overflowY: 'auto', padding: 'var(--spacing-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
                {messages.map((msg) => (
                    <div key={msg.id} style={{
                        alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                        maxWidth: '85%',
                        animation: 'fadeIn 0.3s ease'
                    }}>
                        <div style={{
                            fontSize: '0.8rem',
                            marginBottom: '4px',
                            color: 'var(--color-text-dim)',
                            textAlign: msg.role === 'user' ? 'right' : 'left'
                        }}>
                            {msg.role === 'user' ? 'You' : msg.role === 'assistant' ? 'System' : 'Error'}
                        </div>
                        <div className={`message-content ${msg.role}`} style={{
                            padding: 'var(--spacing-md)',
                            borderRadius: 'var(--radius-md)',
                            background: msg.role === 'user' ? 'var(--color-brand-main)' : 'rgba(255,255,255,0.05)',
                            color: msg.role === 'user' ? 'white' : 'var(--color-text-main)',
                            border: msg.role === 'assistant' ? '1px solid var(--glass-border)' : 'none',
                            boxShadow: msg.role === 'user' ? '0 4px 12px var(--color-brand-glow)' : 'none'
                        }}>
                            {msg.role === 'assistant' ? (
                                <ReactMarkdown>{msg.content}</ReactMarkdown>
                            ) : (
                                msg.content
                            )}
                        </div>
                    </div>
                ))}
                {isTyping && (
                    <div style={{ alignSelf: 'flex-start', color: 'var(--color-text-dim)', fontSize: '0.9rem', paddingLeft: 'var(--spacing-sm)' }}>
                        Processing logic...
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="glass-panel" style={{ padding: 'var(--spacing-md)', display: 'flex', gap: 'var(--spacing-md)' }}>
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Describe your feature (e.g., 'Login page with 2FA email verification')..."
                    style={{
                        flex: 1,
                        background: 'transparent',
                        border: 'none',
                        color: 'white',
                        resize: 'none',
                        outline: 'none',
                        fontFamily: 'inherit',
                        fontSize: '1rem',
                        height: '24px',
                        maxHeight: '100px'
                    }}
                />
                <button
                    onClick={handleSend}
                    disabled={isTyping || !input.trim()}
                    className="btn-primary"
                    style={{
                        opacity: isTyping || !input.trim() ? 0.5 : 1,
                        padding: 'var(--spacing-xs) var(--spacing-lg)'
                    }}
                >
                    Send
                </button>
            </div>
        </div>
    );
}
