
import http from 'http';

const checkOllama = () => {
    console.log("📡 Connecting to Ollama...");

    const options = {
        hostname: 'localhost',
        port: 11434,
        path: '/api/tags',
        method: 'GET'
    };

    const req = http.request(options, (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            if (res.statusCode === 200) {
                const response = JSON.parse(data);
                console.log("✅ Ollama is Online!");
                console.log("📦 Available Models:", response.models.map(m => m.name));

                const hasLlama = response.models.some(m => m.name.includes("llama3.2"));
                if (hasLlama) {
                    console.log("🚀 Llama 3.2 is ready for connection.");
                } else {
                    console.error("❌ Llama 3.2 is MISSING. Please run: ollama pull llama3.2");
                    process.exit(1);
                }
            } else {
                console.error(`❌ Connection failed with status: ${res.statusCode}`);
                process.exit(1);
            }
        });
    });

    req.on('error', (error) => {
        console.error("❌ Error connecting to Ollama:", error.message);
        process.exit(1);
    });

    req.end();
};

checkOllama();
