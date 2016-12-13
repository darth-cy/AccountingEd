export const CHAPTERS = {
  "1": {
    id: "1",
    title: "Getting Started",
    description: "",
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
  }
}
