
const OLLAMA_BASE_URL = '/api'; // Using proxy

export const OllamaService = {
    /**
     * Check if Ollama is running and accessible
     * @returns {Promise<boolean>}
     */
    async checkConnection() {
        try {
            const response = await fetch(`${OLLAMA_BASE_URL}/tags`);
            return response.ok;
        } catch (error) {
            console.error('Ollama connection failed:', error);
            return false;
        }
    },

    /**
     * Check if the specific model exists
     * @param {string} modelName 
     * @returns {Promise<boolean>}
     */
    async hasModel(modelName = 'llama3.2') {
        try {
            const response = await fetch(`${OLLAMA_BASE_URL}/tags`);
            if (!response.ok) return false;
            const data = await response.json();
            return data.models.some(m => m.name.includes(modelName));
        } catch (error) {
            return false;
        }
    },

    /**
     * Generate a completion (streaming support can be added later)
     * @param {string} prompt 
     * @param {string} model 
     * @returns {Promise<string>}
     */
    async generate(prompt, model = 'llama3.2') {
        const response = await fetch(`${OLLAMA_BASE_URL}/generate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model,
                prompt,
                stream: false
            })
        });

        if (!response.ok) {
            throw new Error(`Ollama API Error: ${response.statusText}`);
        }

        const data = await response.json();
        return data.response;
    }
};
