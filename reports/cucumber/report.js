$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("NavigateThroughSteps.feature");
formatter.feature({
  "id": "navigate-through-steps",
  "description": "As a user\nI want to be able to navigate through the steps in a given tool instance\nSo that the step of each tool instance is saved",
  "name": "Navigate through Steps",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 2671084396,
  "status": "passed"
});
formatter.before({
  "duration": 55018,
  "status": "passed"
});
formatter.before({
  "duration": 33357,
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
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 1902299262,
  "status": "passed"
});
formatter.scenario({
  "id": "navigate-through-steps;pull-up-one-tool-instance-from-step-1-to-2",
  "description": "",
  "name": "Pull up one tool instance from step 1 to 2",
  "keyword": "Scenario",
  "line": 9,
  "type": "scenario"
});
formatter.step({
  "name": "the user creates a tool instance called Other Tool Instance",
  "keyword": "Given ",
  "line": 10
});
formatter.step({
  "name": "she selects the tool instance Other Tool Instance",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "she chooses to step forward",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "she returns to the Tool Instances Navigation Page",
  "keyword": "And ",
  "line": 13
});
formatter.step({
  "name": "the tool instance called Other Tool Instance is on step 2",
  "keyword": "Then ",
  "line": 14
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
  "duration": 1315305216,
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
  "duration": 107032792,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.stepForward()"
});
formatter.result({
  "duration": 83593170,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceEditSteps.exitToolInstance()"
});
formatter.result({
  "duration": 79842682,
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
  "duration": 133801026,
  "status": "passed"
});
formatter.after({
  "duration": 102572007,
  "status": "passed"
});
formatter.after({
  "duration": 2615646841,
  "status": "passed"
});
formatter.after({
  "duration": 2027283936,
  "status": "passed"
});
formatter.before({
  "duration": 1947880931,
  "status": "passed"
});
formatter.before({
  "duration": 17233,
  "status": "passed"
});
formatter.before({
  "duration": 13401,
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
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 1817040530,
  "status": "passed"
});
formatter.scenario({
  "id": "navigate-through-steps;pull-up-one-tool-instance-from-step-2-to-4",
  "description": "",
  "name": "Pull up one tool instance from step 2 to 4",
  "keyword": "Scenario",
  "line": 16,
  "type": "scenario"
});
formatter.step({
  "name": "a tool instance called Other Tool Instance exists",
  "keyword": "Given ",
  "line": 17
});
formatter.step({
  "name": "the tool instance called Other Tool Instance is on step 2",
  "keyword": "And ",
  "line": 18
});
formatter.step({
  "name": "the user selects the tool instance Other Tool Instance",
  "keyword": "When ",
  "line": 19
});
formatter.step({
  "name": "she chooses to step forward",
  "keyword": "And ",
  "line": 20
});
formatter.step({
  "name": "she chooses to step forward",
  "keyword": "And ",
  "line": 21
});
formatter.step({
  "name": "she returns to the Tool Instances Navigation Page",
  "keyword": "And ",
  "line": 22
});
formatter.step({
  "name": "the tool instance called Other Tool Instance is on step 4",
  "keyword": "Then ",
  "line": 23
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
  "duration": 71483683,
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
  "duration": 116727846,
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
  "duration": 162222798,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.stepForward()"
});
formatter.result({
  "duration": 147860814,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.stepForward()"
});
formatter.result({
  "duration": 75737316,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceEditSteps.exitToolInstance()"
});
formatter.result({
  "duration": 86103875,
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
  "duration": 119975648,
  "status": "passed"
});
formatter.after({
  "duration": 71568646,
  "status": "passed"
});
formatter.after({
  "duration": 2044665809,
  "status": "passed"
});
formatter.after({
  "duration": 2063136990,
  "status": "passed"
});
formatter.before({
  "duration": 1954391402,
  "status": "passed"
});
formatter.before({
  "duration": 22475,
  "status": "passed"
});
formatter.before({
  "duration": 13758,
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
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 2054874667,
  "status": "passed"
});
formatter.scenario({
  "id": "navigate-through-steps;try-to-pull-up-one-tool-instance-above-step-5",
  "description": "",
  "name": "Try to pull up one tool instance above step 5",
  "keyword": "Scenario",
  "line": 25,
  "type": "scenario"
});
formatter.step({
  "name": "a tool instance called Other Tool Instance exists",
  "keyword": "Given ",
  "line": 26
});
formatter.step({
  "name": "the tool instance called Other Tool Instance is on step 4",
  "keyword": "And ",
  "line": 27
});
formatter.step({
  "name": "the user selects the tool instance Other Tool Instance",
  "keyword": "When ",
  "line": 28
});
formatter.step({
  "name": "she chooses to step forward",
  "keyword": "And ",
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
  "name": "she returns to the Tool Instances Navigation Page",
  "keyword": "And ",
  "line": 33
});
formatter.step({
  "name": "the tool instance called Other Tool Instance is on step 5",
  "keyword": "Then ",
  "line": 34
});
formatter.step({
  "name": "the user selects the tool instance Other Tool Instance",
  "keyword": "And ",
  "line": 35
});
formatter.step({
  "name": "she deletes the current tool instance",
  "keyword": "And ",
  "line": 36
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
  "duration": 70788827,
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
  "duration": 125377839,
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
  "duration": 180539121,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.stepForward()"
});
formatter.result({
  "duration": 147038241,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.stepForward()"
});
formatter.result({
  "duration": 87130034,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.stepForward()"
});
formatter.result({
  "duration": 95116248,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.stepForward()"
});
formatter.result({
  "duration": 92307264,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceEditSteps.exitToolInstance()"
});
formatter.result({
  "duration": 79285529,
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
  "duration": 114074040,
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
  "duration": 106811704,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.deleteToolInstance()"
});
formatter.result({
  "duration": 76921239,
  "status": "passed"
});
formatter.after({
  "duration": 81374209,
  "status": "passed"
});
formatter.after({
  "duration": 2025318092,
  "status": "passed"
});
formatter.after({
  "duration": 2057247934,
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
  "duration": 1957064624,
  "status": "passed"
});
formatter.before({
  "duration": 21164,
  "status": "passed"
});
formatter.before({
  "duration": 13743,
  "status": "passed"
});
formatter.scenario({
  "id": "tool-definition-management;choose-an-existing-tool-definition",
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
  "name": "the user selects the Test Tool",
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
  "duration": 107581272,
  "status": "passed"
});
formatter.after({
  "duration": 2015646360,
  "status": "passed"
});
formatter.after({
  "duration": 2055646721,
  "status": "passed"
});
formatter.before({
  "duration": 1884240852,
  "status": "passed"
});
formatter.before({
  "duration": 22517,
  "status": "passed"
});
formatter.before({
  "duration": 13277,
  "status": "passed"
});
formatter.scenario({
  "id": "tool-definition-management;create-a-new-tool-definition",
  "description": "",
  "name": "Create a new Tool Definition",
  "keyword": "Scenario",
  "line": 13,
  "type": "scenario"
});
formatter.step({
  "name": "the admin user is on Tool Builder admin page",
  "keyword": "Given ",
  "line": 14
});
formatter.step({
  "name": "she chooses to create a new tool definition",
  "keyword": "When ",
  "line": 15
});
formatter.step({
  "name": "she provides the tool definition name as My New Tool Type",
  "keyword": "And ",
  "line": 16
});
formatter.step({
  "name": "she chooses to have 3 steps",
  "keyword": "And ",
  "line": 17
});
formatter.step({
  "name": "she chooses a step of type mock for step 1",
  "keyword": "And ",
  "line": 18
});
formatter.step({
  "name": "she chooses a step of type mock for step 2",
  "keyword": "And ",
  "line": 19
});
formatter.step({
  "name": "she chooses a step of type mock for step 3",
  "keyword": "And ",
  "line": 20
});
formatter.step({
  "name": "she returns to the Tool Definition admin page",
  "keyword": "And ",
  "line": 21
});
formatter.step({
  "name": "a tool definition called My New Tool Type exists",
  "keyword": "Then ",
  "line": 22
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
  "duration": 128443552,
  "status": "passed"
});
formatter.after({
  "duration": 2086624099,
  "status": "passed"
});
formatter.after({
  "duration": 2035568831,
  "status": "passed"
});
formatter.before({
  "duration": 1925068411,
  "status": "passed"
});
formatter.before({
  "duration": 19872,
  "status": "passed"
});
formatter.before({
  "duration": 12349,
  "status": "passed"
});
formatter.scenario({
  "id": "tool-definition-management;user-new-tool-definition",
  "description": "",
  "name": "User new Tool Definition",
  "keyword": "Scenario",
  "line": 24,
  "type": "scenario"
});
formatter.step({
  "name": "the user is on Tool Instances Navigation Page",
  "keyword": "Given ",
  "line": 25
});
formatter.step({
  "name": "a tool definition called My New Tool Type exists",
  "keyword": "And ",
  "line": 26
});
formatter.step({
  "name": "the user creates a tool instance called My New Def Tool Instance",
  "keyword": "When ",
  "line": 27
});
formatter.step({
  "name": "she selects the tool instance My New Def Tool Instance",
  "keyword": "And ",
  "line": 28
});
formatter.step({
  "name": "she chooses to step forward",
  "keyword": "When ",
  "line": 29
});
formatter.step({
  "name": "she chooses to step forward",
  "keyword": "When ",
  "line": 30
});
formatter.step({
  "name": "she chooses to step forward",
  "keyword": "When ",
  "line": 31
});
formatter.step({
  "name": "she chooses to step forward",
  "keyword": "When ",
  "line": 32
});
formatter.step({
  "name": "she returns to the Tool Instances Navigation Page",
  "keyword": "And ",
  "line": 33
});
formatter.step({
  "name": "the tool instance called Other Tool Instance is on step 3",
  "keyword": "Then ",
  "line": 34
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 1921161528,
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
  "duration": 70742954,
  "status": "passed"
});
formatter.after({
  "duration": 2018065448,
  "status": "passed"
});
formatter.after({
  "duration": 2059637324,
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
  "duration": 1969485289,
  "status": "passed"
});
formatter.before({
  "duration": 22628,
  "status": "passed"
});
formatter.before({
  "duration": 26630,
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
  "name": "she chooses to create a new tool instance",
  "keyword": "When ",
  "line": 8
});
formatter.step({
  "name": "she provides the tool instance name as My New Instance",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "she creates the tool instance",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "she returns to the Tool Instances Navigation Page",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "a tool instance called My New Instance exists",
  "keyword": "Then ",
  "line": 12
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 1958758589,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.newToolInstance()"
});
formatter.result({
  "duration": 132712481,
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
  "duration": 839583851,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceEditSteps.createToolInstance()"
});
formatter.result({
  "duration": 93936705,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceEditSteps.exitToolInstance()"
});
formatter.result({
  "duration": 80768837,
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
  "duration": 315092816,
  "status": "passed"
});
formatter.after({
  "duration": 65116238,
  "status": "passed"
});
formatter.after({
  "duration": 2080123126,
  "status": "passed"
});
formatter.after({
  "duration": 2023476786,
  "status": "passed"
});
formatter.before({
  "duration": 1974135408,
  "status": "passed"
});
formatter.before({
  "duration": 27061,
  "status": "passed"
});
formatter.before({
  "duration": 19558,
  "status": "passed"
});
formatter.scenario({
  "id": "tool-instance-creation;create-a-new-existing-tool-instance",
  "description": "",
  "name": "Create a new existing Tool Instance",
  "keyword": "Scenario",
  "line": 14,
  "type": "scenario"
});
formatter.step({
  "name": "the user is on Tool Instances Navigation Page",
  "keyword": "Given ",
  "line": 15
});
formatter.step({
  "name": "a tool instance called My New Instance exists",
  "keyword": "And ",
  "line": 16
});
formatter.step({
  "name": "the user chooses to create a new tool instance",
  "keyword": "When ",
  "line": 17
});
formatter.step({
  "name": "she provides the tool instance name as My New Instance",
  "keyword": "And ",
  "line": 18
});
formatter.step({
  "name": "she creates the tool instance",
  "keyword": "And ",
  "line": 19
});
formatter.step({
  "name": "an error message with text \"Existing Tool Instance\" is shown",
  "keyword": "And ",
  "line": 20
});
formatter.step({
  "name": "the user provides the tool instance name as My New Instance 2",
  "keyword": "And ",
  "line": 21
});
formatter.step({
  "name": "she creates the tool instance",
  "keyword": "And ",
  "line": 22
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 2018882263,
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
  "duration": 81036373,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.newToolInstance()"
});
formatter.result({
  "duration": 91437676,
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
  "duration": 563351581,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceEditSteps.createToolInstance()"
});
formatter.result({
  "duration": 90634226,
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
  "duration": 284170906,
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
  "duration": 228123727,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceEditSteps.createToolInstance()"
});
formatter.result({
  "duration": 94890977,
  "status": "passed"
});
formatter.after({
  "duration": 65766205,
  "status": "passed"
});
formatter.after({
  "duration": 2118868078,
  "status": "passed"
});
formatter.after({
  "duration": 2022770125,
  "status": "passed"
});
formatter.before({
  "duration": 1891095239,
  "status": "passed"
});
formatter.before({
  "duration": 22004,
  "status": "passed"
});
formatter.before({
  "duration": 15421,
  "status": "passed"
});
formatter.scenario({
  "id": "tool-instance-creation;delete-my-new-instance",
  "description": "",
  "name": "Delete My New Instance",
  "keyword": "Scenario",
  "line": 24,
  "type": "scenario"
});
formatter.step({
  "name": "the user is on Tool Instances Navigation Page",
  "keyword": "Given ",
  "line": 25
});
formatter.step({
  "name": "a tool instance called My New Instance exists",
  "keyword": "And ",
  "line": 26
});
formatter.step({
  "name": "the user selects the tool instance My New Instance",
  "keyword": "When ",
  "line": 27
});
formatter.step({
  "name": "she deletes the current tool instance",
  "keyword": "And ",
  "line": 28
});
formatter.step({
  "name": "a tool instance called My New Instance does not exist",
  "keyword": "Then ",
  "line": 29
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 1890512434,
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
  "duration": 71577415,
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
  "duration": 103780738,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.deleteToolInstance()"
});
formatter.result({
  "duration": 188086378,
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
  "duration": 645751222,
  "status": "passed"
});
formatter.after({
  "duration": 66303876,
  "status": "passed"
});
formatter.after({
  "duration": 2000946814,
  "status": "passed"
});
formatter.after({
  "duration": 2083481167,
  "status": "passed"
});
formatter.before({
  "duration": 2001619210,
  "status": "passed"
});
formatter.before({
  "duration": 20377,
  "status": "passed"
});
formatter.before({
  "duration": 12633,
  "status": "passed"
});
formatter.scenario({
  "id": "tool-instance-creation;delete-my-new-instance",
  "description": "",
  "name": "Delete My New Instance",
  "keyword": "Scenario",
  "line": 31,
  "type": "scenario"
});
formatter.step({
  "name": "the user is on Tool Instances Navigation Page",
  "keyword": "Given ",
  "line": 32
});
formatter.step({
  "name": "a tool instance called My New Instance 2 exists",
  "keyword": "And ",
  "line": 33
});
formatter.step({
  "name": "the user selects the tool instance My New Instance 2",
  "keyword": "When ",
  "line": 34
});
formatter.step({
  "name": "she deletes the current tool instance",
  "keyword": "And ",
  "line": 35
});
formatter.step({
  "name": "a tool instance called My New Instance 2 does not exist",
  "keyword": "Then ",
  "line": 36
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 1849226014,
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
  "duration": 79529018,
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
  "duration": 130810116,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.deleteToolInstance()"
});
formatter.result({
  "duration": 252657803,
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
  "duration": 598427479,
  "status": "passed"
});
formatter.after({
  "duration": 65857911,
  "status": "passed"
});
formatter.after({
  "duration": 2087868734,
  "status": "passed"
});
formatter.after({
  "duration": 2056696420,
  "status": "passed"
});
});