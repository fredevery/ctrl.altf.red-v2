# Development Workflow

## Local Development Setup

### Prerequisites
- **Node.js:** Version 22.17+ (LTS)
- **Package Manager:** npm or pnpm
- **Git:** Latest stable version
- **Editor:** VS Code with recommended extensions

### Initial Setup
```bash
# Clone the repository
git clone <repository-url>
cd ctrl.altf.red

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

### Required VS Code Extensions
- **ESLint:** Microsoft.vscode-eslint
- **Prettier:** esbenp.prettier-vscode
- **Tailwind CSS IntelliSense:** bradlc.vscode-tailwindcss
- **TypeScript Importer:** pmneo.tsimporter
- **Auto Rename Tag:** formulahendry.auto-rename-tag

## Branch Strategy

### Main Branches
- **`main`:** Production-ready code, protected branch
- **`develop`:** Integration branch for features (optional)

### Feature Branches
- **Naming:** `feature/[ticket-number]-[short-description]`
- **Examples:** 
  - `feature/123-blog-post-pagination`
  - `feature/456-contact-form-validation`
  - `feature/789-dark-mode-toggle`

### Branch Types
- **`feature/*`:** New features and enhancements
- **`bugfix/*`:** Bug fixes for non-production issues
- **`hotfix/*`:** Critical fixes for production issues
- **`docs/*`:** Documentation updates
- **`refactor/*`:** Code refactoring without feature changes

## Code Quality Standards

### ESLint Configuration
```json
{
  "extends": [
    "next/core-web-vitals",
    "@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  "rules": {
    "prefer-const": "error",
    "no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "warn"
  }
}
```

### Prettier Configuration
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
```

### TypeScript Standards
- Use strict TypeScript configuration
- Define proper interfaces for all data structures
- Avoid `any` type except in exceptional cases
- Use meaningful variable and function names
- Document complex types and interfaces

## Git Workflow

### Commit Message Format
Follow Conventional Commits specification:
```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Commit Types
- **feat:** New feature
- **fix:** Bug fix
- **docs:** Documentation changes
- **style:** Code style changes (formatting, etc.)
- **refactor:** Code refactoring
- **test:** Adding or updating tests
- **chore:** Maintenance tasks

### Commit Examples
```
feat(blog): add pagination to blog post listing
fix(contact): resolve form validation error handling
docs(readme): update installation instructions
style(components): format component files with prettier
refactor(utils): extract common date formatting logic
test(blog): add unit tests for blog post utilities
chore(deps): update Next.js to version 15.3
```

## Pre-commit Hooks

### Husky Configuration
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}
```

### Lint-staged Configuration
```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write",
      "git add"
    ],
    "*.{css,scss,md}": [
      "prettier --write",
      "git add"
    ]
  }
}
```

## Pull Request Process

### PR Requirements
- [ ] Feature branch is up to date with main/develop
- [ ] All tests pass locally
- [ ] Code follows style guidelines
- [ ] Accessibility requirements met
- [ ] Performance impact assessed
- [ ] Security considerations reviewed

### PR Template
```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests added/updated
- [ ] Manual testing completed
- [ ] Accessibility tested
- [ ] Performance tested

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No merge conflicts
```

### Review Process
1. **Self-review:** Author reviews their own changes
2. **Peer review:** At least one team member reviews
3. **Automated checks:** All CI/CD checks pass
4. **Testing:** Manual testing on review app/staging
5. **Approval:** Required approvals obtained
6. **Merge:** Squash and merge to main branch

## Testing Workflow

### Local Testing
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e

# Run accessibility tests
npm run test:a11y
```

### Test Organization
- **Unit tests:** `src/components/__tests__/`
- **Integration tests:** `src/__tests__/integration/`
- **E2E tests:** `cypress/e2e/`
- **Test utilities:** `src/test-utils/`

## Environment Management

### Environment Files
- **`.env.example`:** Template with all required variables
- **`.env.local`:** Local development (not committed)
- **`.env.development`:** Development environment
- **`.env.staging`:** Staging environment (if applicable)
- **`.env.production`:** Production environment

### Environment Variables
```bash
# Development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ANALYTICS_ID=

# Production
NEXT_PUBLIC_SITE_URL=https://ctrl.altf.red
NEXT_PUBLIC_ANALYTICS_ID=actual_id
```

## Build & Deployment

### Build Commands
```bash
# Development build
npm run build:dev

# Production build
npm run build

# Build with analysis
npm run build:analyze

# Export static site
npm run export
```

### Deployment Process
1. **Merge to main:** Triggers automated deployment
2. **Build process:** Next.js build for Cloudflare Workers
3. **Testing:** Run full test suite
4. **Security scan:** Check for vulnerabilities
5. **Deploy:** Deploy to Cloudflare Pages
6. **Smoke tests:** Basic functionality verification
7. **Monitoring:** Watch for errors and performance issues

## Code Review Guidelines

### What to Look For
- **Functionality:** Does the code work as intended?
- **Readability:** Is the code easy to understand?
- **Performance:** Are there any performance concerns?
- **Security:** Are there any security vulnerabilities?
- **Accessibility:** Does it meet accessibility standards?
- **Testing:** Are tests adequate and meaningful?

### Review Checklist
- [ ] Code is well-structured and readable
- [ ] No obvious bugs or edge cases missed
- [ ] Performance implications considered
- [ ] Accessibility requirements met
- [ ] Security best practices followed
- [ ] Tests cover important functionality
- [ ] Documentation updated where needed

## Documentation Standards

### Code Documentation
- **JSDoc comments:** For complex functions and components
- **README files:** For major features or modules
- **Inline comments:** For complex logic or workarounds
- **Type definitions:** Comprehensive TypeScript types

### Update Requirements
- Update documentation with code changes
- Keep README files current
- Document breaking changes
- Maintain changelog for releases

## Troubleshooting

### Common Issues
- **Build failures:** Check Node.js version and dependencies
- **Linting errors:** Run `npm run lint:fix`
- **Type errors:** Update TypeScript types
- **Test failures:** Check test environment setup

### Debug Tools
- **VS Code Debugger:** For Node.js and browser debugging
- **React DevTools:** For component debugging
- **Chrome DevTools:** For performance and network issues
- **Next.js Debug:** Enable with `DEBUG=*` environment variable

## Release Process

### Versioning
Follow Semantic Versioning (SemVer):
- **MAJOR:** Breaking changes
- **MINOR:** New features (backward compatible)
- **PATCH:** Bug fixes (backward compatible)

### Release Checklist
- [ ] All features tested and approved
- [ ] Documentation updated
- [ ] Performance benchmarks met
- [ ] Security review completed
- [ ] Accessibility audit passed
- [ ] Backup procedures verified
- [ ] Rollback plan prepared
