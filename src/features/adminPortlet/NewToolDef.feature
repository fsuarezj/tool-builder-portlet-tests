Feature: Tool Definition Management
	As the admin user
	I want to manage new Tool Definitions in the system
	So that I can choose them as the system Tool Definition
	
	Scenario: Create a new Tool Definition
		Given the admin user is on Tool Builder admin page
		When she chooses to create a new tool definition
		And she provides the tool definition name as My New Tool Type
		And she adds a step of type mock for step 1
		And she adds a step of type mock for step 2
		And she adds a step of type mock for step 3
		And she returns to the Tool Definition admin page
		Then a tool definition called My New Tool Type exists
		And the user selects My New Tool Type as default tool def

	Scenario: Use new Tool Definition
		Given the user is on Tool Instances Navigation Page
		And a tool definition called My New Tool Type exists
		When the user creates a tool instance called My New Def Tool Instance
		And she selects the tool instance My New Def Tool Instance
		When she chooses to step forward
		When she chooses to step forward
		When she chooses to step forward
		When she chooses to step forward
		And she returns to the Tool Instances Navigation Page
		Then the tool instance called Other Tool Instance is on step 3

	Scenario: Create an existing Tool Definition
		Given the admin user is on Tool Builder admin page
		And a tool definition called My New Tool Type exists
		When she chooses to create a new tool definition
		And she provides the tool definition name as My New Tool Type
		Then an error message with text "Existing Tool Definition" is shown
		
	Scenario: Try to create an existing Tool Definition and change the name
		Given the admin user is on Tool Builder admin page
		And a tool definition called My New Tool Type exists
		When she chooses to create a new tool definition
		And she provides the tool definition name as My New Tool Type
		And an error message with text "Existing Tool Definition" is shown
		And she provides the tool definition name as My New Tool Type 2
		And she adds a step of type mock for step 1
		And she adds a step of type mock for step 2
		And she returns to the Tool Definition admin page
		Then a tool definition called My New Tool Type 2 exists
		
	Scenario: Edit an existing Tool Definition
		Given the admin user is on Tool Builder admin page
		And a tool definition called My New Tool Type 2 exists
		Then the user chooses to edit the tool definition called My New Tool Type 2
		And she adds a step of type mock for step 3
		And she moves the step 2 to step 3
		And she returns to the Tool Definition admin page
		Then a tool definition called My New Tool Type 2 exists
		
	Scenario: Delete an existing Tool Definition
		Given the admin user is on Tool Builder admin page
		And a tool definition called My New Tool Type 2 exists
		Then the user chooses to edit the tool definition called My New Tool Type 2
		And she selects to delete the current tool Definition
		Then a tool definition called My New Tool Type 2 does not exist

	Scenario: Try to delete an existing Tool Definition with tool instances associated
		Given the admin user is on Tool Builder admin page
		And a tool definition called My New Tool Type exists
		When the user chooses to edit the tool definition called My New Tool Type
		And she selects to delete the current tool Definition
		Then an error message with text "This Tool Definition has associated tool instances, please delete the tool instances before deleting this tool definition" is shown
		And the user cancel the current tool definition edition

	Scenario: Try to edit an existing Tool Definition with tool instances associated
		Given the admin user is on Tool Builder admin page
		And a tool definition called My New Tool Type exists
		When the user chooses to edit the tool definition called My New Tool Type
		And the user moves the step 2 to step 3
		Then an error message with text "This Tool Definition has associated tool instances, please delete the tool instances before editing this tool definition" is shown
		And the user cancel the current tool definition edition

	Scenario: Delete associated tool instances and to delete an existing Tool Definition selected as default
		Given the user is on Tool Instances Navigation Page
		And a tool instance called My New Def Tool Instance exists
		When the user selects the tool instance My New Instance 2
		And she deletes the current tool instance 
		And the admin user goes to Tool Builder admin page
		And she chooses to edit the tool definition called My New Tool Type
		And she selects to delete the current tool Definition
		And an error message with text "This Tool Definition is selected as default, please choose other tool definition as default before deleting this one" is shown
		And the user cancel the current tool definition edition
		And the user selects My New Tool Type as default tool def
		And she chooses to edit the tool definition called My New Tool Type
		And she selects to delete the current tool Definition
		Then a tool definition called My New Tool Type does not exist
