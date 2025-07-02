import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';
import { nerveAgentOperations, nerveAgentFields } from './NerveAgentDescription';

export class NerveAgent implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Nerve Agent',
		name: 'nerveAgent',
		icon: 'file:nerve-agent.svg',
		group: ['transform', 'ai'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with Nerve Agent AI system for multi-agent orchestration, code execution, and advanced AI workflows',
		defaults: {
			name: 'Nerve Agent',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		usableAsTool: true,
		credentials: [
			{
				name: 'nerveAgentApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{$credentials.baseUrl}}',
			url: '',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': '={{$credentials.apiKey ? "Bearer " + $credentials.apiKey : undefined}}',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Agent Chat',
						value: 'agentChat',
						description: 'Interact with AI agents through conversational interface',
					},
					{
						name: 'Browser Automation',
						value: 'browserAutomation',
						description: 'Automate web interactions and content extraction',
					},
					{
						name: 'Code Execution',
						value: 'codeExecution',
						description: 'Execute code in various runtime environments',
					},
					{
						name: 'File Processing',
						value: 'fileProcessing',
						description: 'Upload and process files through Nerve Agent',
					},
					{
						name: 'Memory Operation',
						value: 'memoryOperations',
						description: 'Manage agent memory and knowledge base',
					},
					{
						name: 'Tool Execution',
						value: 'toolExecution',
						description: 'Execute specific Nerve Agent tools directly',
					},
				],
				default: 'agentChat',
			},
			...nerveAgentOperations,
			...nerveAgentFields,
		],
	};
}