"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const SeleniumKit_1 = require("./tool/SeleniumKit");
console.log('Hello world');
let a = () => __awaiter(void 0, void 0, void 0, function* () {
    let sk = new SeleniumKit_1.SeleniumKit();
    yield sk.init();
    yield sk.driver.get('https://store.line.me/stickershop/product/1149795/?ref=Desktop');
});
//# sourceMappingURL=app.js.map