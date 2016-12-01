@tool-definition-portlet @EditToolDef
Feature: Edit Tool Definition
	As the admin user
	I want to edit existing Tool Definitions in the system
	So that I can choose them as the system Tool Definition
		
	Scenario: Edit an existing Tool Definition
		Given the admin user is on the Tool Builder admin page
		And a tool definition called "My New Tool Type 2" exists
		When the user chooses to edit the tool definition called "My New Tool Type 2"
		And she adds a step of type MOCK
		And she moves the step 2 to step 3
		And she saves the steps order
		And she returns to the Tool Definition admin page
		Then a tool definition called "My New Tool Type 2" exists