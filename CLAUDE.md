# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is the **Weevio Cloud Documentation** site - a Next.js-based static documentation site built with MDX, TypeScript, and Tailwind CSS. The site is deployed to GitHub Pages and provides comprehensive documentation for the Weevio Cloud platform.

Built using the [Documents starter kit](https://github.com/rubixvi/rubix-documents) by Rubix Studios.

## Node.js Version

**Required**: Node.js 22.x (specified in package.json engines)

## Essential Commands

### Development
```bash
npm run dev              # Start development server with Turbopack (http://localhost:3000)
npm run build            # Build static site for production
npm start                # Start production server (after build)
```

### Content Management
```bash
npm run generate-content-json     # Generate search index from MDX files (uses tsx)
npm run generate-content-json:ide # Alternative for IDEs (uses esbuild-register)
```

### Code Quality
```bash
npm run lint             # Run ESLint (quiet mode)
npm run lint:fix         # Fix ESLint issues
npm run format           # Format code with Prettier
npm run format:check     # Check formatting without changes
npm run clean            # Run lint:fix, format, and format:check in sequence
```

### Maintenance
```bash
npm run update           # Update all dependencies and clean code
```

## Architecture Overview

### Content System

**MDX Files**: Documentation content lives in `contents/docs/` with a specific structure:
- Each documentation page is an `index.mdx` file in its own directory
- Example: `contents/docs/store/orders/order-table/index.mdx`
- MDX files include frontmatter (title, description, keywords)
- Custom React components are available in MDX: Card, CardGrid, Note, Step, StepItem, FileTree, Tabs, Mermaid

**Navigation Structure**: Defined in [settings/documents.ts](settings/documents.ts)
- Hierarchical navigation tree with headings, sections, and links
- The `Paths` type supports nested items and spacers
- URLs are constructed by concatenating parent and child hrefs
- Changes here require regenerating the search index

**Search Index Generation**: [scripts/content.ts](scripts/content.ts)
- Processes all MDX files to create `public/search-data/documents.json`
- Strips custom components, extracts headings/keywords, cleans content
- Uses unified/remark pipeline to parse MDX
- **Must run after adding/modifying MDX files**: `npm run generate-content-json`

### Routing & Pages

**Dynamic Routing**: [app/docs/[[...slug]]/page.tsx](app/docs/[[...slug]]/page.tsx)
- Catch-all route handles all documentation pages
- `generateStaticParams()` generates static pages at build time from [lib/pageroutes.ts](lib/pageroutes.ts)
- URL structure: `/docs/{category}/{subcategory}/{page}`

**MDX Processing**: [lib/markdown.ts](lib/markdown.ts)
- `getDocument(slug)` fetches and parses MDX files
- Uses `next-mdx-remote` for MDX compilation
- Rehype plugins: code titles, syntax highlighting (Prism), autolink headings, KaTeX math
- Remark plugins: GitHub Flavored Markdown
- Generates table of contents from h2-h4 headings
- Custom components defined in [lib/components.ts](lib/components.ts)

### Component Architecture

**Custom MDX Components**: [components/markdown/](components/markdown/)
- `card.tsx` - Card and CardGrid for feature showcases
- `note.tsx` - Callout boxes (info, warning, tip, danger)
- `step.tsx` - Step and StepItem for sequential instructions
- `filetree/` - File tree visualization
- `mermaid.tsx` - Mermaid.js diagram rendering

**UI Components**: [components/ui/](components/ui/)
- Built with Radix UI primitives and Tailwind CSS
- Configured via [components.json](components.json)

**Navigation**: [components/navigation/](components/navigation/)
- Renders the top-level navigation from settings

**Sidebar**: [components/sidebar/](components/sidebar/)
- Renders hierarchical documentation navigation from [settings/documents.ts](settings/documents.ts)

**Table of Contents**: [components/toc/](components/toc/)
- Auto-generated from h2-h4 headings in MDX files

### Build Process

**Static Export**: Configured in [next.config.mjs](next.config.mjs)
- `output: 'export'` generates static HTML
- Images are unoptimized for static hosting
- `trailingSlash: true` ensures proper GitHub Pages routing

**Pre-commit Hook**: [.husky/pre-commit](.husky/pre-commit) → [.husky/post-process.sh](.husky/post-process.sh)
1. Compiles TypeScript scripts with `tsconfig.scripts.json`
2. Converts `.js` to `.mjs` in dist/scripts/
3. Rewrites import paths for ESM compatibility
4. Runs search index generation automatically

## Working with Documentation Content

### Adding a New Page

1. **Create MDX file**: `contents/docs/{category}/{page}/index.mdx`
   ```mdx
   ---
   title: Page Title
   description: Brief description for SEO
   keywords: ["keyword1", "keyword2"]
   ---

   Content goes here... Do NOT repeat the title and description in the body, since they are presented automatically.
   ```

2. **Add to navigation**: Edit [settings/documents.ts](settings/documents.ts)
   ```typescript
   {
     title: "Page Title",
     href: "/page-slug",  // Relative to parent
   }
   ```

3. **Regenerate search index**: Run `npm run generate-content-json`

4. **Test locally**: `npm run dev` and verify the page renders

### Writing MDX Content

#### Basic Markdown Syntax

**Headers**: Use `#` for headings (h1 through h6). Only h2-h4 appear in table of contents.

**Lists**: Standard markdown lists, plus task lists:
```markdown
- Regular list item
- [x] Completed task
- [ ] Incomplete task
```

**Tables**: Use pipe delimiters with alignment:
```markdown
| Column | Description | Value |
|:-------|:-----------:|------:|
| Left   | Center      | Right |
```

**Blockquotes**: Use `>` for quotes:
```markdown
> Important information or quotes go here.
```

**Code Blocks**: Use triple backticks with language and optional line highlighting:
~~~markdown
```typescript {5,7-9} showLineNumbers
function example() {
  const x = 1;
  const y = 2;
  const z = 3;
  // Line 5 highlighted
  const a = 4;
  // Lines 7-9 highlighted
  const b = 5;
  const c = 6;
}
```
~~~

**Comments**: Use MDX comment syntax (NOT HTML comments):
```markdown
{/* This is a comment in MDX */}
```

#### Custom MDX Components

All custom components are automatically imported - no import statements needed.

**Card & CardGrid** - Feature showcases and navigation cards

Props for `<Card>`:
- `title` (required): Card title
- `subtitle` (optional): Small text above title
- `description` (optional): Body text
- `href` (optional): Link destination
- `external` (optional, boolean): Opens in new tab with icon
- `icon` (optional): Icon from iconMap
- `variant` (optional): "normal" (default), "small", or "image"
- `image` (optional): Image URL for "image" variant

**IMPORTANT**: All internal links in Card components (and markdown links) must start with `/docs/` prefix.

```mdx
<CardGrid>
  <Card
    title="Feature Name"
    subtitle="Category"
    description="Brief description of the feature."
    href="/docs/path/to/page"
  />
  <Card
    title="External Link"
    description="Opens in new tab"
    href="https://example.com"
    external
  />
  <Card
    title="Image Card"
    variant="image"
    image="/path/to/image.png"
    href="/docs/page"
  />
</CardGrid>
```

**Note** - Callout boxes for important information

Props:
- `type` (optional): "note" (default), "success", "warning", "danger"
- `title` (optional): Custom title (defaults to "Note")

```mdx
<Note type="info">
**Standard information**: Regular callout for informational content.
</Note>

<Note type="success" title="Success">
Operation completed successfully!
</Note>

<Note type="warning">
**Important**: This action cannot be undone.
</Note>

<Note type="danger">
**Critical**: System will be unavailable during maintenance.
</Note>
```

**Step & StepItem** - Sequential numbered instructions

`<Step>` automatically numbers child `<StepItem>` components:

```mdx
<Step>
  <StepItem title="First Step">
    Click the **Add** button in the top right corner.
  </StepItem>
  <StepItem title="Second Step">
    Enter the required information in the form.
  </StepItem>
  <StepItem title="Third Step">
    Click **Save** to complete the process.
  </StepItem>
</Step>
```

**FileTree, Folder, File** - Visual file structure

```mdx
<FileTree>
  <Folder name="app" defaultOpen>
    <Folder name="components">
      <File name="header.tsx" />
      <File name="footer.tsx" />
    </Folder>
    <File name="layout.tsx" />
    <File name="page.tsx" />
  </Folder>
  <Folder name="public">
    <File name="logo.svg" />
  </Folder>
  <File name="package.json" />
</FileTree>
```

Props:
- `<Folder>`: `name`, `defaultOpen` (boolean)
- `<File>`: `name`

**Tabs** - Tabbed content for code examples or variants

```mdx
<Tabs defaultValue="js">
  <TabsList>
    <TabsTrigger value="js">JavaScript</TabsTrigger>
    <TabsTrigger value="ts">TypeScript</TabsTrigger>
  </TabsList>
  <TabsContent value="js">
    ```javascript
    const example = "JavaScript code here";
    ```
  </TabsContent>
  <TabsContent value="ts">
    ```typescript
    const example: string = "TypeScript code here";
    ```
  </TabsContent>
</Tabs>
```

**Mermaid** - Diagrams and flowcharts

```mdx
<Mermaid
  chart={`graph TD;
    A[Start] --> B[Process];
    B --> C{Decision};
    C -->|Yes| D[Success];
    C -->|No| E[Retry];
    E --> B;
    D --> F[End];`}
/>
```

Supports Mermaid.js syntax for flowcharts, sequence diagrams, class diagrams, etc.

### Modifying Navigation Structure

The navigation hierarchy in [settings/documents.ts](settings/documents.ts) supports:
- **Headings**: `{ heading: "Section Name", ... }`
- **Links**: `{ title: "...", href: "/..." }`
- **Nested items**: `{ title: "...", href: "/...", items: [...] }`
- **Spacers**: `{ spacer: true }`

**URL Construction**:
- Navigation structure defines relative paths (e.g., `/store/orders`)
- These are concatenated to build the full path
- **ALL actual page URLs require the `/docs` prefix** when used in content

Example navigation structure:
```typescript
{
  title: "Store",
  href: "/store",
  items: [
    { title: "Orders", href: "/orders" }  // Navigation path: /store/orders
  ]
}
```

Example usage in MDX content:
```mdx
<!-- Correct: Include /docs prefix in content links -->
<Card href="/docs/store/orders" />
[Link text](/docs/store/orders)

<!-- Incorrect: Missing /docs prefix -->
<Card href="/store/orders" />
[Link text](/store/orders)
```

## Deployment

The site is configured for GitHub Pages static deployment:
- Build generates static files in `out/` directory
- Set repository settings to deploy from the `out/` branch or `gh-pages` branch
- The `basePath` is empty in production (configured in next.config.mjs)

## Key Type Definitions

**Paths** ([lib/pageroutes.ts](lib/pageroutes.ts)): Navigation item type supporting both routes and spacers

**Settings** ([types/settings.ts](types/settings.ts)): Site-wide configuration (title, SEO, social metadata)

## Common Patterns

### Testing MDX Changes
1. Edit MDX file in `contents/docs/`
2. Run `npm run generate-content-json` to update search index
3. Run `npm run dev` and navigate to the page
4. Check rendering, links, and table of contents

### Adding Custom Components
1. Create component in `components/markdown/`
2. Export from [lib/components.ts](lib/components.ts)
3. Add to `customComponentNames` in [scripts/content.ts](scripts/content.ts) if it should be stripped from search index
4. Use in MDX files

### Troubleshooting Build Errors
- **MDX compilation errors**: Check for invalid JSX in MDX files (use MDX comments `{/* */}` not HTML `<!-- -->`)
- **Missing pages**: Verify entry exists in [settings/documents.ts](settings/documents.ts)
- **Search index outdated**: Run `npm run generate-content-json`
- **TypeScript errors**: Run `npm run lint:fix` to auto-fix issues
