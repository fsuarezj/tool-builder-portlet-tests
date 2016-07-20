Feature: Tool Instance Creation
	As a user
	I want to be able to create new Tool Instance in the system
	So that I can work with that Tool Instance

	Scenario: Create a new Tool Instance
		Given the user is on Tool Instances Navigation Page
		And she logs in the system as testUser@sharklasers.com with password testPasswd
		When she chooses to create a new tool instance
		And she provides the tool instance name as My New Instance
		And she creates the tool instance
		And she returns to the Tool Instances Navigation Page
		Then a tool instance called My New Instance exists
		
	Scenario: Create a new existing Tool Instance
		Given the user is on Tool Instances Navigation Page
		And she logs in the system as testUser@sharklasers.com with password testPasswd
		And a tool instance called My New Instance exists
		When the user chooses to create a new tool instance
		And she provides the tool instance name as My New Instance
		And she creates the tool instance
		And an error message with text "Existing Tool Instance" is shown
		And the user provides the tool instance name as My New Instance 2
		And she creates the tool instance
		
	Scenario: Delete My New Instance
		Given the user is on Tool Instances Navigation Page
		And she logs in the system as testUser@sharklasers.com with password testPasswd
		And a tool instance called My New Instance exists
		When the user selects the tool instance My New Instance
		And she deletes the current tool instance 
		Then a tool instance called My New Instance does not exist

	Scenario: Delete My New Instance
		Given the user is on Tool Instances Navigation Page
		And she logs in the system as testUser@sharklasers.com with password testPasswd
		And a tool instance called My New Instance 2 exists
		When the user selects the tool instance My New Instance 2
		And she deletes the current tool instance 
		Then a tool instance called My New Instance 2 does not exist

