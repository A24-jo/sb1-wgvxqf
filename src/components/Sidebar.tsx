import React from 'react'
import { Rocket, LayoutDashboard, Table, Calendar, Inbox, MessageSquare, Layers, FileInput, Move, Edit3 } from 'lucide-react'

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-4">
        <div className="flex items-center mb-6">
          <Rocket className="text-blue-500 mr-2" />
          <span className="text-xl font-bold">Fury</span>
        </div>
        <div className="flex items-center mb-6">
          <img src="https://source.unsplash.com/100x100/?portrait" alt="David Smith" className="w-10 h-10 rounded-full mr-3" />
          <div>
            <p className="font-semibold">David Smith</p>
            <p className="text-sm text-gray-500">david@example.com</p>
          </div>
        </div>
        <nav>
          <ul className="space-y-2">
            <li><a href="#" className="flex items-center p-2 hover:bg-gray-100 rounded"><LayoutDashboard className="mr-3" /> Dashboard</a></li>
            <li><a href="#" className="flex items-center p-2 bg-blue-100 text-blue-600 rounded"><Table className="mr-3" /> All-In-One Table <span className="ml-auto bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs">22</span></a></li>
            <li><a href="#" className="flex items-center p-2 hover:bg-gray-100 rounded"><Calendar className="mr-3" /> Calendar</a></li>
            <li><a href="#" className="flex items-center p-2 hover:bg-gray-100 rounded"><Inbox className="mr-3" /> Inbox</a></li>
            <li><a href="#" className="flex items-center p-2 hover:bg-gray-100 rounded"><MessageSquare className="mr-3" /> Chat <span className="ml-auto bg-red-200 text-red-800 px-2 py-1 rounded-full text-xs">14</span></a></li>
          </ul>
          <div className="mt-6">
            <p className="text-xs font-semibold text-gray-500 mb-2">USER INTERFACE</p>
            <ul className="space-y-2">
              <li><a href="#" className="flex items-center p-2 hover:bg-gray-100 rounded"><Layers className="mr-3" /> Components</a></li>
              <li><a href="#" className="flex items-center p-2 hover:bg-gray-100 rounded"><FileInput className="mr-3" /> Forms</a></li>
              <li><a href="#" className="flex items-center p-2 hover:bg-gray-100 rounded"><Move className="mr-3" /> Drag & Drop</a></li>
              <li><a href="#" className="flex items-center p-2 hover:bg-gray-100 rounded"><Edit3 className="mr-3" /> WYSIWYG Editor</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar