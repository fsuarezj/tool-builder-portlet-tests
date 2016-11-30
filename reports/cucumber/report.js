$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("adminPortlet/10ChooseToolDef.feature");
formatter.feature({
  "line": 2,
  "name": "Choosing Tool Definition",
  "description": "As the admin user\nI want to choose the Tool Definition for the system\nSo that I can use work with it",
  "id": "choosing-tool-definition",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tool-definition-portlet"
    },
    {
      "line": 1,
      "name": "@chooseToolDef"
    }
  ]
});
formatter.before({
  "duration": 6275355000,
  "status": "passed"
});
formatter.before({
  "duration": 39198,
  "status": "passed"
});
formatter.before({
  "duration": 26986,
  "status": "passed"
});
formatter.before({
  "duration": 28758,
  "status": "passed"
});
formatter.before({
  "duration": 26065,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Choose an existing Tool Definition",
  "description": "",
  "id": "choosing-tool-definition;choose-an-existing-tool-definition",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "the admin user goes to the Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "a tool definition called \"Test Tool\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "a tool definition called \"Test Tool 2\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user selects \"Test Tool 2\" as default tool definition",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the name of the selected tool definition is \"Test Tool 2\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "she goes to the Tool Instances Navigation Page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the name of the tool definition is \"Test Tool 2\"",
  "keyword": "And "
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 4418098849,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Tool",
      "offset": 26
    }
  ],
  "location": "ToolBuilderAdminSteps.existingToolDef(String)"
});
formatter.result({
  "duration": 7519371039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Tool 2",
      "offset": 26
    }
  ],
  "location": "ToolBuilderAdminSteps.existingToolDef(String)"
});
formatter.result({
  "duration": 45287786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Tool 2",
      "offset": 18
    }
  ],
  "location": "ToolBuilderAdminSteps.selectToolDef(String)"
});
formatter.result({
  "duration": 668380698,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Tool 2",
      "offset": 45
    }
  ],
  "location": "ToolBuilderAdminSteps.selectedToolDef(String)"
});
formatter.result({
  "duration": 103872747,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 250075342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Tool 2",
      "offset": 36
    }
  ],
  "location": "ToolInstancesNavigationSteps.verifyToolDefName(String)"
});
formatter.result({
  "duration": 178747764,
  "status": "passed"
});
formatter.after({
  "duration": 68812138,
  "status": "passed"
});
formatter.after({
  "duration": 690279305,
  "status": "passed"
});
formatter.after({
  "duration": 585302073,
  "status": "passed"
});
formatter.after({
  "duration": 510923332,
  "status": "passed"
});
formatter.after({
  "duration": 595745297,
  "status": "passed"
});
formatter.before({
  "duration": 532824959,
  "status": "passed"
});
formatter.before({
  "duration": 14415,
  "status": "passed"
});
formatter.before({
  "duration": 20042,
  "status": "passed"
});
formatter.before({
  "duration": 10770,
  "status": "passed"
});
formatter.before({
  "duration": 17555,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Choose an existing Tool Definition",
  "description": "",
  "id": "choosing-tool-definition;choose-an-existing-tool-definition",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "the admin user goes to the Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "a tool definition called \"Test Tool\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "a tool definition called \"Test Tool 2\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the user selects \"Test Tool\" as default tool definition",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the name of the selected tool definition is \"Test Tool\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "she goes to the Tool Instances Navigation Page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the name of the tool definition is \"Test Tool\"",
  "keyword": "And "
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 3235030250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Tool",
      "offset": 26
    }
  ],
  "location": "ToolBuilderAdminSteps.existingToolDef(String)"
});
formatter.result({
  "duration": 175646632,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Tool 2",
      "offset": 26
    }
  ],
  "location": "ToolBuilderAdminSteps.existingToolDef(String)"
});
formatter.result({
  "duration": 21143845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Tool",
      "offset": 18
    }
  ],
  "location": "ToolBuilderAdminSteps.selectToolDef(String)"
});
formatter.result({
  "duration": 185400836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Tool",
      "offset": 45
    }
  ],
  "location": "ToolBuilderAdminSteps.selectedToolDef(String)"
});
formatter.result({
  "duration": 211129793,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 208740020,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Tool",
      "offset": 36
    }
  ],
  "location": "ToolInstancesNavigationSteps.verifyToolDefName(String)"
});
formatter.result({
  "duration": 167490231,
  "status": "passed"
});
formatter.after({
  "duration": 65400948,
  "status": "passed"
});
formatter.after({
  "duration": 632819781,
  "status": "passed"
});
formatter.after({
  "duration": 499832696,
  "status": "passed"
});
formatter.after({
  "duration": 558332787,
  "status": "passed"
});
formatter.after({
  "duration": 557269875,
  "status": "passed"
});
formatter.uri("adminPortlet/20NewToolDef.feature");
formatter.feature({
  "line": 2,
  "name": "Tool Definition Management",
  "description": "As the admin user\nI want to create new Tool Definitions in the system\nSo that I can choose them as the system Tool Definition",
  "id": "tool-definition-management",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tool-definition-portlet"
    },
    {
      "line": 1,
      "name": "@CreateToolDef"
    }
  ]
});
formatter.before({
  "duration": 453025246,
  "status": "passed"
});
formatter.before({
  "duration": 23295,
  "status": "passed"
});
formatter.before({
  "duration": 13760,
  "status": "passed"
});
formatter.before({
  "duration": 12908,
  "status": "passed"
});
formatter.before({
  "duration": 12838,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Create a new Tool Definition",
  "description": "",
  "id": "tool-definition-management;create-a-new-tool-definition",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "the admin user is on the Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "she chooses to create a new tool definition",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "she provides the tool definition name as \"Mock Tool Type\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "she returns to the Tool Definition admin page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "a tool definition called \"Mock Tool Type\" exists",
  "keyword": "Then "
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 3209588538,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.newToolDef()"
});
formatter.result({
  "duration": 650636042,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mock Tool Type",
      "offset": 42
    }
  ],
  "location": "ToolBuilderAdminSteps.setNewToolDefName(String)"
});
formatter.result({
  "duration": 747717345,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.returnAdminPage()"
});
formatter.result({
  "duration": 173609013,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mock Tool Type",
      "offset": 26
    }
  ],
  "location": "ToolBuilderAdminSteps.existingToolDef(String)"
});
formatter.result({
  "duration": 443665087,
  "status": "passed"
});
formatter.after({
  "duration": 73851775,
  "status": "passed"
});
formatter.after({
  "duration": 559224136,
  "status": "passed"
});
formatter.after({
  "duration": 505641941,
  "status": "passed"
});
formatter.after({
  "duration": 588276403,
  "status": "passed"
});
formatter.after({
  "duration": 749734122,
  "status": "passed"
});
formatter.before({
  "duration": 452159592,
  "status": "passed"
});
formatter.before({
  "duration": 16406,
  "status": "passed"
});
formatter.before({
  "duration": 8560,
  "status": "passed"
});
formatter.before({
  "duration": 8768,
  "status": "passed"
});
formatter.before({
  "duration": 8247,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Create a new Tool Definition",
  "description": "",
  "id": "tool-definition-management;create-a-new-tool-definition",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "the admin user is on the Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "she chooses to create a new tool definition",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "she provides the tool definition name as \"My New Tool Type\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "she adds a step of type MOCK",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "she adds a step of type MOCK",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "she adds a step of type MOCK",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "she returns to the Tool Definition admin page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "a tool definition called \"My New Tool Type\" exists",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "the user selects \"My New Tool Type\" as default tool definition",
  "keyword": "And "
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 3217779803,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.newToolDef()"
});
formatter.result({
  "duration": 644876521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 42
    }
  ],
  "location": "ToolBuilderAdminSteps.setNewToolDefName(String)"
});
formatter.result({
  "duration": 825777470,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MOCK",
      "offset": 24
    }
  ],
  "location": "ToolBuilderAdminEditSteps.addNewStep(String)"
});
formatter.result({
  "duration": 1349658865,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MOCK",
      "offset": 24
    }
  ],
  "location": "ToolBuilderAdminEditSteps.addNewStep(String)"
});
formatter.result({
  "duration": 1091823179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MOCK",
      "offset": 24
    }
  ],
  "location": "ToolBuilderAdminEditSteps.addNewStep(String)"
});
formatter.result({
  "duration": 996605431,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.returnAdminPage()"
});
formatter.result({
  "duration": 51414737,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 26
    }
  ],
  "location": "ToolBuilderAdminSteps.existingToolDef(String)"
});
formatter.result({
  "duration": 438625117,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 18
    }
  ],
  "location": "ToolBuilderAdminSteps.selectToolDef(String)"
});
formatter.result({
  "duration": 713247116,
  "status": "passed"
});
formatter.after({
  "duration": 65040316,
  "status": "passed"
});
formatter.after({
  "duration": 644992360,
  "status": "passed"
});
formatter.after({
  "duration": 477516145,
  "status": "passed"
});
formatter.after({
  "duration": 516172382,
  "status": "passed"
});
formatter.after({
  "duration": 526021724,
  "status": "passed"
});
formatter.before({
  "duration": 476064937,
  "status": "passed"
});
formatter.before({
  "duration": 33666,
  "status": "passed"
});
formatter.before({
  "duration": 9579,
  "status": "passed"
});
formatter.before({
  "duration": 8945,
  "status": "passed"
});
formatter.before({
  "duration": 21585,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Use new Tool Definition",
  "description": "",
  "id": "tool-definition-management;use-new-tool-definition",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "the user is on the Tool Instances Navigation Page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "she logs in the system as test@guerrillamail.com with password test",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "the name of the tool definition is \"My New Tool Type\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "the user creates a tool instance called \"My New Tool Def Instance\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "she selects the tool instance \"My New Tool Def Instance\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "she chooses to step forward",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "she chooses to step forward",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "she chooses to step forward",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "she chooses to step forward",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "she returns to the Tool Instances Navigation Page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the tool instance called \"My New Tool Def Instance\" is on step 3",
  "keyword": "Then "
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 1860337634,
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
  "duration": 481714180,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 36
    }
  ],
  "location": "ToolInstancesNavigationSteps.verifyToolDefName(String)"
});
formatter.result({
  "duration": 701329633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Def Instance",
      "offset": 41
    }
  ],
  "location": "ToolInstancesNavigationSteps.createNewToolInstance(String)"
});
formatter.result({
  "duration": 1078522479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Def Instance",
      "offset": 31
    }
  ],
  "location": "ToolInstancesNavigationSteps.selectToolInstance(String)"
});
formatter.result({
  "duration": 70748469,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.stepForward()"
});
formatter.result({
  "duration": 74831975,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.stepForward()"
});
formatter.result({
  "duration": 25996153,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.stepForward()"
});
formatter.result({
  "duration": 16808260,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.stepForward()"
});
formatter.result({
  "duration": 20105343,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceEditSteps.exitToolInstance()"
});
formatter.result({
  "duration": 34098919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Def Instance",
      "offset": 26
    },
    {
      "val": "3",
      "offset": 63
    }
  ],
  "location": "ToolInstancesNavigationSteps.verifyToolInstanceStep(String,int)"
});
formatter.result({
  "duration": 503917354,
  "status": "passed"
});
formatter.after({
  "duration": 67065669,
  "status": "passed"
});
formatter.after({
  "duration": 570271089,
  "status": "passed"
});
formatter.after({
  "duration": 582584893,
  "status": "passed"
});
formatter.after({
  "duration": 538781208,
  "status": "passed"
});
formatter.after({
  "duration": 532117019,
  "status": "passed"
});
formatter.before({
  "duration": 467009450,
  "status": "passed"
});
formatter.before({
  "duration": 17960,
  "status": "passed"
});
formatter.before({
  "duration": 8853,
  "status": "passed"
});
formatter.before({
  "duration": 8183,
  "status": "passed"
});
formatter.before({
  "duration": 8036,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Create an existing Tool Definition",
  "description": "",
  "id": "tool-definition-management;create-an-existing-tool-definition",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "the admin user is on the Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "a tool definition called \"My New Tool Type\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "she chooses to create a new tool definition",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "she provides the tool definition name as \"My New Tool Type\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "an error message with text \"Tool Definition called \"My New Tool Type\" already exists\" is shown",
  "keyword": "Then "
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 3176501388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 26
    }
  ],
  "location": "ToolBuilderAdminSteps.existingToolDef(String)"
});
formatter.result({
  "duration": 652382029,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.newToolDef()"
});
formatter.result({
  "duration": 118039464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 42
    }
  ],
  "location": "ToolBuilderAdminSteps.setNewToolDefName(String)"
});
formatter.result({
  "duration": 277335695,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tool Definition called \"My New Tool Type\" already exists",
      "offset": 28
    }
  ],
  "location": "ToolInstanceCommonSteps.errorMessageIs(String)"
});
formatter.result({
  "duration": 40125106,
  "status": "passed"
});
formatter.after({
  "duration": 64903149,
  "status": "passed"
});
formatter.after({
  "duration": 556177883,
  "status": "passed"
});
formatter.after({
  "duration": 545520649,
  "status": "passed"
});
formatter.after({
  "duration": 652546535,
  "status": "passed"
});
formatter.after({
  "duration": 561640751,
  "status": "passed"
});
formatter.before({
  "duration": 452543950,
  "status": "passed"
});
formatter.before({
  "duration": 22182,
  "status": "passed"
});
formatter.before({
  "duration": 11883,
  "status": "passed"
});
formatter.before({
  "duration": 11016,
  "status": "passed"
});
formatter.before({
  "duration": 10499,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Try to create an existing Tool Definition and change the name",
  "description": "",
  "id": "tool-definition-management;try-to-create-an-existing-tool-definition-and-change-the-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "the admin user is on the Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "a tool definition called \"My New Tool Type\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "she chooses to create a new tool definition",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "she provides the tool definition name as \"My New Tool Type\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "an error message with text \"Tool Definition called \"My New Tool Type\" already exists\" is shown",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "she provides the tool definition name as \"My New Tool Type 2\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "she adds a step of type MOCK",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "she adds a step of type MOCK",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "she returns to the Tool Definition admin page",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "a tool definition called \"My New Tool Type 2\" exists",
  "keyword": "Then "
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 3286819303,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 26
    }
  ],
  "location": "ToolBuilderAdminSteps.existingToolDef(String)"
});
formatter.result({
  "duration": 658020348,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.newToolDef()"
});
formatter.result({
  "duration": 101999592,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 42
    }
  ],
  "location": "ToolBuilderAdminSteps.setNewToolDefName(String)"
});
formatter.result({
  "duration": 283333678,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tool Definition called \"My New Tool Type\" already exists",
      "offset": 28
    }
  ],
  "location": "ToolInstanceCommonSteps.errorMessageIs(String)"
});
formatter.result({
  "duration": 46000736,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type 2",
      "offset": 42
    }
  ],
  "location": "ToolBuilderAdminSteps.setNewToolDefName(String)"
});
formatter.result({
  "duration": 716836505,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MOCK",
      "offset": 24
    }
  ],
  "location": "ToolBuilderAdminEditSteps.addNewStep(String)"
});
formatter.result({
  "duration": 1311460521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MOCK",
      "offset": 24
    }
  ],
  "location": "ToolBuilderAdminEditSteps.addNewStep(String)"
});
formatter.result({
  "duration": 1068449912,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.returnAdminPage()"
});
formatter.result({
  "duration": 76536550,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type 2",
      "offset": 26
    }
  ],
  "location": "ToolBuilderAdminSteps.existingToolDef(String)"
});
formatter.result({
  "duration": 511922551,
  "status": "passed"
});
formatter.after({
  "duration": 65063707,
  "status": "passed"
});
formatter.after({
  "duration": 662880044,
  "status": "passed"
});
formatter.after({
  "duration": 524985592,
  "status": "passed"
});
formatter.after({
  "duration": 501164165,
  "status": "passed"
});
formatter.after({
  "duration": 623845121,
  "status": "passed"
});
formatter.uri("adminPortlet/30EditToolDef.feature");
formatter.feature({
  "line": 2,
  "name": "Tool Definition Management",
  "description": "As the admin user\nI want to edit existing Tool Definitions in the system\nSo that I can choose them as the system Tool Definition",
  "id": "tool-definition-management",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tool-definition-portlet"
    },
    {
      "line": 1,
      "name": "@EditToolDef"
    }
  ]
});
formatter.before({
  "duration": 450070982,
  "status": "passed"
});
formatter.before({
  "duration": 20911,
  "status": "passed"
});
formatter.before({
  "duration": 11270,
  "status": "passed"
});
formatter.before({
  "duration": 23007,
  "status": "passed"
});
formatter.before({
  "duration": 9315,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Edit an existing Tool Definition",
  "description": "",
  "id": "tool-definition-management;edit-an-existing-tool-definition",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "the admin user is on the Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "a tool definition called \"My New Tool Type 2\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user chooses to edit the tool definition called \"My New Tool Type 2\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "she adds a step of type MOCK",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "she moves the step 2 to step 3",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "she saves the steps order",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "she returns to the Tool Definition admin page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "a tool definition called \"My New Tool Type 2\" exists",
  "keyword": "Then "
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 3082331972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type 2",
      "offset": 26
    }
  ],
  "location": "ToolBuilderAdminSteps.existingToolDef(String)"
});
formatter.result({
  "duration": 760656498,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type 2",
      "offset": 53
    }
  ],
  "location": "ToolBuilderAdminSteps.editToolDef(String)"
});
formatter.result({
  "duration": 664792530,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MOCK",
      "offset": 24
    }
  ],
  "location": "ToolBuilderAdminEditSteps.addNewStep(String)"
});
formatter.result({
  "duration": 1303005243,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    },
    {
      "val": "3",
      "offset": 29
    }
  ],
  "location": "ToolBuilderAdminSteps.moveStep(int,int)"
});
formatter.result({
  "duration": 1781445352,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.saveStepsOrder()"
});
formatter.result({
  "duration": 2044625752,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.returnAdminPage()"
});
formatter.result({
  "duration": 56803312,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type 2",
      "offset": 26
    }
  ],
  "location": "ToolBuilderAdminSteps.existingToolDef(String)"
});
formatter.result({
  "duration": 567900542,
  "status": "passed"
});
formatter.after({
  "duration": 116347956,
  "status": "passed"
});
formatter.after({
  "duration": 875653110,
  "status": "passed"
});
formatter.after({
  "duration": 551360302,
  "status": "passed"
});
formatter.after({
  "duration": 572456586,
  "status": "passed"
});
formatter.after({
  "duration": 530261936,
  "status": "passed"
});
formatter.uri("adminPortlet/40DeleteToolDef.feature");
formatter.feature({
  "line": 2,
  "name": "Tool Definition Management",
  "description": "As the admin user\nI want to edit existing Tool Definitions in the system\nSo that I can choose them as the system Tool Definition",
  "id": "tool-definition-management",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tool-definition-portlet"
    },
    {
      "line": 1,
      "name": "@DeleteToolDef"
    }
  ]
});
formatter.before({
  "duration": 481818839,
  "status": "passed"
});
formatter.before({
  "duration": 18245,
  "status": "passed"
});
formatter.before({
  "duration": 19046,
  "status": "passed"
});
formatter.before({
  "duration": 7431,
  "status": "passed"
});
formatter.before({
  "duration": 7133,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Delete an existing Tool Definition",
  "description": "",
  "id": "tool-definition-management;delete-an-existing-tool-definition",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "the admin user is on the Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "a tool definition called \"My New Tool Type 2\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "a tool definition called \"Mock Tool Type\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "she selects to delete the tool definition called \"My New Tool Type 2\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "she confirms the deletion",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "she selects to delete the tool definition called \"Mock Tool Type\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "she confirms the deletion",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "a tool definition called \"My New Tool Type 2\" does not exist",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "a tool definition called \"Mock Tool Type\" does not exist",
  "keyword": "And "
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 5007797111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type 2",
      "offset": 26
    }
  ],
  "location": "ToolBuilderAdminSteps.existingToolDef(String)"
});
formatter.result({
  "duration": 815542522,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mock Tool Type",
      "offset": 26
    }
  ],
  "location": "ToolBuilderAdminSteps.existingToolDef(String)"
});
formatter.result({
  "duration": 39691251,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type 2",
      "offset": 50
    }
  ],
  "location": "ToolBuilderAdminSteps.deleteToolDef(String)"
});
formatter.result({
  "duration": 192800778,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.confirmDeletion()"
});
formatter.result({
  "duration": 1112489119,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mock Tool Type",
      "offset": 50
    }
  ],
  "location": "ToolBuilderAdminSteps.deleteToolDef(String)"
});
formatter.result({
  "duration": 159358423,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.confirmDeletion()"
});
formatter.result({
  "duration": 1081850121,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type 2",
      "offset": 26
    }
  ],
  "location": "ToolBuilderAdminSteps.notExistingToolDef(String)"
});
formatter.result({
  "duration": 63449523,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mock Tool Type",
      "offset": 26
    }
  ],
  "location": "ToolBuilderAdminSteps.notExistingToolDef(String)"
});
formatter.result({
  "duration": 43766005,
  "status": "passed"
});
formatter.after({
  "duration": 65236188,
  "status": "passed"
});
formatter.after({
  "duration": 572302599,
  "status": "passed"
});
formatter.after({
  "duration": 610254011,
  "status": "passed"
});
formatter.after({
  "duration": 573263212,
  "status": "passed"
});
formatter.after({
  "duration": 522872252,
  "status": "passed"
});
formatter.uri("adminPortlet/50ToolDeleteEditRestrictions.feature");
formatter.feature({
  "line": 2,
  "name": "Tool Definition Management",
  "description": "As the admin user\nI don\u0027t want to edit or delete a Tool Definition selected or with exisiting tool instances\nSo the system should avoid it",
  "id": "tool-definition-management",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tool-definition-portlet"
    },
    {
      "line": 1,
      "name": "@DeleteEditToolDefRestrictions"
    }
  ]
});
formatter.before({
  "duration": 466245337,
  "status": "passed"
});
formatter.before({
  "duration": 19761,
  "status": "passed"
});
formatter.before({
  "duration": 10104,
  "status": "passed"
});
formatter.before({
  "duration": 8989,
  "status": "passed"
});
formatter.before({
  "duration": 8359,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Try to edit or delete the selected Tool Definition with tool instances associated",
  "description": "",
  "id": "tool-definition-management;try-to-edit-or-delete-the-selected-tool-definition-with-tool-instances-associated",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "the admin user is on the Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the name of the selected tool definition is \"My New Tool Type\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "a tooltip message with text \"unselect-or-delete-instances-to-configure-delete-tooldef\" is shown for the buttons on tool definition \"My New Tool Type\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the button to delete the tool definition called \"My New Tool Type\" is disabled",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the button to configure the tool definition called \"My New Tool Type\" is disabled",
  "keyword": "And "
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 3692168468,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 45
    }
  ],
  "location": "ToolBuilderAdminSteps.selectedToolDef(String)"
});
formatter.result({
  "duration": 745391405,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "unselect-or-delete-instances-to-configure-delete-tooldef",
      "offset": 29
    },
    {
      "val": "My New Tool Type",
      "offset": 132
    }
  ],
  "location": "ToolBuilderAdminSteps.toolTipOnButtonsToolDef(String,String)"
});
formatter.result({
  "duration": 657862744,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 49
    }
  ],
  "location": "ToolBuilderAdminSteps.disabledDeleteToolDef(String)"
});
formatter.result({
  "duration": 60836817,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 52
    }
  ],
  "location": "ToolBuilderAdminSteps.disabledConfigureToolDef(String)"
});
formatter.result({
  "duration": 58608234,
  "status": "passed"
});
formatter.after({
  "duration": 64899640,
  "status": "passed"
});
formatter.after({
  "duration": 620905402,
  "status": "passed"
});
formatter.after({
  "duration": 563186526,
  "status": "passed"
});
formatter.after({
  "duration": 1163238795,
  "status": "passed"
});
formatter.after({
  "duration": 562457924,
  "status": "passed"
});
formatter.before({
  "duration": 441665666,
  "status": "passed"
});
formatter.before({
  "duration": 29064,
  "status": "passed"
});
formatter.before({
  "duration": 16566,
  "status": "passed"
});
formatter.before({
  "duration": 15461,
  "status": "passed"
});
formatter.before({
  "duration": 14531,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Try to edit or delete a non-selected Tool Definition with tool instances associated",
  "description": "",
  "id": "tool-definition-management;try-to-edit-or-delete-a-non-selected-tool-definition-with-tool-instances-associated",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "the user is on the Tool Instances Navigation Page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "a tool instance called \"My New Tool Def Instance\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the admin user goes to the Tool Builder admin page",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "she selects \"Test Tool 2\" as default tool definition",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "a tooltip message with text \"unselect-or-delete-instances-to-configure-delete-tooldef\" is shown for the buttons on tool definition \"My New Tool Type\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "the button to delete the tool definition called \"My New Tool Type\" is disabled",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the button to configure the tool definition called \"My New Tool Type\" is disabled",
  "keyword": "And "
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 1401427119,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Def Instance",
      "offset": 24
    }
  ],
  "location": "ToolInstancesNavigationSteps.existingToolInstance(String)"
});
formatter.result({
  "duration": 196646070,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 2054071968,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Tool 2",
      "offset": 13
    }
  ],
  "location": "ToolBuilderAdminSteps.selectToolDef(String)"
});
formatter.result({
  "duration": 806698936,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "unselect-or-delete-instances-to-configure-delete-tooldef",
      "offset": 29
    },
    {
      "val": "My New Tool Type",
      "offset": 132
    }
  ],
  "location": "ToolBuilderAdminSteps.toolTipOnButtonsToolDef(String,String)"
});
formatter.result({
  "duration": 689685828,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 49
    }
  ],
  "location": "ToolBuilderAdminSteps.disabledDeleteToolDef(String)"
});
formatter.result({
  "duration": 47215552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 52
    }
  ],
  "location": "ToolBuilderAdminSteps.disabledConfigureToolDef(String)"
});
formatter.result({
  "duration": 60231052,
  "status": "passed"
});
formatter.after({
  "duration": 65165846,
  "status": "passed"
});
formatter.after({
  "duration": 608328996,
  "status": "passed"
});
formatter.after({
  "duration": 563784669,
  "status": "passed"
});
formatter.after({
  "duration": 532975320,
  "status": "passed"
});
formatter.after({
  "duration": 685231145,
  "status": "passed"
});
formatter.before({
  "duration": 441455940,
  "status": "passed"
});
formatter.before({
  "duration": 18979,
  "status": "passed"
});
formatter.before({
  "duration": 9318,
  "status": "passed"
});
formatter.before({
  "duration": 12444,
  "status": "passed"
});
formatter.before({
  "duration": 12650,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Try to edit or delete the selected Tool Definition without tool instances associated",
  "description": "",
  "id": "tool-definition-management;try-to-edit-or-delete-the-selected-tool-definition-without-tool-instances-associated",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "the user is on the Tool Instances Navigation Page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "there are no Tool Instances",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the admin user goes to the Tool Builder admin page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "the name of the selected tool definition is \"Test Tool 2\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "a tooltip message with text \"unselect-or-delete-instances-to-configure-delete-tooldef\" is shown for the buttons on tool definition \"Test Tool 2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "the button to delete the tool definition called \"Test Tool 2\" is disabled",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the button to configure the tool definition called \"Test Tool 2\" is disabled",
  "keyword": "And "
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 1580178266,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.emptyToolInstancesList()"
});
formatter.result({
  "duration": 183283779,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 2141294646,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Tool 2",
      "offset": 45
    }
  ],
  "location": "ToolBuilderAdminSteps.selectedToolDef(String)"
});
formatter.result({
  "duration": 276593947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "unselect-or-delete-instances-to-configure-delete-tooldef",
      "offset": 29
    },
    {
      "val": "Test Tool 2",
      "offset": 132
    }
  ],
  "location": "ToolBuilderAdminSteps.toolTipOnButtonsToolDef(String,String)"
});
formatter.result({
  "duration": 637847274,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Tool 2",
      "offset": 49
    }
  ],
  "location": "ToolBuilderAdminSteps.disabledDeleteToolDef(String)"
});
formatter.result({
  "duration": 69326200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Tool 2",
      "offset": 52
    }
  ],
  "location": "ToolBuilderAdminSteps.disabledConfigureToolDef(String)"
});
formatter.result({
  "duration": 65757779,
  "status": "passed"
});
formatter.after({
  "duration": 64960084,
  "status": "passed"
});
formatter.after({
  "duration": 585961946,
  "status": "passed"
});
formatter.after({
  "duration": 597303526,
  "status": "passed"
});
formatter.after({
  "duration": 548453878,
  "status": "passed"
});
formatter.after({
  "duration": 549071875,
  "status": "passed"
});
formatter.before({
  "duration": 432949918,
  "status": "passed"
});
formatter.before({
  "duration": 37196,
  "status": "passed"
});
formatter.before({
  "duration": 23267,
  "status": "passed"
});
formatter.before({
  "duration": 21259,
  "status": "passed"
});
formatter.before({
  "duration": 19895,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Delete associated tool instances, deselect and delete an existing Tool Definition",
  "description": "",
  "id": "tool-definition-management;delete-associated-tool-instances,-deselect-and-delete-an-existing-tool-definition",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "the admin user is on the Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "she selects \"My New Tool Type\" as default tool definition",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "she goes to the Tool Instances Navigation Page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "a tool instance called \"My New Tool Def Instance\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the user selects the tool instance \"My New Tool Def Instance\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "she deletes the current tool instance",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "she logs out",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "the admin user goes to the Tool Builder admin page",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "a tooltip message with text \"unselect-or-delete-instances-to-configure-delete-tooldef\" is shown for the buttons on tool definition \"My New Tool Type\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "the user selects \"Test Tool\" as default tool definition",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the button to delete the tool definition called \"My New Tool Type\" is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "the button to configure the tool definition called \"My New Tool Type\" is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "she selects to delete the tool definition called \"My New Tool Type\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "she confirms the deletion",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "a tool definition called \"My New Tool Type\" does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 3267333302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 13
    }
  ],
  "location": "ToolBuilderAdminSteps.selectToolDef(String)"
});
formatter.result({
  "duration": 776917028,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 218805327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Def Instance",
      "offset": 24
    }
  ],
  "location": "ToolInstancesNavigationSteps.existingToolInstance(String)"
});
formatter.result({
  "duration": 136232487,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Def Instance",
      "offset": 36
    }
  ],
  "location": "ToolInstancesNavigationSteps.selectToolInstance(String)"
});
formatter.result({
  "duration": 122087739,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.deleteToolInstance()"
});
formatter.result({
  "duration": 89687482,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.logOut()"
});
formatter.result({
  "duration": 387254096,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 2114923710,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "unselect-or-delete-instances-to-configure-delete-tooldef",
      "offset": 29
    },
    {
      "val": "My New Tool Type",
      "offset": 132
    }
  ],
  "location": "ToolBuilderAdminSteps.toolTipOnButtonsToolDef(String,String)"
});
formatter.result({
  "duration": 781527269,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Tool",
      "offset": 18
    }
  ],
  "location": "ToolBuilderAdminSteps.selectToolDef(String)"
});
formatter.result({
  "duration": 663659850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 49
    }
  ],
  "location": "ToolBuilderAdminSteps.enabledDeleteToolDef(String)"
});
formatter.result({
  "duration": 83595024,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 52
    }
  ],
  "location": "ToolBuilderAdminSteps.enabledConfigureToolDef(String)"
});
formatter.result({
  "duration": 43685177,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 50
    }
  ],
  "location": "ToolBuilderAdminSteps.deleteToolDef(String)"
});
formatter.result({
  "duration": 69158054,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.confirmDeletion()"
});
formatter.result({
  "duration": 1125163798,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 26
    }
  ],
  "location": "ToolBuilderAdminSteps.notExistingToolDef(String)"
});
formatter.result({
  "duration": 57237727,
  "status": "passed"
});
formatter.after({
  "duration": 64974878,
  "status": "passed"
});
formatter.after({
  "duration": 603755132,
  "status": "passed"
});
formatter.after({
  "duration": 542285739,
  "status": "passed"
});
formatter.after({
  "duration": 518092634,
  "status": "passed"
});
formatter.after({
  "duration": 488149009,
  "status": "passed"
});
});