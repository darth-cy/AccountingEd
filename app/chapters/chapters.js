export const CHAPTERS = {
  "1": {
    id: "1",
    title: "Salary, Bonus and Extras",
    description: "Welcome to the course! In this first chapter, we study the origin of wealth -- income. Salaries and additional extra income contribute an increase to your equity and is favorable in increasing your wealth. They flow directly into your net equity and usually come from your labor.",
    steps: [
      {
        step_title: "An Extra Something",
        description: "Your colleagues secretly recommended you for a professional award and you stood out from all the candidates. The award grants an unexpected $2,500 for your income this month.",
        hint: "If you're on a desktop, click and drag the action items to a desired location. If you're using a mobile device, tap on the item and choose the desired location from the dropdown.",
        action_items: [
          {name: "Cash Reward", descriptions: "Good professional!", amount: 2500, regular: false}
        ]
      },
      {
        step_title: "First Expense",
        description: "You decided to treat yourself to a nice dinner using the reward money. These types of cash outflow is categorized as expenses because the acquired item (in this case dinner) doesn't have future cash value (it's gone after you eat it).",
        action_items: [
          {name: "Dinner Treat", description: "surg", amount: 145, regular: false}
        ]
      },
      {
        step_title: "Reflection",
        description: "Notice that this month, your actual inflow is much higher than regular inflow. Sporadic cash rewards are not re-occuring items and thus should be analyzed separately from regular items that concern long-term financial planning.",
        hint: "Don't worry about the green entries for now. We'll explain them shortly.",
        action_items: []
      }
    ],

    statements: {
      cash_flow_statement: {
        income: [
          {name: "Salary", item_description: "The campus employes you to lower the cost of the personnels here at the department.", amount: 2300, regular: true}
        ],
        expenses: [
          {name: "Rent", item_description: "A comfortable home services you physically, but you service it financially.", amount: 750, regular: true},
          {name: "Student Loan Monthly Pay", item_description: "not", amount: 65, regular: true},
          {name: "Credit Card Monthly Pay", item_description: "e", amount: 80, regular: true},
          {name: "Other Expenses", item_description: "A symbol of adulthood worth fighting for.", amount: 560, regular: true},
        ],
      },
      balance_sheet: {
        assets: [
          {name: "Cash", item_description: "Home.", amount: 3460},
          {name: "Other Assets", item_description: "Simple, cold, and sure.", amount: 1350},
        ],
        liabilities: [
          {name: "Student Loan", item_description: "Your parents support your expenses", amount: 2000},
          {name: "Credit Card Balance", item_description: "credit", amount: 734},
        ],
      },
      deleted: []
    },
    equity: 2076,
    criteria: {
      should_contain: [
        ["income", "Salary"],
        ["income", "Cash Reward"],
        ["expenses", "Rent"],
        ["expenses", "Student Loan Monthly Pay"],
        ["expenses", "Other Expenses"],
        ["expenses", "Dinner Treat"],
        ["expenses", "Credit Card Monthly Pay"]
        ["assets", "Cash"],
        ["assets", "Other Assets"],
        ["liabilities", "Student Loan"],
        ["liabilities", "Credit Card Balance"]
      ],
      should_be: [
        ["equity": 75370]
      ]
    }
  },

  "2": {
    id: "2",
    title: "Acquire an Income-generating Asset",
    description: "Assets are properties that have cash value (meaning they can be sold for a price). But not all assets are created equal. A sub-ideal asset is something that will deteriorate and generate no upside income, such as a car only you drive or a house only you live in. An ideal asset should generate extra income on your behalf without you tending to them (known as passive income). Examples include housings that are rented out (generate rent income), items for lending (generate usage fee), and businesses (generate profit).",
    steps: [
      {
        step_title: "An Eye for Value",
        description: "Income-generating assets generate extra income usually because other people are willing to use them for a fee. That's exactly why you decided to purchase a collection of rare books at the flee market last Saturday because you know someone will want to borrow them for a fee.",
        hint: "Book purchases seem like expenses, but if you can circulate them for usage fees, then they generate additional income for you. Notice that in accounting, potential appreciation in value is not counted (because these premiums are not certain). Besides, betting on asset's future value usually generates less return than creating tangible income today.",
        action_items: [
          {name: "Pay for Rare Books", descriptions: "Good professional!", amount: 2400},
          {name: "Rare Books Collection", descriptions: "bok", amount: 2400}
        ]
      },
      {
        step_title: "Mini Rare Book Library",
        description: "You posted several advertisements online for the rare books you collected. Within a few days, a number of people responded, expressing interest in borrowing them for a monthly fee.",
        hint: "$75 each month on $2400 investment is 3% return/month and 36% return/yr -- a handsome rate. Many people lack patience and instead pursue the legendary 400%+ return on stock investments. It should be noted that such cases are rare and involve significantly higher risk than income from operations.",
        action_items: [
          {name: "Book Lending Income", description: "surg", amount: 75, passive: true}
        ]
      }
    ],

    statements: {
      cash_flow_statement: {
        income: [
          {name: "Salary", item_description: "The campus employes you to lower the cost of the personnels here at the department.", amount: 2300}
        ],
        expenses: [
          {name: "Rent", item_description: "A comfortable home services you physically, but you service it financially.", amount: 750},
          {name: "Student Loan Monthly Pay", item_description: "not", amount: 65},
          {name: "Credit Card Monthly Pay", item_description: "e", amount: 80},
          {name: "Other Expenses", item_description: "A symbol of adulthood worth fighting for.", amount: 560},
        ],
      },
      balance_sheet: {
        assets: [
          {name: "Cash", item_description: "Home.", amount: 5960},
          {name: "Other Assets", item_description: "Simple, cold, and sure.", amount: 1350},
        ],
        liabilities: [
          {name: "Student Loan", item_description: "Your parents support your expenses", amount: 2000},
          {name: "Credit Card Balance", item_description: "credit", amount: 734},
        ],
      },
      deleted: []
    },
    equity: 4576,
    criteria: {
      should_contain: [
        ["income", "Salary"],
        ["income", "Book Lending Income"],
        ["expenses", "Rent"],
        ["expenses", "Student Loan Monthly Pay"],
        ["expenses", "Other Expenses"],
        ["expenses", "Credit Card Monthly Pay"],
        ["expenses", "Pay for Rare Books"],
        ["assets", "Cash"],
        ["assets", "Rare Books Collection"],
        ["assets", "Other Assets"],
        ["liabilities", "Student Loan"],
        ["liabilities", "Credit Card Balance"]
      ],
      should_be: [
        ["equity": 75370]
      ]
    }
  },

  "3": {
    id: "3",
    title: "Shed Debts and Liabilities",
    description: "As a simple starter, liabilities are things that you owe to others. In light of this fact, liabilities usually generate negative payments each month, such as loan payment or mortgage service. However, like assets, liabilities are also not created equal. The ideal type of liability is one that requires $0 monthly payment and doens't pressure you to pay it back anytime soon. For example, an interest-free loan of $1000 for 100 years is superb (a cheap liability) while a $500 payday loan that needs to be paid back next month for $30 interest is terrible (a very expensive liability). In a later chapter, we'll learn refinancing, which is a method of substituting expensive liabilities with cheapter ones.",
    steps: [
      {
        step_title: "Debt-free Student",
        description: "After several month of saving, you acquired enough cash to pay back the student loan you took out. The move will free you from the monthly payment that has haunted you for 2 years.",
        hint: "To drop an item from the sheet, send it to the deleted list near the bottom of the screen. In this case, you should drop the student loan entry you just paid back and its monthly payment.",
        action_items: [
          {name: "Student Loan Payback", descriptions: "Good professional!", amount: 2000},
        ]
      },
      {
        step_title: "Bye Bye Credit Card",
        description: "You posted several advertisements online for the rare books you collected. Within a few days, a number of people responded, expressing interest in borrowing them for a monthly fee.",
        hint: "$75 each month on $2400 investment is 3% return/month and 36% return/yr -- a handsome rate. Many people lack patience and instead pursue the legendary 400%+ return on stock investments. It should be noted that such cases are rare and involve significantly higher risk than income from operations.",
        action_items: [

        ]
      }
    ],

    statements: {
      cash_flow_statement: {
        income: [
          {name: "Salary", item_description: "The campus employes you to lower the cost of the personnels here at the department.", amount: 2300},
          {name: "Book Lending Income", description: "surg", amount: 75}
        ],
        expenses: [
          {name: "Rent", item_description: "A comfortable home services you physically, but you service it financially.", amount: 750},
          {name: "Student Loan Monthly Pay", item_description: "not", amount: 65},
          {name: "Credit Card Monthly Pay", item_description: "e", amount: 80},
          {name: "Other Expenses", item_description: "A symbol of adulthood worth fighting for.", amount: 560},
        ],
      },
      balance_sheet: {
        assets: [
          {name: "Cash", item_description: "Home.", amount: 5960},
          {name: "Rare Books Collection", descriptions: "bok", amount: 2400},
          {name: "Other Assets", item_description: "Simple, cold, and sure.", amount: 1350},
        ],
        liabilities: [
          {name: "Student Loan", item_description: "Your parents support your expenses", amount: 2000},
          {name: "Credit Card Balance", item_description: "credit", amount: 734},
        ],
      },
      deleted: []
    },
    equity: 2810,
    criteria: {
      should_contain: [
        ["income", "Salary"],
        ["income", "Book Lending Income"],
        ["expenses", "Rent"],
        ["expenses", "Student Loan Monthly Pay"],
        ["expenses", "Other Expenses"],
        ["expenses", "Pay for Rare Books"],
        ["assets", "Cash"],
        ["assets", "Rare Books Collection"],
        ["assets", "Other Assets"],
        ["liabilities", "Student Loan"],
      ],
      should_be: [
        ["equity": 75370]
      ]
    }
  },


  "4": {
    id: "4",
    title: "Shedding Liabilities",
    description: "In this exercise, we learn to cross off our liability entries and their service payments. Eliminating negative income is equivalent to increasing your net income and is therefore favorable in most situations. The bank you loaned the amount from quotes $75 for early settlement processing.",
    steps: [
      {
        step_title: "Pay Bank the Fee",
        description: "You've decided to pay back your student loan early. Loans generate service payments every month, but they also generate processing fees. Fortunately, they're usually not too high.",
        action_items: [
          {name: "Settlement Fee", descriptions: "gone.", amount: 75}
        ]
      },
      {
        step_title: "Settle the Loan",
        description: "Pay the full sum of your student loan as an expense, then drop the loan entry and its service expense from the sheets.",
        hint: "To drop an item, move it to the 'Removed Items' list.",
        action_items: [
          {name: "Loan Payback", description: "ahead of time", amount: 5000}
        ]
      }
    ],

    statements: {
      cash_flow_statement: {
        income: [
          {name: "Part-time Salary", item_description: "student's work", amount: 1670},
          {name: "Book Lending", item_description: "book service", amount: 20}
        ],
        expenses: [
          {name: "Rent", item_description: "A comfortable home services you physically, but you service it financially.", amount: 850},
          {name: "Other Expenses", item_description: "A symbol of adulthood worth fighting for.", amount: 600},
          {name: "Loan Monthly Service", item_description: "payback", amount: 140}
        ],
      },
      balance_sheet: {
        assets: [
          {name: "Cash", item_description: "Home.", amount: 6500},
          {name: "Rare Book Collection", item_description: "Simple, cold, and sure.", amount: 240},
        ],
        liabilities: [
          {name: "Student Loan", item_description: "everyone's doing it", amount: 5000}
        ],
      },
      deleted: []
    },
    equity: 1740,
    criteria: {
      should_contain: [
        ["income", "Part-time Salary"],
        ["income", "Book Lending"],
        ["expenses", "Rent"],
        ["expenses", "Other Expenses"],
        ["deleted", "Loan Monthly Service"],
        ["assets", "Cash"],
        ["assets", "Rare Book Collection"],
        ["deleted", "Student Loan"],
      ],
      should_be: [
      ]
    }
  },

  "4": {
    id: "4",
    title: "Company Stock",
    description: "In this exercise you'll deal with stock purchase accounting. Although the stock may appreciate in value, it's not certain. Instead of creating an illusion of wealth by adding speculative values, stocks are usually accounted using their purchase price.",
    steps: [
      {
        step_title: "Stock Purchase",
        description: "The company you work for is eager to grant you 165,000 shares of its stock. The par value is $0.001 and you'll purchase it out-of-pocket.",
        hint: "",
        action_items: [
          {name: "165,000 Shares of Corp, Inc.", description: "stock", amount: 165},
          {name: "Stock Purchase Payment", description: "pay", amount: 165},
        ]
      },
      {
        step_title: "83(b) Election",
        description: "Due to the fact that IRS intend to tax every dollar off your capital gain, it's not wise to pay the capital tax when the stock appreciates. Instead, IRS provides an option called 83(b) which allows you to pay tax on the stock at the moment of purchase. The taxpayer will only pay tax on the par value.",
        hint: "Tax is usually considered as expenses, income tax included.",
        action_items: [
          {name: "83(b) Election Payment", description: "smart", amount: 14}
        ]
      }
    ],

    statements: {
      cash_flow_statement: {
        income: [
          {name: "Part-time Salary", item_description: "student's work", amount: 1870},
          {name: "Book Lending", item_description: "book service", amount: 70}
        ],
        expenses: [
          {name: "Rent", item_description: "A comfortable home services you physically, but you service it financially.", amount: 850},
          {name: "Other Expenses", item_description: "A symbol of adulthood worth fighting for.", amount: 650},
        ],
      },
      balance_sheet: {
        assets: [
          {name: "Cash", item_description: "Home.", amount: 3400},
          {name: "Rare Book Collection", item_description: "Simple, cold, and sure.", amount: 240},
        ],
        liabilities: [
          {name: "Friend-covered Expenses", item_description: "friend", amount: 250},
        ],
      },
      deleted: []
    },
    equity: 3390,
    criteria: {
      should_contain: [
        ["income", "Part-time Salary"],
        ["income", "Book Lending"],
        ["expenses", "Rent"],
        ["expenses", "Other Expenses"],
        ["assets", "Cash"],
        ["assets", "Rare Book Collection"],
        ["liabilities", "Friend-covered Expenses"],
        ["assets", "165,000 Shares of Corp, Inc."],
        ["expenses", "Stock Purchase Payment"],
        ["expenses", "83(b) Election Payment"]
      ],
      should_be: [
        // here
      ]
    }
  },

  // "3": {
  //   id: "3",
  //   title: "",
  //   description: "",
  //   steps: [
  //     {
  //       step_title: "",
  //       description: "",
  //       hint: "",
  //       action_items: [
  //         // here
  //       ]
  //     },
  //   ],
  //
  //   statements: {
  //     cash_flow_statement: {
  //       income: [
  //         // here
  //       ],
  //       expenses: [
  //         // here
  //       ],
  //     },
  //     balance_sheet: {
  //       assets: [
  //         // here
  //       ],
  //       liabilities: [
  //         // here
  //       ],
  //     },
  //     deleted: []
  //   },
  //   equity: 0,
  //   criteria: {
  //     should_contain: [
  //       // here
  //     ],
  //     should_be: [
  //       // here
  //     ]
  //   }
  // },


  "4": {
    id: "4",
    title: "Refinancing",
    description: "Refinancing is a great way to obtain a lower rate on your existing loans. It will substitute a more expensively-serviced loan with a more cheaply-serviced loan, decreasing your monthly service expenses.",
    steps: [
      {
        step_title: "Obtain New Loan",
        description: "You've found a lending partner and he's willing to loan you $20,000 at a monthly service rate of $225. You obtained cash after the settlement.",
        action_items: [
          {name: "Cash from Loan", description: "A more tangible evaluation of your interview performance.", amount: 20000},
          {name: "New Loan", description: "new loan", amount: 20000},
          {name: "New Loan Monthly Pay", description: "new pay", amount: 225}
        ]
      },{
        step_title: "Pay off Old Loan",
        description: "You used the cash obtained from the new loan to payoff the old loan you have. Drop any entries related to the old loan. Also, the bank quotes $750 for prepayment settlement.",
        action_items: [
          {name: "Pay off Old Loan", description: "Time will tell their value, not investment bankers.", amount: 16000},
          {name: "Settlement Fee", description: "settlement", amount: 750},
        ]
      },
    ],
    statements: {
      cash_flow_statement: {
        income: [
          {name: "Part-time Salary", item_description: "Elon Century, Ltd. is paying $200 in royalty for the publishing rights of your biography.", amount: 2100}
        ],
        expenses: [
          {name: "Rent", item_description: "A comfortable home services you physically, but you service it financially.", amount: 1350},
          {name: "Other Expenses", item_description: "A symbol of adulthood worth fighting for.", amount: 240},
          {name: "Old Loan Monthly Pay", item_description: "The doubt is not in its usefulness, but the boundary of its usefulness.", amount: 370},
        ],
      },
      balance_sheet: {
        assets: [
          {name: "Cash", item_description: "Simple, cold, and sure.", amount: 14370},
        ],
        liabilities: [
          {name: "Old Loan", item_description: "Home Mortgage for the 3/2/1 house you own.", amount: 16000},
          {name: "School Loan", item_description: "A loan on your second-hand Mercedes.", amount: 2000},
        ],
      }
    },
    equity: -3630,
    criteria: {
      should_contain: [
        ["income", "Cash from Loan"],
        ["liabilities", "New Loan"],
        ["expenses", "New Loan Monthly Pay"],
        ["expenses", "Pay off Old Loan"],
        ["expenses", "Settlement Fee"],
        ["income", "Part-time Salary"],
        ["expenses", "Rent"],
        ["expenses", "Other Expenses"],
        ["deleted", "Old Loan Monthly Pay"],
        ["assets", "Cash"],
        ["deleted", "Old Loan"],
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
    title: "Selling Assets",
    description: "In this exercise, we'll cross off an asset from your balance sheet and the income associated with it. Selling assets grants you a cash payment which can be used to purchase other more lucrative assets. Therefore, it's usually favorable to convert current assets with new ones with higher cash flow.",
    steps: [
      {
        step_title: "Book Buyer",
        description: "A rare book collector noticed your book collection and he's willing to acquire it with a cash payment of $750. Drop any assets and income related to this transaction.",
        action_items: [
          {name: "Cash from Selling Books", description: "sell book", amount: 750}
        ]
      },
    ],

    statements: {
      cash_flow_statement: {
        income: [
          {name: "Part-time Salary", item_description: "student's work", amount: 1870},
          {name: "Book Lending", item_description: "book service", amount: 70}
        ],
        expenses: [
          {name: "Rent", item_description: "A comfortable home services you physically, but you service it financially.", amount: 850},
          {name: "Other Expenses", item_description: "A symbol of adulthood worth fighting for.", amount: 650},
        ],
      },
      balance_sheet: {
        assets: [
          {name: "Cash", item_description: "Home.", amount: 2750},
          {name: "Rare Book Collection", item_description: "Simple, cold, and sure.", amount: 240},
        ],
        liabilities: [
          {name: "Parent Support", item_description: "friend", amount: 1000},
        ],
      },
      deleted: []
    },
    equity: 0,
    criteria: {
      should_contain: [
        ["income", "Cash from Selling Books"],
        ["income", "Part-time Salary"],
        ["deleted", "Book Lending"],
        ["expenses", "Rent"],
        ["expenses", "Other Expenses"],
        ["assets", "Cash"],
        ["deleted", "Rare Book Collection"],
        ["liabilities", "Parent Support"],
      ],
      should_be: [

      ]
    }
  },

  "6": {
    id: "6",
    title: "Trade between Multiple Stocks",
    description: "In this exercise, we'll account for a two step stock transaction. Stocks fluctuate in value and usually don't generate any income every month. The transactions themselves also generate fees. Therefore, it is usually not advised to trade stock unless you're highly sophisticated and robust against risk.",
    steps: [
      {
        step_title: "EvanCore Cash Out",
        description: "The EvanCore, Inc. stock you purchased about 2 months ago surprisingly appreciated more than 30%. Apparently the company has surprised the market by acquiring a major competitor. However, to diversify your portfolio, you decided to cash out on EvanCore's shares.",
        hint: "Don't forget to drop the stock you sold from the balance sheet.",
        action_items: [
          {name: "Cash from Selling Stocks", description: "sell stock", amount: 7500},
          {name: "Tax on Capital Gain", description: "gain tax", amount: 545},
          {name: "Settlement Fee 1", description: "settlement1", amount: 70}
        ]
      },
      {
        step_title: "Buy Promissing Startup",
        description: "A new startup called Ryan Blain specialized in sports wear has just went public and looks very promising in terms of earning abilities. You believe its stock will appreciate in value in the future so you acquired 2,500 shares of its share at $1.26 per share.",
        action_items: [
          {name: "Stock Purchase Payment", description: "pay stock", amount: 3150},
          {name: "2,500 Shares Ryan Blain", description: "sports wear", amount: 3150},
          {name: "Settlement Fee 2", description: "settlement2", amount: 25}
        ]
      }
    ],

    statements: {
      cash_flow_statement: {
        income: [
          {name: "Part-time Salary", item_description: "student's work", amount: 2870},
        ],
        expenses: [
          {name: "Rent", item_description: "A comfortable home services you physically, but you service it financially.", amount: 850},
          {name: "Broker Account Maintenance", item_description: "maintain it", amount: 29},
          {name: "Other Expenses", item_description: "A symbol of adulthood worth fighting for.", amount: 650},
        ],
      },
      balance_sheet: {
        assets: [
          {name: "Cash", item_description: "cold and sure", amount: 4680},
          {name: "4,600 Shares Daemon", item_description: "Simple, cold, and sure.", amount: 460},
          {name: "2,000 Shares EvanCore", item_description: "good share", amount: 2000},
          {name: "1,000 Shares NTCJ", item_description: "more stocks", amount: 500}
        ],
        liabilities: [
          {name: "Parent Support", item_description: "friend", amount: 3000},
          {name: "Small Bank Loan", item_description: "small loan", amount: 550}
        ],
      },
      deleted: []
    },
    equity: 4090,
    criteria: {
      should_contain: [
        ["income", "Cash from Selling Stocks"],
        ["expenses", "Tax on Capital Gain"],
        ["expenses", "Settlement Fee 1"],
        ["expenses", "Stock Purchase Payment"],
        ["assets", "2,500 Shares Ryan Blain"],
        ["expenses", "Settlement Fee 2"],
        ["income", "Part-time Salary"],
        ["expenses", "Rent"],
        ["expenses", "Broker Account Maintenance"],
        ["expenses", "Other Expenses"],
        ["assets", "Cash"],
        ["assets", "4,600 Shares Daemon"],
        ["deleted", "2,000 Shares EvanCore"],
        ["assets", "1,000 Shares NTCJ"],
        ["liabilities", "Parent Support"],
        ["liabilities", "Small Bank Loan"]
      ],
      should_be: [

      ]
    }
  },

  "7": {
    id: "7",
    title: "Become a New Homeowner",
    description: "In this exercise, we'll manage what many believe to be the symbolic transaction of United States -- buying a home. Apart from purchasing the home, many insurance policies and other add-on items may lower the risk of you losing your home or suffering damage to it. Also, new homes may also be rented to offset the mortgage payments.",
    steps: [
      {
        step_title: "Home Owner!",
        description: "You've got your eye on a nice 3BR/2BA house in west Kentucky. The quiet neighborhood does have its charm and you decided to call the place a home for a long time. The downpayment is not too bad and the rate is good on the mortgage.",
        hint: "Don't forget to drop the rent item since you're no longer living in a rented home.",
        action_items: [
          {name: "Down Payment", description: "down pay", amount: 25000},
          {name: "3BR/2BA House", description: "home", amount: 120000},
          {name: "30-year Mortgage", description: "mortgage", amount: 95000},
          {name: "30-year Mortgage Monthly Pay", description: "service pay", amount: 750},
        ]
      },
      {
        step_title: "State Compliance",
        description: "The state of Kentucky mandates that new home owners must acquire a certificate of flood protection if in a flood zone. You'll have to pay for the certificate.",
        action_items: [
          {name: "Flood Inspection and Certificate", description: "protection", amount: 1700}
        ]
      },
      {
        step_title: "Rent out a Room",
        description: "You've got a single vacant room to yourself and you decided to rent it out to offset the mortgage payment. The house is near a high-school and an eager young man named Dylan took the offer.",
        action_items: [
          {name: "Rent on 3BR/2BA", description: "rent", amount: 450}
        ]
      }
    ],

    statements: {
      cash_flow_statement: {
        income: [
          {name: "Engineer Salary", item_description: "student's work", amount: 3460},
          {name: "Patent Commission", item_description: "patent commission", amount: 1150}
        ],
        expenses: [
          {name: "Rent", item_description: "A comfortable home services you physically, but you service it financially.", amount: 1550},
          {name: "Other Expenses", item_description: "A symbol of adulthood worth fighting for.", amount: 875},
          {name: "Payment on Private Loan", item_description: "loan", amount: 650}
        ],
      },
      balance_sheet: {
        assets: [
          {name: "Cash", item_description: "Home.", amount: 35750},
          {name: "Patent", item_description: "Simple, cold, and sure.", amount: 6700},
        ],
        liabilities: [
          {name: "Private Loan", item_description: "friend", amount: 10000},
        ],
      },
      deleted: []
    },
    equity: 32450,
    criteria: {
      should_contain: [
        ["liabilities", "Private Loan"],
        ["assets", "Patent"],
        ["assets", "Cash"],
        ["expenses", "Payment on Private Loan"],
        ["expenses", "Other Expenses"],
        ["deleted", "Rent"],
        ["income", "Patent Commission"],
        ["income", "Engineer Salary"],
        ["expenses", "Down Payment"],
        ["assets", "3BR/2BA House"],
        ["liabilities", "30-year Mortgage"],
        ["expenses", "30-year Mortgage Monthly Pay"],
        ["expenses", "Flood Inspection and Certificate"],
        ["income", "Rent on 3BR/2BA"]
      ],
      should_be: [

      ]
    }
  },

  "8": {
    id: "8",
    title: "Convert Income-generating Assets",
    description: "In this exercise, we convert a lower-earning house to a higher earning one. Converting assets are common place for real-estate investors as it's favorable to carry assets with higher rent to value ratio. Sometimes, the newly acquired asset can be renovated to generate an even higher return.",
    steps: [
      {
        step_title: "Selling an Low-earning Asset",
        description: "This 2BR/1BA has been generating great revenue for you. However, a local contruction firm was recently commissioned to build a industrial complex nearby for chemical processing. The news generated fear that the air and water quality will suffer due to the soon-to-be-present industry. You decided to sell the house in the midst of pressing demand from the tenant to lower the rent.",
        action_items: [
          {name: "Cash from Selling Old 2BR/1BA", description: "cash", amount: 85000},
          {name: "Pay off Old Mortgage", description: "old settlement", amount: 70000}
        ]
      },
      {
        step_title: "Acquiring a High-earning Asset",
        description: "The cash you obtained from selling 2BR/1BA won't be generating any income. After some research, you pinned down a duplex a few miles away that's near a soon-to-be-built town center. The asset value around the neighborhood is rising. There's also rumor that there will be a new school. You decided to buy the duplex and rent it out.",
        hint: "Notice that even though the service payment for the new duplex is higher, it will still generate a higher return because the higher rent will offset its service cost.",
        action_items: [
          {name: "Rent on Duplex", description: "rent", amount: 2370},
          {name: "Down Payment", description: "down pay", amount: 55000},
          {name: "Duplex", description: "home", amount: 140000},
          {name: "New Mortgage on Duplex", description: "mortgage", amount: 85000},
          {name: "New Mortgage Monthly Pay", description: "service pay", amount: 1100},
        ]
      },
      {
        step_title: "Squeez out the Last Drop",
        description: "You noticed that the duplex comes with a small shared basement. To squeez out the last drop of revenue, you decided to renovate the space and rent it out to a local student. Of course, you informed the two families occupying the duplex to steer clear of the basement.",
        action_items: [
          {name: "Rent on Duplex Basement", description: "rent student", amount: 475},
          {name: "Renovation Cost", description: "fix garage", amount: 2700}
        ]
      }
    ],

    statements: {
      cash_flow_statement: {
        income: [
          {name: "Fireman Salary", item_description: "student's work", amount: 2160},
          {name: "Rent from Old 2BR/1BA", item_description: "rent", amount: 250}
        ],
        expenses: [
          {name: "Your Own Rent", item_description: "A comfortable home services you physically, but you service it financially.", amount: 1200},
          {name: "Other Expenses", item_description: "A symbol of adulthood worth fighting for.", amount: 605},
          {name: "Old Mortgage Monthly Pay", item_description: "old mortgage", amount: 55}
        ],
      },
      balance_sheet: {
        assets: [
          {name: "Cash", item_description: "Home.", amount: 125750},
          {name: "Old 2BR/1BA House", description: "home", amount: 85000},
        ],
        liabilities: [
          {name: "Old Mortgage on 2BR/1BA", description: "mortgage", amount: 70000},
        ],
      },
      deleted: []
    },
    equity: 180750,
    criteria: {
      should_contain: [
        ["income", "Fireman Salary"],
        ["deleted", "Rent from Old 2BR/1BA"],
        ["expenses", "Your Own Rent"],
        ["expenses", "Other Expenses"],
        ["deleted", "Old Mortgage Monthly Pay"],
        ["assets", "Cash"],
        ["deleted", "Old 2BR/1BA House"],
        ["deleted", "Old Mortgage on 2BR/1BA"],
        ["income", "Cash from Selling Old 2BR/1BA"],
        ["expenses", "Pay off Old Mortgage"],
        ["income", "Rent on Duplex"],
        ["expenses", "Down Payment"],
        ["assets", "Duplex"],
        ["liabilities", "New Mortgage on Duplex"],
        ["expenses", "New Mortgage Monthly Pay"],
        ["income", "Rent on Duplex Basement"],
        ["expenses", "Renovation Cost"]
      ],
      should_be: [

      ]
    }
  },
}
