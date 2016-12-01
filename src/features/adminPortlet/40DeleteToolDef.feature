@tool-definition-portlet @DeleteToolDef
Feature: Delete Tool Definition
	As the admin user
	I want to edit existing Tool Definitions in the system
	So that I can choose them as the system Tool Definition

	Scenario: Delete an existing Tool Definition
		Given the admin user is on the Tool Builder admin page
		And a tool definition called "My New Tool Type 2" exists
		And a tool definition called "Mock Tool Type" exists
		When she selects to delete the tool definition called "My New Tool Type 2"
		And she confirms the deletion
		And she selects to delete the tool definition called "Mock Tool Type"
		And she confirms the deletion
		Then a tool definition called "My New Tool Type 2" does not exist
		And a tool definition called "Mock Tool Type" does not exist
