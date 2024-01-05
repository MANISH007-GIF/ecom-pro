module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        green: {
          300: "#83d186",
          500: "#36c63f",
          700: "#20b426",
          800: "#2c732f",
          900: "#004513",
          A700_02: "#0aad4b",
          A700_01: "#28d05b",
          A700_03: "#13d962",
          "700_51": "#20b42651",
          A700_19: "#00b20619",
          A700: "#00b206",
          "900_14": "#0e6b1414",
          "900_01": "#2b562e",
          "700_19": "#20b42619",
          "900_02": "#1a421d",
          A700_63: "#00b20663",
          "500_19": "#56ac5919",
          A700_75: "#00b20675",
          "800_01": "#406b41",
          "800_02": "#009f06",
          "700_33": "#20b42633",
        },
        black: {
          900: "#002602",
          "900_b2": "#000000b2",
          "900_01": "#000000",
          "900_00": "#00000000",
          "900_02": "#00000002",
          "900_99": "#00000099",
          "900_19": "#00000019",
          "900_14": "#00260214",
          "900_a2": "#000000a2",
          "900_1e": "#0000001e",
          "900_14_01": "#00000014",
          "900_33": "#00000033",
        },
        orange: {
          300: "#ffb545",
          600: "#ff8900",
          700: "#f77c00",
          A700_02: "#f86400",
          A700_01: "#fa6d00",
          A100: "#fcd770",
          "600_01": "#f98500",
          A200: "#ff983b",
          A700: "#ff5e00",
        },
        blue: { A400: "#2388ff" },
        gray: {
          50: "#f9f9f9",
          100: "#f2f2f2",
          200: "#edf2ed",
          300: "#e5e5e5",
          400: "#b3b3b3",
          500: "#999999",
          600: "#7f7f7f",
          700: "#666666",
          800: "#4c4c4c",
          900: "#002c19",
          "800_02": "#5c2e1a",
          "800_01": "#693924",
          "700_02": "#555555",
          "700_01": "#606060",
          "700_89": "#66666689",
          "500_01": "#95b297",
          "200_01": "#ededed",
          "200_02": "#ebebe9",
          "400_99": "#b3ccb499",
          "100_02": "#f2f4f2",
          "400_01": "#b3ccb4",
          "400_89": "#b3b3b389",
          "100_01": "#f7f7f7",
          "900_02": "#173a19",
          "600_01": "#607f62",
          "900_01": "#191919",
          "300_03": "#dae5da",
          "300_02": "#e0e0de",
          "300_01": "#e6e6e6",
        },
        red: {
          200: "#cf9e76",
          300: "#c66b60",
          400: "#e94b48",
          500: "#e64c3f",
          600: "#ea3942",
          900: "#a82a27",
          "400_19": "#e94b4819",
          A200_01: "#fc4e51",
          "400_33": "#e94b4833",
          "200_01": "#db9b7c",
          "300_02": "#d49073",
          "300_01": "#e47c6e",
          A700: "#ed0006",
          A200: "#ff5368",
          "400_02": "#f35244",
          "400_01": "#d9435b",
        },
        yellow: { 500: "#fff61e", 800: "#e09f2c", "800_01": "#f7b030" },
        deep_orange: {
          50: "#f3e8d7",
          200: "#efbe9a",
          300: "#ff826e",
          400: "#ff7e40",
          500: "#fd6020",
          "200_01": "#ffbe9d",
          "300_01": "#eb996e",
        },
        light_green: {
          100: "#e5d6c1",
          300: "#b4dd7f",
          500: "#8cc152",
          600: "#7eb457",
          "600_01": "#79ad54",
        },
        blue_gray: {
          100: "#cccccc",
          300: "#999caa",
          400: "#7a997b",
          900: "#333333",
          "900_01": "#272343",
          "100_01": "#d9d9d9",
        },
        white: {
          A700_4c: "#ffffff4c",
          A700_d8: "#ffffffd8",
          A700_cc: "#ffffffcc",
          A700_90: "#ffffff90",
          A700_99: "#ffffff99",
          A700_11: "#ffffff11",
          A700_19: "#ffffff19",
          A700: "#ffffff",
          A700_6c: "#ffffff6c",
          A700_a2: "#ffffffa2",
          A700_87: "#ffffff87",
        },
        pink: { 400: "#d7249a" },
        lime: {
          400: "#dee051",
          600: "#c7c934",
          900: "#ad6643",
          "400_01": "#d0d24b",
        },
        amber: { 300: "#ffcf5d", 700: "#f9a000", A400: "#fcc900" },
        indigo: { 400: "#5c87bd", 500: "#456ea2" },
      },
      boxShadow: {
        bs10: "inset 0px -0.5px  1px 0px #cccccc",
        bs: "0px -1px  1px 0px #e5e5e5",
        bs5: "0px 1px  1px 0px #e5e5e5",
        bs18: "inset 0px -1px  1px 0px #e5e5e5",
        bs15: "0px -1px  1px 0px #1a421d",
        bs19: "inset 0px -2px  1px 0px #20b426",
        bs11: "inset 0px -3px  1px 0px #00b206",
        bs17: "inset 0px -4px  1px 0px #00b206",
        bs8: "0px -1px  1px 0px #333333",
        bs14: "0px 1.5px  1px 0px #20b426",
        bs1: "inset 3px 0px  1px 0px #20b426",
        bs12: "0px 0px  12px 0px #0000001e",
        bs2: "0px 0px  12px 0px #20b42651",
        bs7: "0px 16px  48px 0px #0e6b1414",
        bs20: "0px 0px  20px 0px #00000033",
        bs21: "0px 0px  56px 0px #00260214",
        bs13: "0px 8px  40px 0px #00000014",
        bs9: "0px 8px  40px 0px #00260214",
        bs4: "0px 10px  20px 0px #00000002",
        bs16: "0px 10px  80px 0px #00000019",
        bs6: "0px 20px  48px 0px #00260214",
        bs3: "0px 20px  50px 0px #00000014",
      },
      fontFamily: {
        poppins: "Poppins",
        dmsans: "DM Sans",
        dancingscript: "Dancing Script",
        segoescript: "Segoe Script",
      },
      backgroundImage: {
        gradient: "linear-gradient(108deg ,#00000099,#00000000)",
        gradient1: "linear-gradient(95deg ,#000000b2,#00000000)",
        gradient2: "radial-gradient(#002c19,#004513)",
        gradient3: "linear-gradient(180deg ,#f2f4f2,#ffffff)",
        gradient4: "linear-gradient(180deg ,#ffffff,#f2f4f2)",
        gradient5: "linear-gradient(180deg ,#f9f9f9,#ffffff)",
        gradient6: "linear-gradient(180deg ,#f2f2f2,#ffffff)",
      },
      textShadow: { ts1: "0px 2px  1px #20b426", ts: "0px 1.5px  1px #20b426" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
