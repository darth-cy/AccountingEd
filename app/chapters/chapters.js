export const CHAPTERS = {
  "1": {
    id: "1",
    title: "First Task: A Cash Bonus",
    description: "In this task, you'll learn how to account for your extra income, along with learning about your application interface. We click-drag accounting items from the left list to the accounting sheets on the right. When you believe all items are in their correct statements, click on 'Submit Answer'. You'll receive instant feedback on the assignment.",
    steps: [
      {
        step_title: "An Extra Something",
        description: "Your colleagues recommended you for a professional award and you stood out from all the candidates. The award grants an extra $2,500 for your income this month.",
        action_items: [
          {name: "Cash Reward", descriptions: "Good professional!", amount: 2500}
        ]
      }
    ],

    statements: {
      cash_flow_statement: {
        income: [
          {name: "On-Campus Work Salary", item_description: "The campus employes you to lower the cost of the personnels here at the department.", amount: 1400}
        ],
        expenses: [
          {name: "Rent", item_description: "A comfortable home services you physically, but you service it financially.", amount: 750},
          {name: "Other Expenses", item_description: "A symbol of adulthood worth fighting for.", amount: 560},
        ],
      },
      balance_sheet: {
        assets: [
          {name: "Cash", item_description: "Home.", amount: 3460},
          {name: "Macbook", item_description: "Simple, cold, and sure.", amount: 1350},
        ],
        liabilities: [
          {name: "Parent Support", item_description: "Your parents support your expenses", amount: 4000},
        ],
      },
      deleted: []
    },
    equity: 75370,
    criteria: {
      should_contain: [
        ["income", "On-Campus Work Salary"],
        ["income", "Cash Reward"],
        ["expenses", "Rent"],
        ["expenses", "Other Expenses"],
        ["assets", "Cash"],
        ["assets", "Macbook"],
        ["liabilities", "Parent Support"],
      ],
      should_be: [
        ["equity": 75370]
      ]
    }
  },


  "4": {
    id: "4",
    title: "Getting Started",
    description: "First line task for your to get used to the interface.",
    steps: [
      {
        step_title: "A New Job",
        description: "You're offered a job at an early-stage venture-backed startup called StarDust, Ltd. You performed very well on the interviews and earned yourself a handsome salary.",
        action_items: [
          {name: "Salary", description: "A more tangible evaluation of your interview performance.", amount: 3700},
        ]
      },{
        step_title: "Share in the Company",
        description: "The new job also includes a starter equity package of 25,500 shares in the company, par value $0.01 per share. You need to buy them out of pocket.",
        action_items: [
          {name: "25,500 Shares StarDust", description: "Time will tell their value, not investment bankers.", amount: 255},
          {name: "Share Purchase Payment", description: "Out of pocket expense for the shares in StarDust", amount: 255}
        ]
      }
    ],
    statements: {
      cash_flow_statement: {
        income: [
          {name: "Book Royalty", item_description: "Elon Century, Ltd. is paying $200 in royalty for the publishing rights of your biography.", amount: 200}
        ],
        expenses: [
          {name: "Mortgage Payment", item_description: "A comfortable home services you physically, but you service it financially.", amount: 1450},
          {name: "Car Loan Payment", item_description: "A symbol of adulthood worth fighting for.", amount: 240},
          {name: "School Loan Payment", item_description: "The doubt is not in its usefulness, but the boundary of its usefulness.", amount: 370},
          {name: "Misc. Expenses", item_description: "The entry you most worry about it when you're poor.", amount: 1400},
        ],
      },
      balance_sheet: {
        assets: [
          {name: "Cash", item_description: "Simple, cold, and sure.", amount: 14370},
          {name: "3/2/1 House", item_description: "Home.", amount: 145000},
          {name: "Car", item_description: "The other home.", amount: 26000},
        ],
        liabilities: [
          {name: "Mortgage", item_description: "Home Mortgage for the 3/2/1 house you own.", amount: 85000},
          {name: "Car Loan", item_description: "A loan on your second-hand Mercedes.", amount: 13000},
          {name: "School Loan", item_description: "A loan on your education.", amount: 12000},
        ],
      }
    },
    equity: 75370,
    criteria: {
      should_contain: [
        ["income", "Salary"],
        ["income", "Book Royalty"],
        ["expenses", "Mortgage Payment"],
        ["expenses", "Car Loan Payment"],
        ["expenses", "School Loan Payment"],
        ["expenses", "Misc. Expenses"],
        ["expenses", "Share Purchase Payment"],
        ["assets", "Cash"],
        ["assets", "3/2/1 House"],
        ["assets", "Car"],
        ["assets", "25,500 Shares StarDust"],
        ["liabilities", "Mortgage"],
        ["liabilities", "Car Loan"],
        ["liabilities", "School Loan"],
      ],
      should_not_be_present: [

      ],
      should_be: [
        ["equity": 75370]
      ]
    }
  },

  "5": {
    id: "5",
    title: "Second Car",
    description: "Asset purchasing and leverages.",
    steps: [
      {
        step_title: "A New Car",
        description: "You have decided to fully burden your garage by purchasing another car.",
        action_items: [
          {name: "New Car Down Payment", description: "Cash-front for the car", amount: 12000},
          {name: "New Car Loan", description: "Second car loan", amount: 37000},
          {name: "New Car", description: "The second car you own", amount: 49000},
        ]
      },
      {
        step_title: "Small Loan Liquidity",
        description: "Since you purchased the car, your liquidity is at risk. You decided to take out a private loan.",
        action_items: [
          {name: "Loan Cash", description: "Cash from private loan", amount: 20000},
          {name: "Private Loan Interest", description: "Monthly service rate for the private loan", amount: 570},
          {name: "Private Loan", description: "Yet another liability", amount: 20000},
        ]
      }
    ],
    statements: {
      cash_flow_statement: {
        income: [
          {name: "Book Royalty", item_description: "Elon Century, Ltd. is paying $200 in royalty for the publishing rights of your biography.", amount: 200}
        ],
        expenses: [
          {name: "Mortgage Payment", item_description: "A comfortable home services you physically, but you service it financially.", amount: 1450},
          {name: "Car Loan Payment", item_description: "A symbol of adulthood worth fighting for.", amount: 240},
          {name: "School Loan Payment", item_description: "The doubt is not in its usefulness, but the boundary of its usefulness.", amount: 370},
          {name: "Misc. Expenses", item_description: "The entry you most worry about it when you're poor.", amount: 1400},
        ],
      },
      balance_sheet: {
        assets: [
          {name: "Cash", item_description: "Simple, cold, and sure.", amount: 14370},
          {name: "3/2/1 House", item_description: "Home.", amount: 145000},
          {name: "Car", item_description: "The other home.", amount: 26000},
        ],
        liabilities: [
          {name: "Mortgage", item_description: "Home Mortgage for the 3/2/1 house you own.", amount: 85000},
          {name: "Car Loan", item_description: "A loan on your second-hand Mercedes.", amount: 13000},
          {name: "School Loan", item_description: "A loan on your education.", amount: 12000},
        ],
      }
    },
    equity: 75370,
    criteria: {
      should_contain: [
        ["income", "Salary"],
        ["income", "Book Royalty"],
        ["expenses", "Mortgage Payment"],
        ["expenses", "Car Loan Payment"],
        ["expenses", "School Loan Payment"],
        ["expenses", "Misc. Expenses"],
        ["expenses", "Share Purchase Payment"],
        ["assets", "Cash"],
        ["assets", "3/2/1 House"],
        ["assets", "Car"],
        ["assets", "25,500 Shares StarDust"],
        ["liabilities", "Mortgage"],
        ["liabilities", "Car Loan"],
        ["liabilities", "School Loan"],
      ],
      should_not_be_present: [

      ],
      should_be: [
        ["equity": 75370]
      ]
    }
  },
  "6": {
    id: "6",
    title: "Publishing a New Book",
    description: "You've published a new book.",
    steps: [
      {
        step_title: "Publishing Rights Settlement",
        description: "The publishing house is offering you an upfront cash of $4000 plus $450 every month for the publishing rights of your new book.",
        action_items: [
          {name: "Book Cash Front", description: "Reward for publishing rights", amount: 4000},
          {name: "New Monthly Book Royalty", description: "The stream for continuous profit generation.", amount: 450}
        ]
      },{
        step_title: "Right Back Provision",
        description: "The publishing house offered you an option to buy back the publishing right of the book after 10 years at the optional price of $2000 upfront. You graciously took the offer.",
        action_items: [
          {name: "Right Back Provision", description: "A contract that grants you the right to buy back the publishing rights of your book after 10 years.", amount: 2000},
          {name: "Right Back Payment", description: "Out of pocket payment for the rights of buying back your book publishing rights.", amount: 2000}
        ]
      }
    ],
    statements: {
      cash_flow_statement: {
        income: [
          {name: "Book Royalty", item_description: "Elon Century, Ltd. is paying $200 in royalty for the publishing rights of your biography.", amount: 200}
        ],
        expenses: [
          {name: "Mortgage Payment", item_description: "A comfortable home services you physically, but you service it financially.", amount: 1450},
          {name: "Car Loan Payment", item_description: "A symbol of adulthood worth fighting for.", amount: 240},
          {name: "School Loan Payment", item_description: "The doubt is not in its usefulness, but the boundary of its usefulness.", amount: 370},
          {name: "Misc. Expenses", item_description: "The entry you most worry about it when you're poor.", amount: 1400},
        ],
      },
      balance_sheet: {
        assets: [
          {name: "Cash", item_description: "Simple, cold, and sure.", amount: 14370},
          {name: "3/2/1 House", item_description: "Home.", amount: 145000},
          {name: "Car", item_description: "The other home.", amount: 26000},
        ],
        liabilities: [
          {name: "Mortgage", item_description: "Home Mortgage for the 3/2/1 house you own.", amount: 85000},
          {name: "Car Loan", item_description: "A loan on your second-hand Mercedes.", amount: 13000},
          {name: "School Loan", item_description: "A loan on your education.", amount: 12000},
        ],
      }
    },
    equity: 75370,
    criteria: {
      should_contain: [
        ["income", "Salary"],
        ["income", "Book Royalty"],
        ["expenses", "Mortgage Payment"],
        ["expenses", "Car Loan Payment"],
        ["expenses", "School Loan Payment"],
        ["expenses", "Misc. Expenses"],
        ["expenses", "Share Purchase Payment"],
        ["assets", "Cash"],
        ["assets", "3/2/1 House"],
        ["assets", "Car"],
        ["assets", "25,500 Shares StarDust"],
        ["liabilities", "Mortgage"],
        ["liabilities", "Car Loan"],
        ["liabilities", "School Loan"],
      ],
      should_not_be_present: [

      ],
      should_be: [
        ["equity": 75370]
      ]
    }
  },
}
