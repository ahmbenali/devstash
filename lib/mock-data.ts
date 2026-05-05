// Mock data for dashboard UI - temporary until database implementation
// Based on the data model from @context/project-overview.md

// System item types (built-in types)
export const itemTypes = [
  {
    id: 'type-001',
    name: 'Snippet',
    icon: 'code',
    color: 'blue',
    isSystem: true,
  },
  {
    id: 'type-002',
    name: 'Prompt',
    icon: 'sparkles',
    color: 'purple',
    isSystem: true,
  },
  {
    id: 'type-003',
    name: 'Note',
    icon: 'file-text',
    color: 'green',
    isSystem: true,
  },
  {
    id: 'type-004',
    name: 'Command',
    icon: 'terminal',
    color: 'orange',
    isSystem: true,
  },
  {
    id: 'type-005',
    name: 'File',
    icon: 'file',
    color: 'yellow',
    isSystem: true,
  },
  {
    id: 'type-006',
    name: 'Image',
    icon: 'image',
    color: 'pink',
    isSystem: true,
  },
  {
    id: 'type-007',
    name: 'URL',
    icon: 'link',
    color: 'teal',
    isSystem: true,
  },
]

// Sample collections
export const collections = [
  {
    id: 'col-001',
    name: 'React Patterns',
    description: 'Common React patterns and hooks',
    isFavorite: true,
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-15T10:30:00Z',
  },
  {
    id: 'col-002',
    name: 'Context Files',
    description: 'Project context and documentation',
    isFavorite: false,
    createdAt: '2024-02-20T14:15:00Z',
    updatedAt: '2024-02-20T14:15:00Z',
  },
  {
    id: 'col-003',
    name: 'Python Snippets',
    description: 'Useful Python code snippets',
    isFavorite: false,
    createdAt: '2024-03-10T09:45:00Z',
    updatedAt: '2024-03-10T09:45:00Z',
  },
]

// Sample items
export const items = [
  {
    id: 'item-001',
    title: 'React useEffect Hook',
    contentType: 'text',
    content:
      'import { useEffect } from "react";\n\nuseEffect(() => {\n  // Side effect here\n  return () => {\n    // Cleanup\n  };\n}, [dependencies]);',
    description: 'Basic React useEffect hook with cleanup',
    isFavorite: true,
    isPinned: true,
    language: 'javascript',
    typeId: 'type-001', // Snippet
    collectionId: 'col-001', // React Patterns
    createdAt: '2024-01-15T11:00:00Z',
    updatedAt: '2024-01-15T11:00:00Z',
    tags: ['react', 'hooks'],
  },
  {
    id: 'item-002',
    title: 'AI Prompt Engineering',
    contentType: 'text',
    content:
      'You are an expert developer. Explain the following code in simple terms:\n\n```javascript\nconst result = array.reduce((acc, item) => acc + item, 0);\n```',
    description: 'Prompt for explaining code to beginners',
    isFavorite: false,
    isPinned: false,
    language: 'markdown',
    typeId: 'type-002', // Prompt
    collectionId: null,
    createdAt: '2024-02-10T09:30:00Z',
    updatedAt: '2024-02-10T09:30:00Z',
    tags: ['ai', 'education'],
  },
  {
    id: 'item-003',
    title: 'Project Setup Notes',
    contentType: 'text',
    content:
      '# Project Setup\n\n1. Install dependencies with npm install\n2. Set up environment variables\n3. Run database migrations\n4. Start development server',
    description: 'Basic project setup instructions',
    isFavorite: false,
    isPinned: false,
    language: 'markdown',
    typeId: 'type-003', // Note
    collectionId: 'col-002', // Context Files
    createdAt: '2024-02-18T16:20:00Z',
    updatedAt: '2024-02-18T16:20:00Z',
    tags: ['setup', 'documentation'],
  },
  {
    id: 'item-004',
    title: 'Git Reset Command',
    contentType: 'text',
    content: 'git reset --hard HEAD~1',
    description: 'Reset to previous commit (dangerous)',
    isFavorite: true,
    isPinned: false,
    language: 'bash',
    typeId: 'type-004', // Command
    collectionId: null,
    createdAt: '2024-03-05T14:10:00Z',
    updatedAt: '2024-03-05T14:10:00Z',
    tags: ['git', 'dangerous'],
  },
  {
    id: 'item-005',
    title: 'Python List Comprehension',
    contentType: 'text',
    content: 'squares = [x**2 for x in range(10)]',
    description: 'Create list of squares from 0 to 9',
    isFavorite: false,
    isPinned: false,
    language: 'python',
    typeId: 'type-001', // Snippet
    collectionId: 'col-003', // Python Snippets
    createdAt: '2024-03-10T10:15:00Z',
    updatedAt: '2024-03-10T10:15:00Z',
    tags: ['python', 'list'],
  },
  {
    id: 'item-006',
    title: 'DevStash Logo',
    contentType: 'file',
    fileUrl: '/placeholder-logo.png',
    fileName: 'logo.png',
    fileSize: 1024,
    description: 'DevStash application logo',
    isFavorite: false,
    isPinned: false,
    typeId: 'type-006', // Image
    collectionId: null,
    createdAt: '2024-01-20T13:40:00Z',
    updatedAt: '2024-01-20T13:40:00Z',
    tags: ['logo', 'branding'],
  },
  {
    id: 'item-007',
    title: 'Next.js Documentation',
    contentType: 'url',
    url: 'https://nextjs.org/docs',
    description: 'Official Next.js documentation',
    isFavorite: true,
    isPinned: false,
    typeId: 'type-007', // URL
    collectionId: null,
    createdAt: '2024-02-01T11:25:00Z',
    updatedAt: '2024-02-01T11:25:00Z',
    tags: ['nextjs', 'docs'],
  },
]

// Current user (mock authenticated user)
export const currentUser = {
  id: 'user-001',
  email: 'developer@example.com',
  isPro: false,
  createdAt: '2024-01-01T00:00:00Z',
  updatedAt: '2024-01-01T00:00:00Z',
}

// Helper to get item type by ID
export function getItemTypeById(typeId: string) {
  return itemTypes.find(type => type.id === typeId)
}

// Helper to get collection by ID
export function getCollectionById(collectionId: string | null) {
  if (!collectionId) return null
  return collections.find(col => col.id === collectionId)
}

// Get all items with their related data (type and collection)
export function getItemsWithRelations() {
  return items.map(item => ({
    ...item,
    type: getItemTypeById(item.typeId),
    collection: getCollectionById(item.collectionId),
  }))
}
