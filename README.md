# n8n-nodes-nerve-agent

![Nerve Agent Node Icon](nodes/NerveAgent/nerve-agent.svg)

An n8n community node for integrating with [Nerve Agent](https://github.com/SingularityAI-Dev/nerve), a sophisticated multi-agent AI system for advanced automation and AI workflows.

## Features

This node provides comprehensive integration with Nerve Agent's capabilities:

### 🤖 Agent Chat
- Direct conversational interface with AI agents
- Context management and conversation history
- File attachment support
- Real-time streaming responses

### 💻 Code Execution
- Execute Python, Node.js, and Shell code
- Session management for maintaining execution context
- Configurable timeouts and error handling
- Direct integration with Nerve Agent's runtime engines

### 🧠 Memory Operations
- Query agent memory and knowledge base
- Store information for future retrieval
- Semantic, keyword, and hybrid search capabilities
- Cross-workflow knowledge persistence

### 📁 File Processing
- Upload and process multiple file formats
- Automatic text extraction and content indexing
- Integration with knowledge base systems
- Support for PDFs, documents, images, and more

### 🌐 Browser Automation
- Web page navigation and content extraction
- Element interaction and form filling
- Screenshot capture capabilities
- Powered by Playwright automation engine

### 🔧 Tool Execution
- Direct access to individual Nerve Agent tools
- Custom parameter passing
- Extensible tool ecosystem
- MCP (Model Context Protocol) integration

## Installation

1. Install from npm:
```bash
npm install nerve-agent-n8n-node
```

2. Or install from the n8n Community Nodes interface:
   - Go to **Settings** > **Community Nodes**
   - Enter `nerve-agent-n8n-node`
   - Click **Install**

3. Restart n8n to load the new node

## Configuration

### Prerequisites
- A running Nerve Agent instance
- Nerve Agent API endpoint accessible from your n8n installation
- Optional: API key or authentication credentials

### Credentials Setup

1. In n8n, go to **Credentials** and create a new **Nerve Agent API** credential
2. Configure the following:
   - **Base URL**: Your Nerve Agent instance URL (e.g., `http://localhost:7777`)
   - **API Key**: Optional API key for authentication
   - **Username/Password**: Alternative authentication method

### Node Configuration

The Nerve Agent node is organized by **Resource** and **Operation**:

#### Resources:
- **Agent Chat**: Conversational AI interactions
- **Code Execution**: Runtime code execution
- **Memory Operations**: Knowledge management
- **File Processing**: File upload and processing
- **Browser Automation**: Web automation tasks
- **Tool Execution**: Direct tool access

Each resource has specific operations and configuration options tailored to its functionality.

## Usage Examples

### Basic Agent Chat
```json
{
  "resource": "agentChat",
  "operation": "sendMessage",
  "message": "Analyze this data and provide insights",
  "contextId": "my-analysis-session"
}
```

### Code Execution
```json
{
  "resource": "codeExecution",
  "operation": "executePython",
  "code": "import pandas as pd\ndf = pd.read_csv('data.csv')\nprint(df.describe())",
  "sessionId": "data-analysis"
}
```

### Memory Query
```json
{
  "resource": "memoryOperations",
  "operation": "queryMemory",
  "query": "customer retention strategies",
  "searchType": "semantic"
}
```

### File Processing
```json
{
  "resource": "fileProcessing",
  "operation": "uploadFile",
  "file": "/path/to/document.pdf",
  "processingOptions": {
    "extractText": true,
    "indexContent": true
  }
}
```

## Advanced Features

### Multi-Agent Workflows
Leverage Nerve Agent's hierarchical agent system to create complex, multi-step automation workflows where agents can delegate tasks to specialized sub-agents.

### Persistent Memory
Build workflows that learn and improve over time by storing successful solutions and retrieving relevant knowledge across different executions.

### Dynamic Code Generation
Use the AI agents to generate, execute, and iterate on code solutions dynamically based on your specific requirements.

### Web Automation
Combine AI decision-making with browser automation to create intelligent web scraping and interaction workflows.

## API Compatibility

This node is designed to work with Nerve Agent's REST API endpoints:
- `/message` - Agent chat interface
- `/execute` - Code execution endpoints
- `/memory/*` - Memory management
- `/upload` - File processing
- `/browser/*` - Browser automation
- `/tool/*` - Tool execution

## Troubleshooting

### Connection Issues
- Verify your Nerve Agent instance is running and accessible
- Check the Base URL in your credentials
- Ensure firewall/network policies allow connection

### Authentication Problems
- Verify API key or username/password credentials
- Check Nerve Agent authentication configuration
- Test credentials using the built-in credential test

### Performance Optimization
- Use session IDs for code execution to maintain context
- Implement proper error handling in your workflows
- Consider timeout settings for long-running operations

## Development

To contribute to this node:

1. Clone the repository:
```bash
git clone https://github.com/SingularityAI-Dev/nerve-n8n-node-programmatic.git
```

2. Install dependencies:
```bash
npm install
```

3. Build the node:
```bash
npm run build
```

4. Test locally with n8n

## License

MIT

## Support

- **Issues**: [GitHub Issues](https://github.com/SingularityAI-Dev/nerve-n8n-node-programmatic/issues)
- **Discussions**: [GitHub Discussions](https://github.com/SingularityAI-Dev/nerve-n8n-node-programmatic/discussions)
- **Nerve Agent**: [Main Project](https://github.com/SingularityAI-Dev/nerve)

## Changelog

### v0.1.0
- Initial release
- Core functionality for all major Nerve Agent features
- Comprehensive operation support
- Full credential management
- Documentation and examples