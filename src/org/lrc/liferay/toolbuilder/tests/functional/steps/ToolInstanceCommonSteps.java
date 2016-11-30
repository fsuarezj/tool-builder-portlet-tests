package org.lrc.liferay.toolbuilder.tests.functional.steps;

import org.lrc.liferay.toolbuilder.tests.functional.pages.ToolInstanceCommonPage;
import org.lrc.liferay.toolbuilder.tests.functional.utils.DriverFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ToolInstanceCommonSteps extends AbstractStepClass {

	@Before
	public void beforeScenario() {
		this.driver = new DriverFactory().getDriver();
	}

	@After
	public void afterScenario() {
		new DriverFactory().destroyDriver();
	}

	@When("^(?:she|he|the user) logs in the system as ([^\"]*) with password ([^\"]*)$")
	public void logIn(String login, String passwd) {
//		new ToolInstanceCommonPage(this.driver).deleteToolInstance();
		new ToolInstanceCommonPage(driver).clickLogIn();
		new ToolInstanceCommonPage(driver).fillLogin(login, passwd);
	}
	
	@When("^(?:she|he|the user) logs out$")
	public void logOut() {
//		new ToolInstanceCommonPage(this.driver).deleteToolInstance();
		new ToolInstanceCommonPage(driver).clickLogOut();
	}

	@When("^(?:she|he|the user) deletes the current tool instance$")
	public void deleteToolInstance() {
//		new ToolInstanceCommonPage(this.driver).deleteToolInstance();
		new ToolInstanceCommonPage(driver).deleteToolInstance();
	}
	
	@And("^(?:she|he|the user) waits (\\d+) seconds$")
	public void waitSeconds(int seconds) throws InterruptedException {
		new ToolInstanceCommonPage(driver).waitSeconds(seconds);
	}
	
	@And("^(?:she|he|the user) chooses to step forward$")
	public void stepForward() {
//		new ToolInstanceCommonPage(this.driver).stepForward();
		new ToolInstanceCommonPage(driver).stepForward();
	}
	
	@And("^(?:she|he|the user) chooses to exit the tool instance$")
	public void exitToolInstance() {
//		new ToolInstanceCommonPage(this.driver).exitToolInstance();
		new ToolInstanceCommonPage(driver).exitToolInstance();
	}
	
	@Then("^an error message with text \"(.*)\" is shown")
	public void errorMessageIs(String errorMessage) {
		new ToolInstanceCommonPage(driver).errorMessageIs(errorMessage);
	}
}
