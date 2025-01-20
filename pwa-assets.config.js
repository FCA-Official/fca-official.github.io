import {
    // combinePresetAndAppleSplashScreens,
    defineConfig,
    minimal2023Preset as preset,
} from '@vite-pwa/assets-generator/config'

export default defineConfig({
    headLinkOptions: {
        preset: '2023',
    },
    preset,
    // preset: combinePresetAndAppleSplashScreens(preset, {
    //     darkResizeOptions: { background: '#2A004E' },
    // }),
    images: ['public/appicon.png'],
})
