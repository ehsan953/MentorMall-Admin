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
import { mdiTune, mdiMenuDown, mdiDotsVertical } from "@mdi/js";

type BlogPost = {
  id: number;
  title: string;
  banner: string;
  submittedBy: string;
  publishedDate: string;
  status: "Published" | "Draft";
};

// Sample blog data
const blogData: BlogPost[] = [
  {
    id: 1,
    title: "10 Tips for Learning React",
    banner: "/blog.webp",
    submittedBy: "Jane Doe",
    publishedDate: "2025-06-05",
    status: "Published",
  },
  {
    id: 2,
    title: "Tailwind CSS Best Practices",
    banner: "/blog-hero-bg.jpg",
    submittedBy: "John Smith",
    publishedDate: "2025-06-07",
    status: "Draft",
  },
  {
    id: 3,
    title: "Understanding JavaScript Closures",
    banner: "/blog.webp",
    submittedBy: "Ali Khan",
    publishedDate: "2025-06-10",
    status: "Published",
  },
  {
    id: 4,
    title: "10 Tips for Learning React",
    banner: "/blog-hero-bg.jpg",
    submittedBy: "Jane Doe",
    publishedDate: "2025-06-05",
    status: "Published",
  },
  {
    id: 5,
    title: "Tailwind CSS Best Practices",
    banner: "/blog.webp",
    submittedBy: "John Smith",
    publishedDate: "2025-06-07",
    status: "Draft",
  },
  {
    id: 6,
    title: "Understanding JavaScript Closures",
    banner: "/blog-hero-bg.jpg",
    submittedBy: "Ali Khan",
    publishedDate: "2025-06-10",
    status: "Published",
  },
  {
    id: 7,
    title: "10 Tips for Learning React",
    banner: "/blog.webp",
    submittedBy: "Jane Doe",
    publishedDate: "2025-06-05",
    status: "Published",
  },
  {
    id: 8,
    title: "Tailwind CSS Best Practices",
    banner: "/blog-hero-bg.jpg",
    submittedBy: "John Smith",
    publishedDate: "2025-06-07",
    status: "Draft",
  },
  {
    id: 9,
    title: "Understanding JavaScript Closures",
    banner: "/blog.webp",
    submittedBy: "Ali Khan",
    publishedDate: "2025-06-10",
    status: "Published",
  },
  {
    id: 10,
    title: "10 Tips for Learning React",
    banner: "/blog-hero-bg.jpg",
    submittedBy: "Jane Doe",
    publishedDate: "2025-06-05",
    status: "Published",
  },
  {
    id: 11,
    title: "Tailwind CSS Best Practices",
    banner: "/blog.webp",
    submittedBy: "John Smith",
    publishedDate: "2025-06-07",
    status: "Draft",
  },
  {
    id: 12,
    title: "Understanding JavaScript Closures",
    banner: "/blog-hero-bg.jpg",
    submittedBy: "Ali Khan",
    publishedDate: "2025-06-10",
    status: "Published",
  },
  // Add more static ones if needed...
];

const columns: ColumnDef<BlogPost>[] = [
  {
    id: "banner", // ✅ Add id
    header: "Banner",
    cell: ({ row }) => (
      <img
        src={row.original.banner}
        alt="Banner"
        className="w-16 h-10 object-cover rounded"
      />
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "submittedBy",
    header: "Submitted By",
  },
  {
    accessorKey: "publishedDate",
    header: "Published Date",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <span
        className={`text-sm px-2 py-1 rounded ${
          row.original.status === "Published"
            ? "bg-green-100 text-green-800"
            : "bg-yellow-100 text-yellow-800"
        }`}
      >
        {row.original.status}
      </span>
    ),
  },
  {
    id: "actions", // ✅ Add id
    header: "", // still okay to be empty string
    cell: () => (
      <button className="p-2 hover:bg-gray-200 rounded-full">
        <Icon path={mdiDotsVertical} size={1} />
      </button>
    ),
  },
];


export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 10;

  const filteredData = blogData.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const indexOfLast = currentPage * blogsPerPage;
  const indexOfFirst = indexOfLast - blogsPerPage;
  const currentBlogs = filteredData.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredData.length / blogsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const table = useReactTable({
    data: currentBlogs,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    pageCount: totalPages,
    state: {
      pagination: {
        pageIndex: currentPage - 1,
        pageSize: blogsPerPage,
      },
    },
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-NotoSerif text-4xl font-bold">Blog</h1>
        <Button customClass="mt-6 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
          Add New Article
        </Button>
      </div>

      <div className="mb-4 flex gap-4 items-center">
        <div className="flex items-center border border-gray-300 rounded-md p-1 bg-white w-96">
          <div className="p-2 text-gray-500">
            <FaSearch />
          </div>
          <input
            type="text"
            placeholder="Search by title..."
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
