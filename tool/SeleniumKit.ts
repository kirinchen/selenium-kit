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

    public async init(bf: Builder): Promise<WebDriver> {
        this._driver = await bf.build();
        return this._driver;
    }

    public async findEditDom(slct: string): Promise<EditDOM> {
        let dom = await this._driver.findElement(By.css(slct));
        return new EditDOM(slct, dom);
    }


    public async setAttribute(slct: string, attr: string, val: any) {
        return await SeleniumUtils.setAttribute(this._driver, slct, attr, val);
    }

    public static async hasClass(element: WebElement, htmlClass: string) {
        let classes = (await element.getAttribute("class")).split(' ');
        if (classes != null) {
            for (let classAttrI in classes) {
                if (classes[classAttrI] == htmlClass) {
                    return true;
                }
            }
        }
        return false;
    }

    public static async getText(element: WebElement, cssSel: string): Promise<string> {
        let e = await element.findElement(By.css(cssSel));
        return await e.getText();
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