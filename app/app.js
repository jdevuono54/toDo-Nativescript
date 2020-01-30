import Vue from "nativescript-vue";

import Home from "./components/views/Home";

Vue.prototype.$bus = new Vue()

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
