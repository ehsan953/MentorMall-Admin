import React, {useState} from 'react'
import Button from '@/components/common/Button';
import { FaSearch } from "react-icons/fa";
import Icon from "@mdi/react";
import { mdiTune, mdiMenuDown } from "@mdi/js";
export default function Videos() {
  const [searchQuery, setSearchQuery] = useState("");
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    };
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-NotoSerif text-4xl font-bold">Videos</h1>
        <Button customClass="mt-6 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
          Add New Video
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
        <div
          className="text-gray-500 w-64 border border-gray-300 rounded-md px-2 flex justify-start items-center cursor-pointer"
        >
          <div className="basis-full flex justify-between align-center p-2">
            <div className="flex">
              <Icon path={mdiTune} size={1} color="currentColor" />
              <span className="text_style mx-1">Filters</span>
            </div>

            <div>
              <Icon path={mdiMenuDown} size={1} color="currentColor" />
            </div>
          </div>
        </div>
      </div>
      <p>Manage your users here.</p>
    </div>
  )
}
