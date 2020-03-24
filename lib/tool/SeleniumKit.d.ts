import { By, until, WebDriver, WebElement } from "selenium-webdriver";
export declare class SeleniumKit {
    _driver: WebDriver;
    get driver(): WebDriver;
    static getKit(): {
        By: typeof By;
        Key: import("selenium-webdriver/lib/input").IKey;
        until: typeof until;
    };
    init(driverName?: string): Promise<void>;
    findEditDom(slct: string): Promise<EditDOM>;
    setAttribute(slct: string, attr: string, val: any): Promise<unknown>;
}
export declare class EditDOM {
    select: string;
    dom: WebElement;
    constructor(_s: string, _d: WebElement);
    setAttribute(attr: string, val: any): Promise<unknown>;
}
