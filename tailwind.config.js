/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'sora-regular': ['Sora-Regular'],
        'sora-medium': ['Sora-Medium'],
        'sora-semibold': ['Sora-SemiBold'],
        'sora-bold': ['Sora-Bold'],
        'jakarta-regular': ['PlusJakartaSans-Regular'],
        'jakarta-medium': ['PlusJakartaSans-Medium'],
        'jakarta-semibold': ['PlusJakartaSans-SemiBold'],
        'jakarta-bold': ['PlusJakartaSans-Bold'],
      },
    },
  },
  plugins: [],
}