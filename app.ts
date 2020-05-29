import { SeleniumKit } from "./tool/SeleniumKit";
import { Builder, By, Key, until, Options, WebDriver, WebElement } from "selenium-webdriver";

console.log('Hello world');


let a = async () => {
    let sk = new SeleniumKit();
    await sk.init(new Builder().forBrowser('chrome'));
    await sk.driver.get('https://store.line.me/stickershop/product/1149795/?ref=Desktop');
    let em = await sk.driver.findElement(By.css(".MdCMN09DetailView"));
    let emb = await SeleniumKit.hasClass(em, "MdCMN09DetailView");
    console.log("emb:" + emb);

};

a();