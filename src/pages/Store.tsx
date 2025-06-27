import React, { useState, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import { FaSearch, FaChevronLeft, FaChevronRight, FaPlus } from "react-icons/fa";
import Icon from "@mdi/react";
import { mdiTune, mdiMenuDown, mdiDotsVertical } from "@mdi/js";
import Button from "@/components/common/Button";

type Product = {
  id: number;
  image: string;
  title: string;
  category: string;
  discount: string;
  stock: number;
};

const productData: Product[] = [
  {
    id: 1,
    image: "/blog.webp",
    title: "Wireless Headphones",
    category: "Electronics",
    discount: "10%",
    stock: 25,
  },
  {
    id: 2,
    image: "/blog.webp",
    title: "Leather Wallet",
    category: "Accessories",
    discount: "15%",
    stock: 10,
  },
  {
    id: 3,
    image: "/blog.webp",
    title: "Yoga Mat",
    category: "Fitness",
    discount: "5%",
    stock: 100,
  },
  // Additional dummy products
  ...Array.from({ length: 17 }, (_, i) => ({
    id: i + 4,
    image: "/blog.webp",
    title: `Product ${i + 4}`,
    category: ["Electronics", "Fitness", "Accessories"][i % 3],
    discount: `${(i * 3) % 20}%`,
    stock: 30 + i,
  })),
];

const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "id",
    header: "#",
  },
  {
    id: "product",
    header: "Product",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <img
          src={row.original.image}
          alt={row.original.title}
          className="w-12 h-12 object-cover rounded-md"
        />
        <span>{row.original.title}</span>
      </div>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "discount",
    header: "Discount",
  },
  {
    accessorKey: "stock",
    header: "Stock",
  },
  {
    id: "actions",
    header: "",
    cell: () => (
      <button className="p-2 hover:bg-gray-200 rounded-full">
        <Icon path={mdiDotsVertical} size={1} />
      </button>
    ),
  },
];

export default function Store() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const filteredData = productData.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredData.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredData.length / productsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const table = useReactTable({
    data: currentProducts,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    pageCount: totalPages,
    state: {
      pagination: {
        pageIndex: currentPage - 1,
        pageSize: productsPerPage,
      },
    },
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-NotoSerif text-4xl font-bold">Products</h1>
        <Button customClass="mt-6 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 flex items-center gap-2">
          <FaPlus className="text-sm" /> Add New Product
        </Button>
      </div>

      <div className="mb-4 flex gap-4 items-center">
        <div className="flex items-center border border-gray-300 rounded-md p-1 bg-white w-96">
          <div className="p-2 text-gray-500">
            <FaSearch />
          </div>
          <input
            type="text"
            placeholder="Search products..."
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
