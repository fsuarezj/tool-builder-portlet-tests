package org.lrc.liferay.toolbuilder.tests.functional.steps;

import org.lrc.liferay.toolbuilder.tests.functional.pages.ToolInstanceCommonPage;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.When;

public abstract class AbstractStepClass {

	protected WebDriver driver;
	protected static final String homeURL = "http://localhost:8080";
	
}
