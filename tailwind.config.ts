const withMT = require("@material-tailwind/react/utils/withMT");
import { Poppins } from "next/font/google";

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#000000",
      "primary-gray": "#344054",
      "primary-gray-100": "#D6D9DD",
      "primary-gray-200": "#BBBFC6",
      "primary-gray-300": "#999FA9",
      "primary-gray-400": "#78808D",
      "primary-gray-500": "#566070",
      "primary-gray-600": "#2B3546",
      "primary-gray-700": "#232B38",
      "primary-gray-800": "#1A202A",
      "primary-gray-900": "#11151C",
      "primary-gray-1000": "#0A0D11",
      "primary-red": "#C7172C",
      "primary-red-100": "#F4D1D566",
      "primary-red-200": "#ECB2B9",
      "primary-red-300": "#E38B95",
      "primary-red-400": "#DA6472",
      "primary-red-500": "#D03E4F",
      "primary-red-600": "#A61325",
      "primary-red-700": "#850F1D",
      "primary-red-800": "#630B16",
      "primary-red-900": "#42080F",
      "primary-red-1000": "#280509",
      "primary-yellow": "#FDD100",
      "primary-yellow-100": "#FFF6CC",
      "primary-yellow-200": "#FEF0AA",
      "primary-yellow-300": "#FEE87F",
      "primary-yellow-400": "#FEE055",
      "primary-yellow-500": "#FDD92A",
      "primary-yellow-600": "#D3AE00",
      "primary-yellow-700": "#A98B00",
      "primary-yellow-800": "#7E6800",
      "primary-yellow-900": "#544600",
      "primary-yellow-1000": "#332A00",
      "primary-error": "#E62132",
      "primary-error-100": "#FAD3D6",
      "primary-error-200": "#F7B5BB",
      "primary-error-300": "#F29098",
      "primary-error-400": "#EE6B76",
      "primary-error-500": "#EA4654",
      "primary-error-600": "#C01B2A",
      "primary-error-700": "#991621",
      "primary-error-800": "#731019",
      "primary-error-900": "#4D0B11",
      "primary-error-1000": "#2E070A",
      "primary-warning": "#F79009",
      "primary-warning-100": "#FDE9CE",
      "primary-warning-200": "#FCDAAD",
      "primary-warning-300": "#FBC784",
      "primary-warning-400": "#FAB55B",
      "primary-warning-500": "#F8A232",
      "primary-warning-600": "#CE7807",
      "primary-warning-700": "#A56006",
      "primary-warning-800": "#7B4804",
      "primary-warning-900": "#523003",
      "primary-warning-1000": "#311D02",
      "primary-success": "#17B26A",
      "primary-success-100": "#D1F0E1",
      "primary-success-200": "#B2E5CD",
      "primary-success-300": "#8BD8B4",
      "primary-success-400": "#64CC9C",
      "primary-success-500": "#3EBF83",
      "primary-success-600": "#139458",
      "primary-success-700": "#0F7747",
      "primary-success-800": "#0B5935",
      "primary-success-900": "#083B23",
      "primary-success-1000": "#052415",
      "secondary-orangedark": "#D64B20",
      "secondary-orangedark-100": "#F7DBD2",
      "secondary-orangedark-200": "#F1C3B5",
      "secondary-orangedark-300": "#EAA58F",
      "secondary-orangedark-400": "#E4876A",
      "secondary-orangedark-500": "#DD6945",
      "secondary-orangedark-600": "#B23E1B",
      "secondary-orangedark-700": "#8F3215",
      "secondary-orangedark-800": "#6B2510",
      "secondary-orangedark-900": "#47190B",
      "secondary-orangedark-1000": "#2B0F06",
      "secondary-orange": "#DF6A18",
      "secondary-orange-100": "#F9E1D1",
      "secondary-orange-200": "#F4CDB2",
      "secondary-orange-300": "#EFB48B",
      "secondary-orange-400": "#EA9C65",
      "secondary-orange-500": "#E4833E",
      "secondary-orange-600": "#BA5814",
      "secondary-orange-700": "#954710",
      "secondary-orange-800": "#6F350C",
      "secondary-orange-900": "#4A2308",
      "secondary-orange-1000": "#2D1505",
      "secondary-graylight": "#D6D9DD",
      "secondary-graylight-100": "#F7F7F8",
      "secondary-graylight-200": "#F1F2F4",
      "secondary-graylight-300": "#EAECEE",
      "secondary-graylight-400": "#E4E6E8",
      "secondary-graylight-500": "#DDDFE3",
      "secondary-graylight-600": "#B2B5B8",
      "secondary-graylight-700": "#8F9193",
      "secondary-graylight-800": "#6B6C6E",
      "secondary-graylight-900": "#47484A",
      "secondary-graylight-1000": "#2B2B2C",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
});
