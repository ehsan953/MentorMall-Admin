import React, {useState} from 'react'
import Button from '@/components/common/Button';
import { FaSearch } from "react-icons/fa";
export default function Coupon() {
  const [searchQuery, setSearchQuery] = useState("");
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    };
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-NotoSerif text-4xl font-bold">Coupon</h1>
        <Button customClass="mt-6 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
          Add New
        </Button>
      </div>
      <div className="mb-4 flex gap-4 items-center">
        <div className="flex items-center border border-gray-300 rounded-md p-1 bg-white w-96">
          <div className="p-2 text-gray-500">
            <FaSearch />
          </div>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="outline-none w-full font-normal focus:border-blue-50"
          />
        </div>
        
      </div>
      <p>Manage your users here.</p>
    </div>
  )
}
