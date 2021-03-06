@tool-implementation-portlet @navigateSteps
Feature: Navigate through Steps
	As a user
	I want to be able to navigate through the steps in a given tool instance
	So that the step of each tool instance is saved
	
	Background:
		Given the user is on the Tool Instances Navigation Page
		And she logs in the system as test@guerrillamail.com with password test

	Scenario: Pull up one tool instance from step 1 to 2
		Given the user creates a tool instance called "Other Tool Instance"
		And she selects the tool instance "Other Tool Instance"
		When she chooses to step forward
		And she returns to the Tool Instances Navigation Page
		Then the tool instance called "Other Tool Instance" is on step 2
		
	Scenario: Pull up one tool instance from step 2 to 4
		Given a tool instance called "Other Tool Instance" exists
		And the tool instance called "Other Tool Instance" is on step 2
		When the user selects the tool instance "Other Tool Instance"
		And she chooses to step forward
		And she chooses to step forward
		And she returns to the Tool Instances Navigation Page
		Then the tool instance called "Other Tool Instance" is on step 4
	
	Scenario: Try to pull up one tool instance above its step limit
		Given a tool instance called "Other Tool Instance" exists
		And the tool instance called "Other Tool Instance" is on step 4
		When the user selects the tool instance "Other Tool Instance"
		And she chooses to step forward
		And she chooses to step forward
		And she chooses to step forward
		And she chooses to step forward
		And she returns to the Tool Instances Navigation Page
		Then the tool instance called "Other Tool Instance" is on step 5
		And the user selects the tool instance "Other Tool Instance"
		And she deletes the current tool instance 