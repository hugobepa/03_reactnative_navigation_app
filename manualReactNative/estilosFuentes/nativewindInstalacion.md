https://www.nativewind.dev/
https://www.nativewind.dev/docs/getting-started/installation

npm install nativewind react-native-reanimated@~3.17.4 react-native-safe-area-context@5.4.0
npm install --dev tailwindcss@^3.4.17 prettier-plugin-tailwindcss@^0.5.11

1. solucion:

./tailwind.config.ts:

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx",
             "./app/**/*.{js,jsx,ts,tsx}",
            "./components/**/*.{js,jsx,ts,tsx}",
             "./presentation/**/*.{js,jsx,ts,tsx}",
          ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

./app/global.ccs:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
@import "tailwindcss";
```

./metro.config.js:

```
module.exports = withNativeWind(config, { input: './app/global.css' })

```

2.  segunda solucion, opcional solucion segunda:

```
npx expo customize metro.config.js

De momento se puede resolver instalandolo de la siguiente forma:

npx expo install nativewind tailwindcss@3 react-native-reanimated@3.16.2 react-native-safe-area-context

npx tailwindcss init

```
