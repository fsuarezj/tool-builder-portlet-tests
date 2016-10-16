Feature: Choosing Tool Definition
	As the admin user
	I want to choose the Tool Definition for the system
	So that I can use work with it
	
	Scenario: Choose an existing Tool Definition
		Given the admin user is on Tool Builder admin page
		And a tool definition called Test Tool exists
		When the user selects Test Tool as default tool def
		And she goes to the Tool Instances Navigation Page
		Then the name of the choosen tool definition is Test Tool 