'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Menu } from 'lucide-react'
import { getItemsWithRelations } from '@/lib/mock-data'
import { Sidebar } from '@/components/layout/Sidebar'

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      // On mobile, sidebar should be controlled by drawer
      // On desktop, sidebar can be toggled but stays open by default
      if (!mobile) {
        setIsSidebarOpen(true)
      }
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const items = getItemsWithRelations()

  return (
    <div className='flex flex-col h-screen'>
      {/* Top bar with logo, search and buttons */}
      <header className='border-b border-gray-800 p-4 flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          {/* Drawer icon for mobile sidebar toggle - always shown on mobile */}
          <button
            onClick={toggleSidebar}
            className='p-2 hover:bg-gray-800 rounded md:hidden'
          >
            <Menu className='w-5 h-5' />
          </button>

          {/* Sidebar toggle for desktop - shown on large screens */}
          <button
            onClick={toggleSidebar}
            className='p-2 hover:bg-gray-800 rounded hidden md:block'
          >
            <Menu className='w-5 h-5' />
          </button>

          <div className='flex items-center gap-2'>
            <div className='w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold'>
              DS
            </div>
            <span className='font-semibold text-lg'>DevStash</span>
          </div>
        </div>
        <div className='relative w-full max-w-xs'>
          <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400' />
          <Input
            type='search'
            placeholder='Search items...'
            className='w-full pl-9 bg-gray-900 border-gray-700'
          />
        </div>
        <div className='flex items-center gap-2'>
          <Button>New Collection</Button>
          <Button>New Item</Button>
        </div>
      </header>

      {/* Main content area */}
      <div className='flex flex-1 overflow-hidden'>
        {/* Sidebar - always shown on desktop (collapsible), toggleable on mobile */}
        <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />

        {/* Main area - margin left to account for sidebar width */}
        <main className={`flex-1 p-6 overflow-y-auto transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'ml-64 md:ml-64' : isMobile ? 'ml-0' : 'ml-16'
        }`}>
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
