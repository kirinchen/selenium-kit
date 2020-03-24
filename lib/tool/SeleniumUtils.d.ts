import { WebDriver } from "selenium-webdriver";
export declare class SeleniumUtils {
    static setAttribute(driver: WebDriver, slct: string, attr: string, val: any): Promise<unknown>;
}
