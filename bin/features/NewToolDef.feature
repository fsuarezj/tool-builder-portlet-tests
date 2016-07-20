Feature: Tool Definition Management
	As the admin user
	I want to manage new Tool Definitions in the system
	So that I can choose them as the system Tool Definition
	
	Scenario: Choose an existing Tool Definition
		Given the admin user is on Tool Builder admin page
		And a tool definition called Test Tool exists
		When the user selects the Test Tool
		And she goes to the Tool Instances Navigation Page
		Then the name of the choosen tool definition is Test Tool 
	
	Scenario: Create a new Tool Definition
		Given the admin user is on Tool Builder admin page
		When she chooses to create a new tool definition
		And she provides the tool definition name as My New Tool Type
		And she chooses to have 3 steps
		And she chooses a step of type mock for step 1
		And she chooses a step of type mock for step 2
		And she chooses a step of type mock for step 3
		And she returns to the Tool Definition admin page
		Then a tool definition called My New Tool Type exists
		
	Scenario: User new Tool Definition
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