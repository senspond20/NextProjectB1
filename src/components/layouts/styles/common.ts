const calcRem = (size: number) => `${size / 16}rem`;

// 두개의 색상을 바꾸는 함수
const invertColor = ({fg,bg} : any) => ({
    fg : bg,
    bg : fg
})

const paddings = {
    small: calcRem(8),
    base: calcRem(10),
    lg: calcRem(12),
    xl: calcRem(14),
    xxl: calcRem(16),
    xxxl: calcRem(18),
};

const margins = {
    small: calcRem(8),
    base: calcRem(10),
    lg: calcRem(12),
    xl: calcRem(14),
    xxl: calcRem(16),
    xxxl: calcRem(18),
};

const interval = {
    base: calcRem(50),
    lg: calcRem(100),
    xl: calcRem(150),
    xxl: calcRem(200),
};

const verticalInterval = {
    base: `${calcRem(10)} 0 ${calcRem(10)} 0`,
};

const deviceSizes = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "450px",
    tablet: "768px",
    tabletL: "1024px",
};

const palette ={
    BLUE: ["#e7f5ff", "#d0ebff", "#a5d8ff", "#74c0fc", "#4dabf7", "#339af0", "#228be6", "#1c7ed6", "#1971c2", "#1864ab"],
    CYAN: ["#e3fafc", "#c5f6fa", "#99e9f2", "#66d9e8", "#3bc9db", "#22b8cf", "#15aabf", "#1098ad", "#0c8599", "#0b7285"],
    GRAPE: ["#f8f0fc", "#f3d9fa", "#eebefa", "#e599f7", "#da77f2", "#cc5de8", "#be4bdb", "#ae3ec9", "#9c36b5", "#862e9c"],
    GRAY: ["#f8f9fa", "#f1f3f5", "#e9ecef", "#dee2e6", "#ced4da", "#adb5bd", "#868e96", "#495057", "#343a40", "#212529"],
    GREEN:  ["#ebfbee", "#d3f9d8", "#b2f2bb", "#8ce99a", "#69db7c", "#51cf66", "#40c057", "#37b24d", "#2f9e44", "#2b8a3e"],
    INDIGO: ["#edf2ff", "#dbe4ff", "#bac8ff", "#91a7ff", "#748ffc", "#5c7cfa", "#4c6ef5", "#4263eb", "#3b5bdb", "#364fc7"],
    LIME: ["#f4fce3", "#e9fac8", "#d8f5a2", "#c0eb75", "#a9e34b", "#94d82d", "#82c91e", "#74b816", "#66a80f", "#5c940d"],
    ORANGE:  ["#fff4e6", "#ffe8cc", "#ffd8a8", "#ffc078", "#ffa94d", "#ff922b", "#fd7e14", "#f76707", "#e8590c", "#d9480f"],
    PINK:  ["#fff0f6", "#ffdeeb", "#fcc2d7", "#faa2c1", "#f783ac", "#f06595", "#e64980", "#d6336c", "#c2255c", "#a61e4d"],
    RED: ["#fff5f5", "#ffe3e3", "#ffc9c9", "#ffa8a8", "#ff8787", "#ff6b6b", "#fa5252", "#f03e3e", "#e03131", "#c92a2a"],
    TEAL: ["#e6fcf5", "#c3fae8", "#96f2d7", "#63e6be", "#38d9a9", "#20c997", "#12b886", "#0ca678", "#099268", "#087f5b"],
    VIOLET: ["#f3f0ff", "#e5dbff", "#d0bfff", "#b197fc", "#9775fa", "#845ef7", "#7950f2", "#7048e8", "#6741d9", "#5f3dc4"],
    YELLOW: ["#fff9db", "#fff3bf", "#ffec99", "#ffe066", "#ffd43b", "#fcc419", "#fab005", "#f59f00", "#f08c00", "#e67700"]
}

// const nodDrag =
// {-ms-user-select: none;
//     moz-user-select:
// -moz-none; -webkit-user-select: none; -khtml-user-select: none; user-select:none;}

const device = {
    mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
    mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
    mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
    tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
    tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
};
// 자주 사용하는 스타일 속성을 theme으로 만들어보자.
const flex = {
    flexCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
    flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
    flexJustify:`
    display: flex;
    justify-content: center;
    `
};
const border ={
    boarderlic :`
    border: 1px solid #999;
    border-radius:8px;
    `
};
const fontSizes = {
    small: calcRem(14),
    base: calcRem(16),
    lg: calcRem(18),
    xl: calcRem(20),
    xxl: calcRem(22),
    xxxl: calcRem(24),
    titleSize: calcRem(50),
    title: calcRem(60),
    _subtitle: calcRem(30),
    paragraph: calcRem(18),
};
const commonStyle ={
    flex,
    border,
    fontSizes,
    palette,
    deviceSizes,
    device,
    paddings,
    margins,
    interval,
    verticalInterval,
};

export default commonStyle;