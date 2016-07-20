package org.lrc.liferay.toolbuilder.tests.functional.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ToolInstanceCommonPage extends AbstractPage {
	
	private final static String TITLE = "Welcome - Mi Sitio";

	private final static String TOOL_INSTANCE_FORM = ":toolInstanceForm:";
	private final static String XPATH_CANCEL_TOOL_INSTANCE_BUTTON = "//*[substring-after(@id, '" + TOOL_INSTANCE_FORM +  "') = 'cancelToolInstanceButton']";
	private final static String XPATH_DELETE_TOOL_INSTANCE_BUTTON = "//*[substring-after(@id, '" + TOOL_INSTANCE_FORM +  "') = 'deleteToolInstanceButton']";
	private final static String XPATH_STEP_FORWARD_BUTTON = "//*[substring-after(@id, '" + TOOL_INSTANCE_FORM +  "') = 'stepForwardButton']";

	@FindBy(xpath = XPATH_CANCEL_TOOL_INSTANCE_BUTTON) private WebElement cancelToolInstanceButton;
	@FindBy(xpath = XPATH_DELETE_TOOL_INSTANCE_BUTTON) private WebElement deleteToolInstanceButton;
	@FindBy(xpath = XPATH_STEP_FORWARD_BUTTON) private WebElement stepForwardButton;

	public ToolInstanceCommonPage(WebDriver driver) {
		super(driver);
	}
	
	public void exitToolInstance() {
		this.cancelToolInstanceButton.click();
	}
		
	public void stepForward() {
		this.stepForwardButton.click();
	}

	public void deleteToolInstance() {
		this.deleteToolInstanceButton.click();
	}
	
	public boolean validateTitle() {
		return driver.getTitle().equals(TITLE);
	}

	public void waitSeconds(int seconds) throws InterruptedException {
		Thread.sleep(seconds*1000);
//		new WebDriverWait(this.driver, seconds);
	}
	
}
