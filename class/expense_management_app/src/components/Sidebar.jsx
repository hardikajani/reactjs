import React from 'react'
import { Home, UserPlus, Settings, User, IndianRupee  } from 'lucide-react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    
    <aside className="flex w-16 flex-col items-center overflow-y-auto border-r bg-neutral-100 py-8">
      <nav className="flex flex-col items-center space-y-6">  
        <Link
          to="/"
          className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-700 hover:text-white focus:outline-none"
        >
          <Home size={24} />
        </Link>
        <Link
          to="/CreatAccount"
          className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-700 hover:text-white focus:outline-none"
        >
          <UserPlus size={24} />
        </Link>
        <Link
          to="/Login"
          className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-700 hover:text-white focus:outline-none"
        >
          <User size={24} />
        </Link>
        <Link
          to="/AddExpense"
          className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-700 hover:text-white focus:outline-none"
        >
          <IndianRupee size={24} />
        </Link>
        <Link
          to="/"
          className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-700 hover:text-white focus:outline-none"
        >
          <Settings size={24} />
        </Link>        
      </nav>
    </aside>
  )
}

export default Sidebar