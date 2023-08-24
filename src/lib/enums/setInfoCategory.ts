interface ICategoryLabels {
  [key: string] : {
    newTitle: string,
    editTitle: string,
    namePlaceholder: string,
    nameLabel: string,
    emailLabel?: string,
    emailPlaceholder?: string,
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
  }
};