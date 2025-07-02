import { INodeProperties } from 'n8n-workflow';

export const nerveAgentOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['agentChat'],
			},
		},
		options: [
			{
				name: 'Send Message',
				value: 'sendMessage',
				description: 'Send a message to the AI agent',
				action: 'Send message to agent',
				routing: {
					request: {
						method: 'POST',
						url: '/message',
					},
				},
			},
			{
				name: 'Get Chat History',
				value: 'getChatHistory',
				description: 'Retrieve conversation history',
				action: 'Get chat history',
				routing: {
					request: {
						method: 'GET',
						url: '/history_get',
					},
				},
			},
		],
		default: 'sendMessage',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['codeExecution'],
			},
		},
		options: [
			{
				name: 'Execute Python',
				value: 'executePython',
				description: 'Execute Python code',
				action: 'Execute python code',
				routing: {
					request: {
						method: 'POST',
						url: '/execute',
					},
				},
			},
			{
				name: 'Execute Node.js',
				value: 'executeNodejs',
				description: 'Execute Node.js code',
				action: 'Execute node js code',
				routing: {
					request: {
						method: 'POST',
						url: '/execute',
					},
				},
			},
			{
				name: 'Execute Shell',
				value: 'executeShell',
				description: 'Execute shell commands',
				action: 'Execute shell commands',
				routing: {
					request: {
						method: 'POST',
						url: '/execute',
					},
				},
			},
		],
		default: 'executePython',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['memoryOperations'],
			},
		},
		options: [
			{
				name: 'Query Memory',
				value: 'queryMemory',
				description: 'Search agent memory and knowledge base',
				action: 'Query agent memory',
				routing: {
					request: {
						method: 'POST',
						url: '/memory/query',
					},
				},
			},
			{
				name: 'Store Information',
				value: 'storeInfo',
				description: 'Store information in agent memory',
				action: 'Store information in memory',
				routing: {
					request: {
						method: 'POST',
						url: '/memory/store',
					},
				},
			},
		],
		default: 'queryMemory',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['fileProcessing'],
			},
		},
		options: [
			{
				name: 'Upload File',
				value: 'uploadFile',
				description: 'Upload and process file',
				action: 'Upload file to agent',
				routing: {
					request: {
						method: 'POST',
						url: '/upload',
					},
				},
			},
			{
				name: 'Get File Info',
				value: 'getFileInfo',
				description: 'Get information about uploaded files',
				action: 'Get file information',
				routing: {
					request: {
						method: 'GET',
						url: '/file_info',
					},
				},
			},
		],
		default: 'uploadFile',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['browserAutomation'],
			},
		},
		options: [
			{
				name: 'Navigate to URL',
				value: 'navigateUrl',
				description: 'Navigate to a web page and extract content',
				action: 'Navigate to URL',
				routing: {
					request: {
						method: 'POST',
						url: '/browser/navigate',
					},
				},
			},
			{
				name: 'Extract Content',
				value: 'extractContent',
				description: 'Extract specific content from web page',
				action: 'Extract web content',
				routing: {
					request: {
						method: 'POST',
						url: '/browser/extract',
					},
				},
			},
		],
		default: 'navigateUrl',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['toolExecution'],
			},
		},
		options: [
			{
				name: 'Execute Tool',
				value: 'executeTool',
				description: 'Execute a specific Nerve Agent tool',
				action: 'Execute tool',
				routing: {
					request: {
						method: 'POST',
						url: '/tool/execute',
					},
				},
			},
			{
				name: 'List Tools',
				value: 'listTools',
				description: 'Get list of available tools',
				action: 'List available tools',
				routing: {
					request: {
						method: 'GET',
						url: '/tools',
					},
				},
			},
		],
		default: 'executeTool',
	},
];

