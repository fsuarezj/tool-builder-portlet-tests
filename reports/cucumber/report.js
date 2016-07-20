$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ChooseToolDef.feature");
formatter.feature({
  "id": "choosing-tool-definition",
  "description": "As the admin user\nI want to choose the Tool Definition for the system\nSo that I can use work with it",
  "name": "Choosing Tool Definition",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 2556796231,
  "status": "passed"
});
formatter.before({
  "duration": 42477,
  "status": "passed"
});
formatter.before({
  "duration": 27950,
  "status": "passed"
});
formatter.scenario({
  "id": "choosing-tool-definition;choose-an-existing-tool-definition",
  "description": "",
  "name": "Choose an existing Tool Definition",
  "keyword": "Scenario",
  "line": 6,
  "type": "scenario"
});
formatter.step({
  "name": "the admin user is on Tool Builder admin page",
  "keyword": "Given ",
  "line": 7
});
formatter.step({
  "name": "a tool definition called Test Tool exists",
  "keyword": "And ",
  "line": 8
});
formatter.step({
  "name": "the user selects Test Tool as default tool def",
  "keyword": "When ",
  "line": 9
});
formatter.step({
  "name": "she goes to the Tool Instances Navigation Page",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "the name of the choosen tool definition is Test Tool",
  "keyword": "Then ",
  "line": 11
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
  "duration": 101101171,
  "status": "passed"
});
formatter.after({
  "duration": 2153246796,
  "status": "passed"
});
formatter.after({
  "duration": 2050942206,
  "status": "passed"
});
formatter.uri("NavigateThroughSteps.feature");
formatter.feature({
  "id": "navigate-through-steps",
  "description": "As a user\nI want to be able to navigate through the steps in a given tool instance\nSo that the step of each tool instance is saved",
  "name": "Navigate through Steps",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 1933963458,
  "status": "passed"
});
formatter.before({
  "duration": 23843,
  "status": "passed"
});
formatter.before({
  "duration": 16632,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 6,
  "type": "background"
});
formatter.step({
  "name": "the user is on Tool Instances Navigation Page",
  "keyword": "Given ",
  "line": 7
});
formatter.step({
  "name": "she logs in the system as testUser@sharklasers.com with password testPasswd",
  "keyword": "And ",
  "line": 8
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 9880141597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testUser@sharklasers.com",
      "offset": 26
    },
    {
      "val": "testPasswd",
      "offset": 65
    }
  ],
  "location": "ToolInstanceCommonSteps.logIn(String,String)"
});
formatter.result({
  "duration": 7342354129,
  "status": "passed"
});
formatter.scenario({
  "id": "navigate-through-steps;pull-up-one-tool-instance-from-step-1-to-2",
  "description": "",
  "name": "Pull up one tool instance from step 1 to 2",
  "keyword": "Scenario",
  "line": 10,
  "type": "scenario"
});
formatter.step({
  "name": "the user creates a tool instance called Other Tool Instance",
  "keyword": "Given ",
  "line": 11
});
formatter.step({
  "name": "she selects the tool instance Other Tool Instance",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "she chooses to step forward",
  "keyword": "When ",
  "line": 13
});
formatter.step({
  "name": "she returns to the Tool Instances Navigation Page",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "the tool instance called Other Tool Instance is on step 2",
  "keyword": "Then ",
  "line": 15
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
  "duration": 1280417514,
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
  "duration": 104133145,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.stepForward()"
});
formatter.result({
  "duration": 82525355,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceEditSteps.exitToolInstance()"
});
formatter.result({
  "duration": 73514893,
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
  "duration": 380398600,
  "status": "passed"
});
formatter.after({
  "duration": 66623836,
  "status": "passed"
});
formatter.after({
  "duration": 2158584129,
  "status": "passed"
});
formatter.after({
  "duration": 2126049769,
  "status": "passed"
});
formatter.before({
  "duration": 2000420760,
  "status": "passed"
});
formatter.before({
  "duration": 20691,
  "status": "passed"
});
formatter.before({
  "duration": 14281,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 6,
  "type": "background"
});
formatter.step({
  "name": "the user is on Tool Instances Navigation Page",
  "keyword": "Given ",
  "line": 7
});
formatter.step({
  "name": "she logs in the system as testUser@sharklasers.com with password testPasswd",
  "keyword": "And ",
  "line": 8
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 3921727157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testUser@sharklasers.com",
      "offset": 26
    },
    {
      "val": "testPasswd",
      "offset": 65
    }
  ],
  "location": "ToolInstanceCommonSteps.logIn(String,String)"
});
formatter.result({
  "duration": 2202691278,
  "status": "passed"
});
formatter.scenario({
  "id": "navigate-through-steps;pull-up-one-tool-instance-from-step-2-to-4",
  "description": "",
  "name": "Pull up one tool instance from step 2 to 4",
  "keyword": "Scenario",
  "line": 17,
  "type": "scenario"
});
formatter.step({
  "name": "a tool instance called Other Tool Instance exists",
  "keyword": "Given ",
  "line": 18
});
formatter.step({
  "name": "the tool instance called Other Tool Instance is on step 2",
  "keyword": "And ",
  "line": 19
});
formatter.step({
  "name": "the user selects the tool instance Other Tool Instance",
  "keyword": "When ",
  "line": 20
});
formatter.step({
  "name": "she chooses to step forward",
  "keyword": "And ",
  "line": 21
});
formatter.step({
  "name": "she chooses to step forward",
  "keyword": "And ",
  "line": 22
});
formatter.step({
  "name": "she returns to the Tool Instances Navigation Page",
  "keyword": "And ",
  "line": 23
});
formatter.step({
  "name": "the tool instance called Other Tool Instance is on step 4",
  "keyword": "Then ",
  "line": 24
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
  "duration": 255156406,
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
  "duration": 119101266,
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
  "duration": 127653484,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.stepForward()"
});
formatter.result({
  "duration": 73323591,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.stepForward()"
});
formatter.result({
  "duration": 77842734,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceEditSteps.exitToolInstance()"
});
formatter.result({
  "duration": 91388291,
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
  "duration": 407415116,
  "status": "passed"
});
formatter.after({
  "duration": 67838705,
  "status": "passed"
});
formatter.after({
  "duration": 2069727881,
  "status": "passed"
});
formatter.after({
  "duration": 2071002737,
  "status": "passed"
});
formatter.before({
  "duration": 1991185536,
  "status": "passed"
});
formatter.before({
  "duration": 23161,
  "status": "passed"
});
formatter.before({
  "duration": 16267,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 6,
  "type": "background"
});
formatter.step({
  "name": "the user is on Tool Instances Navigation Page",
  "keyword": "Given ",
  "line": 7
});
formatter.step({
  "name": "she logs in the system as testUser@sharklasers.com with password testPasswd",
  "keyword": "And ",
  "line": 8
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 3761737398,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testUser@sharklasers.com",
      "offset": 26
    },
    {
      "val": "testPasswd",
      "offset": 65
    }
  ],
  "location": "ToolInstanceCommonSteps.logIn(String,String)"
});
formatter.result({
  "duration": 2618292367,
  "status": "passed"
});
formatter.scenario({
  "id": "navigate-through-steps;try-to-pull-up-one-tool-instance-above-step-5",
  "description": "",
  "name": "Try to pull up one tool instance above step 5",
  "keyword": "Scenario",
  "line": 26,
  "type": "scenario"
});
formatter.step({
  "name": "a tool instance called Other Tool Instance exists",
  "keyword": "Given ",
  "line": 27
});
formatter.step({
  "name": "the tool instance called Other Tool Instance is on step 4",
  "keyword": "And ",
  "line": 28
});
formatter.step({
  "name": "the user selects the tool instance Other Tool Instance",
  "keyword": "When ",
  "line": 29
});
formatter.step({
  "name": "she chooses to step forward",
  "keyword": "And ",
  "line": 30
});
formatter.step({
  "name": "she chooses to step forward",
  "keyword": "And ",
  "line": 31
});
formatter.step({
  "name": "she chooses to step forward",
  "keyword": "And ",
  "line": 32
});
formatter.step({
  "name": "she chooses to step forward",
  "keyword": "And ",
  "line": 33
});
formatter.step({
  "name": "she returns to the Tool Instances Navigation Page",
  "keyword": "And ",
  "line": 34
});
formatter.step({
  "name": "the tool instance called Other Tool Instance is on step 5",
  "keyword": "Then ",
  "line": 35
});
formatter.step({
  "name": "the user selects the tool instance Other Tool Instance",
  "keyword": "And ",
  "line": 36
});
formatter.step({
  "name": "she deletes the current tool instance",
  "keyword": "And ",
  "line": 37
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
  "duration": 49818717,
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
  "duration": 101425458,
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
  "duration": 95159027,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.stepForward()"
});
formatter.result({
  "duration": 83417337,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.stepForward()"
});
formatter.result({
  "duration": 72637141,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.stepForward()"
});
formatter.result({
  "duration": 101284095,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.stepForward()"
});
formatter.result({
  "duration": 86678915,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceEditSteps.exitToolInstance()"
});
formatter.result({
  "duration": 80625013,
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
  "duration": 111234661,
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
  "duration": 101459172,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.deleteToolInstance()"
});
formatter.result({
  "duration": 80223010,
  "status": "passed"
});
formatter.after({
  "duration": 70050743,
  "status": "passed"
});
formatter.after({
  "duration": 2043670050,
  "status": "passed"
});
formatter.after({
  "duration": 2013732340,
  "status": "passed"
});
formatter.uri("NewToolDef.feature");
formatter.feature({
  "id": "tool-definition-management",
  "description": "As the admin user\nI want to manage new Tool Definitions in the system\nSo that I can choose them as the system Tool Definition",
  "name": "Tool Definition Management",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 1955557217,
  "status": "passed"
});
formatter.before({
  "duration": 24551,
  "status": "passed"
});
formatter.before({
  "duration": 16568,
  "status": "passed"
});
formatter.scenario({
  "id": "tool-definition-management;create-a-new-tool-definition",
  "description": "",
  "name": "Create a new Tool Definition",
  "keyword": "Scenario",
  "line": 6,
  "type": "scenario"
});
formatter.step({
  "name": "the admin user is on Tool Builder admin page",
  "keyword": "Given ",
  "line": 7
});
formatter.step({
  "name": "she chooses to create a new tool definition",
  "keyword": "When ",
  "line": 8
});
formatter.step({
  "name": "she provides the tool definition name as My New Tool Type",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "she adds a step of type mock for step 1",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "she adds a step of type mock for step 2",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "she adds a step of type mock for step 3",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "she returns to the Tool Definition admin page",
  "keyword": "And ",
  "line": 13
});
formatter.step({
  "name": "a tool definition called My New Tool Type exists",
  "keyword": "Then ",
  "line": 14
});
formatter.step({
  "name": "the user selects My New Tool Type as default tool def",
  "keyword": "And ",
  "line": 15
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
  "duration": 125124413,
  "status": "passed"
});
formatter.after({
  "duration": 2102995384,
  "status": "passed"
});
formatter.after({
  "duration": 2200035192,
  "status": "passed"
});
formatter.before({
  "duration": 1993570259,
  "status": "passed"
});
formatter.before({
  "duration": 31841,
  "status": "passed"
});
formatter.before({
  "duration": 36610,
  "status": "passed"
});
formatter.scenario({
  "id": "tool-definition-management;use-new-tool-definition",
  "description": "",
  "name": "Use new Tool Definition",
  "keyword": "Scenario",
  "line": 17,
  "type": "scenario"
});
formatter.step({
  "name": "the user is on Tool Instances Navigation Page",
  "keyword": "Given ",
  "line": 18
});
formatter.step({
  "name": "a tool definition called My New Tool Type exists",
  "keyword": "And ",
  "line": 19
});
formatter.step({
  "name": "the user creates a tool instance called My New Def Tool Instance",
  "keyword": "When ",
  "line": 20
});
formatter.step({
  "name": "she selects the tool instance My New Def Tool Instance",
  "keyword": "And ",
  "line": 21
});
formatter.step({
  "name": "she chooses to step forward",
  "keyword": "When ",
  "line": 22
});
formatter.step({
  "name": "she chooses to step forward",
  "keyword": "When ",
  "line": 23
});
formatter.step({
  "name": "she chooses to step forward",
  "keyword": "When ",
  "line": 24
});
formatter.step({
  "name": "she chooses to step forward",
  "keyword": "When ",
  "line": 25
});
formatter.step({
  "name": "she returns to the Tool Instances Navigation Page",
  "keyword": "And ",
  "line": 26
});
formatter.step({
  "name": "the tool instance called Other Tool Instance is on step 3",
  "keyword": "Then ",
  "line": 27
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 3807748722,
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
  "duration": 75712046,
  "status": "passed"
});
formatter.after({
  "duration": 2144696261,
  "status": "passed"
});
formatter.after({
  "duration": 2029210079,
  "status": "passed"
});
formatter.before({
  "duration": 1977883666,
  "status": "passed"
});
formatter.before({
  "duration": 23060,
  "status": "passed"
});
formatter.before({
  "duration": 15189,
  "status": "passed"
});
formatter.scenario({
  "id": "tool-definition-management;create-an-existing-tool-definition",
  "description": "",
  "name": "Create an existing Tool Definition",
  "keyword": "Scenario",
  "line": 29,
  "type": "scenario"
});
formatter.step({
  "name": "the admin user is on Tool Builder admin page",
  "keyword": "Given ",
  "line": 30
});
formatter.step({
  "name": "a tool definition called My New Tool Type exists",
  "keyword": "And ",
  "line": 31
});
formatter.step({
  "name": "she chooses to create a new tool definition",
  "keyword": "When ",
  "line": 32
});
formatter.step({
  "name": "she provides the tool definition name as My New Tool Type",
  "keyword": "And ",
  "line": 33
});
formatter.step({
  "name": "an error message with text \"Existing Tool Definition\" is shown",
  "keyword": "Then ",
  "line": 34
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
  "duration": 103121875,
  "status": "passed"
});
formatter.after({
  "duration": 2047689180,
  "status": "passed"
});
formatter.after({
  "duration": 2044388179,
  "status": "passed"
});
formatter.before({
  "duration": 2009817202,
  "status": "passed"
});
formatter.before({
  "duration": 22958,
  "status": "passed"
});
formatter.before({
  "duration": 15617,
  "status": "passed"
});
formatter.scenario({
  "id": "tool-definition-management;try-to-create-an-existing-tool-definition-and-change-the-name",
  "description": "",
  "name": "Try to create an existing Tool Definition and change the name",
  "keyword": "Scenario",
  "line": 36,
  "type": "scenario"
});
formatter.step({
  "name": "the admin user is on Tool Builder admin page",
  "keyword": "Given ",
  "line": 37
});
formatter.step({
  "name": "a tool definition called My New Tool Type exists",
  "keyword": "And ",
  "line": 38
});
formatter.step({
  "name": "she chooses to create a new tool definition",
  "keyword": "When ",
  "line": 39
});
formatter.step({
  "name": "she provides the tool definition name as My New Tool Type",
  "keyword": "And ",
  "line": 40
});
formatter.step({
  "name": "an error message with text \"Existing Tool Definition\" is shown",
  "keyword": "And ",
  "line": 41
});
formatter.step({
  "name": "she provides the tool definition name as My New Tool Type 2",
  "keyword": "And ",
  "line": 42
});
formatter.step({
  "name": "she adds a step of type mock for step 1",
  "keyword": "And ",
  "line": 43
});
formatter.step({
  "name": "she adds a step of type mock for step 2",
  "keyword": "And ",
  "line": 44
});
formatter.step({
  "name": "she returns to the Tool Definition admin page",
  "keyword": "And ",
  "line": 45
});
formatter.step({
  "name": "a tool definition called My New Tool Type 2 exists",
  "keyword": "Then ",
  "line": 46
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
  "duration": 125377499,
  "status": "passed"
});
formatter.after({
  "duration": 2116989774,
  "status": "passed"
});
formatter.after({
  "duration": 2064356106,
  "status": "passed"
});
formatter.before({
  "duration": 1890786287,
  "status": "passed"
});
formatter.before({
  "duration": 23917,
  "status": "passed"
});
formatter.before({
  "duration": 15479,
  "status": "passed"
});
formatter.scenario({
  "id": "tool-definition-management;edit-an-existing-tool-definition",
  "description": "",
  "name": "Edit an existing Tool Definition",
  "keyword": "Scenario",
  "line": 48,
  "type": "scenario"
});
formatter.step({
  "name": "the admin user is on Tool Builder admin page",
  "keyword": "Given ",
  "line": 49
});
formatter.step({
  "name": "a tool definition called My New Tool Type 2 exists",
  "keyword": "And ",
  "line": 50
});
formatter.step({
  "name": "the user chooses to edit the tool definition called My New Tool Type 2",
  "keyword": "Then ",
  "line": 51
});
formatter.step({
  "name": "she adds a step of type mock for step 3",
  "keyword": "And ",
  "line": 52
});
formatter.step({
  "name": "she moves the step 2 to step 3",
  "keyword": "And ",
  "line": 53
});
formatter.step({
  "name": "she returns to the Tool Definition admin page",
  "keyword": "And ",
  "line": 54
});
formatter.step({
  "name": "a tool definition called My New Tool Type 2 exists",
  "keyword": "Then ",
  "line": 55
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
  "duration": 121390259,
  "status": "passed"
});
formatter.after({
  "duration": 2114938559,
  "status": "passed"
});
formatter.after({
  "duration": 2151124689,
  "status": "passed"
});
formatter.before({
  "duration": 1999274377,
  "status": "passed"
});
formatter.before({
  "duration": 20336,
  "status": "passed"
});
formatter.before({
  "duration": 13297,
  "status": "passed"
});
formatter.scenario({
  "id": "tool-definition-management;delete-an-existing-tool-definition",
  "description": "",
  "name": "Delete an existing Tool Definition",
  "keyword": "Scenario",
  "line": 57,
  "type": "scenario"
});
formatter.step({
  "name": "the admin user is on Tool Builder admin page",
  "keyword": "Given ",
  "line": 58
});
formatter.step({
  "name": "a tool definition called My New Tool Type 2 exists",
  "keyword": "And ",
  "line": 59
});
formatter.step({
  "name": "the user chooses to edit the tool definition called My New Tool Type 2",
  "keyword": "Then ",
  "line": 60
});
formatter.step({
  "name": "she selects to delete the current tool Definition",
  "keyword": "And ",
  "line": 61
});
formatter.step({
  "name": "a tool definition called My New Tool Type 2 does not exist",
  "keyword": "Then ",
  "line": 62
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
  "duration": 110062217,
  "status": "passed"
});
formatter.after({
  "duration": 2097174063,
  "status": "passed"
});
formatter.after({
  "duration": 2088426141,
  "status": "passed"
});
formatter.before({
  "duration": 2043875147,
  "status": "passed"
});
formatter.before({
  "duration": 27539,
  "status": "passed"
});
formatter.before({
  "duration": 20827,
  "status": "passed"
});
formatter.scenario({
  "id": "tool-definition-management;try-to-delete-an-existing-tool-definition-with-tool-instances-associated",
  "description": "",
  "name": "Try to delete an existing Tool Definition with tool instances associated",
  "keyword": "Scenario",
  "line": 64,
  "type": "scenario"
});
formatter.step({
  "name": "the admin user is on Tool Builder admin page",
  "keyword": "Given ",
  "line": 65
});
formatter.step({
  "name": "a tool definition called My New Tool Type exists",
  "keyword": "And ",
  "line": 66
});
formatter.step({
  "name": "the user chooses to edit the tool definition called My New Tool Type",
  "keyword": "When ",
  "line": 67
});
formatter.step({
  "name": "she selects to delete the current tool Definition",
  "keyword": "And ",
  "line": 68
});
formatter.step({
  "name": "an error message with text \"This Tool Definition has associated tool instances, please delete the tool instances before deleting this tool definition\" is shown",
  "keyword": "Then ",
  "line": 69
});
formatter.step({
  "name": "the user cancel the current tool definition edition",
  "keyword": "And ",
  "line": 70
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
  "duration": 101029267,
  "status": "passed"
});
formatter.after({
  "duration": 2143870100,
  "status": "passed"
});
formatter.after({
  "duration": 2031187563,
  "status": "passed"
});
formatter.before({
  "duration": 1978995802,
  "status": "passed"
});
formatter.before({
  "duration": 26494,
  "status": "passed"
});
formatter.before({
  "duration": 19949,
  "status": "passed"
});
formatter.scenario({
  "id": "tool-definition-management;try-to-edit-an-existing-tool-definition-with-tool-instances-associated",
  "description": "",
  "name": "Try to edit an existing Tool Definition with tool instances associated",
  "keyword": "Scenario",
  "line": 72,
  "type": "scenario"
});
formatter.step({
  "name": "the admin user is on Tool Builder admin page",
  "keyword": "Given ",
  "line": 73
});
formatter.step({
  "name": "a tool definition called My New Tool Type exists",
  "keyword": "And ",
  "line": 74
});
formatter.step({
  "name": "the user chooses to edit the tool definition called My New Tool Type",
  "keyword": "When ",
  "line": 75
});
formatter.step({
  "name": "the user moves the step 2 to step 3",
  "keyword": "And ",
  "line": 76
});
formatter.step({
  "name": "an error message with text \"This Tool Definition has associated tool instances, please delete the tool instances before editing this tool definition\" is shown",
  "keyword": "Then ",
  "line": 77
});
formatter.step({
  "name": "the user cancel the current tool definition edition",
  "keyword": "And ",
  "line": 78
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
  "duration": 145132008,
  "status": "passed"
});
formatter.after({
  "duration": 2128407036,
  "status": "passed"
});
formatter.after({
  "duration": 2100728781,
  "status": "passed"
});
formatter.before({
  "duration": 1988594146,
  "status": "passed"
});
formatter.before({
  "duration": 28795,
  "status": "passed"
});
formatter.before({
  "duration": 21205,
  "status": "passed"
});
formatter.scenario({
  "id": "tool-definition-management;delete-associated-tool-instances-and-to-delete-an-existing-tool-definition-selected-as-default",
  "description": "",
  "name": "Delete associated tool instances and to delete an existing Tool Definition selected as default",
  "keyword": "Scenario",
  "line": 80,
  "type": "scenario"
});
formatter.step({
  "name": "the user is on Tool Instances Navigation Page",
  "keyword": "Given ",
  "line": 81
});
formatter.step({
  "name": "a tool instance called My New Def Tool Instance exists",
  "keyword": "And ",
  "line": 82
});
formatter.step({
  "name": "the user selects the tool instance My New Instance 2",
  "keyword": "When ",
  "line": 83
});
formatter.step({
  "name": "she deletes the current tool instance",
  "keyword": "And ",
  "line": 84
});
formatter.step({
  "name": "the admin user goes to Tool Builder admin page",
  "keyword": "And ",
  "line": 85
});
formatter.step({
  "name": "she chooses to edit the tool definition called My New Tool Type",
  "keyword": "And ",
  "line": 86
});
formatter.step({
  "name": "she selects to delete the current tool Definition",
  "keyword": "And ",
  "line": 87
});
formatter.step({
  "name": "an error message with text \"This Tool Definition is selected as default, please choose other tool definition as default before deleting this one\" is shown",
  "keyword": "And ",
  "line": 88
});
formatter.step({
  "name": "the user cancel the current tool definition edition",
  "keyword": "And ",
  "line": 89
});
formatter.step({
  "name": "the user selects My New Tool Type as default tool def",
  "keyword": "And ",
  "line": 90
});
formatter.step({
  "name": "she chooses to edit the tool definition called My New Tool Type",
  "keyword": "And ",
  "line": 91
});
formatter.step({
  "name": "she selects to delete the current tool Definition",
  "keyword": "And ",
  "line": 92
});
formatter.step({
  "name": "a tool definition called My New Tool Type does not exist",
  "keyword": "Then ",
  "line": 93
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 3722468024,
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
  "duration": 30199434413,
  "status": "failed",
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat org.junit.Assert.assertTrue(Assert.java:52)\n\tat org.lrc.liferay.toolbuilder.tests.functional.steps.ToolInstancesNavigationSteps.existingToolInstance(ToolInstancesNavigationSteps.java:71)\n\tat ✽.And a tool instance called My New Def Tool Instance exists(NewToolDef.feature:82)\n"
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
  "duration": 67855179,
  "status": "passed"
});
formatter.after({
  "duration": 2273361533,
  "status": "passed"
});
formatter.after({
  "duration": 2125411274,
  "status": "passed"
});
formatter.uri("NewToolInstance.feature");
formatter.feature({
  "id": "tool-instance-creation",
  "description": "As a user\nI want to be able to create new Tool Instance in the system\nSo that I can work with that Tool Instance",
  "name": "Tool Instance Creation",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 1927569464,
  "status": "passed"
});
formatter.before({
  "duration": 33967,
  "status": "passed"
});
formatter.before({
  "duration": 48007,
  "status": "passed"
});
formatter.scenario({
  "id": "tool-instance-creation;create-a-new-tool-instance",
  "description": "",
  "name": "Create a new Tool Instance",
  "keyword": "Scenario",
  "line": 6,
  "type": "scenario"
});
formatter.step({
  "name": "the user is on Tool Instances Navigation Page",
  "keyword": "Given ",
  "line": 7
});
formatter.step({
  "name": "she logs in the system as testUser@sharklasers.com with password testPasswd",
  "keyword": "And ",
  "line": 8
});
formatter.step({
  "name": "she chooses to create a new tool instance",
  "keyword": "When ",
  "line": 9
});
formatter.step({
  "name": "she provides the tool instance name as My New Instance",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "she creates the tool instance",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "she returns to the Tool Instances Navigation Page",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "a tool instance called My New Instance exists",
  "keyword": "Then ",
  "line": 13
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 4022575925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testUser@sharklasers.com",
      "offset": 26
    },
    {
      "val": "testPasswd",
      "offset": 65
    }
  ],
  "location": "ToolInstanceCommonSteps.logIn(String,String)"
});
formatter.result({
  "duration": 7583808138,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.newToolInstance()"
});
formatter.result({
  "duration": 297349750,
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
  "duration": 498477867,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceEditSteps.createToolInstance()"
});
formatter.result({
  "duration": 99477135,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceEditSteps.exitToolInstance()"
});
formatter.result({
  "duration": 76471040,
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
  "duration": 312028635,
  "status": "passed"
});
formatter.after({
  "duration": 70781110,
  "status": "passed"
});
formatter.after({
  "duration": 2154250577,
  "status": "passed"
});
formatter.after({
  "duration": 2096052099,
  "status": "passed"
});
formatter.before({
  "duration": 1920983482,
  "status": "passed"
});
formatter.before({
  "duration": 24527,
  "status": "passed"
});
formatter.before({
  "duration": 17303,
  "status": "passed"
});
formatter.scenario({
  "id": "tool-instance-creation;create-a-new-existing-tool-instance",
  "description": "",
  "name": "Create a new existing Tool Instance",
  "keyword": "Scenario",
  "line": 15,
  "type": "scenario"
});
formatter.step({
  "name": "the user is on Tool Instances Navigation Page",
  "keyword": "Given ",
  "line": 16
});
formatter.step({
  "name": "she logs in the system as testUser@sharklasers.com with password testPasswd",
  "keyword": "And ",
  "line": 17
});
formatter.step({
  "name": "a tool instance called My New Instance exists",
  "keyword": "And ",
  "line": 18
});
formatter.step({
  "name": "the user chooses to create a new tool instance",
  "keyword": "When ",
  "line": 19
});
formatter.step({
  "name": "she provides the tool instance name as My New Instance",
  "keyword": "And ",
  "line": 20
});
formatter.step({
  "name": "she creates the tool instance",
  "keyword": "And ",
  "line": 21
});
formatter.step({
  "name": "an error message with text \"Existing Tool Instance\" is shown",
  "keyword": "And ",
  "line": 22
});
formatter.step({
  "name": "the user provides the tool instance name as My New Instance 2",
  "keyword": "And ",
  "line": 23
});
formatter.step({
  "name": "she creates the tool instance",
  "keyword": "And ",
  "line": 24
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 4383168858,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testUser@sharklasers.com",
      "offset": 26
    },
    {
      "val": "testPasswd",
      "offset": 65
    }
  ],
  "location": "ToolInstanceCommonSteps.logIn(String,String)"
});
formatter.result({
  "duration": 30259851869,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Timed out after 30 seconds. Unable to locate the element\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:32:46\u0027\nSystem info: host: \u0027casiopea\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-92-generic\u0027, java.version: \u00271.7.0_101\u0027\nDriver info: driver.version: unknown\n\tat org.openqa.selenium.support.pagefactory.AjaxElementLocator.findElement(AjaxElementLocator.java:89)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\n\tat org.lrc.liferay.toolbuilder.tests.functional.pages.AbstractPage.clickLogIn(AbstractPage.java:75)\n\tat org.lrc.liferay.toolbuilder.tests.functional.steps.ToolInstanceCommonSteps.logIn(ToolInstanceCommonSteps.java:30)\n\tat ✽.And she logs in the system as testUser@sharklasers.com with password testPasswd(NewToolInstance.feature:17)\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"class name\",\"selector\":\"sign-in\"}\nCommand duration or timeout: 6 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:32:46\u0027\nSystem info: host: \u0027casiopea\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-92-generic\u0027, java.version: \u00271.7.0_101\u0027\n*** Element info: {Using\u003dclass name, value\u003dsign-in}\nSession ID: 3c4b80af-e42b-459e-87dd-66a6408497f6\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{platform\u003dLINUX, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dtrue, browserName\u003dfirefox, handlesAlerts\u003dtrue, nativeEvents\u003dfalse, webStorageEnabled\u003dtrue, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d47.0.1}]\n\tat sun.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:477)\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:391)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.AjaxElementLocator.access$0(AjaxElementLocator.java:1)\n\tat org.openqa.selenium.support.pagefactory.AjaxElementLocator$SlowLoadingElement.isLoaded(AjaxElementLocator.java:157)\n\tat org.openqa.selenium.support.ui.SlowLoadableComponent.get(SlowLoadableComponent.java:70)\n\tat org.openqa.selenium.support.pagefactory.AjaxElementLocator.findElement(AjaxElementLocator.java:87)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\n\tat org.lrc.liferay.toolbuilder.tests.functional.pages.AbstractPage.clickLogIn(AbstractPage.java:75)\n\tat org.lrc.liferay.toolbuilder.tests.functional.steps.ToolInstanceCommonSteps.logIn(ToolInstanceCommonSteps.java:30)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:606)\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"class name\",\"selector\":\"sign-in\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:32:46\u0027\nSystem info: host: \u0027casiopea\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-92-generic\u0027, java.version: \u00271.7.0_101\u0027\nDriver info: driver.version: unknown\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///tmp/anonymous2410896057496200304webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///tmp/anonymous2410896057496200304webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10779)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///tmp/anonymous2410896057496200304webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12661)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///tmp/anonymous2410896057496200304webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12666)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///tmp/anonymous2410896057496200304webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12608)\n"
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
  "status": "skipped"
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.newToolInstance()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "ToolInstanceEditSteps.createToolInstance()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "ToolInstanceEditSteps.createToolInstance()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 65681918,
  "status": "passed"
});
formatter.after({
  "duration": 2084171259,
  "status": "passed"
});
formatter.after({
  "duration": 2036826076,
  "status": "passed"
});
formatter.before({
  "duration": 1866528046,
  "status": "passed"
});
formatter.before({
  "duration": 449178,
  "status": "passed"
});
formatter.before({
  "duration": 364432,
  "status": "passed"
});
formatter.scenario({
  "id": "tool-instance-creation;delete-my-new-instance",
  "description": "",
  "name": "Delete My New Instance",
  "keyword": "Scenario",
  "line": 26,
  "type": "scenario"
});
formatter.step({
  "name": "the user is on Tool Instances Navigation Page",
  "keyword": "Given ",
  "line": 27
});
formatter.step({
  "name": "she logs in the system as testUser@sharklasers.com with password testPasswd",
  "keyword": "And ",
  "line": 28
});
formatter.step({
  "name": "a tool instance called My New Instance exists",
  "keyword": "And ",
  "line": 29
});
formatter.step({
  "name": "the user selects the tool instance My New Instance",
  "keyword": "When ",
  "line": 30
});
formatter.step({
  "name": "she deletes the current tool instance",
  "keyword": "And ",
  "line": 31
});
formatter.step({
  "name": "a tool instance called My New Instance does not exist",
  "keyword": "Then ",
  "line": 32
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 4257208549,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testUser@sharklasers.com",
      "offset": 26
    },
    {
      "val": "testPasswd",
      "offset": 65
    }
  ],
  "location": "ToolInstanceCommonSteps.logIn(String,String)"
});
formatter.result({
  "duration": 16612394005,
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
  "duration": 349380858,
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
  "duration": 120793567,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.deleteToolInstance()"
});
formatter.result({
  "duration": 103570799,
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
  "duration": 654395350,
  "status": "passed"
});
formatter.after({
  "duration": 66503854,
  "status": "passed"
});
formatter.after({
  "duration": 2080567383,
  "status": "passed"
});
formatter.after({
  "duration": 2112056978,
  "status": "passed"
});
formatter.before({
  "duration": 1985774855,
  "status": "passed"
});
formatter.before({
  "duration": 33522,
  "status": "passed"
});
formatter.before({
  "duration": 21517,
  "status": "passed"
});
formatter.scenario({
  "id": "tool-instance-creation;delete-my-new-instance",
  "description": "",
  "name": "Delete My New Instance",
  "keyword": "Scenario",
  "line": 34,
  "type": "scenario"
});
formatter.step({
  "name": "the user is on Tool Instances Navigation Page",
  "keyword": "Given ",
  "line": 35
});
formatter.step({
  "name": "she logs in the system as testUser@sharklasers.com with password testPasswd",
  "keyword": "And ",
  "line": 36
});
formatter.step({
  "name": "a tool instance called My New Instance 2 exists",
  "keyword": "And ",
  "line": 37
});
formatter.step({
  "name": "the user selects the tool instance My New Instance 2",
  "keyword": "When ",
  "line": 38
});
formatter.step({
  "name": "she deletes the current tool instance",
  "keyword": "And ",
  "line": 39
});
formatter.step({
  "name": "a tool instance called My New Instance 2 does not exist",
  "keyword": "Then ",
  "line": 40
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 4129381269,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testUser@sharklasers.com",
      "offset": 26
    },
    {
      "val": "testPasswd",
      "offset": 65
    }
  ],
  "location": "ToolInstanceCommonSteps.logIn(String,String)"
});
formatter.result({
  "duration": 11257364135,
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
  "duration": 30107229855,
  "status": "failed",
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat org.junit.Assert.assertTrue(Assert.java:52)\n\tat org.lrc.liferay.toolbuilder.tests.functional.steps.ToolInstancesNavigationSteps.existingToolInstance(ToolInstancesNavigationSteps.java:71)\n\tat ✽.And a tool instance called My New Instance 2 exists(NewToolInstance.feature:37)\n"
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
  "status": "skipped"
});
formatter.after({
  "duration": 69643121,
  "status": "passed"
});
formatter.after({
  "duration": 2203303958,
  "status": "passed"
});
formatter.after({
  "duration": 2104378188,
  "status": "passed"
});
});