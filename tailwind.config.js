// Transitioning from SCSS to utility-first might feel different at first, but many developers find that it speeds up their workflow once they get the hang of it. The idea is that you have a set of utility classes at your disposal that can be combined in numerous ways to achieve a wide variety of designs.
//  transitioning from SCSS or another preprocessor, think of these utility classes as dynamic classes that are automatically generated based on your configuration. Instead of writing specific CSS classes for each variation, you're leveraging a set of predefined utilities that cover a wide range of design needs.

/** @type {import('tailwindcss').Config} */
module.exports = {
  // This setting indicates that dark mode is activated via a class. This means you can toggle dark mode on elements by adding a .dark class to them.
  darkMode: ["class"],
  // These paths specify where Tailwind should "purge" or remove unused styles. In a production build, Tailwind will check these files and only include the styles that are actually being used, which results in a much smaller compiled CSS file.
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  // This section allows you to customize many of the default styles of Tailwind:
  theme: {
    container: {
      center: true,
      // REMOVED - this is causing the container to be too narrow
      padding: "2rem",
      // set a custom width for the 2xl breakpoint.
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // custom font families are defined. These can be used in the app with classes like .font-firaSans. The fonts are set using CSS variables, which could be defined elsewhere in your global styles.
      fontFamily: {
        firaSans: ["var(--font-firaSans)"],
        raleway: ["var(--font-raleway)"],
        lora: ["var(--font-lora)"],
        openSans: ["var(--font-openSans)"],
        firaSansCondensed: ["var(--font-firaSansCondensed)"],
      },
      backgroundImage: {
        // NEWDEV - doesn't feel like these do anything
        // It's supposed to allow you to define custom background images that can be used with Tailwind's bg- utility. For instance, .bg-thorium-rad-1 will apply the corresponding background image.
        "thorium-rad-1": "url('/home/thorium-radiance/thorium-rad-1.png')",
        "thorium-rad-2": "url('/home/thorium-radiance/thorium-rad-2.png')",
        "thorium-rad-3": "url('/home/thorium-radiance/thorium-rad-3.png')",
        "thorium-rad-4": "url('/home/thorium-radiance/thorium-rad-4.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      maxWidth: {
        blog: "var(--max-width-blog)",
      },
      height: {
        "1/4": "25vh",
        "1/3": "33.33vh",
        "1/2": "50vh",
      },
      colors: {
        // DEFAULT is a shorthand in Tailwind. It means that if you want to use the color defined in the DEFAULT property, you would use the color name only, without specifying any shades.
        // To use the color defined in DEFAULT, you would use the class .text-primary for text color or .bg-primary for background color.
        // For the foreground color, you would use .text-primary-foreground or .bg-primary-foreground.
        // hsl() is a way to define colors in CSS. It stands for:
        //  Hue (h): This is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, and 240 is blue.
        // Saturation (s): A percentage value; 0% means a shade of gray, and 100% is the full color.
        // Lightness (l): A percentage; 0% is black, 100% is white.
        // Tailwind will generate classes like: ".text-primary" and ".bg-primary" for the DEFAULT color or ".text-primary-foreground" and ".bg-primary-foreground" for the foreground color.
        // modified this to use HEX values instead of HSL because it's easier to work with
        // change the colors below from HSL to HEX
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          from: "var(--primary-from)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      // This section is defining color utilities based on CSS variables. So instead of having hard-coded values, it's using variables which might be set in a global CSS file, making the theme more dynamic.
      borderRadius: {
        "2xl": "calc(var(--radius) + 17px)",
        xl: "calc(var(--radius) + 2px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      gridTemplateColumns: {
        "holy-grail": "repeat(auto-fill, minmax(var(--min-column-width), 1fr))",
      },
      //   gridTemplateColumns: {
      //     'card-layout': '1fr',
      //     'md:card-layout': 'repeat(2, 1fr)',
      //     'lg:card-layout': 'repeat(3, 1fr)',
      // },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      // @DEV tailwindcss-text-fill-stroke
      // textFillColor: (theme) => theme("borderColor"),
      // textStrokeColor: (theme) => theme("borderColor"),
      // textStrokeWidth: (theme) => ({
      //   ...theme("borderWidth"),
      //   0.5: "0.5px",
      // }),
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // require("tailwindcss-text-fill-stroke"),
    require("@tailwindcss/typography"),
    function ({ addUtilities }) {
      const recentArticleBackgroundColors = {
        ".bg-color-0": {
          backgroundColor: "#FEFCF5",
        },
        ".bg-color-1": {
          backgroundColor: "#FAE9C4",
        },
        ".bg-color-2": {
          backgroundColor: "#FECA26",
        },
        ".bg-color-3": {
          backgroundColor: "#F58447",
        },
      };
      addUtilities(recentArticleBackgroundColors, ["responsive", "hover"]);
    },
  ],
};

// border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//           from: "hsl(var(--primary-from))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
