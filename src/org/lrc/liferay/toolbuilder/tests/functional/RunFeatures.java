package org.lrc.liferay.toolbuilder.tests.functional;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/features",
				tags = {"@tool-definition-portlet"},
//				tags = {"@chooseToolDef"},
//				tags = {"@testingFramework"},
				plugin = {"pretty", "html:reports/cucumber", "json:reports/cucumber_report.json"})
public class RunFeatures {

}
