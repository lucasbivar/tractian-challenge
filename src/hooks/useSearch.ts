import { useState } from "react";
import { useDebounce } from "usehooks-ts";

interface UseSearchPropsResponse {
	debouncedValue: string;
	searchValue: string;
	handleChangedSearchValue: (...args: any) => void;
}

export const useSearch = (): UseSearchPropsResponse => {
	const [searchValue, setSearchValue] = useState("");
	const debouncedValue = useDebounce<string>(searchValue, 300);

	const handleChangedSearchValue = (value: string): void => {
		setSearchValue(value);
	};

	return { debouncedValue, searchValue, handleChangedSearchValue };
};
