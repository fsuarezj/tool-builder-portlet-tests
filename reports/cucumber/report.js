$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("adminPortlet/ChooseToolDef.feature");
formatter.feature({
  "line": 1,
  "name": "Choosing Tool Definition",
  "description": "As the admin user\nI want to choose the Tool Definition for the system\nSo that I can use work with it",
  "id": "choosing-tool-definition",
  "keyword": "Feature"
});
formatter.before({
  "duration": 853710191,
  "status": "passed"
});
formatter.before({
  "duration": 41898,
  "status": "passed"
});
formatter.before({
  "duration": 28853,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Choose an existing Tool Definition",
  "description": "",
  "id": "choosing-tool-definition;choose-an-existing-tool-definition",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "the admin user is on Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "a tool definition called Test Tool exists",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the user selects Test Tool as default tool def",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "she goes to the Tool Instances Navigation Page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the name of the choosen tool definition is Test Tool",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 66306656,
  "status": "passed"
});
formatter.after({
  "duration": 586110585,
  "status": "passed"
});
formatter.after({
  "duration": 470325357,
  "status": "passed"
});
formatter.uri("adminPortlet/NewToolDef.feature");
formatter.feature({
  "line": 1,
  "name": "Tool Definition Management",
  "description": "As the admin user\nI want to manage new Tool Definitions in the system\nSo that I can choose them as the system Tool Definition",
  "id": "tool-definition-management",
  "keyword": "Feature"
});
formatter.before({
  "duration": 390519063,
  "status": "passed"
});
formatter.before({
  "duration": 25558,
  "status": "passed"
});
formatter.before({
  "duration": 17783,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Create a new Tool Definition",
  "description": "",
  "id": "tool-definition-management;create-a-new-tool-definition",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "the admin user is on Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "she chooses to create a new tool definition",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "she provides the tool definition name as My New Tool Type",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "she adds a step of type mock for step 1",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "she adds a step of type mock for step 2",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "she adds a step of type mock for step 3",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "she returns to the Tool Definition admin page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "a tool definition called My New Tool Type exists",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "the user selects My New Tool Type as default tool def",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 114976954,
  "status": "passed"
});
formatter.after({
  "duration": 517155237,
  "status": "passed"
});
formatter.after({
  "duration": 522287328,
  "status": "passed"
});
formatter.before({
  "duration": 404404680,
  "status": "passed"
});
formatter.before({
  "duration": 19269,
  "status": "passed"
});
formatter.before({
  "duration": 12297,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Use new Tool Definition",
  "description": "",
  "id": "tool-definition-management;use-new-tool-definition",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "the user is on Tool Instances Navigation Page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "a tool definition called My New Tool Type exists",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the user creates a tool instance called My New Def Tool Instance",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "she selects the tool instance My New Def Tool Instance",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "she chooses to step forward",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "she chooses to step forward",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "she chooses to step forward",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "she chooses to step forward",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "she returns to the Tool Instances Navigation Page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "the tool instance called Other Tool Instance is on step 3",
  "keyword": "Then "
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 1844147250,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Def Tool Instance",
      "offset": 40
    }
  ],
  "location": "ToolInstancesNavigationSteps.createNewToolInstance(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Def Tool Instance",
      "offset": 30
    }
  ],
  "location": "ToolInstancesNavigationSteps.selectToolInstance(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.stepForward()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.stepForward()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.stepForward()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.stepForward()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ToolInstanceEditSteps.exitToolInstance()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Other Tool Instance",
      "offset": 25
    },
    {
      "val": "3",
      "offset": 56
    }
  ],
  "location": "ToolInstancesNavigationSteps.verifyToolInstanceStep(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 65477012,
  "status": "passed"
});
formatter.after({
  "duration": 496692734,
  "status": "passed"
});
formatter.after({
  "duration": 441588226,
  "status": "passed"
});
formatter.before({
  "duration": 445865905,
  "status": "passed"
});
formatter.before({
  "duration": 18242,
  "status": "passed"
});
formatter.before({
  "duration": 10453,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Create an existing Tool Definition",
  "description": "",
  "id": "tool-definition-management;create-an-existing-tool-definition",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "the admin user is on Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "a tool definition called My New Tool Type exists",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "she chooses to create a new tool definition",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "she provides the tool definition name as My New Tool Type",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "an error message with text \"Existing Tool Definition\" is shown",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Existing Tool Definition",
      "offset": 28
    }
  ],
  "location": "ToolInstanceCommonSteps.errorMessageIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 113018369,
  "status": "passed"
});
formatter.after({
  "duration": 498064657,
  "status": "passed"
});
formatter.after({
  "duration": 498972646,
  "status": "passed"
});
formatter.before({
  "duration": 408981743,
  "status": "passed"
});
formatter.before({
  "duration": 17814,
  "status": "passed"
});
formatter.before({
  "duration": 15034,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Try to create an existing Tool Definition and change the name",
  "description": "",
  "id": "tool-definition-management;try-to-create-an-existing-tool-definition-and-change-the-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "the admin user is on Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "a tool definition called My New Tool Type exists",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "she chooses to create a new tool definition",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "she provides the tool definition name as My New Tool Type",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "an error message with text \"Existing Tool Definition\" is shown",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "she provides the tool definition name as My New Tool Type 2",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "she adds a step of type mock for step 1",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "she adds a step of type mock for step 2",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "she returns to the Tool Definition admin page",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "a tool definition called My New Tool Type 2 exists",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Existing Tool Definition",
      "offset": 28
    }
  ],
  "location": "ToolInstanceCommonSteps.errorMessageIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 113396551,
  "status": "passed"
});
formatter.after({
  "duration": 556280611,
  "status": "passed"
});
formatter.after({
  "duration": 447288940,
  "status": "passed"
});
formatter.before({
  "duration": 384786506,
  "status": "passed"
});
formatter.before({
  "duration": 25868,
  "status": "passed"
});
formatter.before({
  "duration": 17837,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Edit an existing Tool Definition",
  "description": "",
  "id": "tool-definition-management;edit-an-existing-tool-definition",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 49,
  "name": "the admin user is on Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "a tool definition called My New Tool Type 2 exists",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "the user chooses to edit the tool definition called My New Tool Type 2",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "she adds a step of type mock for step 3",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "she moves the step 2 to step 3",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "she returns to the Tool Definition admin page",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "a tool definition called My New Tool Type 2 exists",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 65590444,
  "status": "passed"
});
formatter.after({
  "duration": 508109504,
  "status": "passed"
});
formatter.after({
  "duration": 525795579,
  "status": "passed"
});
formatter.before({
  "duration": 413698073,
  "status": "passed"
});
formatter.before({
  "duration": 23276,
  "status": "passed"
});
formatter.before({
  "duration": 13551,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Delete an existing Tool Definition",
  "description": "",
  "id": "tool-definition-management;delete-an-existing-tool-definition",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 58,
  "name": "the admin user is on Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "a tool definition called My New Tool Type 2 exists",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user chooses to edit the tool definition called My New Tool Type 2",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "she selects to delete the current tool Definition",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "a tool definition called My New Tool Type 2 does not exist",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 63564806,
  "status": "passed"
});
formatter.after({
  "duration": 549418561,
  "status": "passed"
});
formatter.after({
  "duration": 479561944,
  "status": "passed"
});
formatter.before({
  "duration": 385915518,
  "status": "passed"
});
formatter.before({
  "duration": 32733,
  "status": "passed"
});
formatter.before({
  "duration": 12427,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Try to delete an existing Tool Definition with tool instances associated",
  "description": "",
  "id": "tool-definition-management;try-to-delete-an-existing-tool-definition-with-tool-instances-associated",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 65,
  "name": "the admin user is on Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "a tool definition called My New Tool Type exists",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "the user chooses to edit the tool definition called My New Tool Type",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "she selects to delete the current tool Definition",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "an error message with text \"This Tool Definition has associated tool instances, please delete the tool instances before deleting this tool definition\" is shown",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "the user cancel the current tool definition edition",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "This Tool Definition has associated tool instances, please delete the tool instances before deleting this tool definition",
      "offset": 28
    }
  ],
  "location": "ToolInstanceCommonSteps.errorMessageIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 113099970,
  "status": "passed"
});
formatter.after({
  "duration": 450437014,
  "status": "passed"
});
formatter.after({
  "duration": 516482515,
  "status": "passed"
});
formatter.before({
  "duration": 484564992,
  "status": "passed"
});
formatter.before({
  "duration": 21788,
  "status": "passed"
});
formatter.before({
  "duration": 13327,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "Try to edit an existing Tool Definition with tool instances associated",
  "description": "",
  "id": "tool-definition-management;try-to-edit-an-existing-tool-definition-with-tool-instances-associated",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 73,
  "name": "the admin user is on Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "a tool definition called My New Tool Type exists",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "the user chooses to edit the tool definition called My New Tool Type",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "the user moves the step 2 to step 3",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "an error message with text \"This Tool Definition has associated tool instances, please delete the tool instances before editing this tool definition\" is shown",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "the user cancel the current tool definition edition",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "This Tool Definition has associated tool instances, please delete the tool instances before editing this tool definition",
      "offset": 28
    }
  ],
  "location": "ToolInstanceCommonSteps.errorMessageIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 112811930,
  "status": "passed"
});
formatter.after({
  "duration": 507627378,
  "status": "passed"
});
formatter.after({
  "duration": 542169540,
  "status": "passed"
});
formatter.before({
  "duration": 453901575,
  "status": "passed"
});
formatter.before({
  "duration": 108555,
  "status": "passed"
});
formatter.before({
  "duration": 9863,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "Delete associated tool instances and to delete an existing Tool Definition selected as default",
  "description": "",
  "id": "tool-definition-management;delete-associated-tool-instances-and-to-delete-an-existing-tool-definition-selected-as-default",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 81,
  "name": "the user is on Tool Instances Navigation Page",
  "keyword": "Given "
});
formatter.step({
  "line": 82,
  "name": "a tool instance called My New Def Tool Instance exists",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "the user selects the tool instance My New Instance 2",
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "she deletes the current tool instance",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "the admin user goes to Tool Builder admin page",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "she chooses to edit the tool definition called My New Tool Type",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "she selects to delete the current tool Definition",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "an error message with text \"This Tool Definition is selected as default, please choose other tool definition as default before deleting this one\" is shown",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "the user cancel the current tool definition edition",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "the user selects My New Tool Type as default tool def",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "she chooses to edit the tool definition called My New Tool Type",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "she selects to delete the current tool Definition",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "a tool definition called My New Tool Type does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 1644452697,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Def Tool Instance",
      "offset": 23
    }
  ],
  "location": "ToolInstancesNavigationSteps.existingToolInstance(String)"
});
formatter.result({
  "duration": 30263546303,
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat org.junit.Assert.assertTrue(Assert.java:52)\n\tat org.lrc.liferay.toolbuilder.tests.functional.steps.ToolInstancesNavigationSteps.existingToolInstance(ToolInstancesNavigationSteps.java:71)\n\tat ✽.And a tool instance called My New Def Tool Instance exists(adminPortlet/NewToolDef.feature:82)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Instance 2",
      "offset": 35
    }
  ],
  "location": "ToolInstancesNavigationSteps.selectToolInstance(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.deleteToolInstance()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "This Tool Definition is selected as default, please choose other tool definition as default before deleting this one",
      "offset": 28
    }
  ],
  "location": "ToolInstanceCommonSteps.errorMessageIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 64165853,
  "status": "passed"
});
formatter.after({
  "duration": 520916655,
  "status": "passed"
});
formatter.after({
  "duration": 533190972,
  "status": "passed"
});
formatter.uri("test/test.feature");
formatter.feature({
  "line": 1,
  "name": "Cases to test the testing environment",
  "description": "As a user\nI want to blablablabla\nSo that I blabalbla",
  "id": "cases-to-test-the-testing-environment",
  "keyword": "Feature"
});
formatter.before({
  "duration": 385020731,
  "status": "passed"
});
formatter.before({
  "duration": 23915,
  "status": "passed"
});
formatter.before({
  "duration": 13697,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Create a new Tool Instance",
  "description": "",
  "id": "cases-to-test-the-testing-environment;create-a-new-tool-instance",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "the user is on Tool Instances Navigation Page",
  "keyword": "Given "
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 1411957323,
  "status": "passed"
});
formatter.after({
  "duration": 63734792,
  "status": "passed"
});
formatter.after({
  "duration": 585671825,
  "status": "passed"
});
formatter.after({
  "duration": 464286251,
  "status": "passed"
});
formatter.uri("toolInstances/NavigateThroughSteps.feature");
formatter.feature({
  "line": 1,
  "name": "Navigate through Steps",
  "description": "As a user\nI want to be able to navigate through the steps in a given tool instance\nSo that the step of each tool instance is saved",
  "id": "navigate-through-steps",
  "keyword": "Feature"
});
formatter.before({
  "duration": 380116425,
  "status": "passed"
});
formatter.before({
  "duration": 18196,
  "status": "passed"
});
formatter.before({
  "duration": 8418,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "the user is on Tool Instances Navigation Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "she logs in the system as test@guerrillamail.com with password test",
  "keyword": "And "
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 1416301958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@guerrillamail.com",
      "offset": 26
    },
    {
      "val": "test",
      "offset": 63
    }
  ],
  "location": "ToolInstanceCommonSteps.logIn(String,String)"
});
formatter.result({
  "duration": 499185059,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Pull up one tool instance from step 1 to 2",
  "description": "",
  "id": "navigate-through-steps;pull-up-one-tool-instance-from-step-1-to-2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "the user creates a tool instance called Other Tool Instance",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "she selects the tool instance Other Tool Instance",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "she chooses to step forward",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "she returns to the Tool Instances Navigation Page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the tool instance called Other Tool Instance is on step 2",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Other Tool Instance",
      "offset": 40
    }
  ],
  "location": "ToolInstancesNavigationSteps.createNewToolInstance(String)"
});
formatter.result({
  "duration": 1806486823,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Other Tool Instance",
      "offset": 30
    }
  ],
  "location": "ToolInstancesNavigationSteps.selectToolInstance(String)"
});
formatter.result({
  "duration": 46450939,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.stepForward()"
});
formatter.result({
  "duration": 58217839,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceEditSteps.exitToolInstance()"
});
formatter.result({
  "duration": 30698372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Other Tool Instance",
      "offset": 25
    },
    {
      "val": "2",
      "offset": 56
    }
  ],
  "location": "ToolInstancesNavigationSteps.verifyToolInstanceStep(String,int)"
});
formatter.result({
  "duration": 364257548,
  "status": "passed"
});
formatter.after({
  "duration": 64546406,
  "status": "passed"
});
formatter.after({
  "duration": 3186884188,
  "status": "passed"
});
formatter.after({
  "duration": 455927149,
  "status": "passed"
});
formatter.before({
  "duration": 409597242,
  "status": "passed"
});
formatter.before({
  "duration": 25465,
  "status": "passed"
});
formatter.before({
  "duration": 8046,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "the user is on Tool Instances Navigation Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "she logs in the system as test@guerrillamail.com with password test",
  "keyword": "And "
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 1658023976,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@guerrillamail.com",
      "offset": 26
    },
    {
      "val": "test",
      "offset": 63
    }
  ],
  "location": "ToolInstanceCommonSteps.logIn(String,String)"
});
formatter.result({
  "duration": 462658031,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Pull up one tool instance from step 2 to 4",
  "description": "",
  "id": "navigate-through-steps;pull-up-one-tool-instance-from-step-2-to-4",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "a tool instance called Other Tool Instance exists",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "the tool instance called Other Tool Instance is on step 2",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the user selects the tool instance Other Tool Instance",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "she chooses to step forward",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "she chooses to step forward",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "she returns to the Tool Instances Navigation Page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the tool instance called Other Tool Instance is on step 4",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Other Tool Instance",
      "offset": 23
    }
  ],
  "location": "ToolInstancesNavigationSteps.existingToolInstance(String)"
});
formatter.result({
  "duration": 1855932009,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Other Tool Instance",
      "offset": 25
    },
    {
      "val": "2",
      "offset": 56
    }
  ],
  "location": "ToolInstancesNavigationSteps.verifyToolInstanceStep(String,int)"
});
formatter.result({
  "duration": 164640115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Other Tool Instance",
      "offset": 35
    }
  ],
  "location": "ToolInstancesNavigationSteps.selectToolInstance(String)"
});
formatter.result({
  "duration": 56659927,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.stepForward()"
});
formatter.result({
  "duration": 79524807,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.stepForward()"
});
formatter.result({
  "duration": 22881499,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceEditSteps.exitToolInstance()"
});
formatter.result({
  "duration": 41096851,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Other Tool Instance",
      "offset": 25
    },
    {
      "val": "4",
      "offset": 56
    }
  ],
  "location": "ToolInstancesNavigationSteps.verifyToolInstanceStep(String,int)"
});
formatter.result({
  "duration": 457820623,
  "status": "passed"
});
formatter.after({
  "duration": 64329723,
  "status": "passed"
});
formatter.after({
  "duration": 481429836,
  "status": "passed"
});
formatter.after({
  "duration": 544823123,
  "status": "passed"
});
formatter.before({
  "duration": 378429784,
  "status": "passed"
});
formatter.before({
  "duration": 17599,
  "status": "passed"
});
formatter.before({
  "duration": 9103,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "the user is on Tool Instances Navigation Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "she logs in the system as test@guerrillamail.com with password test",
  "keyword": "And "
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 1680583533,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@guerrillamail.com",
      "offset": 26
    },
    {
      "val": "test",
      "offset": 63
    }
  ],
  "location": "ToolInstanceCommonSteps.logIn(String,String)"
});
formatter.result({
  "duration": 495913154,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Try to pull up one tool instance above step 5",
  "description": "",
  "id": "navigate-through-steps;try-to-pull-up-one-tool-instance-above-step-5",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "a tool instance called Other Tool Instance exists",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "the tool instance called Other Tool Instance is on step 4",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "the user selects the tool instance Other Tool Instance",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "she chooses to step forward",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "she chooses to step forward",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "she chooses to step forward",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "she chooses to step forward",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "she returns to the Tool Instances Navigation Page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the tool instance called Other Tool Instance is on step 5",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "the user selects the tool instance Other Tool Instance",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "she deletes the current tool instance",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Other Tool Instance",
      "offset": 23
    }
  ],
  "location": "ToolInstancesNavigationSteps.existingToolInstance(String)"
});
formatter.result({
  "duration": 745860381,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Other Tool Instance",
      "offset": 25
    },
    {
      "val": "4",
      "offset": 56
    }
  ],
  "location": "ToolInstancesNavigationSteps.verifyToolInstanceStep(String,int)"
});
formatter.result({
  "duration": 124865932,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Other Tool Instance",
      "offset": 35
    }
  ],
  "location": "ToolInstancesNavigationSteps.selectToolInstance(String)"
});
formatter.result({
  "duration": 49686356,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.stepForward()"
});
formatter.result({
  "duration": 73808868,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.stepForward()"
});
formatter.result({
  "duration": 21492520,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.stepForward()"
});
formatter.result({
  "duration": 25595050,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.stepForward()"
});
formatter.result({
  "duration": 24300056,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceEditSteps.exitToolInstance()"
});
formatter.result({
  "duration": 51687837,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Other Tool Instance",
      "offset": 25
    },
    {
      "val": "5",
      "offset": 56
    }
  ],
  "location": "ToolInstancesNavigationSteps.verifyToolInstanceStep(String,int)"
});
formatter.result({
  "duration": 365414155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Other Tool Instance",
      "offset": 35
    }
  ],
  "location": "ToolInstancesNavigationSteps.selectToolInstance(String)"
});
formatter.result({
  "duration": 42709859,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.deleteToolInstance()"
});
formatter.result({
  "duration": 52971760,
  "status": "passed"
});
formatter.after({
  "duration": 64093035,
  "status": "passed"
});
formatter.after({
  "duration": 558382061,
  "status": "passed"
});
formatter.after({
  "duration": 526772564,
  "status": "passed"
});
formatter.uri("toolInstances/NewToolInstance.feature");
formatter.feature({
  "line": 1,
  "name": "Tool Instance Creation",
  "description": "As a user\nI want to be able to create new Tool Instance in the system\nSo that I can work with that Tool Instance",
  "id": "tool-instance-creation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 381883868,
  "status": "passed"
});
formatter.before({
  "duration": 20230,
  "status": "passed"
});
formatter.before({
  "duration": 9857,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Create a new Tool Instance",
  "description": "",
  "id": "tool-instance-creation;create-a-new-tool-instance",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "the user is on Tool Instances Navigation Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "she logs in the system as test@guerrillamail.com with password test",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "she chooses to create a new tool instance",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "she provides the tool instance name as My New Instance",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "she creates the tool instance",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "she returns to the Tool Instances Navigation Page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "a tool instance called My New Instance exists",
  "keyword": "Then "
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 1619626393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@guerrillamail.com",
      "offset": 26
    },
    {
      "val": "test",
      "offset": 63
    }
  ],
  "location": "ToolInstanceCommonSteps.logIn(String,String)"
});
formatter.result({
  "duration": 458602660,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.newToolInstance()"
});
formatter.result({
  "duration": 1087309493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Instance",
      "offset": 39
    }
  ],
  "location": "ToolInstanceEditSteps.newToolInstanceName(String)"
});
formatter.result({
  "duration": 400883768,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceEditSteps.createToolInstance()"
});
formatter.result({
  "duration": 48310171,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceEditSteps.exitToolInstance()"
});
formatter.result({
  "duration": 49149125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Instance",
      "offset": 23
    }
  ],
  "location": "ToolInstancesNavigationSteps.existingToolInstance(String)"
});
formatter.result({
  "duration": 460339043,
  "status": "passed"
});
formatter.after({
  "duration": 64323433,
  "status": "passed"
});
formatter.after({
  "duration": 488258987,
  "status": "passed"
});
formatter.after({
  "duration": 479513524,
  "status": "passed"
});
formatter.before({
  "duration": 360981132,
  "status": "passed"
});
formatter.before({
  "duration": 342360,
  "status": "passed"
});
formatter.before({
  "duration": 238788,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Create a new existing Tool Instance",
  "description": "",
  "id": "tool-instance-creation;create-a-new-existing-tool-instance",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "the user is on Tool Instances Navigation Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "she logs in the system as test@guerrillamail.com with password test",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "a tool instance called My New Instance exists",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the user chooses to create a new tool instance",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "she provides the tool instance name as My New Instance",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "she creates the tool instance",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "an error message with text \"Existing Tool Instance\" is shown",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the user provides the tool instance name as My New Instance 2",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "she creates the tool instance",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "she returns to the Tool Instances Navigation Page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "a tool instance called My New Instance 2 exists",
  "keyword": "Then "
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 1605635978,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@guerrillamail.com",
      "offset": 26
    },
    {
      "val": "test",
      "offset": 63
    }
  ],
  "location": "ToolInstanceCommonSteps.logIn(String,String)"
});
formatter.result({
  "duration": 489363151,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Instance",
      "offset": 23
    }
  ],
  "location": "ToolInstancesNavigationSteps.existingToolInstance(String)"
});
formatter.result({
  "duration": 707101465,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.newToolInstance()"
});
formatter.result({
  "duration": 98919353,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Instance",
      "offset": 39
    }
  ],
  "location": "ToolInstanceEditSteps.newToolInstanceName(String)"
});
formatter.result({
  "duration": 343158374,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceEditSteps.createToolInstance()"
});
formatter.result({
  "duration": 50462415,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Existing Tool Instance",
      "offset": 28
    }
  ],
  "location": "ToolInstanceCommonSteps.errorMessageIs(String)"
});
formatter.result({
  "duration": 311462393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Instance 2",
      "offset": 44
    }
  ],
  "location": "ToolInstanceEditSteps.newToolInstanceName(String)"
});
formatter.result({
  "duration": 60019592,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceEditSteps.createToolInstance()"
});
formatter.result({
  "duration": 49250581,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceEditSteps.exitToolInstance()"
});
formatter.result({
  "duration": 45635329,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Instance 2",
      "offset": 23
    }
  ],
  "location": "ToolInstancesNavigationSteps.existingToolInstance(String)"
});
formatter.result({
  "duration": 567839751,
  "status": "passed"
});
formatter.after({
  "duration": 64508377,
  "status": "passed"
});
formatter.after({
  "duration": 726871040,
  "status": "passed"
});
formatter.after({
  "duration": 438625387,
  "status": "passed"
});
formatter.before({
  "duration": 401751154,
  "status": "passed"
});
formatter.before({
  "duration": 30657,
  "status": "passed"
});
formatter.before({
  "duration": 13492,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Delete My New Instance",
  "description": "",
  "id": "tool-instance-creation;delete-my-new-instance",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "the user is on Tool Instances Navigation Page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "she logs in the system as test@guerrillamail.com with password test",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "a tool instance called My New Instance exists",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the user selects the tool instance My New Instance",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "she deletes the current tool instance",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "a tool instance called My New Instance does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 1977616747,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@guerrillamail.com",
      "offset": 26
    },
    {
      "val": "test",
      "offset": 63
    }
  ],
  "location": "ToolInstanceCommonSteps.logIn(String,String)"
});
formatter.result({
  "duration": 523588670,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Instance",
      "offset": 23
    }
  ],
  "location": "ToolInstancesNavigationSteps.existingToolInstance(String)"
});
formatter.result({
  "duration": 672461045,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Instance",
      "offset": 35
    }
  ],
  "location": "ToolInstancesNavigationSteps.selectToolInstance(String)"
});
formatter.result({
  "duration": 113070984,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.deleteToolInstance()"
});
formatter.result({
  "duration": 74846982,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Instance",
      "offset": 23
    }
  ],
  "location": "ToolInstancesNavigationSteps.notExistingToolInstance(String)"
});
formatter.result({
  "duration": 618816454,
  "status": "passed"
});
formatter.after({
  "duration": 63956431,
  "status": "passed"
});
formatter.after({
  "duration": 571902589,
  "status": "passed"
});
formatter.after({
  "duration": 494749786,
  "status": "passed"
});
formatter.before({
  "duration": 423305241,
  "status": "passed"
});
formatter.before({
  "duration": 15720,
  "status": "passed"
});
formatter.before({
  "duration": 9042,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Delete My New Instance 2",
  "description": "",
  "id": "tool-instance-creation;delete-my-new-instance-2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "the user is on Tool Instances Navigation Page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "she logs in the system as test@guerrillamail.com with password test",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "a tool instance called My New Instance 2 exists",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "the user selects the tool instance My New Instance 2",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "she deletes the current tool instance",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "a tool instance called My New Instance 2 does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 1515689692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@guerrillamail.com",
      "offset": 26
    },
    {
      "val": "test",
      "offset": 63
    }
  ],
  "location": "ToolInstanceCommonSteps.logIn(String,String)"
});
formatter.result({
  "duration": 660770428,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Instance 2",
      "offset": 23
    }
  ],
  "location": "ToolInstancesNavigationSteps.existingToolInstance(String)"
});
formatter.result({
  "duration": 670227746,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Instance 2",
      "offset": 35
    }
  ],
  "location": "ToolInstancesNavigationSteps.selectToolInstance(String)"
});
formatter.result({
  "duration": 106631504,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.deleteToolInstance()"
});
formatter.result({
  "duration": 69826236,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Instance 2",
      "offset": 23
    }
  ],
  "location": "ToolInstancesNavigationSteps.notExistingToolInstance(String)"
});
formatter.result({
  "duration": 573484019,
  "status": "passed"
});
formatter.after({
  "duration": 64655557,
  "status": "passed"
});
formatter.after({
  "duration": 505799734,
  "status": "passed"
});
formatter.after({
  "duration": 521490068,
  "status": "passed"
});
});