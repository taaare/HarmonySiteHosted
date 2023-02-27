module.exports = {
    "Create Discussion Thread": function(browser) {
        browser.navigateTo("../ReactApp/our-app/public/threadlist.html")
        browser.useCss()
        browser.sendKeys("body > div > div:nth-child(3) > textarea", "Nightwatch Created Thread")
        browser.sendKeys("body > div > div:nth-child(4) > textarea", ["Nightwatch Created Thread Content"])
        browser.click("body > div > div:nth-child(5) > button")

        const newThreadTitle = "body > div > div.main > ol > li:nth-child(4) > a > h4"
        browser.assert.textContains(newThreadTitle, "Nightwatch Created Thread")
    }
}