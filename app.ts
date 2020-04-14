import { SeleniumKit } from "./tool/SeleniumKit";

console.log('Hello world');


let a = async () => {
    let sk = new SeleniumKit();
    await sk.init();
    await sk.driver.get('https://store.line.me/stickershop/product/1149795/?ref=Desktop');

};