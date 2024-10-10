import React from 'react'
import { Search, Filter, Plus } from 'lucide-react'

const customers = [
  { id: 1, name: 'John Doe', street: '123 Main St', zipCode: '12345', city: 'New York', phone: '+1 234-567-8901' },
  { id: 2, name: 'Jane Smith', street: '456 Elm St', zipCode: '67890', city: 'Los Angeles', phone: '+1 987-654-3210' },
  { id: 3, name: 'Bob Johnson', street: '789 Oak St', zipCode: '54321', city: 'Chicago', phone: '+1 555-123-4567' },
]

const MainContent = () => {
  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-2">All-In-One Table</h1>
        <p className="text-gray-600">Dashboard / Customers</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Search className="text-gray-400 mr-2" />
            <input type="text" placeholder="Search customers..." className="border rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="flex space-x-2">
            <button className="flex items-center px-3 py-1 border rounded-md hover:bg-gray-100">
              <Filter className="mr-1" /> Filter
            </button>
            <button className="flex items-center px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              <Plus className="mr-1" /> Add New
            </button>
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Street</th>
              <th className="px-4 py-2 text-left">Zip Code</th>
              <th className="px-4 py-2 text-left">City</th>
              <th className="px-4 py-2 text-left">Phone</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-t">
                <td className="px-4 py-2 flex items-center">
                  <img src={`https://source.unsplash.com/50x50/?portrait&${customer.id}`} alt={customer.name} className="w-8 h-8 rounded-full mr-2" />
                  {customer.name}
                </td>
                <td className="px-4 py-2">{customer.street}</td>
                <td className="px-4 py-2">{customer.zipCode}</td>
                <td className="px-4 py-2">{customer.city}</td>
                <td className="px-4 py-2">{customer.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default MainContent