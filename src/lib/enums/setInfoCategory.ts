interface ICategoryLabels {
  [key: string] : {
    newTitle: string,
    editTitle: string,
    namePlaceholder: string,
    nameLabel: string,
    emailLabel?: string,
    emailPlaceholder?: string,
    descriptionLabel?: string,
    descriptionPlaceholder?: string,
    priorityLabel?: string,
    priorityPlaceholder?: string,
    statusLabel?: string,
    statusPlaceholder?: string,
    usersLabel?: string,
    usersPlaceholder?: string,
    deleteMessage: string
  }
};

export const categoryLabels: ICategoryLabels = {
  unit : {
    newTitle: 'Create Unit',
    editTitle: 'Edit Unit',
    namePlaceholder: 'Type the unit name',
    nameLabel: "Name",
    deleteMessage: 'Are you sure you want to delete this unit?'
  },
  company : {
    newTitle: 'Create Company',
    editTitle: 'Edit Company',
    namePlaceholder: 'Type the company name',
    nameLabel: "Name",
    deleteMessage: 'Are you sure you want to delete this company?'
  },
  user: {
    newTitle: 'Create User',
    editTitle: 'Edit User',
    namePlaceholder: 'Type the user name',
    nameLabel: "Name",
    emailLabel: "E-mail",
    emailPlaceholder: 'Type the user e-mail',
    deleteMessage: 'Are you sure you want to delete this user?'
  },
  machine: {
    newTitle: 'Create Machine',
    editTitle: 'Edit Machine',
    namePlaceholder: 'Type the machine name',
    nameLabel: "Name",
    deleteMessage: 'Are you sure you want to delete this machine?'
  },
  workOrder : {
    newTitle: 'Create Work Order',
    editTitle: 'Edit Work Order',
    namePlaceholder: 'Type the Work Order name',
    nameLabel: "Name",
    descriptionLabel: "Description",
    descriptionPlaceholder: 'Type the Work Order description',
    deleteMessage: 'Are you sure you want to delete this Work Order?',
    priorityLabel: "Priority",
    priorityPlaceholder: "Select the Work Order's Priority",
    statusLabel: "Status",
    statusPlaceholder: "Select the Work Order's Status",
    usersLabel: "Users",
    usersPlaceholder: "Select the Work Order's Users",
  },
};