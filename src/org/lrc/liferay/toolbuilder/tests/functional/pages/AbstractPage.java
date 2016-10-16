package org.lrc.liferay.toolbuilder.tests.functional.pages;

import org.openqa.selenium.Keys;
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
	private final static String XPATH_LOGIN_FORM = "//form[contains(@id, '_58_fm')]";
	private final static String XPATH_LOGIN_INPUT = XPATH_LOGIN_FORM + "//*[contains(@id, '_58_login')]";
	private final static String XPATH_PASSWD_INPUT = XPATH_LOGIN_FORM + "//*[contains(@id, '_58_password')]";
	private final static String XPATH_LOGIN_BUTTON = XPATH_LOGIN_FORM + "//*[contains(@class, 'btn')]";

//	@FindBy(xpath = XPATH_ALERT_MESSAGE) protected WebElement errorMessage;
	@FindBy(how = How.CLASS_NAME, using = "portlet-msg-error") private WebElement errorMessage;
	@FindBy(how = How.CLASS_NAME, using = "sign-in") private WebElement loginBegin;
	@FindBy(xpath = XPATH_LOGIN_INPUT) protected WebElement loginInput;
	@FindBy(xpath = XPATH_PASSWD_INPUT) protected WebElement passwdInput;
	@FindBy(xpath = XPATH_LOGIN_BUTTON) protected WebElement loginButton;

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

//	protected void TakeScreenShot(RuntimeException e, String fileName) {
//		File screenShot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
//		try {
//			FileUtils.copyFile(screenShot, new File(fileName + ".png"));
//		} catch (IOException ioe) {
//			throw new RuntimeException(ioe.getMessage(), ioe);
//		}
//		throw e;
//	}
//	
	protected void clearAndSetText(WebElement element, String text) {
		System.out.println("Creating Actions");
		Actions navigator = new Actions(driver);
		System.out.println("Click");
		navigator.click(element);
		System.out.println("Key End");
		navigator.sendKeys(Keys.END);
		System.out.println("Push Shift");
		navigator.keyDown(Keys.SHIFT);
		System.out.println("Key Home");
		navigator.sendKeys(Keys.HOME);
		System.out.println("Pull Shift");
		navigator.keyUp(Keys.SHIFT);
		System.out.println("Key back_space");
		navigator.sendKeys(Keys.BACK_SPACE);
		System.out.println("Keys text");
		navigator.sendKeys(text);
		System.out.println("Perform");
		navigator.perform();
	}

	public boolean errorMessageIs(String errorMessage) {
		return this.errorMessage.getText().equals(errorMessage);
	}

	public void clickLogIn() {
		this.loginBegin.click();
	}
	
	public void fillLogin(String login, String passwd) {
		System.out.println("Trying to clear and set text of login");
		this.clearAndSetText(loginInput, login);
		System.out.println("Trying to clear and set text of passwd");
		this.clearAndSetText(passwdInput, passwd);
		System.out.println("Trying to click login button");
		this.loginButton.click();
	}
}
