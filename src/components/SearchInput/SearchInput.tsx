import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchInputProps {
  searchName: string;
  setSearchName: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
  message: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({ searchName, setSearchName, handleSearch, message }) => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-4 justify-center mb-2">
        <Input 
          type="text"
          placeholder="Enter the name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="w-[40%] border-red-500 focus:border-transparent focus:outline-none"
        />
        <Button 
          type="button"
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>
      {message && <p className="text-red-500 text-center mt-2">{message}</p>}
    </div>
  );
};