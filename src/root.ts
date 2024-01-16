import Elysia from "elysia";

let root = new Elysia();

root.get('/', () => {
    return "Hello From Elysia";
});

export default root;