# Contributing to Nerve Agent n8n Node

Thank you for your interest in contributing to the Nerve Agent n8n node! We welcome contributions from the community.

## Getting Started

### Prerequisites

- Node.js >= 20.15
- npm >= 7.0
- Git
- Basic knowledge of TypeScript and n8n development

### Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/nerve-n8n-node-programmatic.git
   cd nerve-n8n-node-programmatic
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

4. **Run linting**
   ```bash
   npm run lint
   ```

## Development Workflow

### Making Changes

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the existing code style
   - Add appropriate TypeScript types
   - Include JSDoc comments for new functions
   - Follow n8n node development conventions

3. **Test your changes**
   ```bash
   npm run build
   npm run lint
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

### Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding tests
- `chore:` for maintenance tasks

Examples:
- `feat: add browser automation timeout configuration`
- `fix: resolve memory operation parameter validation`
- `docs: update installation instructions`

## Code Standards

### TypeScript Guidelines

- Use strict TypeScript configuration
- Provide explicit types for all parameters
- Use interfaces for complex objects
- Follow n8n's INodeProperties structure

### Code Style

- Use tabs for indentation
- Use single quotes for strings
- Add trailing commas in objects and arrays
- Follow existing naming conventions

### n8n Specific Guidelines

1. **Node Properties**
   - Use clear, descriptive `displayName` values
   - Provide helpful `description` text
   - Include `placeholder` text for input fields
   - Use appropriate `displayOptions` for conditional fields

2. **Parameter Validation**
   - Mark required fields with `required: true`
   - Use appropriate input types (`string`, `number`, `boolean`, etc.)
   - Provide sensible default values

3. **Error Handling**
   - Use `NodeOperationError` for user-facing errors
   - Provide clear, actionable error messages
   - Include context in error messages

## Testing

### Manual Testing

1. **Build the node**
   ```bash
   npm run build
   ```

2. **Test with n8n locally** (if available)
   ```bash
   # Link the package locally
   npm link
   
   # In your n8n installation
   npm link n8n-nodes-nerve-agent
   ```

3. **Validate against standards**
   ```bash
   npm run lint
   npm run prepublishOnly
   ```

### Integration Testing

- Test with a live Nerve Agent instance when possible
- Verify all operations work as expected
- Test error scenarios and edge cases
- Validate parameter combinations

## Pull Request Process

### Before Submitting

1. **Ensure code quality**
   - [ ] Code builds without errors
   - [ ] All linting rules pass
   - [ ] No TypeScript errors
   - [ ] Manual testing completed

2. **Update documentation**
   - [ ] Update README if needed
   - [ ] Add/update JSDoc comments
   - [ ] Update CHANGELOG.md

3. **Security check**
   - [ ] No secrets or credentials in code
   - [ ] Input validation implemented
   - [ ] Error messages don't expose sensitive data

### Submitting Your PR

1. **Push your branch**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create pull request**
   - Use a clear, descriptive title
   - Reference any related issues
   - Provide detailed description of changes
   - Include testing notes

3. **PR template**
   ```markdown
   ## Description
   Brief description of changes

   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Documentation update
   - [ ] Refactoring

   ## Testing
   - [ ] Manual testing completed
   - [ ] All linting rules pass
   - [ ] No TypeScript errors

   ## Related Issues
   Fixes #issue_number
   ```

## Code Review Process

1. **Automated checks**
   - Linting and type checking must pass
   - Build process must succeed

2. **Human review**
   - Code quality and style
   - n8n compliance
   - Security considerations
   - Documentation quality

3. **Approval and merge**
   - At least one maintainer approval required
   - All CI checks must pass
   - Squash merge preferred for feature branches

## Releasing

Releases are handled by maintainers:

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Create release tag
4. Publish to npm registry

## Getting Help

- **Questions**: Open a GitHub Discussion
- **Bugs**: Create a GitHub Issue
- **Security**: Email security@singularityai.dev
- **Feature requests**: Open a GitHub Issue with the "enhancement" label

## Code of Conduct

This project follows the [Contributor Covenant](https://www.contributor-covenant.org/) Code of Conduct. Please be respectful and professional in all interactions.

## License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

Thank you for contributing! 🚀