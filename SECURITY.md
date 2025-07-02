# Security Policy

## Supported Versions

We provide security updates for the following versions of the Nerve Agent n8n node:

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

We take security vulnerabilities seriously. If you discover a security vulnerability in the Nerve Agent n8n node, please follow these steps:

### 1. Do NOT create a public issue

Please do not report security vulnerabilities through public GitHub issues.

### 2. Report privately

Send an email to security@singularityai.dev with:

- A clear description of the vulnerability
- Steps to reproduce the issue
- Potential impact assessment
- Any suggested fixes or mitigations

### 3. Response timeline

- **Initial response**: Within 48 hours
- **Status update**: Within 7 days
- **Fix timeline**: Depends on severity, but typically within 30 days for critical issues

### 4. Disclosure policy

- We follow responsible disclosure practices
- We will coordinate with you on the timing of public disclosure
- We will credit you in the security advisory (unless you prefer to remain anonymous)

## Security considerations

### Authentication
- Always use secure authentication methods (API keys, tokens)
- Never commit credentials to version control
- Use environment variables for sensitive configuration

### Network security
- Ensure your Nerve Agent instance uses HTTPS
- Validate SSL certificates
- Use firewall rules to restrict access

### Input validation
- The node validates input parameters
- Malicious input is sanitized before processing
- Error messages do not expose sensitive information

### Data privacy
- Conversation data may be stored in Nerve Agent's memory system
- Review your Nerve Agent privacy settings
- Consider data retention policies for your use case

## Dependencies

We regularly update dependencies to address security vulnerabilities:

- Run `npm audit` to check for known vulnerabilities
- Monitor security advisories for n8n and Node.js
- Update the node when security patches are released

## Best practices

When using the Nerve Agent n8n node:

1. **Network isolation**: Run Nerve Agent in a secure network environment
2. **Access control**: Implement proper authentication and authorization
3. **Monitoring**: Monitor node usage and API calls
4. **Updates**: Keep the node and its dependencies up to date
5. **Backup**: Maintain secure backups of your workflow configurations

## Contact

For security-related questions or concerns:
- Email: security@singularityai.dev
- General issues: https://github.com/SingularityAI-Dev/nerve-n8n-node-programmatic/issues