(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [859],
  {
    94: () => {},
    618: () => {},
    3258: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => o });
      var r = a(5155),
        l = a(2115);
      let s = () =>
          (0, r.jsx)("svg", {
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0",
            viewBox: "0 0 448 512",
            height: "1em",
            width: "1em",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("path", {
              d: "M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z",
            }),
          }),
        o = () => {
          let [e, t] = (0, l.useState)(!1),
            [a] = (0, l.useState)("0xD20af3fC047ef629ad5122F0b5E942a355350bE4"),
            o = async () => {
              try {
                await navigator.clipboard.writeText(a),
                  t(!0),
                  setTimeout(() => t(!1), 2e3);
              } catch (e) {
                t("Failed to copy!");
              }
            };
          return (0, r.jsxs)("div", {
            className: "group relative block",
            children: [
              (0, r.jsx)("span", {
                className:
                  "absolute inset-0 bg-themeclr rounded-xl border-2 border-dashed border-black",
              }),
              (0, r.jsx)("div", {
                className:
                  "relative h-full transform rounded-xl border-2 border-black bg-white transition-transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0",
                children: (0, r.jsx)("div", {
                  className:
                    "rounded-xl relative shadow-lg shadow-gray-700 hover:shadow-none transition duration-300",
                  children: (0, r.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, r.jsx)("input", {
                        className:
                          "w-full bg-gray-100 p-4 pe-24 text-sm sm:text-base md:text-2xl font-stopbuck font-medium rounded-xl text-ellipsis text-black",
                        contentEditable: !1,
                        defaultValue: a,
                      }),
                      (0, r.jsx)("button", {
                        onClick: o,
                        className:
                          "absolute end-1 top-1/2 -translate-y-1/2 transition duration-200 font-stopbuck text-2xl rounded-xl px-3.5 py-2.5 font-medium text-themeclr shadow-2xl bg-gray-300 hover:bg-themeclr hover:text-gray-300 hover:outline-black outline outline-2 outline-offset-0",
                        children: (0, r.jsx)(s, {}),
                      }),
                    ],
                  }),
                }),
              }),
              e &&
                (0, r.jsx)("div", {
                  className: "absolute end-20 top-1/2 -translate-y-1/2",
                  children: (0, r.jsx)("p", {
                    className:
                      "text-sm sm:text-base md:text-md text-green-600 font-stopbuck",
                    children: "Copied!",
                  }),
                }),
            ],
          });
        };
    },
    4161: () => {},
    4828: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 8266)),
        Promise.resolve().then(a.bind(a, 3258)),
        Promise.resolve().then(a.t.bind(a, 4161, 23)),
        Promise.resolve().then(a.t.bind(a, 94, 23)),
        Promise.resolve().then(a.t.bind(a, 618, 23)),
        Promise.resolve().then(a.t.bind(a, 3063, 23));
    },
    8266: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => n });
      var r = a(5155),
        l = a(2115),
        s = a(6766);
      let o = [
          { name: "About", href: "#about" },
          { name: "Tokenomics", href: "#tokenomics" },
          { name: "How to buy", href: "#buy" },
        ],
        n = () => {
          let [e, t] = (0, l.useState)(!1);
          return (
            (0, l.useEffect)(() => {
              let e = () => {
                t(window.scrollY > 50);
              };
              return (
                window.addEventListener("scroll", e),
                () => {
                  window.removeEventListener("scroll", e);
                }
              );
            }, []),
            (0, r.jsx)("nav", {
              "aria-label": "Global",
              className:
                "fixed top-0 left-0 w-full z-50   transition-all duration-300 ".concat(
                  e ? "h-20 bg-white shadow-lg " : "h-28"
                ),
              children: (0, r.jsxs)("div", {
                className:
                  "flex items-center justify-between p-4 lg:px-8 mx-auto max-w-screen-xl",
                children: [
                  (0, r.jsx)("div", {
                    className: "flex lg:flex-1",
                    children: (0, r.jsx)("a", {
                      href: "#",
                      className: "-m-1.5 p-1.5",
                      children: (0, r.jsx)(s.default, {
                        src: "/logo-coin.webp",
                        width: 500,
                        height: 500,
                        className: "transition-all duration-300 ".concat(
                          e ? "h-14 w-auto" : "h-20 w-auto"
                        ),
                        alt: "logo coin",
                      }),
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "hidden lg:flex lg:gap-x-12 cursor-pointer uppercase",
                    children: o.map((e) =>
                      (0, r.jsx)(
                        "a",
                        {
                          href: e.href,
                          className:
                            "transition duration-200 text-gray-200 text-shadow-themeclr-not-hover text-2xl font-bold font-stopbuck tracking-wider hover:text-themeclr hover:decoration-solid hover:decoration-gray-500",
                          children: e.name,
                        },
                        e.name
                      )
                    ),
                  }),
                  (0, r.jsx)("div", {
                    className: "lg:flex lg:flex-1 lg:justify-end",
                    children: (0, r.jsx)("a", {
                      href: "https://app.uniswap.org/swap?inputCurrency=ETHb&outputCurrency=0xD20af3fC047ef629ad5122F0b5E942a355350bE4",
                      target: "_blank",
                      className:
                        "transition duration-200 font-stopbuck text-lg sm:text-2xl rounded-xl px-3.5 py-2.5 font-medium text-themeclr shadow-2xl bg-gray-300 hover:bg-themeclr hover:text-gray-300 hover:outline-black outline outline-2 outline-offset-0",
                      children: "Buy $HACHIKO",
                    }),
                  }),
                ],
              }),
            })
          );
        };
    },
  },
  (e) => {
    e.O(0, [456, 766, 441, 964, 358], () => e((e.s = 4828))), (_N_E = e.O());
  },
]);
