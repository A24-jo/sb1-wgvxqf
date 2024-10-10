import React from 'react'
import { Search, Bell, User } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center">
          <Search className="text-gray-400 mr-2" />
          <input type="text" placeholder="Search..." className="bg-gray-100 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative">
            <Bell />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">5</span>
          </button>
          <div className="flex items-center">
            <span className="mr-2">David Smith</span>
            <User className="bg-gray-200 rounded-full p-1" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header