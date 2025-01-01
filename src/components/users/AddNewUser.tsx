import React, { useState } from 'react';
import ImageUploader from '../common/imageupload/ImageUploaderComponent';
import Select, { StylesConfig } from 'react-select';
import { FiEye, FiEyeOff } from 'react-icons/fi';
// Sample country options
const countryOptions = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'pk', label: 'Pakistan' }
];

// Custom styles for react-select with proper types
const customStyles: StylesConfig<{ value: string; label: string }, false> = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? '#22c55e' // Green for selected option
      : state.isFocused
      ? '#DCFCE7' // Light green on hover
      : undefined,
    color: state.isSelected ? 'white' : 'black',
    ':active': {
      ...provided[':active'],
      backgroundColor: '#16a34a' // Darker green when clicked
    }
  }),
  control: (provided) => ({
    ...provided,
    borderColor: '#22c55e', // Green border
    '&:hover': {
      borderColor: '#16a34a' // Darker green on hover
    }
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#4b5563' // Green text for selected value
  })
};

export default function AddNewUser() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
      };
  return (
    <div className='w-[500px] h-auto py-6 px-4 bg-white shadow-md rounded-md'>
      {/* Image Uploader */}
      <div className='my-4'>
        <ImageUploader />
      </div>
      
      {/* User Information Form */}
      <form className='space-y-4 px-6 text-sm'>
        {/* First Name */}
        <div>
          <label className='block text-sm font-medium text-gray-700'>First Name</label>
          <input
            type='text'
            placeholder='Enter First Name'
            className='w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-200'
          />
        </div>

        {/* Last Name */}
        <div>
          <label className='block text-sm font-medium text-gray-700'>Last Name</label>
          <input
            type='text'
            placeholder='Enter Last Name'
            className='w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-200'
          />
        </div>

        {/* Email */}
        <div>
          <label className='block text-sm font-medium text-gray-700'>Email</label>
          <input
            type='email'
            placeholder='Enter Email'
            className='w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-200'
          />
        </div>

        {/* Password */}
        <div className='relative'>
          <label className='block text-sm font-medium text-gray-700'>Password</label>
          <input
            type={passwordVisible ? 'text' : 'password'}
            placeholder='Enter Password'
            className='w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-200'
          />
          <div 
            className='absolute inset-y-0 right-3 top-7 flex items-center cursor-pointer text-gray-500'
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <label className='block text-sm font-medium text-gray-700'>Phone Number</label>
          <input
            type='tel'
            placeholder='Enter Phone Number'
            className='w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-200'
          />
        </div>

        {/* Country */}
        <div>
          <label className='block text-sm font-medium text-gray-700'>Country</label>
          <Select 
            options={countryOptions} 
            placeholder='Select Country' 
            styles={customStyles}
            className='mt-1'
          />
        </div>

        {/* Submit Button */}
        <div className='pt-4'>
          <button
            type='submit'
            className='w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition'
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
}
