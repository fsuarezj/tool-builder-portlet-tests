package org.lrc.liferay.toolbuilder.tests.functional.utils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxBinary;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.firefox.internal.ProfilesIni;

public class DriverFactory {
	
	protected static WebDriver driver;
	private static final boolean HEADLESS = false;
	private static final String BROWSER = "chrome";
	private static final String SELENIUM_DIR = "/home/ferda/informatica/development/qa/selenium/lib/";
	
	public DriverFactory() {
		this(HEADLESS, BROWSER);
	}

	public DriverFactory(boolean headLess, String browser) {
		if (driver == null) {
			if (browser.equals("chrome")) {
				createNewChromeInstance(headLess);
			} else {
				createNewFirefoxInstance(headLess);
			}
		}
	}
	
	private void createNewFirefoxInstance(boolean headLess) {
		ProfilesIni allProfiles = new ProfilesIni();
		FirefoxProfile seleniumProfile = allProfiles.getProfile("selenium");
		System.out.println("Ha creado el profile");
		
		if (headLess) {
			// Must execute "Xvfb :1 -screen 0 1024x768x24" before executing
			String Xport = System.getProperty("Importal.xvfb.id", ":1");
			FirefoxBinary firefoxBinary = new FirefoxBinary();
			firefoxBinary.setEnvironmentProperty("DISPLAY", Xport);
			driver = new FirefoxDriver(firefoxBinary, seleniumProfile);
		} else {
			System.setProperty("webdriver.gecko.driver", SELENIUM_DIR + "geckodriver/geckodriver");
			driver = new FirefoxDriver(seleniumProfile);
		}
	}
	
	private void createNewChromeInstance(boolean headLess) {
		System.setProperty("webdriver.chrome.driver", SELENIUM_DIR + "chromedriver/chromedriver");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}
	
	public WebDriver getDriver() {
		return driver;
	}
	
	public void destroyDriver() {
		driver.quit();
		driver = null;
	}

}
