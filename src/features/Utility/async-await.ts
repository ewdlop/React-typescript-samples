import { __awaiter } from "tslib";

export async function ping() {
    for (var i = 0; i < 10; i++) {
        await delay(300);
        console.log("ping");
    }
}

export function ping2(this: any) {
    return __awaiter(this, void 0, Promise, function* () {
        for (var i = 0; i < 10; i++) {
            yield delay(300);
            console.log("ping");
        }
    });
}

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function myAsyncFunction(input: number) {
    let result = setTimeout(() => {
        console.log("Function: %d executed", input);
    }, 1000 * input);
}

// Promise.all([myAsyncFunction(3), myAsyncFunction(2), myAsyncFunction(1)]);