import { Builder, By, Key, until, ThenableWebDriver, WebDriver, WebElement } from "selenium-webdriver";
import { String, StringBuilder } from 'typescript-string-operations';
import { Config } from 'bzk';
import { SeleniumUtils } from "./SeleniumUtils";
require('chromedriver');

export class SeleniumKit {

    _driver: WebDriver;


    public get driver(): WebDriver { return this._driver; }

    public static getKit() {
        return { By, Key, until };
    }

    public async init(driverName: string = 'chrome') {
        this._driver = await new Builder().forBrowser(driverName).build();
    }

    public async findEditDom(slct: string): Promise< EditDOM> {
        let dom = await this._driver.findElement(By.css(slct));
        return new EditDOM(slct,dom);
    }


    public async setAttribute( slct: string, attr: string, val: any) {
        return await SeleniumUtils.setAttribute(this._driver, slct, attr, val);
    }

}

export class EditDOM {
    select: string;
    dom: WebElement;

    public constructor(_s: string, _d: WebElement) {
        this.select = _s;
        this.dom = _d;
    }

    public async setAttribute(attr: string, val: any) {
        return await SeleniumUtils.setAttribute(this.dom.getDriver(), this.select, attr, val);
    }

}