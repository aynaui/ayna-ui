# Publishing Guide

## Automatic Publishing Setup ✅

Your project is now configured to automatically publish to npm when you push a version tag.

## How It Works

### GitHub Actions (Recommended)

When you push a tag like `v1.0.0`, GitHub Actions will:

1. ✅ Run linting
2. ✅ Run tests
3. ✅ Build the package
4. ✅ Publish to npm

### CircleCI (Alternative)

Same workflow configured for CircleCI if you prefer it.

## Publishing Workflow

### 1. Make Your Changes

```bash
# Make code changes
git add .
git commit -m "feat: add new feature"
```

### 2. Create a Release

```bash
# This will:
# - Bump version in package.json
# - Update CHANGELOG.md
# - Create a git commit
# - Create a git tag
npm run release
```

For specific version bumps:

```bash
npm run release -- --release-as minor  # 0.1.0 → 0.2.0
npm run release -- --release-as major  # 0.1.0 → 1.0.0
npm run release -- --release-as patch  # 0.1.0 → 0.1.1
```

### 3. Push Everything

```bash
# Push commits and tags
git push --follow-tags origin main
```

That's it! GitHub Actions will automatically publish to npm. 🎉

## One-Time Setup Required

### Add NPM Token to GitHub

1. **Generate npm token:**

    ```bash
    npm login
    npm token create
    ```

    Copy the token (starts with `npm_...`)

2. **Add to GitHub:**
    - Go to: https://github.com/aynaui/ayna-ui/settings/secrets/actions
    - Click "New repository secret"
    - Name: `NPM_TOKEN`
    - Value: Paste your token
    - Click "Add secret"

### Add NPM Token to CircleCI (if using)

1. Go to: https://app.circleci.com/settings/project/github/aynaui/ayna-ui/environment-variables
2. Add `NPM_TOKEN` with your token value

## Manual Publishing

If you prefer to publish manually:

```bash
# Login to npm
npm login

# Create release (updates version & changelog)
npm run release

# Publish to npm
npm publish --access public

# Push changes
git push --follow-tags origin main
```

## Pre-publish Checks

The `prepublishOnly` script automatically runs before publishing:

-   ✅ Linting
-   ✅ Tests
-   ✅ Build

This prevents publishing broken packages.

## Version Strategy

Following [Semantic Versioning](https://semver.org/):

-   **MAJOR** (1.0.0): Breaking changes
-   **MINOR** (0.1.0): New features (backward compatible)
-   **PATCH** (0.0.1): Bug fixes

## Commit Convention

Use [Conventional Commits](https://www.conventionalcommits.org/):

-   `feat: add new component` → Minor version bump
-   `fix: resolve button bug` → Patch version bump
-   `feat!: change API` → Major version bump
-   `docs: update readme` → No version bump

## Testing the Workflow

To test without publishing:

```bash
# Dry run release
npm run release -- --dry-run

# Test build
npm run build

# Verify package contents
npm pack
# This creates a .tgz file you can inspect
```

## Troubleshooting

### "publish failed" error

-   Verify npm token is valid: `npm whoami`
-   Check package name isn't taken: https://www.npmjs.com/package/ayna-ui
-   Ensure version doesn't already exist

### "authentication failed"

-   Regenerate npm token and update secrets

### "tests failed"

-   Fix failing tests before releasing
-   Run `npm test` locally first

## Current Status

-   ✅ GitHub Actions workflows created
-   ✅ CircleCI config updated
-   ✅ Pre-publish checks added
-   ⚠️ NPM_TOKEN secret needs to be added
-   📦 Ready to publish v0.1.0

## Next Steps

1. Add NPM_TOKEN secret to GitHub (see above)
2. Test the workflow:
    ```bash
    npm run release -- --dry-run
    ```
3. When ready, create your first release:
    ```bash
    npm run release
    git push --follow-tags origin main
    ```

Your package will be live at: https://www.npmjs.com/package/ayna-ui
