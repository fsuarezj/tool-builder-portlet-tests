@testingFramework
Feature: Cases to test the testing environment
	As a user
	I want to blablablabla
	So that I blabalbla

	Scenario: Delete an existing Tool Definition
		Given the admin user is on the Tool Builder admin page
		And a tool definition called "My New Tool Type 2" exists
		When she selects to delete the tool definition called My New Tool Type 2
		And she confirms the deletion
		Then a tool definition called "My New Tool Type 2" does not exist