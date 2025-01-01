import React, { useState, useRef, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import Button from "@/components/common/Button";
import { FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa";
import Icon from "@mdi/react";
import { mdiTune, mdiMenuDown, mdiDotsHorizontal, mdiDelete } from "@mdi/js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import AddNewUser from "@/components/users/AddNewUser";
import Modal from "@/components/common/modal/Modal";
// Define the User type
type User = {
  id: number;
  name: string;
  email: string;
  image: string;
  location: string;
  type: string;
  createdDate: string;
};

// Sample user data
const userData: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    image: "/Mentor2.JPG",
    location: "New York",
    type: "Starter",
    createdDate: "2024-06-01",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    image: "/Mentor2.JPG",
    location: "Los Angeles",
    type: "Standard",
    createdDate: "2024-06-05",
  },
  {
    id: 3,
    name: "Alice Brown",
    email: "alice@example.com",
    image: "/Mentor2.JPG",
    location: "Chicago",
    type: "Instructor",
    createdDate: "2024-06-10",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    image: "/Mentor2.JPG",
    location: "Chicago",
    type: "Instructor",
    createdDate: "2024-06-10",
  },
  {
    id: 5,
    name: "Alice Brown",
    email: "alice@example.com",
    image: "/Mentor2.JPG",
    location: "Chicago",
    type: "Instructor",
    createdDate: "2024-06-10",
  },
  {
    id: 6,
    name: "Alice Brown",
    email: "alice@example.com",
    image: "/Mentor2.JPG",
    location: "Chicago",
    type: "Instructor",
    createdDate: "2024-06-10",
  },
  {
    id: 7,
    name: "Alice Brown",
    email: "alice@example.com",
    image: "/Mentor2.JPG",
    location: "Chicago",
    type: "Instructor",
    createdDate: "2024-06-10",
  },
  {
    id: 8,
    name: "Alice Brown",
    email: "alice@example.com",
    image: "/Mentor2.JPG",
    location: "Chicago",
    type: "Instructor",
    createdDate: "2024-06-10",
  },
  {
    id: 9,
    name: "Alice Brown",
    email: "alice@example.com",
    image: "/Mentor2.JPG",
    location: "Chicago",
    type: "Instructor",
    createdDate: "2024-06-10",
  },
  {
    id: 10,
    name: "Alice Brown",
    email: "alice@example.com",
    image: "/Mentor2.JPG",
    location: "Chicago",
    type: "Instructor",
    createdDate: "2024-06-10",
  },
  {
    id: 11,
    name: "Alice Brown",
    email: "alice@example.com",
    image: "/Mentor2.JPG",
    location: "Chicago",
    type: "Instructor",
    createdDate: "2024-06-10",
  },
  {
    id: 12,
    name: "Alice Brown",
    email: "alice@example.com",
    image: "/Mentor2.JPG",
    location: "Chicago",
    type: "Instructor",
    createdDate: "2024-06-10",
  },
];

// Column definitions
const columns: ColumnDef<User>[] = [
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "Name",
    accessorKey: "name",
    cell: ({ row }) => (
      <div className="flex items-center gap-4">
        <img
          src={row.original.image}
          alt={row.original.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">{row.original.name}</p>
          <p className="text-sm text-gray-500">{row.original.email}</p>
        </div>
      </div>
    ),
  },
  {
    header: "Location",
    accessorKey: "location",
  },
  {
    header: "Type",
    accessorKey: "type",
  },
  {
    header: "Created Date",
    accessorKey: "createdDate",
  },
  {
    header: "Actions",
    cell: ({ row }) => <ActionsDropdown rowId={row.original.id} />,
  },
];

const ActionsDropdown: React.FC<{ rowId: number }> = ({ rowId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAbove, setIsAbove] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  useEffect(() => {
    if (isOpen && dropdownRef.current && buttonRef.current) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - buttonRect.bottom;
      setIsAbove(spaceBelow < dropdownRect.height);
    }
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-2 hover:bg-gray-200 rounded-full"
      >
        <Icon path={mdiDotsHorizontal} size={1} />
      </button>
      {isOpen && (
        <div
          ref={dropdownRef}
          className={`absolute right-0 mt-1 p-2 w-40 bg-white shadow-lg rounded-md border z-50 ${
            isAbove ? "bottom-full mb-2" : "top-full mt-2"
          }`}
        >
          <button className="flex items-center gap-2 text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            <span>See Profile</span>
          </button>
          <button className="flex items-center gap-2 text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full">
            <Icon path={mdiDelete} size={1} color="currentColor" />
            <span>Delete</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default function Users() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isAddUserModalOpen, setisAddUserModalOpen] = useState(false);
  const usersPerPage = 10;
  const indexOfLastProgram = currentPage * usersPerPage;
  const indexOfFirstProgram = indexOfLastProgram - usersPerPage;
  
  const handleModalClose = () => {
    setisAddUserModalOpen(false);
  };
  // Get the current programs to display based on pagination

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = userData.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const currentusers = filteredData.slice(
    indexOfFirstProgram,
    indexOfLastProgram
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredData.length / usersPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };
  const table = useReactTable({
    data: currentusers,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, // Ensure manual control of pagination
    pageCount: totalPages, // Total pages calculated
    state: {
      pagination: {
        pageIndex: currentPage - 1, // Adjust for zero-based index
        pageSize: usersPerPage,
      },
    },
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-NotoSerif text-4xl font-bold">Users</h1>
        <Button customClass="mt-6 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600" onClick={() => setisAddUserModalOpen(true)}>
          Add New
        </Button>
      </div>
      {isAddUserModalOpen && (
              <Modal
                isModalOpen={isAddUserModalOpen}
                onModalClose={handleModalClose}
              >
                <AddNewUser/>
              </Modal>
            )}
      <div className="mb-6 flex gap-4 items-center">
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
        <div className="text-gray-500 w-64 border border-gray-300 rounded-md px-2 flex justify-start items-center cursor-pointer">
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

      {/* Responsive Table */}
      <div className="border border-gray-200 rounded-md mt-4">
        <table className="w-full min-w-[600px] divide-y divide-gray-200">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-2 text-left text-xs font-bold text-gray-800 uppercase tracking-wider"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-2 text-sm text-gray-900">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-12">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-2 mx-2 text-gray-400 shadow-lg rounded-md"
        >
          <FaChevronLeft className="h-[14px]" />
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 rounded-md mx-1 text-sm ${
              currentPage === index + 1
                ? "bg-green-500 text-white"
                : "bg-white text-gray-700 font-bold shadow-lg"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="shadow-lg px-3 py-2 mx-2 text-gray-400 rounded-md"
        >
          <FaChevronRight className="h-[14px]" />
        </button>
      </div>
    </div>
  );
}
