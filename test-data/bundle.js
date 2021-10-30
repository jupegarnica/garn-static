const __default = {
    "for every dot return 0 or 1 \nto change the visibility": "Math.random() < 0.1",
    "use a float between 0 and 1\n to define the size": "Math.random()",
    "parameter `t` is \nthe time in seconds": "Math.sin(t)",
    "param `i` is the index \nof the dot (0..255)": "i / 256",
    "`x` is the column index\n from 0 to 15": "x / 16",
    "`y` is the row\n also from 0 to 15": "y / 16",
    "positive numbers are white,\nnegatives are red": "y - 7.5",
    "use the time\nto animate values": "y - t",
    "multiply the time\nto change the speed": "y - t*4",
    "create patterns using \ndifferent color": "[1, 0, -1][i%3]",
    "skip `Math.` to use methods \nand props like `sin` or `PI`": "sin(t-sqrt((x-7.5)**2+(y-6)**2))",
    "if it returns an array,\n the first value is the radius": "[.3, 'purple']",
    "the second one\nis the color for positive values": "[.6, 255]",
    "the third one\nis  for negative values": "[sin(t), 192, 'cyan']",
    "the fourth one\nis the background": "[\nsin(t),\n'#fc0',\n'rgba(255,255,55)',\n'white'\n]",
    "you can represent a color\nas a number or string\n": "[tan(t), 55, '#0cf']",
    "as string any valid\n css color works": "[1, 'hsl(200,100%,50%)']",
    "as number there are 256 colors\na 0 to 255 rainbow palette": "[1, i]",
    "have fun!": "[\nt-x-y,,,\n`linear-gradient(${sin(t/3)*360}deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)`]",
    "more examples ...": "sin(y/8 + t)",
    "simple triangle": "y - x",
    "quarter triangle": "(y > x) && (14-x < y)",
    "pattern": "i%4 - y%4",
    "grid": "x%4 && y%4",
    "square": "x>3 & y>3 & x<12 & y<12",
    "animated square": "-(x>t & y>t & x<15-t & y<15-t)",
    "mondrian squares": "(y-6) * (x-6)",
    "moving cross": "(y-4*t|0) * (x-2-t|0)",
    "sierpinski": "4 * t & i & x & y",
    "binary clock": "(t*10) & (1<<x) && y==8",
    "random noise": "random() * 2 - 1",
    "static smooth noise": "sin(i ** 2)",
    "animated smooth noise": "cos(t + i + x * y)",
    "waves": "sin(x/2) - sin(x-t) - y+6",
    "bloop bloop bloop\nby @v21": "(x-8)*(y-8) - sin(t)*64",
    "fireworks\nby @p_malin and @aemkei": "-.4/(hypot(x-t%10,y-t%8)-t%2*9)",
    "ripples\nby @thespite": "Math.sin(t-Math.sqrt(x*x+y*y))",
    "scrolling TIXY font\nby @atesgoral": "[5463,2194,2386][y+t*9&7]&1<<x-1",
    "3d checker board\nby @p_malin": "(((x-8)/y+t*5)&1^1/y*8&1)*y/5",
    "sticky blood\nby @joeytwiddle": "y-t*3+9+3*cos(x*3-t)-5*sin(x*7)",
    "3d starfield\nby @p_malin": "d=y*y%5.9+1,!((x+t*50/d)&15)/d",
    "dialogue with an alien\nby @chiptune": "1/32*tan(t/64*x*tan(i-x))",
    "space invader\nby @keithclarkcouk + @zozuar": "'p}¶¼<¼¶}p'.charCodeAt(x)&2**y",
    "hungry pac man\nby @p_malin and @aemkei": "hypot(x-=t%4*5,y-=8)<6&&x<y|y<-x",
    "spectrum analyser\nby @joeytwiddle": "x&y<9&y>4+sin(8*t+x*x)+x/4",
    "diagonals": "y == x || -(15-x == y)",
    "frame": "x==0 | x==15 | y==0 | y==15",
    "drop": "8*t%13 - hypot(x-7.5, y-7.5)",
    "rotation": "sin(2*atan((y-7.5)/(x-7.5))+5*t)",
    "wipe": "(x-y) - sin(t) * 16",
    "soft wipe": "(x-y)/24 - sin(t)",
    "disco": "sin(t*5) * tan(t*7)",
    "input is limited \nto 32 characters!": "(x-5)**2 + (y-5)**2 - 99*sin(t)",
    "click here to \ncreate your own": "'HAVE FUN!'"
};
const colors256 = [
    "rgb(0, 0, 0)",
    "rgb(6, 0, 6)",
    "rgb(12, 0, 12)",
    "rgb(18, 0, 18)",
    "rgb(24, 0, 24)",
    "rgb(30, 0, 30)",
    "rgb(36, 0, 36)",
    "rgb(42, 0, 42)",
    "rgb(48, 0, 48)",
    "rgb(54, 0, 54)",
    "rgb(60, 0, 60)",
    "rgb(66, 0, 66)",
    "rgb(72, 0, 72)",
    "rgb(78, 0, 78)",
    "rgb(84, 0, 84)",
    "rgb(90, 0, 90)",
    "rgb(96, 0, 96)",
    "rgb(96, 0, 102)",
    "rgb(96, 0, 108)",
    "rgb(96, 0, 114)",
    "rgb(96, 0, 120)",
    "rgb(96, 0, 126)",
    "rgb(96, 0, 132)",
    "rgb(96, 0, 138)",
    "rgb(96, 0, 144)",
    "rgb(96, 0, 150)",
    "rgb(96, 0, 156)",
    "rgb(96, 0, 162)",
    "rgb(96, 0, 168)",
    "rgb(96, 0, 174)",
    "rgb(96, 0, 180)",
    "rgb(96, 0, 186)",
    "rgb(96, 0, 192)",
    "rgb(90, 0, 192)",
    "rgb(84, 0, 192)",
    "rgb(78, 0, 192)",
    "rgb(72, 0, 192)",
    "rgb(66, 0, 192)",
    "rgb(60, 0, 192)",
    "rgb(54, 0, 192)",
    "rgb(48, 0, 192)",
    "rgb(42, 0, 192)",
    "rgb(36, 0, 192)",
    "rgb(30, 0, 192)",
    "rgb(24, 0, 192)",
    "rgb(18, 0, 192)",
    "rgb(12, 0, 192)",
    "rgb(6, 0, 192)",
    "rgb(0, 0, 192)",
    "rgb(0, 0, 196)",
    "rgb(0, 0, 200)",
    "rgb(0, 0, 204)",
    "rgb(0, 0, 208)",
    "rgb(0, 0, 212)",
    "rgb(0, 0, 216)",
    "rgb(0, 0, 220)",
    "rgb(0, 0, 224)",
    "rgb(0, 0, 228)",
    "rgb(0, 0, 232)",
    "rgb(0, 0, 236)",
    "rgb(0, 0, 240)",
    "rgb(0, 0, 244)",
    "rgb(0, 0, 248)",
    "rgb(0, 0, 255)",
    "rgb(0, 8, 255)",
    "rgb(0, 16, 255)",
    "rgb(0, 24, 255)",
    "rgb(0, 32, 255)",
    "rgb(0, 40, 255)",
    "rgb(0, 48, 255)",
    "rgb(0, 56, 255)",
    "rgb(0, 64, 255)",
    "rgb(0, 72, 255)",
    "rgb(0, 80, 255)",
    "rgb(0, 88, 255)",
    "rgb(0, 96, 255)",
    "rgb(0, 104, 255)",
    "rgb(0, 112, 255)",
    "rgb(0, 120, 255)",
    "rgb(0, 128, 255)",
    "rgb(0, 136, 255)",
    "rgb(0, 144, 255)",
    "rgb(0, 152, 255)",
    "rgb(0, 160, 255)",
    "rgb(0, 168, 255)",
    "rgb(0, 176, 255)",
    "rgb(0, 184, 255)",
    "rgb(0, 192, 255)",
    "rgb(0, 200, 255)",
    "rgb(0, 208, 255)",
    "rgb(0, 216, 255)",
    "rgb(0, 224, 255)",
    "rgb(0, 232, 255)",
    "rgb(0, 240, 255)",
    "rgb(0, 248, 255)",
    "rgb(0, 255, 255)",
    "rgb(0, 255, 247)",
    "rgb(0, 255, 239)",
    "rgb(0, 255, 231)",
    "rgb(0, 255, 223)",
    "rgb(0, 255, 215)",
    "rgb(0, 255, 207)",
    "rgb(0, 255, 199)",
    "rgb(0, 255, 191)",
    "rgb(0, 255, 183)",
    "rgb(0, 255, 175)",
    "rgb(0, 255, 167)",
    "rgb(0, 255, 159)",
    "rgb(0, 255, 151)",
    "rgb(0, 255, 143)",
    "rgb(0, 255, 135)",
    "rgb(0, 255, 128)",
    "rgb(0, 255, 120)",
    "rgb(0, 255, 112)",
    "rgb(0, 255, 104)",
    "rgb(0, 255, 96)",
    "rgb(0, 255, 88)",
    "rgb(0, 255, 80)",
    "rgb(0, 255, 72)",
    "rgb(0, 255, 64)",
    "rgb(0, 255, 56)",
    "rgb(0, 255, 48)",
    "rgb(0, 255, 40)",
    "rgb(0, 255, 32)",
    "rgb(0, 255, 24)",
    "rgb(0, 255, 16)",
    "rgb(0, 255, 8)",
    "rgb(0, 255, 0)",
    "rgb(8, 255, 0)",
    "rgb(16, 255, 0)",
    "rgb(24, 255, 0)",
    "rgb(32, 255, 0)",
    "rgb(40, 255, 0)",
    "rgb(48, 255, 0)",
    "rgb(56, 255, 0)",
    "rgb(64, 255, 0)",
    "rgb(72, 255, 0)",
    "rgb(80, 255, 0)",
    "rgb(88, 255, 0)",
    "rgb(96, 255, 0)",
    "rgb(104, 255, 0)",
    "rgb(112, 255, 0)",
    "rgb(120, 255, 0)",
    "rgb(128, 255, 0)",
    "rgb(136, 255, 0)",
    "rgb(144, 255, 0)",
    "rgb(152, 255, 0)",
    "rgb(160, 255, 0)",
    "rgb(168, 255, 0)",
    "rgb(176, 255, 0)",
    "rgb(184, 255, 0)",
    "rgb(192, 255, 0)",
    "rgb(200, 255, 0)",
    "rgb(208, 255, 0)",
    "rgb(216, 255, 0)",
    "rgb(224, 255, 0)",
    "rgb(232, 255, 0)",
    "rgb(240, 255, 0)",
    "rgb(248, 255, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 251, 0)",
    "rgb(255, 247, 0)",
    "rgb(255, 243, 0)",
    "rgb(255, 239, 0)",
    "rgb(255, 235, 0)",
    "rgb(255, 231, 0)",
    "rgb(255, 227, 0)",
    "rgb(255, 223, 0)",
    "rgb(255, 219, 0)",
    "rgb(255, 215, 0)",
    "rgb(255, 211, 0)",
    "rgb(255, 207, 0)",
    "rgb(255, 203, 0)",
    "rgb(255, 199, 0)",
    "rgb(255, 195, 0)",
    "rgb(255, 192, 0)",
    "rgb(255, 188, 0)",
    "rgb(255, 184, 0)",
    "rgb(255, 180, 0)",
    "rgb(255, 176, 0)",
    "rgb(255, 172, 0)",
    "rgb(255, 168, 0)",
    "rgb(255, 164, 0)",
    "rgb(255, 160, 0)",
    "rgb(255, 156, 0)",
    "rgb(255, 152, 0)",
    "rgb(255, 148, 0)",
    "rgb(255, 144, 0)",
    "rgb(255, 140, 0)",
    "rgb(255, 136, 0)",
    "rgb(255, 132, 0)",
    "rgb(255, 128, 0)",
    "rgb(255, 120, 0)",
    "rgb(255, 112, 0)",
    "rgb(255, 104, 0)",
    "rgb(255, 96, 0)",
    "rgb(255, 88, 0)",
    "rgb(255, 80, 0)",
    "rgb(255, 72, 0)",
    "rgb(255, 64, 0)",
    "rgb(255, 56, 0)",
    "rgb(255, 48, 0)",
    "rgb(255, 40, 0)",
    "rgb(255, 32, 0)",
    "rgb(255, 24, 0)",
    "rgb(255, 16, 0)",
    "rgb(255, 8, 0)",
    "rgb(255, 0, 0)",
    "rgb(255, 6, 6)",
    "rgb(255, 12, 12)",
    "rgb(255, 18, 18)",
    "rgb(255, 24, 24)",
    "rgb(255, 30, 30)",
    "rgb(255, 36, 36)",
    "rgb(255, 42, 42)",
    "rgb(255, 48, 48)",
    "rgb(255, 54, 54)",
    "rgb(255, 60, 60)",
    "rgb(255, 66, 66)",
    "rgb(255, 72, 72)",
    "rgb(255, 78, 78)",
    "rgb(255, 84, 84)",
    "rgb(255, 90, 90)",
    "rgb(255, 96, 96)",
    "rgb(255, 102, 102)",
    "rgb(255, 108, 108)",
    "rgb(255, 114, 114)",
    "rgb(255, 120, 120)",
    "rgb(255, 126, 126)",
    "rgb(255, 132, 132)",
    "rgb(255, 138, 138)",
    "rgb(255, 144, 144)",
    "rgb(255, 150, 150)",
    "rgb(255, 156, 156)",
    "rgb(255, 162, 162)",
    "rgb(255, 168, 168)",
    "rgb(255, 174, 174)",
    "rgb(255, 180, 180)",
    "rgb(255, 186, 186)",
    "rgb(255, 192, 192)",
    "rgb(255, 196, 196)",
    "rgb(255, 200, 200)",
    "rgb(255, 204, 204)",
    "rgb(255, 208, 208)",
    "rgb(255, 212, 212)",
    "rgb(255, 216, 216)",
    "rgb(255, 220, 220)",
    "rgb(255, 224, 224)",
    "rgb(255, 228, 228)",
    "rgb(255, 232, 232)",
    "rgb(255, 236, 236)",
    "rgb(255, 240, 240)",
    "rgb(255, 244, 244)",
    "rgb(255, 248, 248)",
    "rgb(255, 252, 252)",
    "rgb(255, 255, 255)", 
];
function chooseColor(i, c = colors256) {
    i = i >> 0;
    i = i < 0 ? 0 : i;
    i = i >= c.length ? c.length - 1 : i;
    return c[i];
}
const { abs , atan2 , cos , floor , log , min , max , round , sign , sin , sqrt , cbrt , PI , hypot  } = Math;
function lerp(a, b, f) {
    return a + (b - a) * f;
}
function lerpInv(a, b, f) {
    return (f - a) / (b - a);
}
function clamp(x, min = 0, max = 1) {
    return x < min ? min : x > max ? max : x;
}
function newtonIterate1d(f, xStart, max_steps, eps = 0.00000001) {
    let x = xStart, fx;
    while((max_steps--) && abs(fx = f(x)) > eps){
        const dfdx = (f(x + eps) - fx) / eps;
        console.log("fx / dfdx", fx / dfdx, "fx", fx, "x", x);
        x = x - fx / dfdx;
    }
    return x;
}
function bisect(f, a, b, steps) {
    let fA = f(a);
    while(steps--){
        const c = (a + b) / 2;
        const fC = f(c);
        if (sign(fA) == sign(fC)) {
            a = c;
            fA = fC;
        } else {
            b = c;
        }
    }
    return (a + b) / 2;
}
const DEG2RAD = PI / 180;
const RAD2DEG = 180 / PI;
function color(...args) {
    if (args[0] instanceof Color) {
        return args[0];
    }
    if (args.length > 1 && "string" == typeof args[args.length - 1]) {
        return guess(args.slice(0, args.length - 1), args[args.length - 1]);
    } else if (Array.isArray(args[0])) {
        return guess(args[0]);
    } else {
        return guess(args);
    }
}
class Color {
    r;
    g;
    b;
    a;
    constructor(r, g, b, a = 1){
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    mix(col2, f, m = "rgb") {
        return mix(this, col2, f, m);
    }
    rgb(doRound = true, clamp_ = true) {
        const f = (t)=>{
            if (doRound) t = round(t);
            if (clamp_) t = clamp(t, 0, 255);
            return t;
        };
        const { r , g , b  } = this;
        return [
            f(r),
            f(g),
            f(b)
        ];
    }
    rgba(doRound = true, clamp_ = true) {
        const f = (t)=>{
            if (doRound) t = round(t);
            if (clamp_) t = clamp(t, 0, 255);
            return t;
        };
        const { r , g , b , a  } = this;
        return [
            f(r),
            f(g),
            f(b),
            a
        ];
    }
    hex(mode = "rgb") {
        const { r , g , b , a  } = this;
        return rgb2hex(r, g, b, a, mode);
    }
    hsl() {
        const { r , g , b  } = this;
        return rgb2hsl(r, g, b);
    }
    hsv() {
        const { r , g , b  } = this;
        return rgb2hsv(r, g, b);
    }
    hcg() {
        const { r , g , b  } = this;
        return rgb2hcg(r, g, b);
    }
    css(mode = "rgb") {
        if ("rgb" == mode) {
            const { r , g , b , a  } = this;
            return rgb2css(r, g, b, a);
        } else if ("hsl" == mode) {
            return hsl2css(this.hsl(), this.alpha());
        } else {
            throw new Error();
        }
    }
    name(closest = false) {
        const thisNum = this.num();
        const name = Object.keys(w3cx11).find((name)=>w3cx11[name] == thisNum
        );
        if (!name && closest) {
            const [thisLStar, thisAStar, thisBStar] = this.lab();
            return withMax(Object.keys(w3cx11), (name)=>{
                const [lStar, aStar, bStar] = num(w3cx11[name]).lab();
                return -hypot(thisLStar - lStar, thisAStar - aStar, thisBStar - bStar);
            });
        }
        return name;
    }
    cmyk() {
        const { r , g , b  } = this;
        return rgb2cmyk(r, g, b);
    }
    gl() {
        const { r , g , b , a  } = this;
        return [
            r / 255,
            g / 255,
            b / 255,
            a
        ];
    }
    luminance(lum1) {
        const { r , g , b , a  } = this;
        const [, Y] = rgb2xyz(r, g, b);
        if (undefined === lum1) {
            return Y;
        }
        const inverseLerp = (a, b, val)=>(val - a) / (b - a)
        ;
        if (lum1 > Y) {
            return mix(this, white, inverseLerp(Y, 1, lum1), "xyz").alpha(a);
        } else {
            return mix(black, this, inverseLerp(0, Y, lum1), "xyz").alpha(a);
        }
    }
    temperature() {
        const { r , g , b  } = this;
        return rgb2kelvin(r, g, b);
    }
    set(modeAndChannel, value) {
        const [mode, channel] = modeAndChannel.split(".");
        const src = this[mode]();
        const i = mode.indexOf(channel);
        if (-1 == i) throw new Error("invalid channel");
        src[i] = "number" == typeof value ? value : value(src[i]);
        return color(src, mode).alpha(this.a);
    }
    clipped() {
        const { r , g , b  } = this;
        return !(0 <= r && r <= 255 && 0 <= g && g <= 255 && 0 <= b && b <= 255);
    }
    textColor() {
        return this.luminance() > 0.5 ? black : white;
    }
    alpha(alpha1) {
        if (undefined === alpha1) {
            return this.a;
        }
        const { r , g , b  } = this;
        return rgb(r, g, b, alpha1);
    }
    darker(amount = 1) {
        const [l, a, b] = this.lab();
        return lab(l - LAB_Kn * amount, a, b, this.alpha());
    }
    brighter(amount = 1) {
        return this.darker(-amount);
    }
    saturate(amount = 1) {
        const [l, c, h] = this.lch();
        return lch(l, max(0, c + amount * LAB_Kn), h, this.alpha());
    }
    desaturate(amount = 1) {
        return this.saturate(-amount);
    }
    premultiplied() {
        const { r , g , b , a  } = this;
        return rgb(r * a, g * a, b * a, a);
    }
    hsi() {
        const { r , g , b  } = this;
        return rgb2hsi(r, g, b);
    }
    lab() {
        const { r , g , b  } = this;
        return rgb2lab(r, g, b);
    }
    num(mode = "rgb") {
        const { r , g , b , a  } = this;
        return rgb2num(r, g, b, a, mode);
    }
    lch() {
        const { r , g , b  } = this;
        return rgb2lch(r, g, b);
    }
    xyz() {
        const { r , g , b  } = this;
        return rgb2xyz(r, g, b);
    }
    equals(color) {
        const { r , g , b , a  } = this;
        const { r: r2 , g: g2 , b: b2 , a: a2  } = color;
        return r == r2 && g == g2 && b == b2 && a == a2;
    }
    hashCode() {
        return this.num("rgba");
    }
    toSource() {
        const { r , g , b , a  } = this;
        return "chroma.rgb(" + r + ", " + g + ", " + b + (a === 1 ? ")" : ", " + a + ")");
    }
}
Color.prototype.toString = Color.prototype.css;
Color.prototype.kelvin = Color.prototype.temperature;
const black = new Color(0, 0, 0, 1);
const white = new Color(255, 255, 255, 1);
const brewer = {
    OrRd: [
        16775148,
        16705736,
        16635038,
        16628612,
        16551257,
        15689032,
        14102559,
        11730944,
        8323072
    ],
    PuBu: [
        16775163,
        15525874,
        13685222,
        10927579,
        7645647,
        3576000,
        356528,
        285325,
        145496
    ],
    BuPu: [
        16252157,
        14740724,
        12571622,
        10403034,
        9213638,
        9202609,
        8929693,
        8458108,
        5046347
    ],
    Oranges: [
        16774635,
        16705230,
        16634018,
        16625259,
        16616764,
        15821075,
        14239745,
        10892803,
        8333060
    ],
    BuGn: [
        16252157,
        15070713,
        13429990,
        10082505,
        6734500,
        4304502,
        2329413,
        27948,
        17435
    ],
    YlOrBr: [
        16777189,
        16775100,
        16704401,
        16696399,
        16685353,
        15495188,
        13388802,
        10040324,
        6694150
    ],
    YlGn: [
        16777189,
        16252089,
        14282915,
        11394446,
        7915129,
        4303709,
        2327619,
        26679,
        17705
    ],
    Reds: [
        16774640,
        16703698,
        16563105,
        16552562,
        16476746,
        15678252,
        13309981,
        10817301,
        6750221
    ],
    RdPu: [
        16775155,
        16638173,
        16565696,
        16424885,
        16214177,
        14496919,
        11403646,
        7995767,
        4784234
    ],
    Greens: [
        16252149,
        15070688,
        13101504,
        10607003,
        7652470,
        4303709,
        2329413,
        27948,
        17435
    ],
    YlGnBu: [
        16777177,
        15595697,
        13101492,
        8375739,
        4306628,
        1937856,
        2252456,
        2438292,
        531800
    ],
    Purples: [
        16579581,
        15724021,
        14342891,
        12369372,
        10394312,
        8420794,
        6967715,
        5515151,
        4128893
    ],
    GnBu: [
        16252144,
        14742491,
        13429701,
        11066805,
        8113348,
        5157843,
        2854078,
        551084,
        540801
    ],
    Greys: [
        16777215,
        15790320,
        14277081,
        12434877,
        9868950,
        7566195,
        5395026,
        2434341,
        0
    ],
    YlOrRd: [
        16777164,
        16772512,
        16701814,
        16691788,
        16616764,
        16535082,
        14883356,
        12386342,
        8388646
    ],
    PuRd: [
        16250105,
        15196655,
        13941210,
        13210823,
        14640560,
        15149450,
        13505110,
        9961539,
        6750239
    ],
    Blues: [
        16251903,
        14609399,
        13032431,
        10406625,
        7057110,
        4362950,
        2191797,
        545180,
        536683
    ],
    PuBuGn: [
        16775163,
        15524592,
        13685222,
        10927579,
        6793679,
        3576000,
        164234,
        93273,
        83510
    ],
    Viridis: [
        4456788,
        4728695,
        4147850,
        3237774,
        2524047,
        2071946,
        7130714,
        11984427,
        16705573
    ],
    Spectral: [
        10355010,
        13975119,
        16018755,
        16625249,
        16703627,
        16777151,
        15136152,
        11263396,
        6734501,
        3311805,
        6180770, 
    ],
    RdYlGn: [
        10813478,
        14102567,
        16018755,
        16625249,
        16703627,
        16777151,
        14282635,
        10934634,
        6733155,
        1742928,
        26679, 
    ],
    RdBu: [
        6750239,
        11671595,
        14049357,
        16033154,
        16636871,
        16250871,
        13755888,
        9618910,
        4428739,
        2188972,
        340065, 
    ],
    PiYG: [
        9306450,
        12917629,
        14579630,
        15840986,
        16638191,
        16250871,
        15136208,
        12116358,
        8371265,
        5083681,
        2581529, 
    ],
    PRGn: [
        4194379,
        7744131,
        10055851,
        12756431,
        15193320,
        16250871,
        14282963,
        10935200,
        5942881,
        1800247,
        17435, 
    ],
    RdYlBu: [
        10813478,
        14102567,
        16018755,
        16625249,
        16703632,
        16777151,
        14742520,
        11262441,
        7646673,
        4552116,
        3225237, 
    ],
    BrBG: [
        5517317,
        9195786,
        12550445,
        14664317,
        16181443,
        16119285,
        13101797,
        8441281,
        3512207,
        91742,
        15408, 
    ],
    RdGy: [
        6750239,
        11671595,
        14049357,
        16033154,
        16636871,
        16777215,
        14737632,
        12237498,
        8882055,
        5066061,
        1710618, 
    ],
    PuOr: [
        8338184,
        11753478,
        14713364,
        16627811,
        16703670,
        16250871,
        14211819,
        11709394,
        8418220,
        5515144,
        2949195, 
    ],
    Set2: [
        6734501,
        16551266,
        9281739,
        15174339,
        10934356,
        16767279,
        15058068,
        11776947
    ],
    Accent: [
        8374655,
        12496596,
        16629894,
        16777113,
        3697840,
        15729279,
        12540695,
        6710886
    ],
    Set1: [
        14948892,
        3636920,
        5091146,
        9981603,
        16744192,
        16777011,
        10901032,
        16220607,
        10066329
    ],
    Set3: [
        9294791,
        16777139,
        12499674,
        16482418,
        8434131,
        16626786,
        11787881,
        16567781,
        14277081,
        12353725,
        13429701,
        16772463, 
    ],
    Dark2: [
        1810039,
        14245634,
        7696563,
        15149450,
        6727198,
        15117058,
        10909213,
        6710886
    ],
    Paired: [
        10931939,
        2062516,
        11722634,
        3383340,
        16489113,
        14883356,
        16629615,
        16744192,
        13284054,
        6962586,
        16777113,
        11622696, 
    ],
    Pastel2: [
        11789005,
        16633260,
        13358568,
        16042724,
        15136201,
        16773806,
        15852236,
        13421772
    ],
    Pastel1: [
        16495790,
        11783651,
        13429701,
        14601188,
        16701862,
        16777164,
        15063229,
        16636652,
        15921906
    ]
};
const w3cx11 = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflower: 6591981,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    laserlemon: 16777044,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrod: 16448210,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    maroon2: 8323072,
    maroon3: 11546720,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    purple2: 8323199,
    purple3: 10494192,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
};
function mix(col1, col2, f = 0.5, m = "rgb") {
    const c1 = color(col1);
    const c2 = color(col2);
    const res = interpolators[m] && interpolators[m](c1, c2, f, m);
    if (!res) {
        throw new Error("color mode " + m + " is not supported");
    }
    return res.alpha(lerp(c1.alpha(), c2.alpha(), f));
}
function lch(...args) {
    return guess(args, "lch");
}
function hsl(...args) {
    return guess(args, "hsl");
}
function lab(...args) {
    return guess(args, "lab");
}
function num(num) {
    const [r, g, b] = num2rgb(num);
    return new Color(r, g, b);
}
function rgb(...args) {
    return guess(args, "rgb");
}
({
    normal: blend_f(each((a, _)=>a
    )),
    multiply: blend_f(each((a, b)=>a * b / 255
    )),
    screen: blend_f(each(_screen)),
    overlay: blend_f(each(_overlay)),
    darken: blend_f(each(min)),
    lighten: blend_f(each(max)),
    dodge: blend_f(each(_dodge)),
    burn: blend_f(each(_burn))
});
function scale(...args) {
    const f = (t)=>f._at(t)
    ;
    Object.getOwnPropertyNames(Scale.prototype).forEach((key)=>f[key] = Scale.prototype[key]
    );
    if (Array.isArray(args[0])) args = args[0];
    if (args.length == 1 && "string" == typeof args[0]) args = brewer[args[0]];
    f._init("function" == typeof args[0] ? args[0] : args.map((a)=>color(a)
    ));
    return f;
}
class Scale {
    _colors;
    _classes;
    _cache;
    _correctLightness;
    _gamma;
    _mode;
    _out;
    _min;
    _max;
    _paddingLeft;
    _paddingRight;
    _pos;
    classes(classes) {
        if (undefined === classes) {
            return this._classes;
        }
        if (Array.isArray(classes)) {
            this._classes = classes;
            this.domain(classes[0], classes[classes.length - 1]);
        } else {
            if (classes % 1 != 0 || classes < 1) throw new Error("invalid classes param");
            this._classes = limits(this.domain(), "e", classes);
        }
        return this;
    }
    domain(...domain) {
        if (undefined === domain[0]) {
            return "function" !== typeof this._colors ? this._pos.map((p)=>lerp(this._min, this._max, p)
            ) : [
                this._min,
                this._max
            ];
        }
        this._min = domain[0];
        this._max = domain[domain.length - 1];
        if (2 == domain.length) {
            if ("function" !== typeof this._colors) {
                this._pos = this._colors.map((_, c)=>c / (this._colors.length - 1)
                );
            }
        } else if ("function" !== typeof this._colors && domain.length == this._colors.length) {
            this._pos = domain.map((d)=>lerpInv(this._min, this._max, d)
            );
        } else {
            throw new Error("invalid domain " + domain);
        }
        return this;
    }
    mode(mode) {
        if (undefined === mode) {
            return this._mode;
        }
        this._mode = mode;
        this._resetCache();
        return this;
    }
    out(outputFormat) {
        this._out = outputFormat;
        return this;
    }
    correctLightness(enableCorrectLightness = true) {
        if (this._correctLightness != enableCorrectLightness) {
            this._resetCache();
            const colors = this._colors;
            if (enableCorrectLightness && "function" !== typeof colors) {
                let sign = 0;
                for(let i = 1; i < colors.length; i++){
                    const sign2 = colors[i].lab()[0] - colors[i - 1].lab()[0];
                    if (0 == sign) {
                        sign = sign2;
                    } else if (sign * sign2 < 0) {
                        throw new Error("scale color lightnesses must be monotonic");
                    }
                }
            }
        }
        this._correctLightness = enableCorrectLightness;
        return this;
    }
    padding(paddingLeft, paddingRight = paddingLeft) {
        if (!paddingLeft) {
            return [
                this._paddingLeft,
                this._paddingRight
            ];
        }
        this._paddingLeft = paddingLeft;
        this._paddingRight = paddingRight;
        return this;
    }
    colors(numColors, format = "hex") {
        let result;
        if (undefined === numColors) {
            result = this._colors.slice();
        } else if (numColors == 1) {
            result = [
                this._color((this._min + this._max) / 2)
            ];
        } else if (numColors > 1) {
            result = Array.from({
                length: numColors
            }, (_, i)=>this._color(lerp(this._min, this._max, i / (numColors - 1)))
            );
        } else {
            let samples;
            if (this._classes && this._classes.length > 2) {
                samples = Array.from({
                    length: this._classes.length - 1
                }, (_, i)=>(this._classes[i] + this._classes[i + 1]) * 0.5
                );
            } else {
                samples = this.domain();
            }
            result = samples.map((s)=>this._color(s)
            );
        }
        return format != "color" ? result.map((c)=>c[format]()
        ) : result;
    }
    cache(enableCache) {
        if (undefined === enableCache) {
            return !!this._cache;
        }
        this._cache = enableCache ? this._cache || new Map() : undefined;
        return this;
    }
    gamma(gamma) {
        if (undefined === gamma) {
            return this._gamma;
        }
        this._gamma = gamma;
        return this;
    }
    _at(t) {
        const c = this._color(t);
        return this._out ? c[this._out]() : c;
    }
    _init(colorsOrFunction) {
        this._colors = colorsOrFunction;
        if ("function" != typeof colorsOrFunction) {
            this._pos = colorsOrFunction.map((_, i)=>i / (colorsOrFunction.length - 1)
            );
        }
        this._mode = "rgb";
        this.domain(0, 1);
        this._paddingLeft = 0;
        this._paddingRight = 0;
        this._correctLightness = false;
        this._cache = new Map();
        this._gamma = 1;
    }
    _getClass(value) {
        return this._classes.findIndex((cls)=>value <= cls
        ) - 1;
    }
    _color(val, bypassMap = false) {
        let t;
        if (!bypassMap) {
            const min = this._min, max = this._max;
            if (this._classes && this._classes.length > 2) {
                const c = this._getClass(val);
                t = c / (this._classes.length - 2);
            } else if (max !== min) {
                t = (val - min) / (max - min);
            } else {
                t = 1;
            }
            if (this._correctLightness) {
                t = this._tCorrectedLightness(t);
            }
        } else {
            t = val;
        }
        t = t ** this._gamma;
        t = (this._paddingLeft + t) / (1 + this._paddingLeft + this._paddingRight);
        t = clamp(t, 0, 1);
        const tHash = t;
        const cacheResult = this._cache && this._cache.get(tHash);
        if (cacheResult) {
            return cacheResult;
        } else {
            let col;
            if (Array.isArray(this._colors)) {
                for(let i = 0; i < this._pos.length; i++){
                    const p = this._pos[i];
                    if (t <= p) {
                        col = this._colors[i];
                        break;
                    }
                    if (t >= p && i == this._pos.length - 1) {
                        col = this._colors[i];
                        break;
                    }
                    if (t > p && t < this._pos[i + 1]) {
                        t = (t - p) / (this._pos[i + 1] - p);
                        col = mix(this._colors[i], this._colors[i + 1], t, this._mode);
                        break;
                    }
                }
            } else {
                col = this._colors(t);
            }
            if (this._cache) {
                this._cache.set(tHash, col);
            }
            return col;
        }
    }
    _tCorrectedLightness(t0_1) {
        const L0 = this._color(0, true).lab()[0];
        const L1 = this._color(1, true).lab()[0];
        const L_ideal = lerp(L0, L1, t0_1);
        return bisect((t)=>this._color(t, true).lab()[0] - L_ideal
        , 0, 1, 8);
    }
    _resetCache() {
        if (this._cache) this._cache.clear();
    }
}
var scales;
(function(scales) {
    function cool() {
        return scale([
            hsl(180, 1, 0.9),
            hsl(250, 0.7, 0.4)
        ]);
    }
    scales.cool = cool;
    function hot() {
        return scale([
            "#000",
            "#f00",
            "#ff0",
            "#fff"
        ]).mode("rgb");
    }
    scales.hot = hot;
})(scales || (scales = {
}));
function distance(a, b, mode = "lab") {
    const l1 = color(a)[mode]();
    const l2 = color(b)[mode]();
    const channelDifferences = l1.map((channelValue, channelIndex)=>channelValue - l2[channelIndex]
    );
    return hypot(...channelDifferences);
}
function analyze(data) {
    const r = {
        min: Infinity,
        max: -Infinity,
        sum: 0,
        values: [],
        count: 0
    };
    function add(val) {
        if (val != undefined && !isNaN(val)) {
            r.values.push(val);
            r.sum += val;
            if (val < r.min) r.min = val;
            if (val > r.max) r.max = val;
            r.count += 1;
        }
    }
    data.forEach((val)=>add(val)
    );
    r.domain = [
        r.min,
        r.max
    ];
    r.limits = function(mode, num) {
        return limits(this, mode, num);
    };
    return r;
}
function limits(data, mode = "e", num = 7) {
    const info = Array.isArray(data) ? analyze(data) : data;
    const { min , max , values  } = info;
    values.sort((a, b)=>a - b
    );
    if (num == 1) {
        return [
            min,
            max
        ];
    }
    if (mode.startsWith("c")) {
        return [
            min,
            max
        ];
    } else if (mode.startsWith("e")) {
        return Array.from({
            length: num + 1
        }, (_, i)=>lerp(min, max, i / num)
        );
    } else if (mode.startsWith("l")) {
        if (min <= 0) {
            throw new Error("Logarithmic scales are only possible for values > 0");
        }
        const min_log = Math.LOG10E * log(min);
        const max_log = Math.LOG10E * log(max);
        return Array.from({
            length: num + 1
        }, (_, i)=>10 ** lerp(min_log, max_log, i / num)
        );
    } else if (mode.startsWith("q")) {
        return Array.from({
            length: num + 1
        }, (_, i)=>{
            const p = (values.length - 1) * i / num;
            const pb = floor(p);
            return pb == p ? values[pb] : lerp(values[pb], values[pb + 1], p - pb);
        });
    } else if (mode.startsWith("k")) {
        const n = values.length;
        const assignments = new Array(n);
        const clusterSizes = new Array(num);
        let repeat = true;
        let nb_iters = 0;
        let centroids = Array.from({
            length: num + 1
        }, (_, i)=>lerp(min, max, i / num)
        );
        do {
            clusterSizes.fill(0);
            for(let i = 0; i < values.length; i++){
                const value = values[i];
                const minDistIndex = indexOfMax(centroids, (c)=>-abs(c - value)
                );
                clusterSizes[minDistIndex]++;
                assignments[i] = minDistIndex;
            }
            const newCentroids = new Array(num).fill(0);
            for(let i1 = 0; i1 < assignments.length; i1++){
                const cluster = assignments[i1];
                newCentroids[cluster] += values[i1];
            }
            for(let j = 0; j < newCentroids.length; j++){
                newCentroids[j] /= clusterSizes[j];
            }
            repeat = newCentroids.some((nc, j)=>nc != centroids[j]
            );
            centroids = newCentroids;
        }while (nb_iters++ < 200 && repeat)
        const kClusters = Array.from({
            length: num
        }, ()=>[]
        );
        for(let i = 0; i < assignments.length; i++){
            const cluster = assignments[i];
            kClusters[cluster].push(values[i]);
        }
        const tmpKMeansBreaks = [];
        for (const kCluster of kClusters){
            tmpKMeansBreaks.push(kCluster[0], kCluster[kCluster.length - 1]);
        }
        tmpKMeansBreaks.sort((a, b)=>a - b
        );
        const limits = [];
        limits.push(tmpKMeansBreaks[0]);
        for(let i1 = 1; i1 < tmpKMeansBreaks.length; i1 += 2){
            const v = tmpKMeansBreaks[i1];
            if (!isNaN(v) && limits.indexOf(v) == -1) {
                limits.push(v);
            }
        }
        return limits;
    } else {
        throw new Error("unknown mode");
    }
}
const interpolators = {
};
const _input = {
};
function linear_interpolator(col1, col2, f, m) {
    const xyz1 = col1[m]();
    const xyz2 = col2[m]();
    return guess([
        lerp(xyz1[0], xyz2[0], f),
        lerp(xyz1[1], xyz2[1], f),
        lerp(xyz1[2], xyz2[2], f),
        lerp(col1.alpha(), col2.alpha(), f), 
    ], m);
}
interpolators.xyz = interpolators.rgb = interpolators.lab = linear_interpolator;
interpolators.num = function(col1, col2, f) {
    const n1 = col1.num();
    const n2 = col2.num();
    return num(lerp(n1, n2, f));
};
interpolators.lrgb = function(col1, col2, f) {
    const [r1, g1, b1, a1] = col1.rgba(false, false);
    const [r2, g2, b2, a2] = col2.rgba(false, false);
    return new Color(sqrt(r1 ** 2 * (1 - f) + r2 ** 2 * f), sqrt(g1 ** 2 * (1 - f) + g2 ** 2 * f), sqrt(b1 ** 2 * (1 - f) + b2 ** 2 * f), lerp(a1, a2, f));
};
function guess(args, mode) {
    if (Array.isArray(args[0])) args = args[0];
    if (!mode) {
        if (args.length == 1 && args[0] in w3cx11) {
            mode = "name";
        } else if (args.length == 1 && "string" == typeof args[0]) {
            mode = "css";
        } else if (args.length == 3) {
            mode = "rgb";
        } else if (args.length == 4 && "number" == typeof args[3] && args[3] >= 0 && args[3] <= 1) {
            mode = "rgb";
        } else if (args.length == 1 && "number" == typeof args[0] && args[0] >= 0 && args[0] <= 16777215) {
            mode = "num";
        } else throw new Error("could not guess mode. args " + JSON.stringify(args));
    }
    const channels = _input[mode](...args);
    return new Color(channels[0], channels[1], channels[2], undefined !== channels[3] ? channels[3] : 1);
}
function hex2rgb(hex) {
    let m;
    if (m = hex.match(/^#?([A-F\d]{2})([A-F\d]{2})([A-F\d]{2})([A-F\d]{2})?$/i)) {
        return [
            parseInt(m[1], 16),
            parseInt(m[2], 16),
            parseInt(m[3], 16),
            m[4] ? parseInt(m[4], 16) / 255 : 1
        ];
    } else if (m = hex.match(/^#?([A-F\d])([A-F\d])([A-F\d])([A-F\d])?$/i)) {
        return [
            parseInt(m[1], 16) * 17,
            parseInt(m[2], 16) * 17,
            parseInt(m[3], 16) * 17,
            m[4] ? parseInt(m[4], 16) * 17 / 255 : 1, 
        ];
    }
    throw new Error("invalid hex color: " + hex);
}
function rgb2hex(r255, g255, b255, a1, mode = "rgb") {
    r255 = clamp(round(r255), 0, 255);
    g255 = clamp(round(g255), 0, 255);
    b255 = clamp(round(b255), 0, 255);
    const rgb = r255 << 16 | g255 << 8 | b255;
    const rgbString = rgb.toString(16).padStart(6, "0");
    const alphaString = round(clamp(a1) * 255).toString(16).padStart(2, "0");
    return "#" + ("argb" == mode ? alphaString + rgbString : "rgba" == mode ? rgbString + alphaString : rgbString);
}
_input.lrgb = _input.rgb;
_input.hex = hex2rgb;
_input.hsl = hsl2rgb;
function norm360(degrees) {
    return (degrees % 360 + 360) % 360;
}
_input.hsv = hsv2rgb;
function num2rgb(num) {
    if (!("number" == typeof num && num >= 0 && num <= 16777215)) {
        throw new Error("unknown num color: " + num);
    }
    const r = num >> 16;
    const g = num >> 8 & 255;
    const b = num & 255;
    return [
        r,
        g,
        b,
        1
    ];
}
function rgb2num(r255, g255, b255, a1 = 1, mode = "rgb") {
    const rgbNum = round(r255) << 16 | round(g255) << 8 | round(b255);
    if ("rgb" === mode) {
        return rgbNum;
    } else if ("rgba" === mode) {
        return rgbNum << 8 | round(a1 * 255) << 24;
    } else {
        return round(a1 * 255) << 24 | rgbNum;
    }
}
_input.num = num2rgb;
const WS = "\\s*";
const FLOAT = "([+-]?(?:\\d*\\.?)?\\d+(?:[eE][+-]?\\d+)?)";
const CSS_RGB_REGEX = new RegExp([
    "^rgba?\\(",
    FLOAT,
    ",",
    FLOAT,
    ",",
    FLOAT,
    "(?:,",
    FLOAT + "(%)?",
    ")?\\)$"
].join(WS), "i");
const CSS_RGB_WS_REGEX = new RegExp([
    "^rgba?\\(",
    FLOAT,
    FLOAT,
    FLOAT,
    "(?:/",
    FLOAT + "(%)?",
    ")?\\)$"
].join(WS), "i");
const CSS_RGB_PERCENT_REGEX = new RegExp([
    "^rgba?\\(",
    FLOAT + "%",
    ",",
    FLOAT + "%",
    ",",
    FLOAT + "%",
    "(?:,",
    FLOAT + "(%)?",
    ")?\\)$"
].join(WS), "i");
const CSS_RGB_WS_PERCENT_REGEX = new RegExp([
    "^rgba?\\(",
    FLOAT + "%",
    FLOAT + "%",
    FLOAT + "%",
    "(?:/",
    FLOAT + "(%)?",
    ")?\\)$"
].join(WS), "i");
const CSS_HSL_REGEX = new RegExp([
    "^hsla?\\(",
    FLOAT + "(deg|rad|turn)?",
    ",",
    FLOAT + "%",
    ",",
    FLOAT + "%",
    "(?:,",
    FLOAT + "(%)?",
    ")?\\)$"
].join(WS), "i");
const CSS_HSL_WS_REGEX = new RegExp([
    "^hsla?\\(",
    FLOAT + "(deg|rad|turn)?\\s+" + FLOAT + "%",
    FLOAT + "%",
    "(?:/",
    FLOAT + "(%)?",
    ")?\\)$"
].join(WS), "i");
function css2rgb(css) {
    if (w3cx11 && w3cx11.hasOwnProperty(css)) {
        return num2rgb(w3cx11[css.toLowerCase()]);
    }
    let m;
    if (m = css.match(CSS_RGB_REGEX) || css.match(CSS_RGB_WS_REGEX)) {
        return [
            clamp(+m[1], 0, 255),
            clamp(+m[2], 0, 255),
            clamp(+m[3], 0, 255),
            m[4] ? clamp(m[5] ? +m[4] / 100 : +m[4]) : 1, 
        ];
    } else if (m = css.match(CSS_RGB_PERCENT_REGEX) || css.match(CSS_RGB_WS_PERCENT_REGEX)) {
        return [
            clamp(+m[1] / 100) * 255,
            clamp(+m[2] / 100) * 255,
            clamp(+m[3] / 100) * 255,
            m[4] ? clamp(m[5] ? +m[4] / 100 : +m[4]) : 1, 
        ];
    } else if (m = css.match(CSS_HSL_REGEX) || css.match(CSS_HSL_WS_REGEX)) {
        const CONVERSION = {
            deg: 1,
            rad: RAD2DEG,
            turn: 360
        };
        const angleUnit = m[2] ? m[2].toLowerCase() : "deg";
        return hsl2rgb((+m[1] * CONVERSION[angleUnit] % 360 + 360) % 360, clamp(+m[3] / 100), clamp(+m[4] / 100), m[5] ? clamp(m[6] ? +m[5] / 100 : +m[5]) : 1);
    } else {
        return hex2rgb(css);
    }
}
function rgb2css(r, g, b, a = 1) {
    if (a >= 1) {
        return "rgb(" + [
            r,
            g,
            b
        ].map(round).join(",") + ")";
    } else {
        return "rgba(" + [
            r,
            g,
            b
        ].map(round).join(",") + "," + a + ")";
    }
}
function rnd(a) {
    return round(a * 100) / 100;
}
function hsl2css([h, s, l], alpha) {
    const mode = alpha < 1 ? "hsla" : "hsl";
    return mode + "(" + rnd(h) + "," + rnd(s * 100) + "%" + "," + rnd(l * 100) + "%" + ("hsla" == mode ? "," + rnd(alpha) : "") + ")";
}
_input.css = css2rgb;
_input.name = function(name) {
    return num2rgb(w3cx11[name]);
};
function lch2lab(l, c, hueDegrees) {
    return [
        l,
        cos(hueDegrees * DEG2RAD) * c,
        sin(hueDegrees * DEG2RAD) * c
    ];
}
function lch2rgb(l, c, hDegrees, alpha1 = 1) {
    const [, a, b] = lch2lab(l, c, hDegrees);
    return cielab2rgb(l, a, b, alpha1);
}
function lab2lch(l, a, b) {
    const c = hypot(a, b);
    const h = (atan2(b, a) * RAD2DEG + 360) % 360;
    return [
        l,
        c,
        h
    ];
}
function rgb2lch(r255, g255, b255) {
    const [l, a, b2] = rgb2lab(r255, g255, b255);
    return lab2lch(l, a, b2);
}
_input.lch = lch2rgb;
function rgb2cmyk(r255, g255, b255) {
    r255 /= 255;
    g255 /= 255;
    b255 /= 255;
    const k = 1 - max(r255, g255, b255);
    if (1 == k) return [
        0,
        0,
        0,
        1
    ];
    const c = (1 - r255 - k) / (1 - k);
    const m = (1 - g255 - k) / (1 - k);
    const y = (1 - b255 - k) / (1 - k);
    return [
        c,
        m,
        y,
        k
    ];
}
function cmyk2rgb(c1, m1, y1, k1, alpha1 = 1) {
    if (k1 == 1) {
        return [
            0,
            0,
            0,
            alpha1
        ];
    }
    const r255 = 255 * (1 - c1) * (1 - k1);
    const g255 = 255 * (1 - m1) * (1 - k1);
    const b255 = 255 * (1 - y1) * (1 - k1);
    return [
        r255,
        g255,
        b255,
        alpha1
    ];
}
_input.cmyk = cmyk2rgb;
_input.gl = function(r, g, b, a = 1) {
    return [
        r * 255,
        g * 255,
        b * 255,
        a
    ];
};
function rgbChannel2RgbLinear(x255) {
    const x1 = x255 / 255;
    if (x1 <= 0.04045) {
        return x1 / 12.92;
    } else {
        return ((x1 + 0.055) / 1.055) ** 2.4;
    }
}
function rgbLinearChannel2Rgb(xLinear1) {
    if (xLinear1 <= 0.0031308) {
        return 255 * (12.92 * xLinear1);
    } else {
        return 255 * ((1 + 0.055) * xLinear1 ** (1 / 2.4) - 0.055);
    }
}
function kelvin2rgb(kelvin) {
    const t = kelvin / 100;
    let r, g, b;
    if (t < 66) {
        r = 255;
        g = -155.25485562709179 - 0.44596950469579133 * (t - 2) + 104.49216199393888 * log(t - 2);
        b = t < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (t - 10) + 115.67994401066147 * log(t - 10);
    } else {
        r = 351.97690566805693 + 0.114206453784165 * (t - 55) - 40.25366309332127 * log(t - 55);
        g = 325.4494125711974 + 0.07943456536662342 * (t - 50) - 28.0852963507957 * log(t - 50);
        b = 255;
    }
    return [
        r,
        g,
        b
    ];
}
_input.rgb = (...args)=>args
;
function rgb2kelvin(r255, g255, b255) {
    console.log(b255 - r255);
    if (g255 + b255 < 158.61) {
        console.log("0 < t < 20");
        return round(newtonIterate1d((t)=>g255 - (-155.25485562709179 - 0.44596950469579133 * (t - 2) + 104.49216199393888 * log(t - 2))
        , 15, 4) * 100);
        return (Math.E ** ((g255 + 155.25485562709179 + 0.44596950469579133 * (15 - 2)) / 104.49216199393888) + 2) * 100;
    } else if (b255 - r255 < 0) {
        console.log("20 < t < 66");
        return round(newtonIterate1d((t)=>b255 - (-254.76935184120902 + 0.8274096064007395 * (t - 10) + 115.67994401066147 * log(t - 10))
        , 43, 4) * 100);
        return (Math.E ** ((b255 + 254.76935184120902 - 0.8274096064007395 * (43 - 10)) / 115.67994401066147) + 10) * 100;
    } else {
        console.log("0 < t < 400, start= " + (-1.4 * (r255 + g255) + 755));
        return round(newtonIterate1d((t)=>r255 - (351.97690566805693 + 0.114206453784165 * (t - 55) - 40.25366309332127 * log(t - 55))
        , -1.4 * (r255 + g255) + 755, 8) * 100);
        return ((r255 / 329.698727446) ** (1 / -0.1332047592) + 60) * 100;
    }
    return newtonIterate1d((k)=>{
        const [kr, kg, kb] = kelvin2rgb(k);
        const [kr2, kg2, kb2] = kelvin2rgb(k + 0.000000001);
        const dkr = (kr2 - kr) / 0.000000001, dkg = (kg2 - kg) / 0.000000001, dkb = (kb2 - kb) / 0.000000001;
        return dkr * (kr - r255) + dkg * (kg - g255) + dkb * (kb - b255);
        return kb / kr - b255 / r255;
    }, Math.E ** ((b255 / r255 + 2.5) / 0.4), 20);
    let maxTemp = 40000;
    let minTemp = 1000;
    let temp = 0;
    let rgb;
    while(maxTemp - minTemp > 0.4){
        temp = (maxTemp + minTemp) * 0.5;
        rgb = kelvin2rgb(temp);
        if (rgb[2] / rgb[0] >= b255 / r255) {
            maxTemp = temp;
        } else {
            minTemp = temp;
        }
    }
    return round(temp);
}
_input.temperature = _input.kelvin = _input.K = kelvin2rgb;
function blend_f(f) {
    return function(bottom, top) {
        const [r, g, b] = f(color(top).rgb(), color(bottom).rgb());
        return rgb(r, g, b);
    };
}
function each(f) {
    return function(c1, c2) {
        return c1.map((e, i)=>f(e, c2[i])
        );
    };
}
function _screen(a, b) {
    return 255 * (1 - (1 - a / 255) * (1 - b / 255));
}
function _overlay(a, b) {
    if (b < 128) {
        return 2 * a * b / 255;
    } else {
        return 255 * (1 - 2 * (1 - a / 255) * (1 - b / 255));
    }
}
function _burn(a, b) {
    return 255 * (1 - (1 - b / 255) / (a / 255));
}
function _dodge(a, b) {
    if (a == 255) {
        return 255;
    }
    return 255 * min(1, b / 255 / (1 - a / 255));
}
function rgb2hexhue(r, g, b) {
    const m = min(r, g, b);
    const M = max(r, g, b);
    const delta = M - m;
    let hueTurnX6;
    if (0 == delta) {
        hueTurnX6 = 0;
    } else if (r == M) {
        hueTurnX6 = (g - b) / delta + (g < b ? 6 : 0);
    } else if (g == M) {
        hueTurnX6 = 2 + (b - r) / delta;
    } else {
        hueTurnX6 = 4 + (r - g) / delta;
    }
    return [
        hueTurnX6 * 60,
        m,
        M
    ];
}
function hcxm2rgb(hueDegrees, c1, x1, m1, alpha1) {
    const m255 = m1 * 255;
    const cm255 = c1 * 255 + m255;
    const xm255 = x1 * 255 + m255;
    if (hueDegrees < 60) {
        return [
            cm255,
            xm255,
            m255,
            alpha1
        ];
    } else if (hueDegrees < 120) {
        return [
            xm255,
            cm255,
            m255,
            alpha1
        ];
    } else if (hueDegrees < 180) {
        return [
            m255,
            cm255,
            xm255,
            alpha1
        ];
    } else if (hueDegrees < 240) {
        return [
            m255,
            xm255,
            cm255,
            alpha1
        ];
    } else if (hueDegrees < 300) {
        return [
            xm255,
            m255,
            cm255,
            alpha1
        ];
    } else {
        return [
            cm255,
            m255,
            xm255,
            alpha1
        ];
    }
}
function hsl2rgb(hueDegrees, s1, l1, alpha1 = 1) {
    hueDegrees = norm360(hueDegrees);
    const c1 = (1 - abs(2 * l1 - 1)) * s1;
    return hcxm2rgb(hueDegrees, c1, c1 * (1 - abs(hueDegrees / 60 % 2 - 1)), l1 - c1 / 2, alpha1);
}
function rgb2hsl(r255, g255, b255) {
    const [hue, min1, max1] = rgb2hexhue(r255 / 255, g255 / 255, b255 / 255);
    const l1 = (max1 + min1) / 2;
    let s1;
    if (max1 == min1) {
        s1 = 0;
    } else {
        s1 = l1 < 0.5 ? (max1 - min1) / (max1 + min1) : (max1 - min1) / (2 - max1 - min1);
    }
    return [
        hue,
        s1,
        l1
    ];
}
function hsv2rgb(hueDegrees, s1, v1, alpha1 = 1) {
    hueDegrees = norm360(hueDegrees);
    const c1 = v1 * s1;
    return hcxm2rgb(hueDegrees, c1, c1 * (1 - abs(hueDegrees / 60 % 2 - 1)), v1 - c1, alpha1);
}
function rgb2hsv(r255, g255, b255) {
    const [hue, min255, max255] = rgb2hexhue(r255, g255, b255);
    const delta255 = max255 - min255;
    const v1 = max255 / 255;
    const s1 = max255 == 0 ? 0 : delta255 / max255;
    return [
        hue,
        s1,
        v1
    ];
}
function hcg2rgb(hueDegrees, c1, g1, alpha1 = 1) {
    hueDegrees = norm360(hueDegrees);
    const p = g1 * (1 - c1);
    return hcxm2rgb(hueDegrees, c1, c1 * (1 - abs(hueDegrees / 60 % 2 - 1)), p, alpha1);
}
function rgb2hcg(r255, g255, b255) {
    const [hue, min255, max255] = rgb2hexhue(r255, g255, b255);
    const c1 = (max255 - min255) / 255;
    const _g1 = c1 < 1 ? min255 / 255 / (1 - c1) : 0;
    return [
        hue,
        c1,
        _g1
    ];
}
_input.hcg = hcg2rgb;
function cielab2rgb(LStar100, aStar, bStar, alpha = 1) {
    const [x, y, z] = cielab2xyz(LStar100, aStar, bStar);
    return xyz2rgb(x, y, z, alpha);
}
function cielab2xyz(LStar100, aStar, bStar) {
    function fInv(t) {
        if (t > LAB_delta) {
            return t ** 3;
        } else {
            return LAB_3DeltaPow2 * (t - 4 / 29);
        }
    }
    return [
        LAB_Xn * fInv((LStar100 + 16) / 116 + aStar / 500),
        LAB_Yn * fInv((LStar100 + 16) / 116),
        LAB_Zn * fInv((LStar100 + 16) / 116 - bStar / 200), 
    ];
}
function xyz2cielab(x, y, z) {
    function f(t) {
        if (t > LAB_deltaPow3) {
            return cbrt(t);
        } else {
            return t / LAB_3DeltaPow2 + 4 / 29;
        }
    }
    return [
        116 * f(y / LAB_Yn) - 16,
        500 * (f(x / LAB_Xn) - f(y / LAB_Yn)),
        200 * (f(y / LAB_Yn) - f(z / LAB_Zn))
    ];
}
const LAB_Kn = 18;
const LAB_Xn = 0.95047;
const LAB_Yn = 1;
const LAB_Zn = 1.08883;
const LAB_delta = 0.206896552;
const LAB_3DeltaPow2 = 0.12841855;
const LAB_deltaPow3 = 0.008856452;
function rgb2lab(r255, g255, b255) {
    const [x, y, z] = rgb2xyz(r255, g255, b255);
    return xyz2cielab(x, y, z);
}
function rgb2xyz(r255, g255, b255) {
    const r1Linear = rgbChannel2RgbLinear(r255);
    const g1Linear = rgbChannel2RgbLinear(g255);
    const b1Linear = rgbChannel2RgbLinear(b255);
    const X = 0.4124564 * r1Linear + 0.3575761 * g1Linear + 0.1804375 * b1Linear;
    const Y = 0.2126729 * r1Linear + 0.7151522 * g1Linear + 0.072175 * b1Linear;
    const Z = 0.0193339 * r1Linear + 0.119192 * g1Linear + 0.9503041 * b1Linear;
    return [
        X,
        Y,
        Z
    ];
}
function xyz2rgb(X1, Y1, Z1, alpha1 = 1) {
    const r1Linear = 3.2404542 * X1 - 1.5371385 * Y1 - 0.4985314 * Z1;
    const g1Linear = -0.969266 * X1 + 1.8760108 * Y1 + 0.041556 * Z1;
    const b1Linear = 0.0556434 * X1 - 0.2040259 * Y1 + 1.0572252 * Z1;
    return [
        rgbLinearChannel2Rgb(r1Linear),
        rgbLinearChannel2Rgb(g1Linear),
        rgbLinearChannel2Rgb(b1Linear),
        alpha1
    ];
}
_input.xyz = xyz2rgb;
_input.lab = cielab2rgb;
function hsi2rgb(hueDegrees, s1, i1, alpha1 = 1) {
    let r, g, b;
    let hRad = hueDegrees * DEG2RAD;
    if (hRad < 2 * PI / 3) {
        b = (1 - s1) / 3;
        r = (1 + s1 * cos(hRad) / cos(PI / 3 - hRad)) / 3;
        g = 1 - (b + r);
    } else if (hRad < 4 * PI / 3) {
        hRad -= 2 * PI / 3;
        r = (1 - s1) / 3;
        g = (1 + s1 * cos(hRad) / cos(PI / 3 - hRad)) / 3;
        b = 1 - (r + g);
    } else {
        hRad -= 4 * PI / 3;
        g = (1 - s1) / 3;
        b = (1 + s1 * cos(hRad) / cos(PI / 3 - hRad)) / 3;
        r = 1 - (g + b);
    }
    return [
        3 * i1 * r * 255,
        3 * i1 * g * 255,
        3 * i1 * b * 255,
        alpha1
    ];
}
function rgb2hsi(r255, g255, b255) {
    const r1 = r255 / 255;
    const g1 = g255 / 255;
    const b1 = b255 / 255;
    const i1 = (r1 + g1 + b1) / 3;
    if (r1 == g1 && g1 == b1) {
        return [
            0,
            0,
            i1
        ];
    } else {
        const alpha = 1 / 2 * (2 * r1 - g1 - b1);
        const beta = sqrt(3) / 2 * (g1 - b1);
        const hRad = atan2(beta, alpha);
        const min1 = min(r1, g1, b1);
        const s1 = 1 - min1 / i1;
        return [
            (hRad < 0 ? 2 * PI + hRad : hRad) * RAD2DEG,
            s1,
            i1
        ];
    }
}
_input.hsi = hsi2rgb;
interpolators.hsv = interpolators.hsl = interpolators.hsi = interpolators.lch = interpolators.hcg = function interpolate_hsx(color1, color2, f, m) {
    const [a1, b1, c1] = color1[m]();
    const [a2, b2, c2] = color2[m]();
    function lerpHue(hue1, hue2, f) {
        const dh = norm360(hue2 - hue1 + 180) - 180;
        return hue1 + f * dh;
    }
    return color(("h" == m.charAt(0) ? lerpHue : lerp)(a1, a2, f), lerp(b1, b2, f), ("h" == m.charAt(2) ? lerpHue : lerp)(c1, c2, f), m);
};
function indexOfMax(arr, f) {
    let maxValue = -Infinity, maxValueIndex = -1;
    for(let i = 0; i < arr.length; i++){
        const value = f(arr[i]);
        if (value > maxValue) {
            maxValue = value;
            maxValueIndex = i;
        }
    }
    return maxValueIndex;
}
function withMax(arr, f) {
    return arr[indexOfMax(arr, f)];
}
const size = 16;
const width = 16 * (16 + 1) - 1;
const input = document.getElementById('input');
const editor = document.getElementById('editor');
const comment = document.getElementById('comment');
const output = document.getElementById('output');
const context = output.getContext('2d');
const dpr = window.devicePixelRatio || 1;
const defaultTextColor = '#f24';
let callback = function() {
};
let startTime = null;
let code = `[
  x - y % t ,
  'black',
   i,
  'white'
]`;
output.width = output.height = width * dpr;
context.scale(dpr, dpr);
output.style.width = output.style.height = `${width}px`;
function readURL() {
    const url = new URL(document.location);
    input.value = url.searchParams.get('code') || code;
}
readURL();
function checkLength() {
    if (code.length > 32) {
        editor.classList.add('over-limit');
    } else {
        editor.classList.remove('over-limit');
    }
}
function updateCallback() {
    code = input.value.trim();
    startTime = null;
    checkLength();
    try {
        callback = new Function('t', 'i', 'x', 'y', `
      try {
        with (Math) {
          return ${code};
        }
      } catch (error) {
        return error;
      }
    `);
    } catch (error) {
        callback = null;
    }
}
input.addEventListener('input', updateCallback);
updateCallback();
input.addEventListener('focus', function() {
    editor.classList.add('focus');
    updateComments([
        'hit "enter" to save in URL',
        'or get <a href="https://twitter.com/aemkei/status/1323399877611708416">more info here</a>', 
    ]);
});
input.addEventListener('blur', function() {
    updateCommentsForCode();
    editor.classList.remove('focus');
});
input.addEventListener('keyup', (event)=>{
    event.preventDefault();
    if (!event.shiftKey && event.key === 'Enter') {
        const url = new URL(document.location);
        const param = code.trim();
        url.searchParams.set('code', param);
        history.replaceState(null, param, url);
    }
});
function render() {
    let time = 0;
    if (startTime) {
        time = (new Date() - startTime) / 1000;
    } else {
        startTime = new Date();
    }
    if (!callback) {
        window.requestAnimationFrame(render);
        return;
    }
    output.width = output.height = width * dpr;
    context.scale(dpr, dpr);
    let index = 0;
    for(let y = 0; y < 16; y++){
        for(let x = 0; x < 16; x++){
            const returned = callback(time, index, x, y);
            const isArray = Array.isArray(returned);
            let value;
            let positiveColor = '#fff';
            let negativeColor = defaultTextColor;
            let backgroundColor = '#000';
            if (isArray) {
                [value, positiveColor = positiveColor, negativeColor = negativeColor, backgroundColor = backgroundColor, ] = returned;
            } else {
                value = Number(returned);
            }
            const offset = 16 / 2;
            let color1 = positiveColor;
            let radius = value * 16 / 2;
            if (radius < 0) {
                radius = -radius;
                color1 = negativeColor;
            }
            if (radius > 16 / 2) {
                radius = size / 2;
            }
            const fillStyle = typeof color1 == 'string' ? color1 : chooseColor(color1);
            context.beginPath();
            context.fillStyle = fillStyle;
            context.arc(x * (16 + 1) + offset, y * (16 + 1) + offset, radius, 0, 2 * Math.PI);
            context.fill();
            if (index === 0) {
                const background = typeof backgroundColor == 'string' ? backgroundColor : chooseColor(backgroundColor);
                let contrastedColor = '#fff';
                let distance1 = 60;
                try {
                    const bgColor = color(background);
                    distance1 = distance(defaultTextColor, bgColor);
                    contrastedColor = bgColor.textColor();
                } catch (_) {
                }
                document.documentElement.style.setProperty('--text-color', distance1 < 70 ? '#000' : defaultTextColor);
                document.documentElement.style.setProperty('--input-color', contrastedColor);
                document.documentElement.style.setProperty('--background', background);
            }
            index++;
        }
    }
    window.requestAnimationFrame(render);
}
render();
function updateComments(comments) {
    const lines = comment.querySelectorAll('label');
    if (comments.length === 1) {
        lines[0].innerHTML = '&nbsp;';
        lines[1].innerHTML = `// ${comments[0]}`;
    } else {
        lines[0].innerHTML = `// ${comments[0]}`;
        lines[1].innerHTML = `// ${comments[1]}`;
    }
}
function updateCommentsForCode() {
    const code = input.value.trim();
    const snippets = Object.values(__default);
    const comments = Object.keys(__default);
    const index = snippets.indexOf(code);
    const newComment = comments[index];
    if (!newComment) {
        return;
    }
    const newComments = newComment.split('\n');
    updateComments(newComments);
}
function nextExample() {
    const snippets = Object.values(__default);
    let index = snippets.indexOf(code);
    if (snippets[index + 1]) {
        index = index + 1;
    } else {
        return;
    }
    const newCode = snippets[index];
    input.value = newCode;
    updateCommentsForCode();
    updateCallback();
}
output.addEventListener('click', nextExample);
window.onpopstate = function() {
    readURL();
    updateCallback();
};
updateCommentsForCode();