const agentChatFields: INodeProperties[] = [
	{
		displayName: 'Message',
		name: 'message',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'Enter your message to the AI agent...',
		description: 'The message content to send to the AI agent. Can include questions, instructions, or data for analysis.',
		typeOptions: {
			rows: 3,
		},
		displayOptions: {
			show: {
				resource: ['agentChat'],
				operation: ['sendMessage'],
			},
		},
		routing: {
			send: {
				property: 'message',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Agent Context ID',
		name: 'contextId',
		type: 'string',
		default: '',
		placeholder: 'my-workflow-context',
		description: 'Optional unique context ID for conversation tracking. If empty, a new context will be auto-generated. Use the same ID to maintain conversation history across multiple executions.',
		displayOptions: {
			show: {
				resource: ['agentChat'],
				operation: ['sendMessage'],
			},
		},
		routing: {
			send: {
				property: 'context_id',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Stream Response',
		name: 'streamResponse',
		type: 'boolean',
		default: false,
		description: 'Whether to stream the response in real-time',
		displayOptions: {
			show: {
				resource: ['agentChat'],
				operation: ['sendMessage'],
			},
		},
		routing: {
			send: {
				property: 'stream',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Attachments',
		name: 'attachments',
		type: 'fixedCollection',
		default: {},
		description: 'Files to attach to the message',
		displayOptions: {
			show: {
				resource: ['agentChat'],
				operation: ['sendMessage'],
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'attachment',
				displayName: 'Attachment',
				values: [
					{
						displayName: 'File',
						name: 'file',
						type: 'string',
						default: '',
						description: 'File to attach',
					},
				],
			},
		],
	},
];

const codeExecutionFields: INodeProperties[] = [
	{
		displayName: 'Code',
		name: 'code',
		type: 'string',
		typeOptions: {
			editor: 'codeNodeEditor',
			editorLanguage: 'python',
			rows: 10,
		},
		default: '',
		required: true,
		placeholder: 'print("Hello, World!")',
		description: 'The code to execute in the selected runtime environment. Supports Python, Node.js, or shell commands depending on the runtime selection.',
		displayOptions: {
			show: {
				resource: ['codeExecution'],
			},
		},
		routing: {
			send: {
				property: 'code',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Runtime',
		name: 'runtime',
		type: 'options',
		options: [
			{
				name: 'Python',
				value: 'python',
			},
			{
				name: 'Node.js',
				value: 'nodejs',
			},
			{
				name: 'Shell',
				value: 'shell',
			},
		],
		default: 'python',
		description: 'Runtime environment for code execution',
		displayOptions: {
			show: {
				resource: ['codeExecution'],
			},
		},
		routing: {
			send: {
				property: 'runtime',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Session ID',
		name: 'sessionId',
		type: 'string',
		default: '',
		placeholder: 'data-analysis-session',
		description: 'Optional session identifier for maintaining execution context between multiple code executions. Variables and imports will persist within the same session.',
		displayOptions: {
			show: {
				resource: ['codeExecution'],
			},
		},
		routing: {
			send: {
				property: 'session_id',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Timeout (Seconds)',
		name: 'timeout',
		type: 'number',
		default: 30,
		typeOptions: {
			minValue: 1,
			maxValue: 300,
		},
		description: 'Maximum execution time in seconds (1-300). The code execution will be terminated if it exceeds this limit.',
		displayOptions: {
			show: {
				resource: ['codeExecution'],
			},
		},
		routing: {
			send: {
				property: 'timeout',
				type: 'body',
			},
		},
	},
];

const memoryOperationsFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		default: '',
		required: true,
		description: 'Search query for memory/knowledge base',
		displayOptions: {
			show: {
				resource: ['memoryOperations'],
				operation: ['queryMemory'],
			},
		},
		routing: {
			send: {
				property: 'query',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Search Type',
		name: 'searchType',
		type: 'options',
		options: [
			{
				name: 'Semantic',
				value: 'semantic',
				description: 'Vector-based semantic search',
			},
			{
				name: 'Keyword',
				value: 'keyword',
				description: 'Traditional keyword search',
			},
			{
				name: 'Hybrid',
				value: 'hybrid',
				description: 'Combined semantic and keyword search',
			},
		],
		default: 'semantic',
		description: 'Type of search to perform',
		displayOptions: {
			show: {
				resource: ['memoryOperations'],
				operation: ['queryMemory'],
			},
		},
		routing: {
			send: {
				property: 'search_type',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Content',
		name: 'content',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: '',
		required: true,
		description: 'Information to store in agent memory',
		displayOptions: {
			show: {
				resource: ['memoryOperations'],
				operation: ['storeInfo'],
			},
		},
		routing: {
			send: {
				property: 'content',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Category',
		name: 'category',
		type: 'string',
		default: '',
		description: 'Optional category for organizing stored information',
		displayOptions: {
			show: {
				resource: ['memoryOperations'],
				operation: ['storeInfo'],
			},
		},
		routing: {
			send: {
				property: 'category',
				type: 'body',
			},
		},
	},
];

const fileProcessingFields: INodeProperties[] = [
	{
		displayName: 'File',
		name: 'file',
		type: 'string',
		default: '',
		required: true,
		description: 'File to upload and process',
		displayOptions: {
			show: {
				resource: ['fileProcessing'],
				operation: ['uploadFile'],
			},
		},
	},
	{
		displayName: 'Processing Options',
		name: 'processingOptions',
		type: 'collection',
		default: {},
		description: 'Options for file processing',
		displayOptions: {
			show: {
				resource: ['fileProcessing'],
				operation: ['uploadFile'],
			},
		},
		options: [
			{
				displayName: 'Extract Text',
				name: 'extractText',
				type: 'boolean',
				default: true,
				description: 'Whether to extract text content from the file',
			},
			{
				displayName: 'Index Content',
				name: 'indexContent',
				type: 'boolean',
				default: true,
				description: 'Whether to index content for future searches',
			},
			{
				displayName: 'Target Knowledge Base',
				name: 'targetKnowledgeBase',
				type: 'string',
				default: '',
				description: 'Specific knowledge base to store content in',
			},
		],
	},
];

const browserAutomationFields: INodeProperties[] = [
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		default: '',
		required: true,
		description: 'URL to navigate to',
		displayOptions: {
			show: {
				resource: ['browserAutomation'],
			},
		},
		routing: {
			send: {
				property: 'url',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Actions',
		name: 'actions',
		type: 'fixedCollection',
		default: {},
		description: 'Browser actions to perform',
		displayOptions: {
			show: {
				resource: ['browserAutomation'],
				operation: ['extractContent'],
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'action',
				displayName: 'Action',
				values: [
					{
						displayName: 'Action Type',
						name: 'type',
						type: 'options',
						options: [
							{
								name: 'Click',
								value: 'click',
							},
							{
								name: 'Type Text',
								value: 'type',
							},
							{
								name: 'Extract Text',
								value: 'extract',
							},
							{
								name: 'Screenshot',
								value: 'screenshot',
							},
						],
						default: 'extract',
					},
					{
						displayName: 'Selector',
						name: 'selector',
						type: 'string',
						default: '',
						description: 'CSS selector for the element',
					},
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Value for the action (text to type, etc.)',
					},
				],
			},
		],
	},
];

const toolExecutionFields: INodeProperties[] = [
	{
		displayName: 'Tool Name',
		name: 'toolName',
		type: 'string',
		default: '',
		required: true,
		description: 'Name of the tool to execute',
		displayOptions: {
			show: {
				resource: ['toolExecution'],
				operation: ['executeTool'],
			},
		},
		routing: {
			send: {
				property: 'tool_name',
				type: 'body',
			},
		},
	},
	{
		displayName: 'Tool Parameters',
		name: 'toolParameters',
		type: 'json',
		default: '{}',
		description: 'Parameters to pass to the tool (JSON format)',
		displayOptions: {
			show: {
				resource: ['toolExecution'],
				operation: ['executeTool'],
			},
		},
		routing: {
			send: {
				property: 'parameters',
				type: 'body',
			},
		},
	},
];

export const nerveAgentFields: INodeProperties[] = [
	...agentChatFields,
	...codeExecutionFields,
	...memoryOperationsFields,
	...fileProcessingFields,
	...browserAutomationFields,
	...toolExecutionFields,
];