type ICategoryLabels = Record<
	string,
	{
		newTitle: string;
		editTitle: string;
		namePlaceholder?: string;
		nameLabel?: string;
		emailLabel?: string;
		emailPlaceholder?: string;
		descriptionLabel?: string;
		descriptionPlaceholder?: string;
		priorityLabel?: string;
		priorityPlaceholder?: string;
		statusLabel?: string;
		statusPlaceholder?: string;
		titleLabel?: string;
		titlePlaceholder?: string;
		assetLabel?: string;
		assetPlaceholder?: string;
		usersLabel?: string;
		usersPlaceholder?: string;
		companyLabel?: string;
		companyPlaceholder?: string;
		unitLabel?: string;
		unitPlaceholder?: string;
		modelLabel?: string;
		modelPlaceholder?: string;
		deleteMessage: string;
		entity: string;
		successEditMessage: string;
		errorEditMessage: string;
		successCreateMessage: string;
		errorCreateMessage: string;
	}
>;

export const categoryLabels: ICategoryLabels = {
	unit: {
		entity: "Unit",
		newTitle: "Create Unit",
		editTitle: "Edit Unit",
		namePlaceholder: "Type the unit name",
		nameLabel: "Name",
		companyLabel: "Company",
		companyPlaceholder: "Select the unit's company",
		deleteMessage: "Are you sure you want to delete this unit?",
		successEditMessage: "Unit edited successfully!",
		errorEditMessage: "Cannot edit the unit!",
		successCreateMessage: "Unit created successfully!",
		errorCreateMessage: "Cannot create the unit!",
	},
	company: {
		entity: "Company",
		newTitle: "Create Company",
		editTitle: "Edit Company",
		namePlaceholder: "Type the company name",
		nameLabel: "Name",
		deleteMessage: "Are you sure you want to delete this company?",
		successEditMessage: "Company edited successfully!",
		errorEditMessage: "Cannot edit the company!",
		successCreateMessage: "Company created successfully!",
		errorCreateMessage: "Cannot create the company!",
	},
	user: {
		entity: "User",
		newTitle: "Create User",
		editTitle: "Edit User",
		namePlaceholder: "Type the user name",
		nameLabel: "Name",
		emailLabel: "E-mail",
		emailPlaceholder: "Type the user e-mail",
		unitLabel: "Unit",
		unitPlaceholder: "Select the user's unit",
		deleteMessage: "Are you sure you want to delete this user?",
		successEditMessage: "User edited successfully!",
		errorEditMessage: "Cannot edit the user!",
		successCreateMessage: "User created successfully!",
		errorCreateMessage: "Cannot create the user!",
	},
	asset: {
		entity: "Asset",
		newTitle: "Create Asset",
		editTitle: "Edit Asset",
		nameLabel: "Name",
		namePlaceholder: "Type the Asset name",
		modelLabel: "Model",
		modelPlaceholder: "Select the Asset model",
		deleteMessage: "Are you sure you want to delete this Asset?",
		successEditMessage: "Asset edited successfully!",
		errorEditMessage: "Cannot edit the asset!",
		successCreateMessage: "Asset created successfully!",
		errorCreateMessage: "Cannot create the asset!",
	},
	workOrder: {
		entity: "Work Order",
		newTitle: "Create Work Order",
		editTitle: "Edit Work Order",
		titlePlaceholder: "Type the Work Order title",
		titleLabel: "Title",
		assetLabel: "Asset",
		assetPlaceholder: "Select the Work Order`s Asset",
		descriptionLabel: "Description",
		descriptionPlaceholder: "Type the Work Order description",
		deleteMessage: "Are you sure you want to delete this Work Order?",
		priorityLabel: "Priority",
		priorityPlaceholder: "Select the Work Order's Priority",
		statusLabel: "Status",
		statusPlaceholder: "Select the Work Order's Status",
		usersLabel: "Users",
		usersPlaceholder: "Select the Work Order's Users",
		successEditMessage: "Work Order edited successfully!",
		errorEditMessage: "Cannot edit the work order!",
		successCreateMessage: "Work Order created successfully!",
		errorCreateMessage: "Cannot create the work order!",
	},
};
