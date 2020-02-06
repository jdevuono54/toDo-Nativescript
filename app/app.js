import Vue from "nativescript-vue";

import Home from "./components/views/Home";
import VueLodash from 'vue-lodash'

Vue.use(VueLodash)

Vue.registerElement(
    'Fab',
    () => require('@nstudio/nativescript-floatingactionbutton').Fab
);

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
