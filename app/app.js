import Vue from "nativescript-vue";

import Home from "./components/views/Home";

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
