{
    visibilityFilter: 'SHOW_ALL',

    cycles: [
        {   // individual cycle 
            cycle_name: 'Clojure Learning'
            cycle_completed: false,
            cycle_start_date: 02-12-16,
            cycle_end_date: "",
            id: "eb2da3d1-0a99-4d92-83b6-58560a3f4ce0",

            cycle_items: [
                    {
                        id: "eb2da3d1-0a99-4d92-83b6-58560a3f4ce0"
                    },
                    {
                        id: "eb2da3d1-0a99-4d92-83b6-58560a3f4ce0"
                    }
            ],
            cycle_goals: [
                {
                    cycle_goal_id: "eb2da3d1-0a99-4d92-83b6-58560a3f4ce0",
                    cycle_goal: "I want to become the best at clojure in the whole world!"
                },
                {
                    cycle_goal_id: "eb2da3d1-0a99-4d92-83b6-58560a3f4ce0",
                    cycle_goal: "I want to become the best at clojure in the whole world!"
                }
            ],

            cycle_days: [
                {
                    date: 12-11-12,
                    cycle_items: [
                    ]
                }, // end of day
                {
                    date: 13-11-12,
                    cycle_items: [

                    ] 
                }   // end of day
            ] // end of days 
        }


    ],

    items: [
        {
        item_id: "eb2da3d1-0a99-4d92-83b6-58560a3f4ce0",
        selected: false,
        item_title: 'Programming Clojure',
        item_times_spent: 
                        [ 
                            {
                                item_time_spent_date: 011134,
                                item_time_spent: 30
                            }
                        ],
        // in minutes
        item_cost: 50,
        item_source: 'http://codeacademy.educational.com',
        item_start_date: 02-12-16, 
        item_end_date: "present",
        item_completed: false // intricately link to everything 
        cycle_reference: [
            {
                cycle_reference_name: 'Clojure Learning',

            }
        ]
        }
            ] 
}

/*
    So what happens is that each item has a cycle reference to each cycle. 




const store = {
    visibilityFilter: 'SHOW_ALL',
    
    learning_entries: [
            {
                item_title: 'The book of sauron',
                item_cost: 0,
                item_source: 'http://brazzers.educational.com',
                id: 123123123234,
                selected: false,
                start_date: "01-11-16",
                end_date: null,
                time_entries: [
                    {
                        id: uuid(),
                        date: "01-11-16",
                        time_amount: "60"     // in minutes 
                    }, // end of item 
                    {
                        id: uuid(),
                        date: "01-11-16",
                        time_amount: "60"
                    }, // end of item 
                ], // end of time item 
                learning_goals: [
                    {
                        id: uuid(),
                        text: "To figure out how to become better at maths"
                    }, // learning_goals 
                    {
                        id: uuid(),
                        text: "Become god"
                    } // learning_goals 
                ] // end of learning_goals
            } // end item
        ], // learning_entries 
    overall_learning_goals: {
        December_2016: 
    }
} // last tag







///// FIRST ITERATION BEFORE MOVING FORWARD

const store = {
    visibilityFilter: 'SHOW_ALL',
    
    learning_entries: [
            {
                item_title: 'The book of sauron',
                item_cost: 0,
                item_source: 'http://brazzers.educational.com',
                id: 123123123234,
                selected: false,
                start_date: Date.now , 
                end_date: null
            } // end of item
        ], // end of learning_entries 
    overall_learning_goals: {
        December_2016: 
    }
} // last tag


//




*/
