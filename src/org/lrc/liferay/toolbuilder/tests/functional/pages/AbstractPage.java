package org.lrc.liferay.toolbuilder.tests.functional.pages;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public abstract class AbstractPage {

//	private final static String XPATH_ALERT_MESSAGE = "//*[contains(@id, 'errorMssage')]";

//	@FindBy(xpath = XPATH_ALERT_MESSAGE) protected WebElement errorMessage;
	@FindBy(how = How.CLASS_NAME, using = "portlet-msg-error") private WebElement errorMessage;

	private final static int TIMEOUT = 30;
	protected WebDriver driver;

	public AbstractPage(WebDriver driver) {
		this.driver = driver;
		AjaxElementLocatorFactory ajaxFactory = new AjaxElementLocatorFactory(driver, TIMEOUT);
		PageFactory.initElements(ajaxFactory, this);
	}
	
	protected void waitForVisibility(WebElement element) {
		new WebDriverWait(driver, TIMEOUT).until(ExpectedConditions.visibilityOf(element));
	}

	protected void TakeScreenShot(RuntimeException e, String fileName) {
		File screenShot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(screenShot, new File(fileName + ".png"));
		} catch (IOException ioe) {
			throw new RuntimeException(ioe.getMessage(), ioe);
		}
		throw e;
	}
	
	protected void clearAndSetText(WebElement element, String text) {
		Actions navigator = new Actions(driver);
		navigator.click(element)
			.sendKeys(Keys.END)
			.keyDown(Keys.SHIFT)
			.sendKeys(Keys.HOME)
			.keyUp(Keys.SHIFT)
			.sendKeys(Keys.BACK_SPACE)
			.sendKeys(text)
			.perform();
	}

	public boolean errorMessageIs(String errorMessage) {
		return this.errorMessage.getText().equals(errorMessage);
	}
}