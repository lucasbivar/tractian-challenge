export const getObjIdAndEntity = <T extends { id: number }>(
	data: T[],
): Record<number, T> => {
	return data.reduce<Record<number, T>>((map, element) => {
		map[element.id] = element;
		return map;
	}, {});
};

export const arrayOfObjectsGeneralFilter = <T extends object>(
	items: T[],
	searchValue: string,
): T[] => {
	return items.filter((item) => {
		if (!searchValue.length) return item;
		return Object.values(item)
			.join("")
			.toLowerCase()
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
			.includes(
				searchValue
					.toLowerCase()
					.normalize("NFD")
					.replace(/[\u0300-\u036f]/g, ""),
			);
	});
};
