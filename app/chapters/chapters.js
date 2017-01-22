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
          {name: "Other Expenses", item_description: "A symbol of adulthood worth fighting for.", amount: 460, regular: true},
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
          {name: "Pay for Rare Books", descriptions: "Good professional!", amount: 2400, regular: false},
          {name: "Rare Books Collection", descriptions: "bok", amount: 2400}
        ]
      },
      {
        step_title: "What's Passive Income",
        description: "Passive income is income that doens't require your attention or maintenance to generate. Salary is not a passive income because it requires your labor. This entire course is designed to teach you how to maximize your passive income by managing your assets and liabilities. The green 'Month P-Cash Flow' entry on the left tells you your current monthly passive income. The '% P-Income'/Reg.Expense' entry tells you how much regular expenses can your passive income cover.",
        hint: "If you have fast brain reflex, you must have realized that if '% P-Income / Reg.Expense' reaches 100%, it means you can sustain your monthly expenses without working, in other words, you would have escaped the nine-to-five. That state is exactly our goal throughout the course.",
        action_items: [],
      },
      {
        step_title: "Mini Rare Book Library",
        description: "You posted several advertisements online for the rare books you collected. Within a few days, a number of people responded, expressing interest in borrowing them for a monthly fee.",
        hint: "$75 each month on $2400 investment is 3% return/month and 36% return/yr -- a handsome rate. Many people lack patience and instead pursue the legendary 400%+ return on stock investments. It should be noted that such cases are rare and involve significantly higher risk than income from operations.",
        action_items: [
          {name: "Book Lending Income", description: "surg", amount: 75, passive: true, regular: true}
        ]
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
          {name: "Other Expenses", item_description: "A symbol of adulthood worth fighting for.", amount: 460, regular: true},
        ],
      },
      balance_sheet: {
        assets: [
          {name: "Cash", item_description: "Home.", amount: 6760},
          {name: "Other Assets", item_description: "Simple, cold, and sure.", amount: 1350},
        ],
        liabilities: [
          {name: "Student Loan", item_description: "Your parents support your expenses", amount: 2000},
          {name: "Credit Card Balance", item_description: "credit", amount: 734},
        ],
      },
      deleted: []
    },
    equity: 5376,
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
        step_title: "Bye Bye Credit Card",
        description: "Which liability is more expensive? Your credit card balance or student loan? You sheet tells you that student loan generate $65 monthly payments from $2000 credits but your credit card generates $85 from a mere $734! Of course your credit card liability is much more expensive and the same is true usually for real-life.",
        hint: "When paying back debts, it's wise to pay back the ones that are expensive to maintain, such as credit card balances. To drop an entry from the sheet, send it to the deleted list near the bottom of the screen. In this case, you should drop the credit card balance entry you just paid back and its monthly payment.",
        action_items: [
          {name: "Credit Card Payback", description: "sdaf", amount: 734},
        ]
      },
      {
        step_title: "Debt-free Student",
        description: "After several month of saving, you acquired enough cash to pay back the student loan you took out. The move will free you from the monthly payment that has haunted you for 2 years.",
        action_items: [
          {name: "Student Loan Payback", descriptions: "Good professional!", amount: 2000},
        ]
      },
      {
        step_title: "Reflection",
        description: "Notice that the same $75 passive income from your book lending is now covering more than 6% in your regular expenses. The two methods to lift the '%P-Income/Reg.Expense' is to either increase your passive income or reduce your regular expenses.",
        hint: "We are one step closer to achieving 100% '%P-Income/Reg.Expense'",
        action_items: []
      }
    ],

    statements: {
      cash_flow_statement: {
        income: [
          {name: "Salary", item_description: "The campus employes you to lower the cost of the personnels here at the department.", amount: 2300, regular: true},
          {name: "Book Lending Income", description: "surg", amount: 75, passive: true, regular: true}
        ],
        expenses: [
          {name: "Rent", item_description: "A comfortable home services you physically, but you service it financially.", amount: 750, regular: true},
          {name: "Student Loan Monthly Pay", item_description: "not", amount: 65, regular: true},
          {name: "Credit Card Monthly Pay", item_description: "e", amount: 80, regular: true},
          {name: "Other Expenses", item_description: "A symbol of adulthood worth fighting for.", amount: 460, regular: true},
        ],
      },
      balance_sheet: {
        assets: [
          {name: "Cash", item_description: "Home.", amount: 5380},
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
    equity: 6396,
    criteria: {
      should_contain: [
        ["income", "Salary"],
        ["income", "Book Lending Income"],
        ["expenses", "Rent"],
        ["deleted", "Student Loan Monthly Pay"],
        ["expenses", "Other Expenses"],
        ["deleted", "Credit Card Monthly Pay"],
        ["assets", "Cash"],
        ["assets", "Rare Books Collection"],
        ["assets", "Other Assets"],
        ["deleted", "Student Loan"],
        ["deleted", "Credit Card Balance"]
      ],
      should_be: [
        ["equity": 75370]
      ]
    }
  },

  "4": {
    id: "4",
    title: "Step up Your Operation",
    description: "Many assets' value can be amplified if you effectively accompany it with additional resources. For example, you can renovate a rented room and increase the rent, or distribute your creative work on a broader platform (say, instead of hand-to-hand distribution, you post it on Spotify). If you can spread your value faster, cheaper and further, some small assets may yield very handsome returns.",
    steps: [
      {
        step_title: "Rare Book Online Access",
        description: "Instead of handing physical copies out, you decided to create an online platform to distribute the rare book contents digitally. You hired a student to photocopy each page and post them on an easy Wordpress portal to allow web access.",
        hint: "Web, forum, conventions and other platforms of co-mingling can open a wide range of potential customers.",
        action_items: [
          {name: "Student Labor Pay", description: "sdaf", amount: 800, regular: false},
          {name: "Extra Rare Book Online Subscription Revenue", amount: 125, passive: true, regular: true},
          {name: "Website Maintenance", amount: 55, regular: true},
        ]
      },
      {
        step_title: "University Priviledge",
        description: "At a gathering of academic scholars, you heard that one of the university is seeking private licenses to view your rare book content. You decided to sell a monthly-based access to the university for $175/month.",
        action_items: [
          {name: "Extra Rare Book University Access Revenue", descriptions: "Good professional!", amount: 175, passive: true, regular: true},
        ]
      },
      {
        step_title: "Reflection",
        description: "Find creative ways to spread your value and make your assets generate income more effectively.",
        action_items: []
      }
    ],

    statements: {
      cash_flow_statement: {
        income: [
          {name: "Salary", item_description: "The campus employes you to lower the cost of the personnels here at the department.", amount: 2300, regular: true},
          {name: "Book Lending Income", description: "surg", amount: 75, passive: true, regular: true}
        ],
        expenses: [
          {name: "Rent", item_description: "A comfortable home services you physically, but you service it financially.", amount: 750, regular: true},
          {name: "Other Expenses", item_description: "A symbol of adulthood worth fighting for.", amount: 460, regular: true},
        ],
      },
      balance_sheet: {
        assets: [
          {name: "Cash", item_description: "Home.", amount: 3811},
          {name: "Rare Books Collection", descriptions: "bok", amount: 2400},
          {name: "Other Assets", item_description: "Simple, cold, and sure.", amount: 1350},
        ],
        liabilities: [
        ],
      },
      deleted: []
    },
    equity: 7561,
    criteria: {
      should_contain: [
        ["income", "Salary"],
        ["income", "Book Lending Income"],
        ["income", "Extra Rare Book Online Subscription Revenue"],
        ["income", "Extra Rare Book University Access Revenue"],
        ["expenses", "Rent"],
        ["expenses", "Other Expenses"],
        ["expenses", "Student Labor Pay"],
        ["expenses", "Website Maintenance"],
        ["assets", "Cash"],
        ["assets", "Rare Books Collection"],
        ["assets", "Other Assets"],
      ],
      should_be: [
      ]
    }
  },

  "5": {
    id: "5",
    title: "Acquire Founding Stock",
    description: "In this exercise we start to learn stock purchase accounting. Although the stock may appreciate in value, it's not certain. Instead of creating an illusion of wealth by adding speculative values, stocks are usually accounted using their purchase price. Stocks differ in their liquidity (per the point that assets are not created equal). Private shares in a small company is much less liquid than shares from a reputable public company, therefore will be less favorable to hold since they can't be converted to cash easily. In a later chapter, we'll learn the critical considerations when managing your liquidity.",
    steps: [
      {
        step_title: "Founding Stock Purchase",
        description: "The company you work for is eager to grant you 165,000 shares of its stock. The par value is $0.001 and you'll purchase it out-of-pocket.",
        hint: "The value of the stock is accounted with the purchase price and is assumed to remain constant.",
        action_items: [
          {name: "165,000 Shares of Nexus, Inc.", description: "stock", amount: 165},
          {name: "Stock Purchase Payment", description: "pay", amount: 165, regular: false},
        ]
      },
      {
        step_title: "83(b) Election",
        description: "Due to the fact that IRS intend to tax every dollar off your capital gain, it's not wise to pay the capital tax when the stock appreciates. Instead, IRS provides an option called 83(b) which allows you to pay tax on the stock at the moment of purchase (this only applies to restricted stocks). The taxpayer will only pay tax on the par value upon acquisition of the stock.",
        hint: "Tax is usually considered as expenses, income tax included.",
        action_items: [
          {name: "83(b) Election Tax Payment", description: "smart", amount: 14, regular: false}
        ]
      },
      {
        step_title: "You've Moved",
        description: "If you haven't noticed, the rent and other expenses have increased because you moved to a much better apartment. While it is desirable to reach 100% P-Income/Reg.Expenses, it doesn't hurt to lift your standard of living when you have the capacity. Besides, even after the move, you're still covering 18.2% of your monthly expenses with passive income.",
        action_items: [],
      }
    ],

    statements: {
      cash_flow_statement: {
        income: [
          {name: "Salary", item_description: "The campus employes you to lower the cost of the personnels here at the department.", amount: 2300, regular: true},
          {name: "Book Lending Income", description: "surg", amount: 75, passive: true, regular: true},
          {name: "Extra Rare Book Online Subscription Revenue", amount: 125, passive: true, regular: true},
          {name: "Extra Rare Book University Access Revenue", descriptions: "Good professional!", amount: 175, passive: true, regular: true},
        ],
        expenses: [
          {name: "Rent", item_description: "A comfortable home services you physically, but you service it financially.", amount: 1250, regular: true},
          {name: "Other Expenses", item_description: "A symbol of adulthood worth fighting for.", amount: 755, regular: true},
          {name: "Website Maintenance", amount: 55, regular: true},
        ],
      },
      balance_sheet: {
        assets: [
          {name: "Cash", item_description: "Home.", amount: 4421},
          {name: "Other Assets", item_description: "sdf", amount: 1350},
          {name: "Rare Book Collection", item_description: "Simple, cold, and sure.", amount: 2400},
        ],
        liabilities: [
        ],
      },
      deleted: []
    },
    equity: 8171,
    criteria: {
      should_contain: [
        ["assets", "165,000 Shares of Nexus, Inc."],
        ["expenses", "Stock Purchase Payment"],
        ["expenses", "83(b) Election Tax Payment"],
        ["income", "Salary"],
        ["income", "Book Lending Income"],
        ["income", "Extra Rare Book Online Subscription Revenue"],
        ["income", "Extra Rare Book University Access Revenue"],
        ["expenses", "Rent"],
        ["expenses", "Other Expenses"],
        ["expenses", "Website Maintenance"],
        ["assets", "Cash"],
        ["assets", "Rare Book Collection"],
        ["assets", "Other Assets"],
        ["expenses", "Stock Purchase Payment"],
      ],
      should_be: [
        // here
      ]
    }
  },

  "6": {
    id: "6",
    title: "Trade between Other Stocks",
    description: "Unlike restricted stocks, the common stocks you acquired through a broker or online trading account can be traded on the market fairly easily (they're liquid). Stocks fluctuate in value and usually don't generate any income every month. The transactions themselves also generate fees if you have a brokerage account. Therefore, it is usually not advised to trade stock unless you're highly sophisticated and robust against risk.",
    steps: [
      {
        step_title: "A New Obsession",
        description: "After you acquired your employer's stock, you got very interested in stocks. You opened a brokerage account, bought a sizable amount of shares from a number of companies and even took out a loan to support your stock interest.",
        hint: "Examine the sheet carefully to see what's the current situation. The action items in this step is already put in-place.",
        action_items: []
      },
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
      },
      {
        step_title: "Split 2 for 1",
        description: "NTCJ has been doing very well and decides to reward its investors. Instead of dispensing dividends, NTCJ will compensate 2 stocks for each stock you own. This is a common strategy to increase share value without giving out cash. For you personlly, the split only changes the entry on your sheet and doesn't change the asset value.",
        hint: "The split only affects your price/share, but doesn't add any assets to your sheet. Swap the old NTCJ entry with the new one.",
        action_items: [
          {name: "2,000 Shares NTCJ", amount: 500},
        ]
      }
    ],

    statements: {
      cash_flow_statement: {
        income: [
          {name: "Salary", item_description: "The campus employes you to lower the cost of the personnels here at the department.", amount: 2300, regular: true},
          {name: "Combined Rare Book Income", description: "sf", amount: 375, passive: true, regular: true},
        ],
        expenses: [
          {name: "Rent", item_description: "A comfortable home services you physically, but you service it financially.", amount: 1250, regular: true},
          {name: "Broker Account Maintenance", item_description: "maintain it", amount: 50, regular: true},
          {name: "Website Maintenance", amount: 55, regular: true},
          {name: "Other Expenses", item_description: "A symbol of adulthood worth fighting for.", amount: 755, regular: true},
        ],
      },
      balance_sheet: {
        assets: [
          {name: "Cash", item_description: "cold and sure", amount: 4897},
          {name: "Other Assets", item_description: "sdf", amount: 1350},
          {name: "Rare Book Collection", item_description: "Simple, cold, and sure.", amount: 2400},
          {name: "165,000 Shares of Nexus, Inc.", amount: 165},
          {name: "4,600 Shares Daemon", item_description: "Simple, cold, and sure.", amount: 460},
          {name: "2,000 Shares EvanCore", item_description: "good share", amount: 2000},
          {name: "1,000 Shares NTCJ", item_description: "more stocks", amount: 500}
        ],
        liabilities: [
          {name: "Small Bank Loan", item_description: "friend", amount: 3000}
        ],
      },
      deleted: []
    },
    equity: 8772,
    criteria: {
      should_contain: [
        ["assets", "Rare Book Collection"],
        ["assets", "Other Assets"],
        ["income", "Cash from Selling Stocks"],
        ["expenses", "Tax on Capital Gain"],
        ["expenses", "Settlement Fee 1"],
        ["expenses", "Stock Purchase Payment"],
        ["assets", "2,500 Shares Ryan Blain"],
        ["expenses", "Settlement Fee 2"],
        ["assets", "2,000 Shares NTCJ"],
        ["income", "Combined Rare Book Income"],
        ["income", "Salary"],
        ["expenses", "Rent"],
        ["expenses", "Broker Account Maintenance"],
        ["expenses", "Website Maintenance"],
        ["expenses", "Other Expenses"],
        ["assets", "Cash"],
        ["assets", "4,600 Shares Daemon"],
        ["deleted", "2,000 Shares EvanCore"],
        ["deleted", "1,000 Shares NTCJ"],
        ["liabilities", "Small Bank Loan"]
      ],
      should_be: [

      ]
    }
  },

  "7": {
    id: "7",
    title: "Invest in Condo Shares",
    description: "You've been having moderate success with trading and accumulated enough cash to pursue some bigger investments. One of the greatest passive income source is rent, but most of the time, starting investors don't have enough down payment to acquire a full-scale house or apartment building to rent out. As a substitute, there're housing shares you can purchase that grants you a fraction of the building ownership, thus entitle you to a fraction of the building income as well.",
    steps: [
      {
        step_title: "Out from the Stock Race",
        description: "After months of meticulous news tracking and endless nights of stock analysis, you realized that trading stock requires too much of your efforts. You decided to cash out from all the stock ownership and back to building your passive income. With some research, you found a profitable condo share offer for a building in Coney Island. Also, you moved again to an even bigger apartment.",
        hint: "Condo shares and other shared ownerships can't usually be financed. you'll have to pay cash for those, but the passive income it generates is great.",
        action_items: [
          {name: "Condo Share", amount: 10500},
          {name: "Condo Share Income", amount: 750, passive: true, regular: true},
          {name: "Condo Share Settlement Fee", amount: 1450},
          {name: "Payment for Condo Share", amount: 10500},
        ]
      },
      {
        step_title: "Aspen Resort Share",
        description: "You decided to diversify your income with additional rent shares at a famous Ski resort. These shares only payout during winter but is fairly lucrative if you have the patience.",
        action_items: [
          {name: "Aspen Resort Share", amount: 9500},
          {name: "Aspen Resort Share Income", amount: 430, passive: true, regular: true},
          {name: "Payment for Aspen Resort Share", amount: 9500},
        ]
      },
      {
        step_title: "Reflection",
        description: "Notice that even this month you experienced a high outflow of cash, the extra passive income you arranged this month will offset effectively your next month's expenses. Remember that passive income only have to cover your regular expenses to make you sustainably free from financial obligations.",
        action_items: []
      }
    ],

    statements: {
      cash_flow_statement: {
        income: [
          {name: "Salary", item_description: "The campus employes you to lower the cost of the personnels here at the department.", amount: 3100, regular: true},
          {name: "Combined Rare Book Income", description: "sf", amount: 375, passive: true, regular: true},
        ],
        expenses: [
          {name: "Rent", item_description: "A comfortable home services you physically, but you service it financially.", amount: 1950, regular: true},
          {name: "Website Maintenance", amount: 55, regular: true},
          {name: "Other Expenses", item_description: "A symbol of adulthood worth fighting for.", amount: 1150, regular: true},
        ],
      },
      balance_sheet: {
        assets: [
          {name: "Cash", item_description: "cold and sure", amount: 28547},
          {name: "Other Assets", item_description: "sdf", amount: 1350},
          {name: "Rare Book Collection", item_description: "Simple, cold, and sure.", amount: 2400},
        ],
        liabilities: [
        ],
      },
      deleted: []
    },
    equity: 32297,
    criteria: {
      should_contain: [
        ["assets", "Condo Share"],
        ["income", "Condo Share Income"],
        ["expenses", "Condo Share Settlement Fee"],
        ["expenses", "Payment for Condo Share"]
        ["assets", "Aspen Resort Share"],
        ["income", "Aspen Resort Share Income"],
        ["expenses", "Payment for Aspen Resort Share"],
        ["income", "Salary"],
        ["income", "Combined Rare Book Income"],
        ["expenses", "Rent"],
        ["expenses", "Website Maintenance"],
        ["expenses", "Other Expenses"],
        ["assets", "Cash"],
        ["assets", "Other Assets"],
        ["assets", "Rare Book Collection"]
      ],
      should_be: [
        ["equity": 75370]
      ]
    }
  },

  "8": {
    id: "8",
    title: "Diversify Passive Income Sources",
    description: "A number of different sources can contribute to your passive income, not just from rent on properties. Like the rare book collection that you've been holding on to, many creative works, patents and entrepreneurial activities can generate additional passive income for you.",
    steps: [
      {
        step_title: "Book Publishing Rights",
        description: "Your intensive year in stock trading has gave you the inspiration to write a book on investment. The texts poured out of your brain in eagerness and within a week or so, a draft is complete. A small publishing house likes the draft and would like to publish it after editing.",
        hint: "Publishing rights are usually acquired in two ways, either by monthly royalty or cash front. These days, it's also not uncommon to see hybrid payment schedules.",
        action_items: [
          {name: "Publishing Rights Monthly Pay", amount: 330, passive: true, regular: true},
          {name: "Publishing Rights Cash Front", amount: 2500}
        ]
      },
      {
        step_title: "Patent Commission",
        description: "The trading algorithm that you designed turned out to be quite profitable. However, you don't want everyone to access it so easily. Instead, you filed a patent and commissioned it to a private hedge fund. The fund manager approves of the algorithm greatly.",
        action_items: [
          {name: "Patent Filling Fee", amount: 2670},
          {name: "Lawyer Fee", amount: 1300},
          {name: "Patent Commission", amount: 125, regular: true, passive: true},
        ]
      },
      {
        step_title: "Entrepreneurship",
        description: "Entrepreneurship is the talent of coordinating resources. Sometimes, you don't need to own any asset to generate passive income. Simply look around you, find idle resources and put them to work. In this case, you noticed there's spare room in your apartment and the gallery downstairs need overnight storage to help circulate the art work. You decided to offer your free space to the gallery every night for a fee.",
        hint: "Art works and other non-massively produced items usually don't have enough volume to warrant specialized transportation and storage service (except the art collectors, but they have private places to store them, thus their resources is not in the massively commercialized market).",
        action_items: [
          {name: "Overnight Storage Income", amount: 25, regular: true, passive: true},
        ]
      }
    ],

    statements: {
      cash_flow_statement: {
        income: [
          {name: "Salary", item_description: "The campus employes you to lower the cost of the personnels here at the department.", amount: 3100, regular: true},
          {name: "Condo Share Income", amount: 750, passive: true, regular: true},
          {name: "Aspen Resort Share Income", amount: 430, passive: true, regular: true},
          {name: "Combined Rare Book Income", description: "sf", amount: 375, passive: true, regular: true},
        ],
        expenses: [
          {name: "Rent", item_description: "A comfortable home services you physically, but you service it financially.", amount: 2050, regular: true},
          {name: "Website Maintenance", amount: 55, regular: true},
          {name: "Other Expenses", item_description: "A symbol of adulthood worth fighting for.", amount: 1250, regular: true},
        ],
      },
      balance_sheet: {
        assets: [
          {name: "Cash", item_description: "cold and sure", amount: 8597},
          {name: "Other Assets", item_description: "sdf", amount: 1350},
          {name: "Condo Share", amount: 10500},
          {name: "Aspen Resort Share", amount: 9500},
          {name: "Rare Book Collection", item_description: "Simple, cold, and sure.", amount: 2400},
        ],
        liabilities: [
        ],
      },
      deleted: []
    },
    equity: 32347,
    criteria: {
      should_contain: [
        ["assets", "Condo Share"],
        ["income", "Condo Share Income"],
        ["assets", "Aspen Resort Share"],
        ["income", "Aspen Resort Share Income"],
        ["income", "Salary"],
        ["income", "Combined Rare Book Income"],
        ["expenses", "Rent"],
        ["expenses", "Website Maintenance"],
        ["expenses", "Other Expenses"],
        ["assets", "Cash"],
        ["assets", "Other Assets"],
        ["assets", "Rare Book Collection"],
        ["income", "Publishing Rights Monthly Pay"],
        ["income", "Publishing Rights Cash Front"],
        ["expenses", "Patent Filling Fee"],
        ["expenses", "Lawyer Fee"],
        ["income", "Patent Commission"],
        ["income", "Overnight Storage Income"],
      ],
      should_be: [
        ["equity": 75370]
      ]
    }
  },

  "9": {
    id: "9",
    title: "Recognize Expenses in Disguise",
    description: "In real-life, people promote things to you that seem like assets which are instead expenses in disguise. When's the last time you heard phrases like 'Participate in this training program and let the skills be your best assets' or 'This TV can be a great asset for having great parties'. Many times, things are marketed as assets simply to trick you into purchasing them.",
    steps: [
      {
        step_title: "Education",
        description: "This may come as a shock but education expenditure is not categorized as asset. Remember that assets are things that have cash value. After you obtained your degree, you can't sell it back to anyone again. You may argue -- Hey! but what about the new knowledge because school told me that knowledge is an asset? In truth, most knowledge acquired in school won't be used in your later life (except maybe technical degrees, vocational degrees, or medical skills) in your career. Also, the knowledge, which is an intangible with no cash evaluation, can't be listed in your asset list.",
        hint: "Many people may also argue that a degree is an 'asset' to break into an industry. IB, for example, mostly require a Bachelor's degree. Isn't that fact a sign that the degree is an asset? No, saying 'A degree grants me entrance into IB industry' is the same as saying 'A baseball game ticket grants me entrance into the arena'. You expend on these 'tickets' for a purpose and they don't carry any cash value after the deed is done. Except education is even worse than a baseball ticket because you can at least sell the baseball ticket to someone else (sometimes at a premium). ",
        action_items: [
          {name: "New Student Loan", amount: 65000},
          {name: "Cash from Student Loan", amount: 65000},
          {name: "New Student Loan Monthly Pay", amount: 760, regular: true},
          {name: "Education Expenditure", amount: 65000},
        ]
      },
      {
        step_title: "Disclaimer on Education",
        description: "This is not to say that education is not valuable. What defines value v.s. asset is very different. Asset is what we focus on here to achieve a practical financial freedom. Value, on the other hand, can be many things. A small locket from a childhood friend can be invaluable for a person while it may only sell for a few bucks on the market. Education, for one thing, is valuable in cultivating your mind. These things do not improve your financial life directly, but they do add intangible value to your life, such as sentiment, intelligence, or a better temperament.",
        hint: "Also, this course doesn't advocate ditching school. While getting rich is not really that closely tied with educational attainment, some book learning can enrich a life beyond mere money and coins.",
        action_items: []
      },
      {
        step_title: "Human Investment",
        description: "You have decided to purchase a home entertainment system so you can invite you boss over and have a great time with him, with the intention of gaining ground for promotion.",
        hint: "Adding any 'potential' return to your asset value is irrational. Many people believe a lot of their purchases are assets because those things can 'potentially' contribute (insert arbitrary return here) to their financial life. In this case, the human return is being added to the value of the studio system. While the stuidio system itself can be logged as an asset as it does have cash value, adding 'networking return' on your TV is just insane.",
        action_items: [
          {name: "Pay for Boss Home Studio", amount: 7360},
          {name: "Boss Home Studio", amount: 7360},
          {name: "Consumer Loan", amount: 8000},
          {name: "Cash from Consumer Loan", amount: 8000},
          {name: "Consumer Loan Monthly Pay", amount: 270, regular: true},
        ]
      },
      {
        step_title: "Prestige Game",
        description: "You decided to join your school's elite yearly donor program because you'll be invited to a private club every year for a presidential meeting and get your name carved into a new school building's bedrock.",
        hint: "Prestige is not an asset. It doesn't generate cash return and can't be sold, failing both criterias for an asset. However, many people believe they can gain 'respect' from these purchases and the enhanced esteem can be categorized as an asset. Again, if you're always counting on 'potentials' and 'intangibles', no money will dive into your wallet.",
        action_items: [
          {name: "Elite Donor Program Monthly Pay", amount: 150, regular: true},
        ]
      }
    ],

    statements: {
      cash_flow_statement: {
        income: [
          {name: "Salary", item_description: "The campus employes you to lower the cost of the personnels here at the department.", amount: 3100, regular: true},
          {name: "Condo Share Income", amount: 750, passive: true, regular: true},
          {name: "Aspen Resort Share Income", amount: 430, passive: true, regular: true},
          {name: "Combined Rare Book Income", description: "sf", amount: 375, passive: true, regular: true},
          {name: "Publishing Rights Monthly Pay", amount: 330, passive: true, regular: true},
          {name: "Patent Commission", amount: 125, regular: true, passive: true},
          {name: "Overnight Storage Income", amount: 25, regular: true, passive: true},
        ],
        expenses: [
          {name: "Rent", item_description: "A comfortable home services you physically, but you service it financially.", amount: 2050, regular: true},
          {name: "Website Maintenance", amount: 55, regular: true},
          {name: "Other Expenses", item_description: "A symbol of adulthood worth fighting for.", amount: 1250, regular: true},
        ],
      },
      balance_sheet: {
        assets: [
          {name: "Cash", item_description: "cold and sure", amount: 8907},
          {name: "Other Assets", item_description: "sdf", amount: 1350},
          {name: "Condo Share", amount: 10500},
          {name: "Aspen Resort Share", amount: 9500},
          {name: "Rare Book Collection", item_description: "Simple, cold, and sure.", amount: 2400},
        ],
        liabilities: [
        ],
      },
      deleted: []
    },
    equity: 32657,
    criteria: {
      should_contain: [
        ["liabilities", "New Student Loan"],
        ["income", "Cash from Student Loan"],
        ["expenses", "New Student Loan Monthly Pay"],
        ["expenses", "Education Expenditure"],
        ["expenses", "Pay for Boss Home Studio"],
        ["assets","Boss Home Studio"],
        ["liabilities", "Consumer Loan"],
        ["income", "Cash from Consumer Loan"],
        ["expenses", "Consumer Loan Monthly Pay"],
        ["expenses", "Elite Donor Program Monthly Pay"],
        ["assets", "Condo Share"],
        ["income", "Condo Share Income"],
        ["assets", "Aspen Resort Share"],
        ["income", "Aspen Resort Share Income"],
        ["income", "Salary"],
        ["income", "Combined Rare Book Income"],
        ["expenses", "Rent"],
        ["expenses", "Website Maintenance"],
        ["expenses", "Other Expenses"],
        ["assets", "Cash"],
        ["assets", "Other Assets"],
        ["assets", "Rare Book Collection"],
        ["income", "Publishing Rights Monthly Pay"],
        ["income", "Patent Commission"],
        ["income", "Overnight Storage Income"],
      ],
      should_be: [
        ["equity": 75370]
      ]
    }
  },

  "10": {
    id: "10",
    title: "Utilize Your Idle Assets",
    description: "Many times, people have idle possessions that can be used creatively to generate extra income. Earlier, we talked about entrepreneurship. Now, we learn a few more ideas to put resources to work.",
    steps: [
      {
        step_title: "Boss Home Studio for Rent",
        description: "Your boss turns out to be a very popular target for networking. In the end, your supposedly impressive home studio fell short compared to your colleague's offer -- a life-long VIP entrance to the local gentlemen's club. Your boss turns a blind eye to your mediocre attempt in gaining favor and instead promoted your colleague. You decided to start generate honest income again instead of betting on intangibles. Within a few months, you set up a private recording studio using the equipment you acquired and rent it out regularly to musicians as recording space.",
        hint: "You're finally back on track to generate honest passive income again.",
        action_items: [
          {name: "Boss Studio Monthly Maintenance", amount: 467, regular: true},
          {name: "Boss Studio Recording Space Monthly Rent", amount: 650, regular: true, passive: true},
        ]
      },
      {
        step_title: "Free Car!",
        description: "Your parents finally realized that one of the symbols of modern life is when you hand over a beaten-up second-hand to your kids. After some thoughts, they decided to gift you their old mini-van. To add class to the vehicle and make the gift less embarrasing, they painted the van black. The mini-van is evaluated at purchase value since it's never sold. Also, you named it 'Aaron'.",
        hint: "Gifts are usually not counted for federal tax purposes. That's partly the reason why you see rich people 'gifting' each other a lot.",
        action_items: [
          {name: "'Aaron' the Mini-Van Painted Black", amount: 12000},
        ]
      },
      {
        step_title: "Ride-share Car Rent",
        description: "The local Uber driver business is catching up momentum. Since you don't drive 'Aaron' on weekends and the ride-share demand is especially high during those times, you decided to rent it out to Uber drivers. To gain a higher income, you retiled Aaron's interior with leather for 'Uber Black Standard', which entitles you to a higher income.",
        hint: "When assets are idle and sitting around, ask yourself -- can I get them to work? This is the gateway question to generate additional asset from resoures at hand.",
        action_items: [
          {name: "Retiling Cost for Aaron's Interior", amount: 3400},
          {name: "Monthly Weekend Car Rent", amount: 760, passive: true, regular: true},
        ]
      }
    ],

    statements: {
      cash_flow_statement: {
        income: [
          {name: "Salary", item_description: "The campus employes you to lower the cost of the personnels here at the department.", amount: 3100, regular: true},
          {name: "Condo Share Income", amount: 750, passive: true, regular: true},
          {name: "Aspen Resort Share Income", amount: 430, passive: true, regular: true},
          {name: "Combined Rare Book Income", description: "sf", amount: 375, passive: true, regular: true},
          {name: "Publishing Rights Monthly Pay", amount: 330, passive: true, regular: true},
          {name: "Patent Commission", amount: 125, regular: true, passive: true},
          {name: "Overnight Storage Income", amount: 25, regular: true, passive: true},
        ],
        expenses: [
          {name: "Rent", item_description: "A comfortable home services you physically, but you service it financially.", amount: 2050, regular: true},
          {name: "Website Maintenance", amount: 55, regular: true},
          {name: "New Student Loan Monthly Pay", amount: 760, regular: true},
          {name: "Consumer Loan Monthly Pay", amount: 270, regular: true},
          {name: "Elite Donor Program Monthly Pay", amount: 150, regular: true},
          {name: "Other Expenses", item_description: "A symbol of adulthood worth fighting for.", amount: 1250, regular: true},
        ],
      },
      balance_sheet: {
        assets: [
          {name: "Cash", item_description: "cold and sure", amount: 10147},
          {name: "Other Assets", item_description: "sdf", amount: 1350},
          {name: "Condo Share", amount: 10500},
          {name: "Aspen Resort Share", amount: 9500},
          {name: "Boss Home Studio", amount: 7360},
          {name: "Rare Book Collection", item_description: "Simple, cold, and sure.", amount: 2400},
        ],
        liabilities: [
          {name: "New Student Loan", amount: 65000},
          {name: "Consumer Loan", amount: 8000},
        ],
      },
      deleted: []
    },
    equity: -31743,
    criteria: {
      should_contain: [
        ["expenses", "Boss Studio Monthly Maintenance"],
        ["income", "Boss Studio Recording Space Monthly Rent"],
        ["assets", "'Aaron' the Mini-Van Painted Black"],
        ["expenses", "Retiling Cost for Aaron's Interior"],
        ["income", "Monthly Weekend Car Rent"],
        ["liabilities", "New Student Loan"],
        ["expenses", "New Student Loan Monthly Pay"],
        ["assets","Boss Home Studio"],
        ["liabilities", "Consumer Loan"],
        ["expenses", "Consumer Loan Monthly Pay"],
        ["expenses", "Elite Donor Program Monthly Pay"],
        ["assets", "Condo Share"],
        ["income", "Condo Share Income"],
        ["assets", "Aspen Resort Share"],
        ["income", "Aspen Resort Share Income"],
        ["income", "Salary"],
        ["income", "Combined Rare Book Income"],
        ["expenses", "Rent"],
        ["expenses", "Website Maintenance"],
        ["expenses", "Other Expenses"],
        ["assets", "Cash"],
        ["assets", "Other Assets"],
        ["assets", "Rare Book Collection"],
        ["income", "Publishing Rights Monthly Pay"],
        ["income", "Patent Commission"],
        ["income", "Overnight Storage Income"],
      ],
      should_be: [
        ["equity": 75370]
      ]
    }
  },

  "11": {
    id: "11",
    title: "Become a New Homeowner",
    description: "We'll learn about the defining transaction of United States -- buying a home. Apart from purchasing the home, many insurance policies and other add-on items may lower the risk of you losing your home or suffering damage to it. Also, new homes may also be rented to offset the mortgage payments. In most cases, homes come with mortgage financing, which is a type of amortizing liability (meaning its amount on your liability sheet will decrease over time as you pay it back).",
    steps: [
      {
        step_title: "Acquire Cash for Down Payment",
        description: "Most home purchases require down payments. It can be any percentage of the house price, but a general rule of thumb is that the higher the property is valued, the higher the down payment percentage will be.",
        hint: "Usually you can acquire cash by selling some of the assets that you own. In this case, you've decided to sell the condo shares and also the aspen resort share to get back cash. Since that's enough, you, with a heavy heart, sold Aaron.",
        action_items: [
          {name: "Cash from Selling Residential Shares", amount: 30000},
          {name: "Cash from Selling Aaron", amount: 9000},
        ]
      },
      {
        step_title: "Home Owner!",
        description: "You've got your eye on a nice 3BR/2BA house in suburb New Jersey. The quiet neighborhood does have its charm and you decided to call the place home for a long time. The downpayment is not too bad and the rate is good on the mortgage.",
        hint: "Don't forget to drop the rent item since you no longer live in a rented home.",
        action_items: [
          {name: "Down Payment", description: "down pay", amount: 45000},
          {name: "Payment on 3BR/2BA other than Down Payment", amount: 171000},
          {name: "Cash Credit from Mortgage", amount: 171000},
          {name: "3BR/2BA House", description: "home", amount: 216000},
          {name: "15-year Mortgage", description: "mortgage", amount: 171000},
          {name: "15-year Mortgage Monthly Pay", description: "service pay", amount: 1950, regular: true},
        ]
      },
      {
        step_title: "State Compliance",
        description: "The state of New Jersey mandates that new home owners must acquire a certificate of flood protection if in a flood zone. You'll have to pay for the certificate.",
        action_items: [
          {name: "Flood Inspection and Certificate", description: "protection", amount: 1700}
        ]
      },
      {
        step_title: "Rent out a Room",
        description: "You've got a single vacant room to yourself and you decided to rent it out to offset the mortgage payment. The house is near a high-school and an eager young man named Dylan took the offer.",
        action_items: [
          {name: "Rent on 3BR/2BA", description: "rent", amount: 750, passive: true, regular: true}
        ]
      }
    ],

    statements: {
      cash_flow_statement: {
        income: [
          {name: "Salary", item_description: "The campus employes you to lower the cost of the personnels here at the department.", amount: 3100, regular: true},
          {name: "Condo Share Income", amount: 750, passive: true, regular: true},
          {name: "Aspen Resort Share Income", amount: 430, passive: true, regular: true},
          {name: "Combined Rare Book Income", description: "sf", amount: 375, passive: true, regular: true},
          {name: "Combined Intellectual Rights", amount: 450, passive: true, regular: true},
          {name: "Combined Entrepreneurial Income", amount: 1435, regular: true, passive: true},
        ],
        expenses: [
          {name: "Rent", item_description: "A comfortable home services you physically, but you service it financially.", amount: 2050, regular: true},
          {name: "New Student Loan Monthly Pay", amount: 460, regular: true},
          {name: "Consumer Loan Monthly Pay", amount: 270, regular: true},
          {name: "Combined Asset Maintenance Pay", amount: 522, regular: true},
          {name: "Other Expenses", item_description: "A symbol of adulthood worth fighting for.", amount: 1250, regular: true},
        ],
      },
      balance_sheet: {
        assets: [
          {name: "Cash", item_description: "cold and sure", amount: 8290},
          {name: "Other Assets", item_description: "sdf", amount: 1350},
          {name: "Condo Share", amount: 10500},
          {name: "Aspen Resort Share", amount: 9500},
          {name: "Boss Home Studio", amount: 7360},
          {name: "'Aaron' the Mini-Van Painted Black", amount: 12000},
          {name: "Rare Book Collection", item_description: "Simple, cold, and sure.", amount: 2400},
        ],
        liabilities: [
          {name: "New Student Loan", amount: 65000},
          {name: "Consumer Loan", amount: 8000},
        ],
      },
      deleted: []
    },
    equity: -21600,
    criteria: {
      should_contain: [
        ["income", "Cash from Selling Residential Shares"],
        ["income", "Cash from Selling Aaron"],
        ["expenses", "Down Payment"],
        ["expenses", "Payment on 3BR/2BA other than Down Payment"],
        ["income", "Cash Credit from Mortgage"],
        ["assets", "3BR/2BA House"],
        ["liabilities", "15-year Mortgage"],
        ["expenses", "15-year Mortgage Monthly Pay"],
        ["expenses", "Flood Inspection and Certificate"],
        ["income", "Rent on 3BR/2BA"],
        ["income", "Salary"],
        ["deleted", "Condo Share Income"],
        ["deleted", "Aspen Resort Share Income"],
        ["income", "Combined Rare Book Income"],
        ["income", "Combined Intellectual Rights"],
        ["income", "Combined Entrepreneurial Income"],
        ["deleted", "Rent"],
        ["expenses", "New Student Loan Monthly Pay"],
        ["expenses", "Consumer Loan Monthly Pay"],
        ["expenses", "Combined Asset Maintenance Pay"],
        ["expenses", "Other Expenses"],
        ["assets", "Cash"],
        ["assets", "Other Assets"],
        ["deleted", "Condo Share"],
        ["deleted", "Aspen Resort Share"],
        ["assets", "Boss Home Studio"],
        ["deleted", "'Aaron' the Mini-Van Painted Black"],
        ["assets", "Rare Book Collection"],
        ["liabilities", "New Student Loan"],
        ["liabilities", "Consumer Loan"],
      ],
      should_be: [

      ]
    }
  },


  "12": {
    id: "12",
    title: "Refinance Your Liabilities",
    description: "As we learned earlier, not all liabilities and assets are created equal. Some liabilities can carry significant amount of stress due to a higher monthly payment or a pressing deadline. Refinancing is a great way to obtain a lower rate on your existing loans by converting them into new, cheapter ones. It will substitute a more expensively-serviced loan with a more cheaply-serviced loan, decreasing your monthly service expenses and payment urgency.",
    steps: [
      {
        step_title: "Obtain a New Mortgage",
        description: "You've found a lending partner and he's willing to loan you $200,000 at a monthly service rate of $2,100, a rate of 1.05%, much lower than $1,950 on $171,000, which carries 1.14%. You obtained the credits after the settlement.",
        action_items: [
          {name: "Cash Credit from New 15yr-Mortgage", description: "A more tangible evaluation of your interview performance.", amount: 200000},
          {name: "New 15yr-Mortgage", description: "new loan", amount: 200000},
          {name: "New 15yr-Mortgage Monthly Pay", description: "new pay", amount: 2100, regular: true}
        ]
      },{
        step_title: "Pay off Existing Mortgage",
        description: "You used the cash obtained from the new mortgage to payoff the old loan you have, effectively substituting the old mortgage with the new one. Drop any entries related to the old mortgage. Also, the bank quotes $750 for prepayment settlement.",
        action_items: [
          {name: "Pay off Old Mortgage", description: "Time will tell their value, not investment bankers.", amount: 171000},
          {name: "Settlement Fee", description: "settlement", amount: 750},
        ]
      },
      {
        step_title: "Pay off Extra Loans",
        description: "Because the new mortgage grants an intial principal amount higher than the outstanding mortgage, you can afford to payoff additional loans with the credit you just obtained. The consumer loan, for example, carries a 3.38% rate on principal, which is alarmingly high. You decided to pay it off as well.",
        action_items: [
          {name: "Pay off Consumer Loan", amount: 8000},
        ]
      }
    ],

    statements: {
      cash_flow_statement: {
        income: [
          {name: "Salary", item_description: "The campus employes you to lower the cost of the personnels here at the department.", amount: 3100, regular: true},
          {name: "Combined Rare Book Income", description: "sf", amount: 375, passive: true, regular: true},
          {name: "Combined Intellectual Rights", amount: 450, passive: true, regular: true},
          {name: "Combined Entrepreneurial Income", amount: 1435, regular: true, passive: true},
          {name: "Rent on 3BR/2BA", description: "rent", amount: 750, passive: true, regular: true}
        ],
        expenses: [
          {name: "New Student Loan Monthly Pay", amount: 460, regular: true},
          {name: "Consumer Loan Monthly Pay", amount: 270, regular: true},
          {name: "Combined Asset Maintenance Pay", amount: 522, regular: true},
          {name: "Other Expenses", item_description: "A symbol of adulthood worth fighting for.", amount: 1250, regular: true},
          {name: "15-year Mortgage Monthly Pay", description: "service pay", amount: 1950, regular: true},
        ],
      },
      balance_sheet: {
        assets: [
          {name: "Cash", item_description: "cold and sure", amount: 1378},
          {name: "Other Assets", item_description: "sdf", amount: 1350},
          {name: "Boss Home Studio", amount: 7360},
          {name: "3BR/2BA House", description: "home", amount: 216000},
          {name: "Rare Book Collection", item_description: "Simple, cold, and sure.", amount: 2400},
        ],
        liabilities: [
          {name: "New Student Loan", amount: 65000},
          {name: "Consumer Loan", amount: 8000},
          {name: "15-year Mortgage", description: "mortgage", amount: 171000},
        ],
      },
      deleted: []
    },

    equity: -15512,
    criteria: {
      should_contain: [
        ["income", "Salary"],
        ["income", "Combined Rare Book Income"],
        ["income", "Combined Intellectual Rights"],
        ["income", "Combined Entrepreneurial Income"],
        ["income", "Rent on 3BR/2BA"],
        ["expenses", "New Student Loan Monthly Pay"],
        ["deleted", "Consumer Loan Monthly Pay"],
        ["expenses", "Combined Asset Maintenance Pay"],
        ["expenses", "Other Expenses"],
        ["deleted", "15-year Mortgage"],
        ["deleted", "15-year Mortgage Monthly Pay"],
        ["assets", "Cash"],
        ["assets", "Other Assets"],
        ["assets", "Boss Home Studio"],
        ["assets", "Rare Book Collection"],
        ["liabilities", "New Student Loan"],
        ["deleted", "Consumer Loan"],
        ["income", "Cash Credit from New 15yr-Mortgage"],
        ["liabilities", "New 15yr-Mortgage"],
        ["expenses", "New 15yr-Mortgage Monthly Pay"],
        ["expenses", "Pay off Old Mortgage"],
        ["expenses", "Settlement Fee"],
        ["expenses", "Pay off Consumer Loan"],
      ],
      should_not_be_present: [

      ],
      should_be: [
      ]
    }
  },
}
