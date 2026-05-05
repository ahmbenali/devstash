'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Star, Clock, Code, Sparkles, FileText, Terminal, File, Image as ImageIcon, Link as LinkIcon, User, ChevronLeft, ChevronRight } from 'lucide-react'
import { collections, itemTypes, currentUser } from '@/lib/mock-data'

type SidebarProps = {
  isOpen: boolean
  onToggle: () => void
}

const iconMap: Record<string, React.ReactNode> = {
  code: <Code className='w-4 h-4' />,
  sparkles: <Sparkles className='w-4 h-4' />,
  'file-text': <FileText className='w-4 h-4' />,
  terminal: <Terminal className='w-4 h-4' />,
  file: <File className='w-4 h-4' />,
  image: <ImageIcon className='w-4 h-4' />,
  link: <LinkIcon className='w-4 h-4' />,
}

const colorMap: Record<string, string> = {
  blue: 'text-blue-400',
  purple: 'text-purple-400',
  green: 'text-green-400',
  orange: 'text-orange-400',
  yellow: 'text-yellow-400',
  pink: 'text-pink-400',
  teal: 'text-teal-400',
}

// Get favorite collections
const favoriteCollections = collections.filter(col => col.isFavorite)

// Get most recent collections (by createdAt, take last 3)
const recentCollections = [...collections]
  .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  .slice(0, 3)

// Navigation items
const navItems = [
  { href: '/dashboard', icon: <Menu className='w-4 h-4' />, label: 'All Items' },
  { href: '/dashboard/favorites', icon: <Star className='w-4 h-4' />, label: 'Favorites' },
]

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <>
      {/* Mobile overlay (only when sidebar is open on mobile) */}
      {isMobile && isOpen && (
        <div
          className='fixed inset-0 bg-black/50 z-40 md:hidden'
          onClick={onToggle}
        />
      )}

      {/* Sidebar - starts below topbar (top-16), extends to bottom of viewport */}
      <aside
        className={`fixed left-0 top-16 bottom-0 bg-gray-900 border-r border-gray-800 z-50 transition-all duration-300 ease-in-out ${
          isOpen ? 'w-64' : 'w-16'
        }`}
      >
        {/* Header with Navigation text and toggle */}
        <div className='h-12 flex items-center justify-between px-2 border-b border-gray-800'>
          <div className='flex items-center gap-2'>
            {isOpen && (
              <span className='font-semibold text-lg whitespace-nowrap'>
                Navigation
              </span>
            )}
          </div>
          {/* Collapse/Expand toggle - shown on desktop, close button on mobile */}
          {isMobile ? (
            isOpen && (
              <button
                onClick={onToggle}
                className='p-2 hover:bg-gray-800 rounded'
              >
                <X className='w-5 h-5' />
              </button>
            )
          ) : (
            <button
              onClick={onToggle}
              className='p-2 hover:bg-gray-800 rounded text-gray-400'
            >
              {isOpen ? <ChevronLeft className='w-4 h-4' /> : <ChevronRight className='w-4 h-4' />}
            </button>
          )}
        </div>

        {/* Scrollable content area */}
        <div className='h-[calc(100vh-7rem)] overflow-y-auto p-2'>
          {/* Navigation - All Items & Favorites */}
          <div className='space-y-1 mb-4'>
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className='flex items-center gap-3 px-3 py-2 text-sm rounded hover:bg-gray-800 transition-colors group'
                title={!isOpen ? item.label : undefined}
              >
                <span className='text-gray-400'>{item.icon}</span>
                {isOpen && <span>{item.label}</span>}
              </Link>
            ))}
          </div>

          {/* Favorite Collections */}
          {favoriteCollections.length > 0 && (
            <div className='space-y-1 mb-4'>
              {isOpen && (
                <h3 className='text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 py-1'>
                  Favorite Collections
                </h3>
              )}
              {favoriteCollections.map(collection => (
                <Link
                  key={collection.id}
                  href={`/collections/${collection.id}`}
                  className='flex items-center gap-3 px-3 py-2 text-sm rounded hover:bg-gray-800 transition-colors group'
                  title={!isOpen ? collection.name : undefined}
                >
                  <Star className='w-4 h-4 text-yellow-400 flex-shrink-0' />
                  {isOpen && <span className='truncate'>{collection.name}</span>}
                </Link>
              ))}
            </div>
          )}

          {/* Most Recent Collections */}
          {recentCollections.length > 0 && (
            <div className='space-y-1 mb-4'>
              {isOpen && (
                <h3 className='text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 py-1'>
                  Recent Collections
                </h3>
              )}
              {recentCollections.map(collection => (
                <Link
                  key={collection.id}
                  href={`/collections/${collection.id}`}
                  className='flex items-center gap-3 px-3 py-2 text-sm rounded hover:bg-gray-800 transition-colors group'
                  title={!isOpen ? collection.name : undefined}
                >
                  <Clock className='w-4 h-4 text-gray-400 flex-shrink-0' />
                  {isOpen && <span className='truncate'>{collection.name}</span>}
                </Link>
              ))}
            </div>
          )}

          {/* Item Types with links to /items/TYPE */}
          <div className='space-y-1 mb-4'>
            {isOpen && (
              <h3 className='text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 py-1'>
                Item Types
              </h3>
            )}
            {itemTypes.map(type => (
              <Link
                key={type.id}
                href={`/items/${type.name.toLowerCase()}`}
                className='flex items-center gap-3 px-3 py-2 text-sm rounded hover:bg-gray-800 transition-colors group'
                title={!isOpen ? type.name : undefined}
              >
                <span className={`flex-shrink-0 ${colorMap[type.color] || 'text-gray-400'}`}>
                  {iconMap[type.icon] || <File className='w-4 h-4' />}
                </span>
                {isOpen && <span className='truncate'>{type.name}</span>}
              </Link>
            ))}
          </div>

          {/* User Avatar Area */}
          <div className='mt-auto pt-4 border-t border-gray-800'>
            <div className='flex items-center gap-3 px-3 py-2 group'>
              <div className='w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0'>
                {currentUser.email?.charAt(0).toUpperCase()}
              </div>
              {isOpen && (
                <>
                  <div className='flex-1 min-w-0'>
                    <div className='text-sm font-medium truncate'>{currentUser.email}</div>
                    <div className='text-xs text-gray-400'>{currentUser.isPro ? 'Pro' : 'Free'}</div>
                  </div>
                  <Link
                    href='/settings'
                    className='p-2 hover:bg-gray-800 rounded'
                    title='Settings'
                  >
                    <User className='w-4 h-4' />
                  </Link>
                </>
              )}
              {!isOpen && (
                <Link
                  href='/settings'
                  className='p-2 hover:bg-gray-800 rounded'
                  title='Settings'
                >
                  <User className='w-4 h-4' />
                </Link>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
