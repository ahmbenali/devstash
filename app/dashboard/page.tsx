import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Plus } from 'lucide-react'
import { getItemsWithRelations } from '@/lib/mock-data'

export default function DashboardPage() {
  const items = getItemsWithRelations()

  return (
    <div className='flex flex-col h-screen'>
      {/* Top bar with search and new item button */}
      <header className='border-b border-gray-800 p-4 flex items-center justify-between'>
        <div className='flex items-center gap-4 w-full max-w-md'>
          <div className='relative w-full'>
            <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400' />
            <Input
              type='search'
              placeholder='Search items...'
              className='w-full pl-9 bg-gray-900 border-gray-700'
            />
          </div>
        </div>
        <Button className='gap-2'>
          <Plus className='h-4 w-4' />
          New Item
        </Button>
      </header>

      {/* Main content area */}
      <div className='flex flex-1 overflow-hidden'>
        {/* Sidebar placeholder */}
        <aside className='w-64 border-r border-gray-800 p-4 overflow-y-auto'>
          <div className='space-y-4'>
            <h2 className='text-lg font-semibold'>Collections</h2>
            <div className='space-y-2'>
              <div className='px-3 py-2 text-sm rounded hover:bg-gray-800 cursor-pointer'>
                All Items
              </div>
              <div className='px-3 py-2 text-sm rounded hover:bg-gray-800 cursor-pointer'>
                Favorites
              </div>
              <div className='px-3 py-2 text-sm rounded hover:bg-gray-800 cursor-pointer'>
                React Patterns
              </div>
              <div className='px-3 py-2 text-sm rounded hover:bg-gray-800 cursor-pointer'>
                Context Files
              </div>
              <div className='px-3 py-2 text-sm rounded hover:bg-gray-800 cursor-pointer'>
                Python Snippets
              </div>
            </div>

            <h2 className='text-lg font-semibold pt-4'>Item Types</h2>
            <div className='space-y-2'>
              <div className='px-3 py-2 text-sm rounded hover:bg-gray-800 cursor-pointer flex items-center gap-2'>
                <span className='w-2 h-2 rounded-full bg-blue-500'></span>
                Snippets
              </div>
              <div className='px-3 py-2 text-sm rounded hover:bg-gray-800 cursor-pointer flex items-center gap-2'>
                <span className='w-2 h-2 rounded-full bg-purple-500'></span>
                Prompts
              </div>
              <div className='px-3 py-2 text-sm rounded hover:bg-gray-800 cursor-pointer flex items-center gap-2'>
                <span className='w-2 h-2 rounded-full bg-green-500'></span>
                Notes
              </div>
              <div className='px-3 py-2 text-sm rounded hover:bg-gray-800 cursor-pointer flex items-center gap-2'>
                <span className='w-2 h-2 rounded-full bg-orange-500'></span>
                Commands
              </div>
            </div>
          </div>
        </aside>

        {/* Main area */}
        <main className='flex-1 p-6 overflow-y-auto'>
          <h1 className='text-2xl font-bold mb-6'>Dashboard</h1>

          {/* Items grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {items.map(item => (
              <div
                key={item.id}
                className='border border-gray-800 rounded-lg p-4 hover:border-gray-600 transition-colors'
              >
                <div className='flex items-center justify-between mb-2'>
                  <h3 className='font-medium text-sm'>{item.title}</h3>
                  {item.isFavorite && (
                    <span className='text-yellow-400'>★</span>
                  )}
                </div>
                <p className='text-xs text-gray-400 mb-2'>
                  {item.type?.name}{' '}
                  {item.collection && `· ${item.collection.name}`}
                </p>
                <p className='text-sm text-gray-300 line-clamp-3'>
                  {item.contentType === 'text'
                    ? item.content?.substring(0, 100) + '...'
                    : item.url || item.fileName || 'No content'}
                </p>
                <div className='flex gap-1 mt-3 flex-wrap'>
                  {item.tags?.map((tag: string) => (
                    <span
                      key={tag}
                      className='px-2 py-1 bg-gray-800 rounded text-xs'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
