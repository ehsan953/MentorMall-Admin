import React, { useState, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import { FaSearch, FaChevronLeft, FaChevronRight, FaThumbtack } from "react-icons/fa";
import Icon from "@mdi/react";
import { mdiTune, mdiMenuDown, mdiDotsVertical } from "@mdi/js";
import Button from "@/components/common/Button";

// Define testimonial type
type Testimonial = {
  id: number;
  message: string;
  submittedBy: string;
  date: string;
  context: string;
};

// Dummy data
const testimonialData: Testimonial[] = [
  {
    id: 1,
    message: "Amazing experience with the course!",
    submittedBy: "Sarah Ali",
    date: "2025-06-10",
    context: "After Course Completion",
  },
  {
    id: 2,
    message: "Loved the quality of the product.",
    submittedBy: "Ahmed Khan",
    date: "2025-06-09",
    context: "After Product Purchase",
  },
  {
    id: 3,
    message: "Great client communication and timely delivery.",
    submittedBy: "Freelance Client",
    date: "2025-06-08",
    context: "After Order Completion",
  },
  // Add more as needed
  ...Array.from({ length: 17 }, (_, i) => ({
    id: i + 4,
    message: `This is a generated testimonial message ${i + 4}`,
    submittedBy: `User ${i + 4}`,
    date: `2025-06-${((i + 4) % 30 + 1).toString().padStart(2, "0")}`,
    context:
      i % 3 === 0
        ? "After Course Completion"
        : i % 3 === 1
        ? "After Product Purchase"
        : "After Order Completion",
  })),
];

// Table column definitions
const columns: ColumnDef<Testimonial>[] = [
  {
    accessorKey: "id",
    header: "#",
  },
  {
    accessorKey: "message",
    header: "Message",
  },
  {
    accessorKey: "submittedBy",
    header: "Submitted By",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "context",
    header: "Submitted For",
  },
  {
    id: "actions",
    header: "",
    cell: () => (
      <div className="flex gap-2 justify-end pr-4">
        <button className="p-2 hover:bg-gray-200 rounded-full">
          <Icon path={mdiDotsVertical} size={1} />
        </button>
        <button className="p-2 hover:bg-yellow-200 text-yellow-700 rounded-full">
          <FaThumbtack className="text-sm" />
        </button>
      </div>
    ),
  },
];

export default function Testimonial() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 10;

  const filteredData = testimonialData.filter((testimonial) =>
    testimonial.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const indexOfLast = currentPage * testimonialsPerPage;
  const indexOfFirst = indexOfLast - testimonialsPerPage;
  const currentTestimonials = filteredData.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredData.length / testimonialsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const table = useReactTable({
    data: currentTestimonials,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    pageCount: totalPages,
    state: {
      pagination: {
        pageIndex: currentPage - 1,
        pageSize: testimonialsPerPage,
      },
    },
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-NotoSerif text-4xl font-bold">Testimonials</h1>
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
            onChange={(e) => setSearchQuery(e.target.value)}
            className="outline-none w-full font-normal"
          />
        </div>
        <div className="text-gray-500 w-64 border border-gray-300 rounded-md px-2 flex justify-between items-center cursor-pointer p-2">
          <div className="flex items-center">
            <Icon path={mdiTune} size={1} />
            <span className="mx-2">Filters</span>
          </div>
          <Icon path={mdiMenuDown} size={1} />
        </div>
      </div>

      <div className="border border-gray-200 rounded-md mt-4 overflow-x-auto">
        <table className="w-full min-w-[700px] divide-y divide-gray-200">
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

      {/* Pagination */}
      <div className="flex justify-end mt-12">
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
