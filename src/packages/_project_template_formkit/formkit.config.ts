import { defaultConfig, defineFormKitConfig } from "@formkit/vue";
import { rootClasses } from './formkit.theme'
import { createAutoAnimatePlugin } from "@formkit/addons";
import { createProPlugin, repeater } from "@formkit/pro";
import { genesisIcons } from '@formkit/icons'


const proPlugin = createProPlugin("fk-5b1a9102f1", {
    repeater,
});

export default defineFormKitConfig({
    config: {
        rootClasses
    },
    icons: {
        ...genesisIcons
    },
    plugins: [proPlugin, createAutoAnimatePlugin()],
})