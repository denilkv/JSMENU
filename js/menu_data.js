var menu = [{

"menuInfo":[

        {		
            "mainUlClass":"someclassforul", // Enter the CLASS of main menu's wrapping <UL> Tag, if required
			
            "subUlClass":"sub-menu", // Enter the CLASS of Submenu's wrapping <UL> Tag, if required
			
            "mainUlId":"main-menu", // Enter the ID of main menu's wrapping <UL> Tag, if required			
			
            "mainLiClass":"dropdown",	  // Enter the CLASS of main menu's <LI> Tag, if required

	    "subLiClass":"someclassforsubli",	// Enter the CLASS of sub menu's <LI> Tag, if required
			
	    "mainAClass": "someclassforanchor", // Enter the CLASS of main menu's <A> Tag, if required
			
	    "subAClass": "someclassforsubanchor" // Enter the CLASS of sub menu's <A> Tag, if required
        }

],
"menuData":[

        {
			"name": "Fidelity Stocks", 
			"href": "http://google.com",
            		"title": "title 1",
            		"alt":"alt 1",
			"id": "ww",
			"disable": false,
			"menuChild":[

				{
				"name": "Dividends",
				"href": "http://google.com",
				"title":"title 1",
				"alt":"sub alt 1",
				"id": "a",
				"disable": false				
				},

				{
				"name": "Global Consumer",
				"href": "http://yahoo.com",
				"title":"subtitle 1",
				"alt":"sub alt 1",
				"id": "b",
				"disable": false				
				}				
			]
			
        },
        {
			"name": "Fixed Income",
			"href": "#",
        		"title":"title 1",
            		"alt":"alt 1",
			"id": "dd",
			"disable": false,			
			"menuChild":[

				{
				"name": "subname1",
				"href": "http://google.com",
				"title":"title 1",
				"alt":"sub alt 1",
				"id": "gg",
				"disable": false				
				},

				{
				"name": "subname2",
				"href": "http://yahoo.com",
				"title":"subtitle 1",
				"alt":"sub alt 1",
				"id": "ll",
				"disable": false				
				}				
			]
			
        },
        {
			"name": "name3",
			"href": "http://google.com",
            		"title":"title 1",
        		"alt":"alt 1",
			"id": "rr",
			"disable": false,			
			"menuChild":[

				{
				"name": "subname1",
				"href": "http://google.com",
				"title":"title 1",
				"alt":"sub alt 1",
				"id": "hh",
				"disable": false
				},

				{
				"name": "subname2",
				"href": "http://yahoo.com",
				"title":"subtitle 1",
				"alt":"sub alt 1",
				"id": "kk",
				"disable": false
				}				
			]
			
        }		

]
}];
