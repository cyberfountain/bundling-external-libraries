import Foo from "./Modules/Foo"

new Foo();

(async () => {
    const m = await import("./Modules/Dog")
        .then(m => m.default)

    const dog = new m()
    dog.bark()
})()

console.log("ts")
