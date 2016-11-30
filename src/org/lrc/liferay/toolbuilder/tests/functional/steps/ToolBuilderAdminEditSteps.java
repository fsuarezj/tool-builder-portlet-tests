package org.lrc.liferay.toolbuilder.tests.functional.steps;

import org.lrc.liferay.toolbuilder.tests.functional.pages.ToolBuilderAdminEditPage;
import org.lrc.liferay.toolbuilder.tests.functional.utils.DriverFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.When;

public class ToolBuilderAdminEditSteps extends AbstractStepClass {
	
	@Before
	public void beforeScenario() {
		this.driver = new DriverFactory().getDriver();
	}

	@After
	public void afterScenario() {
		new DriverFactory().destroyDriver();
	}

	@When("^(?:the user|she|he) adds a step of type ([^\"]*)$")
	public void addNewStep(String stepType) {
		new ToolBuilderAdminEditPage(driver).createNewStep();
		new ToolBuilderAdminEditPage(driver).selectStep(stepType);
//		new ToolBuilderAdminEditPage(driver).waitUntilNotDlgModal();
	}
}
