var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 46,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 88,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links3,
  loader: () => loader,
  meta: () => meta
});
var import_react15 = require("@remix-run/react");

// app/components/Header.tsx
var import_react7 = require("react"), import_react8 = require("@remix-run/react");

// app/components/DesktopNav.tsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = ["coffee", "events", "blog", "about", "contact"];
function DesktopNav() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "hidden md:block self-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "flex text-xl", children: links.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "px-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: `./${link}`, children: link }, void 0, !1, {
    fileName: "app/components/DesktopNav.tsx",
    lineNumber: 11,
    columnNumber: 13
  }, this) }, link, !1, {
    fileName: "app/components/DesktopNav.tsx",
    lineNumber: 10,
    columnNumber: 11
  }, this)) }, void 0, !1, {
    fileName: "app/components/DesktopNav.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/DesktopNav.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/components/MobileNav.tsx
var import_react3 = require("@remix-run/react");

// app/icons/InstagramSvg.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function InstagramSvg({
  w = "20",
  h = "20"
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: w,
      height: h,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("rect", { x: "2", y: "2", width: "20", height: "20", rx: "5", ry: "5" }, void 0, !1, {
          fileName: "app/icons/InstagramSvg.tsx",
          lineNumber: 20,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }, void 0, !1, {
          fileName: "app/icons/InstagramSvg.tsx",
          lineNumber: 21,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("line", { x1: "17.5", y1: "6.5", x2: "17.5", y2: "6.5" }, void 0, !1, {
          fileName: "app/icons/InstagramSvg.tsx",
          lineNumber: 22,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/icons/InstagramSvg.tsx",
      lineNumber: 9,
      columnNumber: 5
    },
    this
  );
}

// app/icons/XSvg.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function XSvg({ w = "20", h = "20" }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: w,
      height: h,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("line", { x1: "18", y1: "6", x2: "6", y2: "18" }, void 0, !1, {
          fileName: "app/icons/XSvg.tsx",
          lineNumber: 14,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("line", { x1: "6", y1: "6", x2: "18", y2: "18" }, void 0, !1, {
          fileName: "app/icons/XSvg.tsx",
          lineNumber: 15,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/icons/XSvg.tsx",
      lineNumber: 3,
      columnNumber: 5
    },
    this
  );
}

// app/components/MobileNav.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), links2 = ["coffee", "events", "blog", "about", "contact"];
function MobileNav({
  showMobileNav,
  toggleShowMobileNav
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    "div",
    {
      className: `md:hidden bg-slate-50 text-slate-800 p-4 w-3/4 max-w-md fixed top-0 right-0 h-screen z-20 transition-all
        ${showMobileNav ? "translate-x-0 " : "translate-x-full"}
        `,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("header", { className: "flex items-center justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "button",
          {
            type: "button",
            className: "btn-icon",
            "aria-label": "close navigation",
            onClick: () => toggleShowMobileNav(!1),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(XSvg, { w: "24", h: "24" }, void 0, !1, {
              fileName: "app/components/MobileNav.tsx",
              lineNumber: 29,
              columnNumber: 11
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/MobileNav.tsx",
            lineNumber: 23,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/MobileNav.tsx",
          lineNumber: 22,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("nav", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { className: "flex flex-col text-xl ml-4", children: [
          links2.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { className: "p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Link, { onClick: () => toggleShowMobileNav(!1), to: `./${link}`, children: link }, void 0, !1, {
            fileName: "app/components/MobileNav.tsx",
            lineNumber: 36,
            columnNumber: 15
          }, this) }, link, !1, {
            fileName: "app/components/MobileNav.tsx",
            lineNumber: 35,
            columnNumber: 13
          }, this)),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { className: "p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            "a",
            {
              href: "https://www.instagram.com/neighborlycoffee",
              rel: "noopener noreferrer",
              target: "_blank",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(InstagramSvg, { w: "24", h: "24" }, void 0, !1, {
                fileName: "app/components/MobileNav.tsx",
                lineNumber: 47,
                columnNumber: 15
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/MobileNav.tsx",
              lineNumber: 42,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/MobileNav.tsx",
            lineNumber: 41,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/MobileNav.tsx",
          lineNumber: 33,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/MobileNav.tsx",
          lineNumber: 32,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/MobileNav.tsx",
      lineNumber: 17,
      columnNumber: 5
    },
    this
  );
}

// app/icons/MenuSvg.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function MenuSvg() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-5 w-5",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "path",
        {
          fillRule: "evenodd",
          d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
          clipRule: "evenodd"
        },
        void 0,
        !1,
        {
          fileName: "app/icons/MenuSvg.tsx",
          lineNumber: 9,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/icons/MenuSvg.tsx",
      lineNumber: 3,
      columnNumber: 5
    },
    this
  );
}

// app/components/Cart.tsx
var import_react6 = require("@remix-run/react");

// app/context/useCart.tsx
var import_react4 = require("react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), CartContext = (0, import_react4.createContext)({
  cartItems: [],
  changeCartItemQuantity: () => {
  },
  removeCartItem: () => {
  },
  isCartOpen: !1,
  toggleIsCartOpen: () => {
  }
});
function useCartManager(initialCart) {
  let [isCartOpen, setIsCartOpen] = (0, import_react4.useState)(!1), [cartItems, dispatch] = (0, import_react4.useReducer)(myCartReducerFunction, initialCart), changeCartItemQuantity = (0, import_react4.useCallback)((cartItem) => {
    dispatch({ type: "CHANGE_CART_QUANTITY", cartItem });
  }, []), removeCartItem = (0, import_react4.useCallback)((cartItem) => {
    dispatch({ type: "REMOVE_FROM_CART", cartItem });
  }, []);
  return {
    cartItems,
    changeCartItemQuantity,
    removeCartItem,
    isCartOpen,
    toggleIsCartOpen: setIsCartOpen
  };
}
var myCartReducerFunction = (cartItemsState, action2) => {
  let cartItemIndex = cartItemsState.findIndex(
    (cartItem) => cartItem.variant_id === action2.cartItem.variant_id
  );
  switch (action2.type) {
    case "CHANGE_CART_QUANTITY":
      if (cartItemIndex === -1)
        return [...cartItemsState, action2.cartItem];
      if (cartItemIndex > -1) {
        let updatedCart = [...cartItemsState], updatedItem = {
          ...updatedCart[cartItemIndex],
          quantity: updatedCart[cartItemIndex].quantity + action2.cartItem.quantity
        };
        return updatedCart[cartItemIndex] = updatedItem, updatedCart;
      }
    case "REMOVE_FROM_CART":
      let cartCopy = [...cartItemsState];
      return cartCopy.splice(cartItemIndex, 1), cartCopy;
    default:
      throw new Error("No case for action type found in cartReducer.");
  }
}, CartProvider = ({
  initialCart,
  children
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CartContext.Provider, { value: useCartManager(initialCart), children }, void 0, !1, {
  fileName: "app/context/useCart.tsx",
  lineNumber: 89,
  columnNumber: 5
}, this), useCartUtils = () => {
  let { isCartOpen, toggleIsCartOpen } = (0, import_react4.useContext)(CartContext);
  return { isCartOpen, toggleIsCartOpen };
}, useCartItems = () => {
  let { cartItems } = (0, import_react4.useContext)(CartContext);
  return cartItems;
}, useChangeCartItemQuantity = () => {
  let { changeCartItemQuantity } = (0, import_react4.useContext)(CartContext);
  return changeCartItemQuantity;
}, useRemoveFromCart = () => {
  let { removeCartItem } = (0, import_react4.useContext)(CartContext);
  return removeCartItem;
};

// app/lib/calcCartTotal.ts
function calcTotalPrice(cartItems) {
  return cartItems.reduce((tally, cartItem) => tally + cartItem.quantity * cartItem.price, 0);
}

// app/lib/formatMoney.ts
function formatMoney(amount = 0) {
  let options = {
    style: "decimal",
    // currency: 'USD',
    minimumFractionDigits: 2
  };
  return Intl.NumberFormat("en-US", options).format(amount / 100);
}

// app/components/AdjustQuantityButtons.tsx
var import_react5 = require("react");

// app/lib/getTotalQuantityInCart.ts
function getTotalQuantityInCart(coffeeId, cartItems) {
  return cartItems.reduce((tally, cartItem) => coffeeId === cartItem.coffeeId ? tally + cartItem.quantity : tally, 0);
}

// app/components/AdjustQuantityButtons.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function AdjustQuantityButtons({
  cartItem
}) {
  let [alert, setAlert] = (0, import_react5.useState)(), changeCartItemQuantity = useChangeCartItemQuantity(), removeFromCart = useRemoveFromCart(), cartItems = useCartItems(), totalCartQuantity = getTotalQuantityInCart(cartItem.coffeeId, cartItems);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex justify-between items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "rounded-full flex justify-evenly bg-green-600 h-9 w-[100px] items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "button",
        {
          className: "-mt-1 text-green-50",
          disabled: cartItem.quantity < 1,
          onClick: () => {
            if (cartItem.quantity == 1) {
              confirm(`remove ${cartItem.name} from cart?`) && removeFromCart(cartItem);
              return;
            }
            changeCartItemQuantity({
              _id: cartItem._id,
              name: cartItem.name,
              coffeeId: cartItem.coffeeId,
              quantity: -1,
              grind: cartItem.grind,
              variant_id: cartItem.variant_id,
              price: cartItem.price,
              inStock: cartItem.inStock
            });
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text-2xl", children: "-" }, void 0, !1, {
            fileName: "app/components/AdjustQuantityButtons.tsx",
            lineNumber: 52,
            columnNumber: 15
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/AdjustQuantityButtons.tsx",
          lineNumber: 29,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/AdjustQuantityButtons.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "mx-4 text-xl text-green-50", children: cartItem.quantity }, void 0, !1, {
        fileName: "app/components/AdjustQuantityButtons.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "button",
        {
          className: "text-green-50",
          onClick: () => {
            totalCartQuantity === cartItem.inStock || cartItem.inStock < totalCartQuantity ? (setAlert(`There are only ${cartItem.inStock} available`), setTimeout(() => {
              setAlert(null);
            }, 2e3)) : changeCartItemQuantity({
              _id: cartItem._id,
              name: cartItem.name,
              coffeeId: cartItem.coffeeId,
              quantity: 1,
              grind: cartItem.grind,
              variant_id: cartItem.variant_id,
              price: cartItem.price,
              inStock: cartItem.inStock
            });
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text-2xl", children: "+" }, void 0, !1, {
            fileName: "app/components/AdjustQuantityButtons.tsx",
            lineNumber: 82,
            columnNumber: 15
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/AdjustQuantityButtons.tsx",
          lineNumber: 57,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/AdjustQuantityButtons.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/AdjustQuantityButtons.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    alert && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: alert }, void 0, !1, {
      fileName: "app/components/AdjustQuantityButtons.tsx",
      lineNumber: 86,
      columnNumber: 19
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "text-xl", children: `$${formatMoney(cartItem.price * cartItem.quantity)} ` }, void 0, !1, {
      fileName: "app/components/AdjustQuantityButtons.tsx",
      lineNumber: 87,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AdjustQuantityButtons.tsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/AdjustQuantityButtons.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/components/CartListItem.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function CartListItem({ cartItem }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("li", { className: "p-4 border-b-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mx-auto md:w-2/3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h3", { className: "text-xl", children: cartItem.name }, void 0, !1, {
      fileName: "app/components/CartListItem.tsx",
      lineNumber: 10,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/CartListItem.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-sm mr-8 mb-2 text-slate-600", children: `${cartItem.grind === "whole" ? "whole bean" : "ground"}` }, void 0, !1, {
        fileName: "app/components/CartListItem.tsx",
        lineNumber: 14,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/CartListItem.tsx",
        lineNumber: 13,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "pb-1 text-slate-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-sm", children: [
        `$${formatMoney(cartItem.price)}`,
        " "
      ] }, void 0, !0, {
        fileName: "app/components/CartListItem.tsx",
        lineNumber: 19,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/CartListItem.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/CartListItem.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(AdjustQuantityButtons, { cartItem }, void 0, !1, {
      fileName: "app/components/CartListItem.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/CartListItem.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/CartListItem.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/components/CartSummary.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function CartSummary({
  cartItems,
  shipping,
  shippingCost
}) {
  let subtotal = calcTotalPrice(cartItems);
  return cartItems.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("ul", { children: cartItems.map((cartItem) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CartListItem, { cartItem }, cartItem.variant_id, !1, {
      fileName: "app/components/CartSummary.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/components/CartSummary.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/CartSummary.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex flex-col p-4 text-right mx-auto md:w-2/3", children: [
      shipping && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-xl text-slate-600", children: [
        "Shipping:",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "ml-2", children: `$${formatMoney(shippingCost)}` }, void 0, !1, {
          fileName: "app/components/CartSummary.tsx",
          lineNumber: 39,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/CartSummary.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-2xl text-slate-600 ", children: [
        "subtotal: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "ml-2", children: `$${formatMoney(subtotal)}` }, void 0, !1, {
          fileName: "app/components/CartSummary.tsx",
          lineNumber: 43,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/CartSummary.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/CartSummary.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/CartSummary.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "my-12 text-center text-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: "You're cart is empty!!" }, void 0, !1, {
    fileName: "app/components/CartSummary.tsx",
    lineNumber: 21,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/CartSummary.tsx",
    lineNumber: 20,
    columnNumber: 7
  }, this);
}

// app/components/Cart.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function Cart() {
  let { isCartOpen, toggleIsCartOpen } = useCartUtils(), cartItems = useCartItems();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    "div",
    {
      className: `p-2 fixed bg-slate-100 h-screen w-11/12 max-w-[650px] min-w-[310px] top-0 right-0 z-40 transition-all duration-300 overflow-scroll shadow-2xl
  ${isCartOpen ? "translate-x-0" : "translate-x-full"}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("header", { className: "flex px-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { className: "text-3xl", children: "Your Cart" }, void 0, !1, {
            fileName: "app/components/Cart.tsx",
            lineNumber: 15,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            "button",
            {
              className: "ml-auto text-3xl",
              title: "Close Cart",
              "aria-label": "Close Your Shopping Cart",
              onClick: () => toggleIsCartOpen(!1),
              children: "\xD7"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Cart.tsx",
              lineNumber: 16,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Cart.tsx",
          lineNumber: 14,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CartSummary, { cartItems }, void 0, !1, {
          fileName: "app/components/Cart.tsx",
          lineNumber: 25,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex justify-evenly", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            "button",
            {
              className: "bg-rose-800 text-rose-50 px-6 py-3 rounded",
              onClick: () => toggleIsCartOpen(!1),
              children: "keep shopping"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Cart.tsx",
              lineNumber: 27,
              columnNumber: 9
            },
            this
          ),
          !!cartItems.length && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            import_react6.Link,
            {
              className: "bg-blue-700 text-blue-50 px-6 py-3 rounded",
              role: "link",
              onClick: () => toggleIsCartOpen(!1),
              to: "/reviewCart",
              children: "checkout"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Cart.tsx",
              lineNumber: 34,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Cart.tsx",
          lineNumber: 26,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Cart.tsx",
      lineNumber: 10,
      columnNumber: 5
    },
    this
  );
}

// app/icons/CoffeeCupIcon.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function CoffeeCupIcon({ w = "20", h = "20" }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: w,
      height: h,
      viewBox: "0 0 28 28",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { d: "M22 10h1a4 4 0 0 1 0 8h-1" }, void 0, !1, {
          fileName: "app/icons/CoffeeCupIcon.tsx",
          lineNumber: 14,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { d: "M2 8h20v15a4 10 0 0 1-4 4H6a4 10 0 0 1-4-4V8z" }, void 0, !1, {
          fileName: "app/icons/CoffeeCupIcon.tsx",
          lineNumber: 15,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("line", { x1: "8", y1: "1", x2: "8", y2: "4" }, void 0, !1, {
          fileName: "app/icons/CoffeeCupIcon.tsx",
          lineNumber: 16,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("line", { x1: "12", y1: "1", x2: "12", y2: "4" }, void 0, !1, {
          fileName: "app/icons/CoffeeCupIcon.tsx",
          lineNumber: 17,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("line", { x1: "16", y1: "1", x2: "16", y2: "4" }, void 0, !1, {
          fileName: "app/icons/CoffeeCupIcon.tsx",
          lineNumber: 18,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/icons/CoffeeCupIcon.tsx",
      lineNumber: 3,
      columnNumber: 5
    },
    this
  );
}

// app/components/CartCount.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function CartCount() {
  let cartItems = useCartItems();
  function calcTotalQuantity(cartItems2) {
    return cartItems2.reduce((tally, cartItem) => tally + cartItem.quantity, 0);
  }
  return calcTotalQuantity(cartItems) === 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "bg-red-500 text-red-50 p-[1px] leading-5 min-w-[18px] h-[18px] mr-[5px] mt-2 text-sm row-span-full col-span-full rounded-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "-mt-[2px]", children: calcTotalQuantity(cartItems) }, void 0, !1, {
    fileName: "app/components/CartCount.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/CartCount.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/components/Header.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function Header() {
  let [showMobileNav, toggleShowMobileNav] = (0, import_react7.useState)(!1), { toggleIsCartOpen } = useCartUtils();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("header", { className: "flex text-slate-800 bg-slate-50 items-center p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "text-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react8.Link, { to: "/", children: "neighborly coffee" }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      MobileNav,
      {
        showMobileNav,
        toggleShowMobileNav
      },
      void 0,
      !1,
      {
        fileName: "app/components/Header.tsx",
        lineNumber: 20,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "ml-auto flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        "button",
        {
          className: "md:hidden grid place-items-center",
          type: "button",
          "aria-label": "show navigation menu",
          onClick: () => {
            toggleShowMobileNav(!0);
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(MenuSvg, {}, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 33,
            columnNumber: 11
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/Header.tsx",
          lineNumber: 25,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(DesktopNav, {}, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        "button",
        {
          type: "button",
          title: "Your Cart",
          "aria-label": "open your shopping cart",
          onClick: () => toggleIsCartOpen(!0),
          className: "ml-4 mr-2 mt-[-4px] grid grid-cols-1 grid-rows-1 place-items-center text-center",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "row-span-full col-span-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(CoffeeCupIcon, { w: "32", h: "32" }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 44,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 43,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(CartCount, {}, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 46,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/Header.tsx",
          lineNumber: 36,
          columnNumber: 9
        },
        this
      ),
      " "
    ] }, void 0, !0, {
      fileName: "app/components/Header.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Cart, {}, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Header.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
var Header_default = Header;

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-BD3IJZUT.css";

// app/lib/sanity/sanity.ts
var import_client = require("@sanity/client"), config = {
  // Find your project ID and dataset in `sanity.json` in your studio project
  // projectId: process.env.SANITY_PROJECT_ID,
  projectId: "t9guxb1x",
  // dataset: process.env.production ? 'production' : 'dev',
  dataset: "production",
  useCdn: !1,
  apiVersion: "2023-06-27",
  token: process.env.SANITY_API_TOKEN
}, client = (0, import_client.createClient)(config), sanity_default = client;

// app/context/ThemeContext.tsx
var import_react9 = require("react");

// app/lib/colorFuncs.ts
function hslToHex(hue, saturation, lightness) {
  let s = saturation, l = lightness, h = hue, c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs(h / 60 % 2 - 1)), m = l - c / 2, r = 0, g = 0, b = 0;
  0 <= h && h < 60 ? (r = c, g = x, b = 0) : 60 <= h && h < 120 ? (r = x, g = c, b = 0) : 120 <= h && h < 180 ? (r = 0, g = c, b = x) : 180 <= h && h < 240 ? (r = 0, g = x, b = c) : 240 <= h && h < 300 ? (r = x, g = 0, b = c) : 300 <= h && h < 360 && (r = c, g = 0, b = x);
  let _r = Math.round((r + m) * 255).toString(16), _g = Math.round((g + m) * 255).toString(16), _b = Math.round((b + m) * 255).toString(16);
  return _r.length == 1 && (_r = "0" + _r), _g.length == 1 && (_g = "0" + _g), _b.length == 1 && (_b = "0" + _b), "#" + _r + _g + _b;
}
function getContrastColorLightness(lightness, contrast) {
  return lightness - contrast * -100;
}
function getContrastHSLString(hslColor, contrast) {
  let contrastingLightness = getContrastColorLightness(hslColor.l, contrast), contrastHSL = {
    h: hslColor.h,
    s: hslColor.s * 100,
    l: contrastingLightness
  };
  return `hsl(${contrastHSL.h}, ${contrastHSL.s}%, ${contrastHSL.l}%)`;
}
function getComplement(hslColor) {
  let complement_hue = hslColor.h + 180, complementHSL = {
    h: complement_hue,
    s: hslColor.s,
    l: hslColor.l
  }, complementHex = hslToHex(complement_hue, hslColor.s, hslColor.l);
  return {
    alpha: 1,
    hsl: complementHSL,
    hex: complementHex
  };
}

// app/context/ThemeContext.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), initialCtx = {
  _id: "0",
  backgroundColor: { alpha: 1, hex: "#eeeee", hsl: { h: 180, s: 50, l: 100 } },
  pageTextColor: { alpha: 1, hex: "#000", hsl: { h: 360, s: 50, l: 1 } },
  productTileBackgroundColor: {
    alpha: 1,
    hex: "#eeeee",
    hsl: { h: 180, s: 50, l: 100 }
  },
  productTileTextColor: { alpha: 1, hex: "#000", hsl: { h: 360, s: 50, l: 1 } },
  bgComplement: { alpha: 1, hex: "#bb1111", hsl: { h: 180, s: 50, l: 1 } },
  bgContrast: "#000",
  tileContrast: "#000"
}, ThemeContext = (0, import_react9.createContext)(initialCtx), ThemeProvider = ({
  siteSettings,
  children
}) => {
  function calcColors(siteSettings2) {
    var _a, _b, _c;
    let bgComplement2 = (_a = siteSettings2 == null ? void 0 : siteSettings2.backgroundColor) != null && _a.hsl ? getComplement(siteSettings2.backgroundColor.hsl) : null, bgContrast2 = (_b = siteSettings2.backgroundColor) != null && _b.hsl ? getContrastHSLString(siteSettings2.backgroundColor.hsl, 0.2) : null, tileContrast2 = (_c = siteSettings2.productTileBackgroundColor) != null && _c.hsl ? getContrastHSLString(siteSettings2.productTileBackgroundColor.hsl, 0.7) : null;
    return { bgComplement: bgComplement2, bgContrast: bgContrast2, tileContrast: tileContrast2 };
  }
  let { bgComplement, bgContrast, tileContrast } = calcColors(siteSettings), userColors = { ...siteSettings };
  return userColors.bgComplement = bgComplement, userColors.bgContrast = bgContrast, userColors.tileContrast = tileContrast, /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(ThemeContext.Provider, { value: siteSettings, children }, void 0, !1, {
    fileName: "app/context/ThemeContext.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
};

// app/components/Preview.tsx
var import_react11 = require("react");

// app/lib/sanity/usePreviewSubscription.tsx
var import_react10 = require("react"), import_groq_store = require("@sanity/groq-store");

// app/lib/sanity/config.ts
var config2 = {
  projectId: "t9guxb1x",
  // dataset: process.env.production ? 'production' : 'dev',
  dataset: "production",
  useCdn: !1,
  apiVersion: "2023-06-27",
  token: process.env.SANITY_API_TOKEN
};

// app/lib/sanity/usePreviewSubscription.tsx
function usePreviewSubscription(query3, subscriptionOptions) {
  let { enabled, params, initialData } = subscriptionOptions, [data, setData] = (0, import_react10.useState)(initialData);
  return (0, import_react10.useEffect)(() => {
    let sub, store;
    async function createStore() {
      let { projectId, dataset } = config2;
      store = (0, import_groq_store.groqStore)({
        projectId,
        dataset,
        // Keep dataset up to date with remote changes. Default: false
        listen: !0,
        // "Replaces" published documents with drafts, if available.
        // Note that document IDs will not reflect draft status, currently
        overlayDrafts: !0,
        // Optional token, if you want to receive drafts, or read data from private datasets
        // NOTE: Does _not_ work in browsers (yet)
        //token: token
        documentLimit: 1e3
      }), store.subscribe(query3, params ?? {}, (err, result) => {
        if (err) {
          console.error("Oh no, an error:", err);
          return;
        }
        setData(result);
      });
    }
    return enabled && createStore(), () => {
      sub != null && sub.unsubscribe() && sub.unsubscribe(), store && store.close();
    };
  }, [enabled, params, query3]), { data };
}

// app/components/Preview.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function Preview({
  data,
  setData,
  query: query3,
  queryParams
}) {
  let { data: previewData } = usePreviewSubscription(query3, {
    params: queryParams,
    initialData: data,
    enabled: !0
  });
  return (0, import_react11.useEffect)(() => setData(previewData), [previewData, setData]), /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "pointer-events-none fixed inset-0 z-50 flex items-start justify-center p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex items-center gap-x-2 rounded bg-pink-500 p-1 font-bold text-white shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "inline-block p-2", children: "Preview Mode" }, void 0, !1, {
    fileName: "app/components/Preview.tsx",
    lineNumber: 27,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Preview.tsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Preview.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/root.tsx
var import_react16 = require("react");

// app/lib/sanity/filterDataToSingleItem.ts
function filterDataToSingleItem(data, preview = !1) {
  return Array.isArray(data) ? data.length === 1 ? data[0] : preview ? data.find((item) => item._id.startsWith("drafts.")) || data[0] : data.find((item) => !item._id.startsWith("drafts.")) || data[0] : data;
}

// app/components/Footer.tsx
var import_react12 = require("@remix-run/react"), import_react13 = require("@portabletext/react");

// app/icons/FacebookSvg.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function FacebookSvg({
  w = "20",
  h = "20"
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
    "svg",
    {
      width: w,
      height: h,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        "path",
        {
          d: "M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z",
          fill: "#000000"
        },
        void 0,
        !1,
        {
          fileName: "app/icons/FacebookSvg.tsx",
          lineNumber: 16,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/icons/FacebookSvg.tsx",
      lineNumber: 9,
      columnNumber: 5
    },
    this
  );
}

// app/icons/TwitterSvg.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function FacebookSvg2({
  w = "20",
  h = "20"
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
    "svg",
    {
      width: w,
      height: h,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        "path",
        {
          d: "M19.83 8.00001C19.83 8.17001 19.83 8.35001 19.83 8.52001C19.8393 10.0302 19.5487 11.5272 18.9751 12.9242C18.4014 14.3212 17.5562 15.5904 16.4883 16.6583C15.4204 17.7262 14.1512 18.5714 12.7542 19.1451C11.3572 19.7187 9.86017 20.0093 8.34999 20C6.15213 20.0064 3.9992 19.3779 2.14999 18.19C2.47999 18.19 2.78999 18.19 3.14999 18.19C4.96345 18.19 6.72433 17.5808 8.14999 16.46C7.30493 16.4524 6.48397 16.1774 5.80489 15.6744C5.12581 15.1714 4.62349 14.4662 4.36999 13.66C4.62464 13.7006 4.88213 13.7207 5.13999 13.72C5.49714 13.7174 5.85281 13.6738 6.19999 13.59C5.2965 13.4056 4.48448 12.9147 3.90135 12.2003C3.31822 11.486 2.99981 10.5921 2.99999 9.67001C3.55908 9.97841 4.18206 10.153 4.81999 10.18C4.25711 9.80767 3.79593 9.30089 3.47815 8.7055C3.16038 8.11011 2.99604 7.44489 2.99999 6.77001C3.00124 6.06749 3.18749 5.37769 3.53999 4.77001C4.55172 6.01766 5.81423 7.03889 7.24575 7.76757C8.67727 8.49625 10.2459 8.91613 11.85 9.00001C11.7865 8.69737 11.753 8.38922 11.75 8.08001C11.7239 7.25689 11.9526 6.44578 12.4047 5.75746C12.8569 5.06913 13.5104 4.53714 14.2762 4.23411C15.0419 3.93109 15.8826 3.87181 16.6833 4.06437C17.484 4.25693 18.2057 4.69195 18.75 5.31001C19.655 5.12822 20.5214 4.78981 21.31 4.31001C21.0088 5.24317 20.3754 6.0332 19.53 6.53001C20.3337 6.44316 21.1194 6.23408 21.86 5.91001C21.3116 6.71097 20.6361 7.41694 19.86 8.00001H19.83Z",
          fill: "#000000"
        },
        void 0,
        !1,
        {
          fileName: "app/icons/TwitterSvg.tsx",
          lineNumber: 16,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/icons/TwitterSvg.tsx",
      lineNumber: 9,
      columnNumber: 5
    },
    this
  );
}

// app/components/SocialLinks.tsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function SocialLinks({
  instagramHandle,
  twitterHandle,
  facebookId
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex justify-center items-center my-1", children: [
    instagramHandle && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      "a",
      {
        className: "mx-2",
        href: `https://www.instagram.com/${instagramHandle}`,
        rel: "noopener noreferrer",
        target: "_blank",
        "aria-label": "Link to instagram",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(InstagramSvg, { w: "24", h: "24" }, void 0, !1, {
          fileName: "app/components/SocialLinks.tsx",
          lineNumber: 25,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/SocialLinks.tsx",
          lineNumber: 24,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/SocialLinks.tsx",
        lineNumber: 17,
        columnNumber: 9
      },
      this
    ),
    twitterHandle && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      "a",
      {
        className: "mx-2",
        href: `https://twitter.com/${twitterHandle}`,
        rel: "noopener noreferrer",
        target: "_blank",
        "aria-label": "Link to twitter",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(FacebookSvg2, { w: "30", h: "30" }, void 0, !1, {
          fileName: "app/components/SocialLinks.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/SocialLinks.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/SocialLinks.tsx",
        lineNumber: 30,
        columnNumber: 9
      },
      this
    ),
    facebookId && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      "a",
      {
        className: "mx-2",
        href: `https://facebook.com/${facebookId}`,
        rel: "noopener noreferrer",
        target: "_blank",
        "aria-label": "Link to facebook",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(FacebookSvg, { w: "30", h: "30" }, void 0, !1, {
          fileName: "app/components/SocialLinks.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/SocialLinks.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/SocialLinks.tsx",
        lineNumber: 43,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/SocialLinks.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/components/Footer.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function Footer() {
  let { contactContent } = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "bg-slate-50 text-slate-800 mt-auto w-full flex flex-col pt-4 pb-2 px-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex justify-between w-full max-w-2xl mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react13.PortableText, { value: contactContent == null ? void 0 : contactContent.content }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        SocialLinks,
        {
          instagramHandle: contactContent == null ? void 0 : contactContent.instagramHandle,
          twitterHandle: contactContent == null ? void 0 : contactContent.twitterHandle,
          facebookId: contactContent == null ? void 0 : contactContent.facebookId
        },
        void 0,
        !1,
        {
          fileName: "app/components/Footer.tsx",
          lineNumber: 17,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "text-sm text-center ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: "website by Corey Hayden" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("a", { href: "mailto:cghayden@gmail.com", children: "cghayden@gmail.com" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/lib/formatError.tsx
var import_react14 = require("@remix-run/react"), import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function formatErrorMessage(error) {
  return (0, import_react14.isRouteErrorResponse)(error) ? (console.error("error", error.statusText), /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h1", { children: [
    error.status,
    " ",
    error.statusText
  ] }, void 0, !0, {
    fileName: "app/lib/formatError.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/lib/formatError.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this)) : error instanceof Error ? (console.error(error.stack), /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h1", { children: "Error" }, void 0, !1, {
      fileName: "app/lib/formatError.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { children: error.message }, void 0, !1, {
      fileName: "app/lib/formatError.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/lib/formatError.tsx",
    lineNumber: 16,
    columnNumber: 7
  }, this)) : typeof error == "string" ? (console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h1", { children: "Error" }, void 0, !1, {
      fileName: "app/lib/formatError.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { children: error }, void 0, !1, {
      fileName: "app/lib/formatError.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/lib/formatError.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this)) : (console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h1", { children: "Unknown Error" }, void 0, !1, {
    fileName: "app/lib/formatError.tsx",
    lineNumber: 31,
    columnNumber: 12
  }, this));
}

// app/root.tsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), links3 = () => [{ rel: "stylesheet", href: tailwind_default }], meta = () => [{ title: "neighborly coffee" }], loader = async ({ request }) => {
  var _a;
  let query3 = `{
    "siteSettings": *[_type == "siteSettings"] {
      _id,
      backgroundColor {alpha, hsl, hex},
      pageTextColor {alpha, hsl, hex},
      productTileBackgroundColor {alpha, hsl, hex},
      productTileTextColor {alpha, hsl, hex}, 
      "backgroundImageUrl" : backgroundImage.asset->url
  },
  "contactContent": *[_type == 'contactPage']
} `, requestUrl = new URL(request == null ? void 0 : request.url), preview = ((_a = requestUrl == null ? void 0 : requestUrl.searchParams) == null ? void 0 : _a.get("preview")) === process.env.SANITY_PREVIEW_SECRET, initialData = await sanity_default.fetch(query3).catch((err) => console.log(err)), siteSettings = filterDataToSingleItem(initialData.siteSettings, preview);
  return {
    initialData,
    siteSettings,
    contactContent: initialData.contactContent[0],
    preview,
    query: preview ? query3 : null,
    queryParams: null
  };
};
function Document({ children, title = "Neighborly Coffee" }) {
  var _a, _b;
  let { siteSettings, preview, query: query3, queryParams } = (0, import_react15.useLoaderData)(), [data, setData] = (0, import_react16.useState)(siteSettings);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react15.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("title", { children: title }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react15.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, this),
    preview && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
      Preview,
      {
        data,
        setData,
        query: query3,
        queryParams
      },
      void 0,
      !1,
      {
        fileName: "app/root.tsx",
        lineNumber: 102,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
      "body",
      {
        className: "min-h-screen m-0 flex flex-col font-HindSiliguri",
        style: {
          background: `${siteSettings.backgroundImageUrl ? `url(${siteSettings.backgroundImageUrl})` : (_a = siteSettings == null ? void 0 : siteSettings.backgroundColor) == null ? void 0 : _a.hex}`,
          color: `${(_b = siteSettings == null ? void 0 : siteSettings.pageTextColor) == null ? void 0 : _b.hex}`,
          overscrollBehavior: "none"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(ThemeProvider, { siteSettings, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(CartProvider, { initialCart: [], children }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 123,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 122,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react15.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 125,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react15.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 126,
            columnNumber: 51
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/root.tsx",
        lineNumber: 109,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 93,
    columnNumber: 5
  }, this);
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Document, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Header_default, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 135,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react15.Outlet, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 136,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 137,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 134,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  let error = (0, import_react15.useRouteError)(), formattedError = formatErrorMessage(error);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 152,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 153,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react15.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 154,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("title", { children: "Uh - Oh!" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 155,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react15.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 156,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 151,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Header_default, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 158,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "bg-red-200 text-slate-800 p-4 rounded max-w-[800px] min-w-[316px] w-11/12 my-6 mx-auto shadow-lg text-center", children: formattedError }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 159,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 150,
    columnNumber: 5
  }, this);
}

// app/routes/coffee.$coffeeSlug.tsx
var coffee_coffeeSlug_exports = {};
__export(coffee_coffeeSlug_exports, {
  default: () => CoffeePage,
  loader: () => loader2
});
var import_react18 = require("@remix-run/react");
var import_react19 = require("react");

// app/lib/sanity/getClient.js
var import_picosanity = __toESM(require("picosanity"));
var sanityClient = new import_picosanity.default(config2), previewClient = new import_picosanity.default({
  ...config2,
  useCdn: !1,
  token: process.env.SANITY_API_TOKEN ?? ""
  // token:
  //   typeof window === 'undefined' && process
  //     ? process.env.SANITY_API_TOKEN
  //     : ``,
}), getClient = (usePreview = !1) => usePreview ? previewClient : sanityClient;

// app/lib/sanity/helpers.ts
var import_image_url = __toESM(require("@sanity/image-url"));
var builder = (0, import_image_url.default)(sanity_default);
function urlFor(source) {
  return builder.image(source);
}

// app/routes/coffee.$coffeeSlug.tsx
var import_react20 = require("@portabletext/react");

// app/components/AddToCartForm.tsx
var import_react17 = require("react");

// app/icons/MinusSvg.tsx
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
function MinusSvg({ w = "20", h = "20" }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
    "svg",
    {
      width: w,
      height: h,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("line", { x1: "5", y1: "12", x2: "19", y2: "12" }, void 0, !1, {
        fileName: "app/icons/MinusSvg.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/icons/MinusSvg.tsx",
      lineNumber: 3,
      columnNumber: 5
    },
    this
  );
}

// app/icons/PlusSvg.tsx
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
function PlusSvg({ w = "20", h = "20" }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("svg", { width: w, height: h, viewBox: "0 0 23 23", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      "path",
      {
        fill: "transparent",
        strokeWidth: "2",
        stroke: "currentColor",
        strokeLinecap: "round",
        opacity: "1",
        d: "M 11 .5 L 11 18.346"
      },
      void 0,
      !1,
      {
        fileName: "app/icons/PlusSvg.tsx",
        lineNumber: 4,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      "path",
      {
        fill: "transparent",
        strokeWidth: "2",
        stroke: "currentColor",
        strokeLinecap: "round",
        opacity: "1",
        d: "M 2 9.423 L 20 9.423"
      },
      void 0,
      !1,
      {
        fileName: "app/icons/PlusSvg.tsx",
        lineNumber: 12,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/icons/PlusSvg.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/AddToCartForm.tsx
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function AddToCartForm({ coffee }) {
  let [alert, setAlert] = (0, import_react17.useState)(), [grind, setGrind] = (0, import_react17.useState)("whole"), [desiredQuantity, setDesiredQuantity] = (0, import_react17.useState)(1), cartItems = useCartItems(), changeCartItemQuantity = useChangeCartItemQuantity(), { toggleIsCartOpen } = useCartUtils(), totalCartQuantity = getTotalQuantityInCart(coffee._id, cartItems), handleGrindChange = (e) => {
    setGrind(e.target.value);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_jsx_dev_runtime25.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: " label__Formcontainer p-3 pt-0 flex flex-col justify-evenly items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "grindRadio flex flex-col items-start", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("label", { htmlFor: "whole", className: "py-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
          "input",
          {
            type: "radio",
            id: "whole",
            name: "grind",
            value: "whole",
            checked: grind === "whole",
            onChange: handleGrindChange,
            className: "mr-1"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AddToCartForm.tsx",
            lineNumber: 30,
            columnNumber: 13
          },
          this
        ),
        "Whole Bean"
      ] }, void 0, !0, {
        fileName: "app/components/AddToCartForm.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("label", { htmlFor: "ground", className: "py-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
          "input",
          {
            type: "radio",
            id: "ground",
            name: "grind",
            value: "ground",
            checked: grind === "ground",
            onChange: handleGrindChange,
            className: "mr-1"
          },
          void 0,
          !1,
          {
            fileName: "app/components/AddToCartForm.tsx",
            lineNumber: 42,
            columnNumber: 13
          },
          this
        ),
        "Ground"
      ] }, void 0, !0, {
        fileName: "app/components/AddToCartForm.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/AddToCartForm.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex place-content-center my-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        "button",
        {
          type: "button",
          disabled: desiredQuantity === 1,
          onClick: () => setDesiredQuantity(desiredQuantity - 1),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(MinusSvg, {}, void 0, !1, {
            fileName: "app/components/AddToCartForm.tsx",
            lineNumber: 68,
            columnNumber: 17
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/AddToCartForm.tsx",
          lineNumber: 63,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "mx-5 text-xl", children: desiredQuantity }, void 0, !1, {
        fileName: "app/components/AddToCartForm.tsx",
        lineNumber: 70,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        "button",
        {
          type: "button",
          onClick: () => {
            totalCartQuantity === coffee.stock || totalCartQuantity + desiredQuantity === coffee.stock ? (setAlert(
              `you have ${totalCartQuantity} ${coffee.name} in your cart.  There are only ${coffee.stock} available`
            ), setTimeout(() => {
              setAlert(null);
            }, 2e3)) : setDesiredQuantity(desiredQuantity + 1);
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(PlusSvg, { w: "18", h: "18" }, void 0, !1, {
            fileName: "app/components/AddToCartForm.tsx",
            lineNumber: 89,
            columnNumber: 17
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/AddToCartForm.tsx",
          lineNumber: 71,
          columnNumber: 15
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/AddToCartForm.tsx",
      lineNumber: 62,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/AddToCartForm.tsx",
      lineNumber: 61,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/AddToCartForm.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
      "button",
      {
        disabled: totalCartQuantity === coffee.stock || totalCartQuantity + desiredQuantity > coffee.stock,
        className: "text-lg bg-slate-600 text-slate-50 rounded-full px-5 py-2 mt-2 disabled:bg-slate-300 disabled:text-slate:100",
        onClick: (e) => {
          e.preventDefault(), changeCartItemQuantity({
            name: `${coffee.name}`,
            coffeeId: `${coffee._id}`,
            quantity: desiredQuantity,
            grind,
            variant_id: `${coffee._id + grind}`,
            price: coffee.price,
            inStock: coffee.stock,
            _id: `${coffee._id}`
          }), toggleIsCartOpen(!0);
        },
        children: [
          "Add ",
          desiredQuantity,
          " to Cart"
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/AddToCartForm.tsx",
        lineNumber: 95,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/AddToCartForm.tsx",
      lineNumber: 94,
      columnNumber: 9
    }, this),
    alert && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { children: alert }, void 0, !1, {
      fileName: "app/components/AddToCartForm.tsx",
      lineNumber: 119,
      columnNumber: 19
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AddToCartForm.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/AddToCartForm.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

// app/components/styledComponents/ContentContainer.tsx
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime");
function ContentContainer({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "bg-slate-50 text-slate-800 p-4 rounded max-w-[800px] min-w-[316px] w-11/12 my-6 mx-auto shadow-lg text-center", children }, void 0, !1, {
    fileName: "app/components/styledComponents/ContentContainer.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/coffee.$coffeeSlug.tsx
var import_dayjs = __toESM(require("dayjs"));
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime"), loader2 = async ({ request, params }) => {
  var _a;
  let requestUrl = new URL(request == null ? void 0 : request.url), preview = ((_a = requestUrl == null ? void 0 : requestUrl.searchParams) == null ? void 0 : _a.get("preview")) === process.env.SANITY_PREVIEW_SECRET, singleCoffeeQuery = '*[_type == "coffee" && slug.current == $slug]', queryParams = { slug: params.coffeeSlug }, initialData = await getClient(preview).fetch(
    singleCoffeeQuery,
    queryParams
  );
  if (!initialData || !initialData.length)
    throw new Response("Oh no - that Coffee was not found!", {
      status: 404,
      statusText: "That coffee was not found"
    });
  return {
    initialData,
    preview,
    singleCoffeeQuery: preview ? singleCoffeeQuery : null,
    queryParams: preview ? queryParams : null
  };
};
function CoffeePage() {
  let { initialData, preview, singleCoffeeQuery, queryParams } = (0, import_react18.useLoaderData)(), [data, setData] = (0, import_react19.useState)(initialData), coffee = filterDataToSingleItem(data, preview);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("main", { children: [
    preview && /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
      Preview,
      {
        data,
        setData,
        query: singleCoffeeQuery,
        queryParams
      },
      void 0,
      !1,
      {
        fileName: "app/routes/coffee.$coffeeSlug.tsx",
        lineNumber: 64,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(ContentContainer, { children: [
      (coffee == null ? void 0 : coffee.name) && /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("h2", { className: "p-4 text-3xl text-center", children: coffee.name }, void 0, !1, {
        fileName: "app/routes/coffee.$coffeeSlug.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this),
      (coffee == null ? void 0 : coffee.roastLevel) && /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { className: "text-center", children: [
        coffee.roastLevel,
        " roast"
      ] }, void 0, !0, {
        fileName: "app/routes/coffee.$coffeeSlug.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this),
      (coffee == null ? void 0 : coffee.image) && /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
        "img",
        {
          loading: "lazy",
          src: urlFor(coffee == null ? void 0 : coffee.image).width(400).height(200).url(),
          width: "400",
          height: "200",
          alt: (coffee == null ? void 0 : coffee.name) ?? "",
          className: "m-auto py-7"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/coffee.$coffeeSlug.tsx",
          lineNumber: 79,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { children: [
        (coffee == null ? void 0 : coffee.descriptionLong) && /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "label__longDescription p-4 text-justify max-w-xl mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react20.PortableText, { value: coffee.descriptionLong }, void 0, !1, {
          fileName: "app/routes/coffee.$coffeeSlug.tsx",
          lineNumber: 91,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/coffee.$coffeeSlug.tsx",
          lineNumber: 90,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "text-lg text-sky-600 flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { className: "inline-block", children: `$ ${formatMoney(coffee.price)}` }, void 0, !1, {
            fileName: "app/routes/coffee.$coffeeSlug.tsx",
            lineNumber: 95,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "w-16 h-[2px] bg-sky-600 m-auto my-1" }, void 0, !1, {
            fileName: "app/routes/coffee.$coffeeSlug.tsx",
            lineNumber: 96,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { children: [
            " ",
            coffee.size,
            " bag"
          ] }, void 0, !0, {
            fileName: "app/routes/coffee.$coffeeSlug.tsx",
            lineNumber: 97,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/coffee.$coffeeSlug.tsx",
          lineNumber: 94,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "label__detailListAndForm grid place-items-center place-content-center grid-cols-autoFit2 w-full max-w-[700px] mx-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("dl", { className: "label__coffeeDetailsList p-3 self-start", children: [
            (coffee == null ? void 0 : coffee.roastDate) && /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex flex-row items-baseline", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_jsx_dev_runtime27.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("dt", { className: "w-20 text-slate-900 text-left text-lg mr-3", children: "roasted" }, void 0, !1, {
                fileName: "app/routes/coffee.$coffeeSlug.tsx",
                lineNumber: 105,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("dd", { className: "text-amber-800", children: (0, import_dayjs.default)(coffee.roastDate).format("MMMM DD") }, void 0, !1, {
                fileName: "app/routes/coffee.$coffeeSlug.tsx",
                lineNumber: 108,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/coffee.$coffeeSlug.tsx",
              lineNumber: 104,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/coffee.$coffeeSlug.tsx",
              lineNumber: 103,
              columnNumber: 17
            }, this),
            (coffee == null ? void 0 : coffee.grade) && /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex flex-row items-baseline", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_jsx_dev_runtime27.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("dt", { className: "w-20 text-slate-900 text-left text-lg mr-3", children: "grade" }, void 0, !1, {
                fileName: "app/routes/coffee.$coffeeSlug.tsx",
                lineNumber: 117,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("dd", { className: "text-amber-800", children: coffee.grade }, void 0, !1, {
                fileName: "app/routes/coffee.$coffeeSlug.tsx",
                lineNumber: 120,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/coffee.$coffeeSlug.tsx",
              lineNumber: 116,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/coffee.$coffeeSlug.tsx",
              lineNumber: 115,
              columnNumber: 17
            }, this),
            (coffee == null ? void 0 : coffee.region) && /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex flex-row items-baseline", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_jsx_dev_runtime27.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("dt", { className: "w-20 text-slate-900 text-left text-lg mr-3", children: "region" }, void 0, !1, {
                fileName: "app/routes/coffee.$coffeeSlug.tsx",
                lineNumber: 127,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("dd", { className: "text-amber-800", children: coffee.region }, void 0, !1, {
                fileName: "app/routes/coffee.$coffeeSlug.tsx",
                lineNumber: 130,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/coffee.$coffeeSlug.tsx",
              lineNumber: 126,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/coffee.$coffeeSlug.tsx",
              lineNumber: 125,
              columnNumber: 17
            }, this),
            (coffee == null ? void 0 : coffee.cultivar) && /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex flex-row items-baseline", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_jsx_dev_runtime27.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("dt", { className: "w-20 text-slate-900 text-left text-lg mr-3", children: "cultivar" }, void 0, !1, {
                fileName: "app/routes/coffee.$coffeeSlug.tsx",
                lineNumber: 137,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("dd", { className: "text-amber-800", children: coffee.cultivar }, void 0, !1, {
                fileName: "app/routes/coffee.$coffeeSlug.tsx",
                lineNumber: 140,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/coffee.$coffeeSlug.tsx",
              lineNumber: 136,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/coffee.$coffeeSlug.tsx",
              lineNumber: 135,
              columnNumber: 17
            }, this),
            (coffee == null ? void 0 : coffee.elevation) && /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex flex-row items-baseline", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_jsx_dev_runtime27.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("dt", { className: "w-20 text-slate-900 text-left text-lg mr-3", children: "elevation" }, void 0, !1, {
                fileName: "app/routes/coffee.$coffeeSlug.tsx",
                lineNumber: 147,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("dd", { className: "text-amber-800", children: coffee.elevation }, void 0, !1, {
                fileName: "app/routes/coffee.$coffeeSlug.tsx",
                lineNumber: 150,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/coffee.$coffeeSlug.tsx",
              lineNumber: 146,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/coffee.$coffeeSlug.tsx",
              lineNumber: 145,
              columnNumber: 17
            }, this),
            (coffee == null ? void 0 : coffee.process) && /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex flex-row items-baseline", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_jsx_dev_runtime27.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("dt", { className: "w-20 text-slate-900 text-left text-lg mr-3", children: "process" }, void 0, !1, {
                fileName: "app/routes/coffee.$coffeeSlug.tsx",
                lineNumber: 157,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("dd", { className: "text-amber-800", children: coffee.process }, void 0, !1, {
                fileName: "app/routes/coffee.$coffeeSlug.tsx",
                lineNumber: 160,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/coffee.$coffeeSlug.tsx",
              lineNumber: 156,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/coffee.$coffeeSlug.tsx",
              lineNumber: 155,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/coffee.$coffeeSlug.tsx",
            lineNumber: 101,
            columnNumber: 13
          }, this),
          coffee != null && coffee.stock && (coffee == null ? void 0 : coffee.stock) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(AddToCartForm, { coffee }, void 0, !1, {
            fileName: "app/routes/coffee.$coffeeSlug.tsx",
            lineNumber: 167,
            columnNumber: 15
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { children: "out of stock" }, void 0, !1, {
            fileName: "app/routes/coffee.$coffeeSlug.tsx",
            lineNumber: 169,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/coffee.$coffeeSlug.tsx",
          lineNumber: 100,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/coffee.$coffeeSlug.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/coffee.$coffeeSlug.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/coffee.$coffeeSlug.tsx",
    lineNumber: 62,
    columnNumber: 5
  }, this);
}

// app/routes/coffee._index.tsx
var coffee_index_exports = {};
__export(coffee_index_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  default: () => CoffeeIndex,
  loader: () => loader3
});
var import_react24 = require("@remix-run/react");

// app/components/CoffeeCard.tsx
var import_dayjs2 = __toESM(require("dayjs")), import_react21 = require("@remix-run/react"), import_react22 = require("react");
var import_react_router_dom = require("react-router-dom"), import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
function CoffeeCard({
  coffee,
  previewQuery
}) {
  var _a, _b, _c, _d;
  let location = (0, import_react_router_dom.useLocation)(), theme = (0, import_react22.useContext)(ThemeContext), tileColor = (_a = theme == null ? void 0 : theme.productTileBackgroundColor) == null ? void 0 : _a.hex, tileTextColor = (_b = theme == null ? void 0 : theme.productTileTextColor) == null ? void 0 : _b.hex, link = location.pathname === "/coffee" ? `${location.pathname}/${(_c = coffee == null ? void 0 : coffee.slug) == null ? void 0 : _c.current}/${previewQuery}` : `coffee/${(_d = coffee == null ? void 0 : coffee.slug) == null ? void 0 : _d.current}/${previewQuery}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react21.Link, { to: link, children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
    "div",
    {
      className: "p-4 border-4 rounded shadow w-[300px] h-[300px] mb-1 flex flex-col justify-between",
      style: {
        background: `${tileColor}`,
        borderColor: `${tileTextColor}`,
        color: `${tileTextColor}`
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "h-1/6 grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("h2", { className: "text-xl sm:text-2xl font-normal text-center", children: coffee.name }, void 0, !1, {
          fileName: "app/components/CoffeeCard.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/CoffeeCard.tsx",
          lineNumber: 38,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "flex flex-col flex-grow justify-center items-center space-y-4", children: [
          coffee.roastLevel && /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("p", { children: [
            coffee.roastLevel,
            " roast"
          ] }, void 0, !0, {
            fileName: "app/components/CoffeeCard.tsx",
            lineNumber: 44,
            columnNumber: 33
          }, this),
          coffee.description && /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("p", { className: "text-center w-11/12", children: coffee.description }, void 0, !1, {
            fileName: "app/components/CoffeeCard.tsx",
            lineNumber: 46,
            columnNumber: 13
          }, this),
          coffee.roastDate && /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("p", { children: [
            "roasted ",
            (0, import_dayjs2.default)(coffee.roastDate).format("MMMM DD")
          ] }, void 0, !0, {
            fileName: "app/components/CoffeeCard.tsx",
            lineNumber: 49,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/CoffeeCard.tsx",
          lineNumber: 43,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "h-1/6 grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("p", { children: [
          coffee.stock,
          " in stock"
        ] }, void 0, !0, {
          fileName: "app/components/CoffeeCard.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/CoffeeCard.tsx",
          lineNumber: 57,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/CoffeeCard.tsx",
      lineNumber: 30,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/CoffeeCard.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}
var CoffeeCard_default = CoffeeCard;

// app/components/styledComponents/PageHeading.tsx
var import_react23 = require("react");
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime");
function PageHeading({ text = "" }) {
  let { pageTextColor } = (0, import_react23.useContext)(ThemeContext);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
    "h2",
    {
      className: "text-2xl sm:text-2xl font-medium sm:py-6 text-center pt-4",
      style: { color: `${pageTextColor}` },
      children: text
    },
    void 0,
    !1,
    {
      fileName: "app/components/styledComponents/PageHeading.tsx",
      lineNumber: 8,
      columnNumber: 5
    },
    this
  );
}

// app/components/AllCoffee.tsx
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime");
function AllCoffee({
  allCoffee,
  pageContent,
  previewQuery
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("main", { className: "px-4 py-2 w-full flex flex-col items-center", children: [
    (pageContent == null ? void 0 : pageContent.heading) && /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "py-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(PageHeading, { text: pageContent.heading }, void 0, !1, {
      fileName: "app/components/AllCoffee.tsx",
      lineNumber: 18,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/AllCoffee.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    allCoffee.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "py-2 flex flex-wrap justify-center gap-4", children: allCoffee.map((coffee) => /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
      CoffeeCard_default,
      {
        coffee,
        previewQuery
      },
      coffee.name,
      !1,
      {
        fileName: "app/components/AllCoffee.tsx",
        lineNumber: 24,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/AllCoffee.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("p", { children: "No products were found, or an error occurred retrieving the products" }, void 0, !1, {
      fileName: "app/components/AllCoffee.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AllCoffee.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
var AllCoffee_default = AllCoffee;

// app/routes/coffee._index.tsx
var import_react25 = require("react");

// app/lib/sanity/filterDataToDrafts.ts
function filterDataToDrafts(incomingData, preview = !1) {
  if (!Array.isArray(incomingData) || incomingData.length === 1)
    return incomingData;
  if (preview) {
    let finalData = [];
    for (let incomingItem of incomingData)
      if (incomingItem._id.startsWith("drafts") || finalData.push(incomingItem), incomingItem._id.startsWith("drafts")) {
        let draft_id = incomingItem._id.slice(7), matchIndex = finalData.findIndex(
          (finalDataItem) => finalDataItem._id === draft_id
        );
        if (matchIndex == -1) {
          finalData.push(incomingItem);
          continue;
        }
        finalData.splice(matchIndex, 1, incomingItem);
      }
    return finalData;
  }
  return incomingData.filter((item) => !item._id.startsWith("drafts."));
}

// app/components/styledComponents/ErrorContainer.tsx
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime"), ErrorContainer = ({ error }) => {
  console.error(error);
  let formattedError = formatErrorMessage(error);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "bg-red-200 text-slate-800 p-4 rounded max-w-[800px] min-w-[316px] w-11/12 my-6 mx-auto shadow-lg text-center", children: formattedError }, void 0, !1, {
    fileName: "app/components/styledComponents/ErrorContainer.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
};

// app/routes/coffee._index.tsx
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime"), query = `{
"coffee":  *[_type == "coffee" && stock > 0] {
  _id,
  name,
  stock,
  roastLevel,
  roastDate,
  description,
slug{current},
price,
},
"coffeePageContent": *[_type == "coffeePage"]
}
`, loader3 = async ({ request }) => {
  var _a;
  let requestUrl = new URL(request == null ? void 0 : request.url), previewQuery = requestUrl.search, preview = ((_a = requestUrl == null ? void 0 : requestUrl.searchParams) == null ? void 0 : _a.get("preview")) === process.env.SANITY_PREVIEW_SECRET, initialData = await getClient(preview).fetch(query).catch((err) => {
    throw console.log("err", err), Error("there was an error loading the items");
  }), coffee = filterDataToDrafts(initialData.coffee, preview), coffeePageContent = filterDataToSingleItem(
    initialData.coffeePageContent,
    preview
  );
  return {
    coffee,
    coffeePageContent,
    preview,
    previewQuery,
    query,
    queryParams: null
  };
};
function CoffeeIndex() {
  let {
    coffee,
    coffeePageContent,
    preview,
    previewQuery,
    query: query3,
    queryParams
  } = (0, import_react24.useLoaderData)(), [data, setData] = (0, import_react25.useState)(coffee);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("main", { children: [
    preview && /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
      Preview,
      {
        data,
        setData,
        query: query3,
        queryParams
      },
      void 0,
      !1,
      {
        fileName: "app/routes/coffee._index.tsx",
        lineNumber: 76,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
      AllCoffee_default,
      {
        allCoffee: coffee,
        pageContent: coffeePageContent,
        previewQuery
      },
      void 0,
      !1,
      {
        fileName: "app/routes/coffee._index.tsx",
        lineNumber: 83,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/coffee._index.tsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
}
function ErrorBoundary2() {
  let error = (0, import_react24.useRouteError)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(ErrorContainer, { error }, void 0, !1, {
    fileName: "app/routes/coffee._index.tsx",
    lineNumber: 94,
    columnNumber: 10
  }, this);
}

// app/routes/blog._index.tsx
var blog_index_exports = {};
__export(blog_index_exports, {
  default: () => BlogIndex,
  loader: () => loader4
});
var import_react27 = require("@remix-run/react");
var import_react28 = require("react");

// app/components/styledComponents/TwoColContainer.tsx
var import_dayjs3 = __toESM(require("dayjs"));
var import_react26 = require("@portabletext/react"), import_jsx_dev_runtime33 = require("react/jsx-dev-runtime");
function TwoColContainer({
  heading,
  image,
  date,
  content
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "h-full grid sm:grid-cols-autoFit2 place-items-center gap-3 bg-slate-50 text-slate-800 p-4 rounded max-w-[900px] sm:min-w-[316px] w-11/12 my-6 mx-auto shadow-lg", children: [
    image && /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "w-max-[300px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
      "img",
      {
        className: "max-w-[300]",
        loading: "lazy",
        src: urlFor(image).width(300).fit("max").url(),
        alt: image.alt ?? ""
      },
      void 0,
      !1,
      {
        fileName: "app/components/styledComponents/TwoColContainer.tsx",
        lineNumber: 21,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/styledComponents/TwoColContainer.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "text-center pb-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("h2", { className: "text-xl font-bold", children: heading }, void 0, !1, {
          fileName: "app/components/styledComponents/TwoColContainer.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("p", { className: "text-s pb-2", children: (0, import_dayjs3.default)(date).format("MMMM DD, YYYY") }, void 0, !1, {
          fileName: "app/components/styledComponents/TwoColContainer.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/styledComponents/TwoColContainer.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react26.PortableText, { value: content }, void 0, !1, {
        fileName: "app/components/styledComponents/TwoColContainer.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/styledComponents/TwoColContainer.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/styledComponents/TwoColContainer.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/styledComponents/TwoColContainer.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/blog._index.tsx
var import_jsx_dev_runtime34 = require("react/jsx-dev-runtime"), query2 = `*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  publishedAt,
  excerpt, 
  mainImage,
  slug
}`, loader4 = async ({ request }) => {
  let requestUrl = new URL(request == null ? void 0 : request.url), previewQuery = requestUrl.search, preview = requestUrl.searchParams.get("preview") === process.env.SANITY_PREVIEW_SECRET, initialData = await getClient(preview).fetch(query2).catch((err) => console.log(err));
  return {
    allPosts: filterDataToDrafts(initialData, preview),
    preview,
    previewQuery,
    query: query2,
    queryParams: null
  };
};
function BlogIndex() {
  let { allPosts, preview, previewQuery, query: query3, queryParams } = (0, import_react27.useLoaderData)(), [data, setData] = (0, import_react28.useState)(allPosts);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("main", { children: [
    preview && /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
      Preview,
      {
        data,
        setData,
        query: query3,
        queryParams
      },
      void 0,
      !1,
      {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 50,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("ul", { className: "flex flex-col mx-auto mt-6", children: allPosts.length > 0 && allPosts.map((post) => {
      var _a;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react27.Link, { to: `${(_a = post == null ? void 0 : post.slug) == null ? void 0 : _a.current}/${previewQuery}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
        TwoColContainer,
        {
          heading: post == null ? void 0 : post.title,
          image: post == null ? void 0 : post.mainImage,
          date: post == null ? void 0 : post.publishedAt,
          content: post == null ? void 0 : post.excerpt
        },
        void 0,
        !1,
        {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 63,
          columnNumber: 17
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 62,
        columnNumber: 15
      }, this) }, post.title, !1, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 60,
        columnNumber: 13
      }, this);
    }) }, void 0, !1, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog._index.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

// app/routes/blog.$slug.tsx
var blog_slug_exports = {};
__export(blog_slug_exports, {
  ErrorBoundary: () => ErrorBoundary3,
  default: () => BlogPost,
  loader: () => loader5
});
var import_react29 = require("@remix-run/react");
var import_react30 = require("react");
var import_react31 = require("@portabletext/react");
var import_dayjs4 = __toESM(require("dayjs"));
var import_jsx_dev_runtime35 = require("react/jsx-dev-runtime"), loader5 = async ({ request, params }) => {
  var _a;
  let requestUrl = new URL(request == null ? void 0 : request.url), preview = ((_a = requestUrl == null ? void 0 : requestUrl.searchParams) == null ? void 0 : _a.get("preview")) === process.env.SANITY_PREVIEW_SECRET, singlePostQuery = '*[_type == "post" && slug.current == $slug]', queryParams = { slug: params.slug }, initialData = await getClient(preview).fetch(singlePostQuery, queryParams).catch((err) => {
    throw new Error(err);
  });
  if (!initialData || !initialData.length)
    throw new Response("Oh no - that Post was not found!", {
      status: 404,
      statusText: "That post was not found"
    });
  return {
    initialData,
    preview,
    // If `preview` mode is active, we'll need these for live updates:
    singlePostQuery: preview ? singlePostQuery : null,
    queryParams: preview ? queryParams : null
  };
};
function BlogPost() {
  let { initialData, preview, singlePostQuery, queryParams } = (0, import_react29.useLoaderData)(), [data, setData] = (0, import_react30.useState)(initialData), post = filterDataToSingleItem(data, preview);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("main", { children: [
    preview && /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
      Preview,
      {
        data,
        setData,
        query: singlePostQuery,
        queryParams
      },
      void 0,
      !1,
      {
        fileName: "app/routes/blog.$slug.tsx",
        lineNumber: 72,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(ContentContainer, { children: [
      (post == null ? void 0 : post.title) && /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("h2", { className: "p-4 text-3xl text-center", children: post.title }, void 0, !1, {
        fileName: "app/routes/blog.$slug.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this),
      (post == null ? void 0 : post.publishedAt) && /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("p", { className: "text-xs text-center pb-4", children: (0, import_dayjs4.default)(post.publishedAt).format("MMMM DD, YYYY") }, void 0, !1, {
        fileName: "app/routes/blog.$slug.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this),
      (post == null ? void 0 : post.mainImage) && /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
        "img",
        {
          loading: "lazy",
          src: urlFor(post.mainImage).fit("max").url(),
          alt: (post == null ? void 0 : post.title) ?? "",
          className: "m-auto py-7 max-w-lg w-full"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/blog.$slug.tsx",
          lineNumber: 90,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_react31.PortableText, { value: post.body }, void 0, !1, {
        fileName: "app/routes/blog.$slug.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/blog.$slug.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog.$slug.tsx",
    lineNumber: 70,
    columnNumber: 5
  }, this);
}
function ErrorBoundary3() {
  let error = (0, import_react29.useRouteError)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(ErrorContainer, { error }, void 0, !1, {
    fileName: "app/routes/blog.$slug.tsx",
    lineNumber: 105,
    columnNumber: 10
  }, this);
}

// app/routes/pay._index.tsx
var pay_index_exports = {};
__export(pay_index_exports, {
  ErrorBoundary: () => ErrorBoundary4,
  default: () => PayIndex,
  loader: () => loader6
});
var import_react33 = require("@remix-run/react"), import_react_stripe_js = require("@stripe/react-stripe-js");

// app/components/CollapsibleCartSummary.tsx
var import_react32 = require("react");

// app/icons/PlaySvg.tsx
var import_jsx_dev_runtime36 = require("react/jsx-dev-runtime");
function PlaySvg({ w = "20", h = "20" }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: w,
      height: h,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
        "path",
        {
          fillRule: "evenodd",
          d: "M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z",
          clipRule: "evenodd"
        },
        void 0,
        !1,
        {
          fileName: "app/icons/PlaySvg.tsx",
          lineNumber: 11,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/icons/PlaySvg.tsx",
      lineNumber: 3,
      columnNumber: 5
    },
    this
  );
}

// app/components/CollapsibleCartSummary.tsx
var import_jsx_dev_runtime37 = require("react/jsx-dev-runtime");
function CollapsibleCartSummary({
  orderDetails,
  shippingCost
}) {
  var _a;
  let [showSummary, toggleShowSummary] = (0, import_react32.useState)(!1), cartItems = orderDetails.cart, subtotal = calcTotalPrice(cartItems);
  return cartItems.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_jsx_dev_runtime37.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "flex p-2 w-full items-center ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
        "button",
        {
          className: "self-start p-2",
          onClick: () => toggleShowSummary(!showSummary),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: `${showSummary ? "rotate-90" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(PlaySvg, {}, void 0, !1, {
            fileName: "app/components/CollapsibleCartSummary.tsx",
            lineNumber: 26,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/components/CollapsibleCartSummary.tsx",
            lineNumber: 25,
            columnNumber: 11
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/CollapsibleCartSummary.tsx",
          lineNumber: 21,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("p", { children: showSummary ? "Hide Order Summary" : "Show Order Summary" }, void 0, !1, {
        fileName: "app/components/CollapsibleCartSummary.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "flex items-end ml-auto font-semibold text-xl", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("p", { children: "Total Cost:" }, void 0, !1, {
          fileName: "app/components/CollapsibleCartSummary.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("p", { className: "w-20", children: `$${formatMoney(subtotal + shippingCost)}` }, void 0, !1, {
          fileName: "app/components/CollapsibleCartSummary.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/CollapsibleCartSummary.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/CollapsibleCartSummary.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "", children: showSummary ? /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("ul", { className: "p-2 flex flex-col items-end", children: [
      cartItems.map((cartItem) => /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("li", { className: "flex", children: [
        `${cartItem.quantity} ${cartItem.name}, ${cartItem.grind}: `,
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("p", { className: "w-20", children: `$${formatMoney(cartItem.price * cartItem.quantity)}` }, void 0, !1, {
          fileName: "app/components/CollapsibleCartSummary.tsx",
          lineNumber: 41,
          columnNumber: 17
        }, this)
      ] }, cartItem.variant_id, !0, {
        fileName: "app/components/CollapsibleCartSummary.tsx",
        lineNumber: 39,
        columnNumber: 15
      }, this)),
      ((_a = orderDetails == null ? void 0 : orderDetails.fulfillmentDetails) == null ? void 0 : _a.method) === "shipping" && /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("li", { className: "flex", children: [
        "Shipping:",
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("p", { className: "w-20", children: `$${formatMoney(shippingCost)}` }, void 0, !1, {
          fileName: "app/components/CollapsibleCartSummary.tsx",
          lineNumber: 49,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/CollapsibleCartSummary.tsx",
        lineNumber: 47,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/CollapsibleCartSummary.tsx",
      lineNumber: 37,
      columnNumber: 11
    }, this) : null }, void 0, !1, {
      fileName: "app/components/CollapsibleCartSummary.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/CollapsibleCartSummary.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { children: "Your cart is empty" }, void 0, !1, {
    fileName: "app/components/CollapsibleCartSummary.tsx",
    lineNumber: 17,
    columnNumber: 33
  }, this);
}

// app/routes/pay._index.tsx
var import_react34 = require("react");
var import_jsx_dev_runtime38 = require("react/jsx-dev-runtime"), loader6 = ({ request }) => new URL(request.url).origin;
function PayIndex() {
  let [error, setError] = (0, import_react34.useState)(!1), [errorMessage, setErrorMessage] = (0, import_react34.useState)(""), [submitting, setSubmitting] = (0, import_react34.useState)(!1), urlOrigin = (0, import_react33.useLoaderData)(), cartItems = useCartItems(), elements = (0, import_react_stripe_js.useElements)(), stripe2 = (0, import_react_stripe_js.useStripe)(), { orderDetails, shippingCost } = (0, import_react33.useActionData)(), handleSubmit = async (e) => {
    if (e.preventDefault(), setSubmitting(!0), setError(!1), !stripe2 || !elements)
      return null;
    stripe2.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${urlOrigin}/writeOrder`
      }
    }).then((result) => {
      result.error && (setSubmitting(!1), setError(!0), setErrorMessage(result.error.message));
    });
  };
  return cartItems.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_jsx_dev_runtime38.Fragment, { children: [
    error && /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(ErrorContainer, { error: errorMessage }, void 0, !1, {
      fileName: "app/routes/pay._index.tsx",
      lineNumber: 63,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(ContentContainer, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
        CollapsibleCartSummary,
        {
          orderDetails,
          shippingCost
        },
        void 0,
        !1,
        {
          fileName: "app/routes/pay._index.tsx",
          lineNumber: 65,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_react33.Form, { onSubmit: handleSubmit, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_react_stripe_js.PaymentElement, {}, void 0, !1, {
          fileName: "app/routes/pay._index.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
          "button",
          {
            className: `${submitting === !0 ? "bg-amber-900" : "bg-amber-800"} text-amber-50 px-8 py-3 mt-5 rounded-xl`,
            disabled: submitting,
            children: submitting === !0 ? "confirming..." : "confirm"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/pay._index.tsx",
            lineNumber: 71,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/pay._index.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/pay._index.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/pay._index.tsx",
    lineNumber: 62,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(ContentContainer, { children: "Oops! There was an error retrieving your cart, please continue shopping." }, void 0, !1, {
    fileName: "app/routes/pay._index.tsx",
    lineNumber: 55,
    columnNumber: 7
  }, this);
}
function ErrorBoundary4() {
  let error = (0, import_react33.useRouteError)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(ErrorContainer, { error }, void 0, !1, {
    fileName: "app/routes/pay._index.tsx",
    lineNumber: 87,
    columnNumber: 10
  }, this);
}

// app/routes/reviewCart.tsx
var reviewCart_exports = {};
__export(reviewCart_exports, {
  ErrorBoundary: () => ErrorBoundary5,
  default: () => ReviewCart,
  links: () => links4,
  loader: () => loader7
});
var import_react35 = require("react"), import_react36 = require("@remix-run/react"), import_framer_motion = require("framer-motion");

// app/components/CheckoutFormField.tsx
var import_jsx_dev_runtime39 = require("react/jsx-dev-runtime");
function CheckoutFormField({
  label,
  name,
  id,
  inputType,
  placeholder,
  required,
  autoComplete,
  value,
  onChange
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "label__FormRow grid grid-cols-checkoutForm items-center border-t-2 border-blue-800 first:border-0 focus-visible:border-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
      "label",
      {
        htmlFor: id,
        className: "label__FormRowLabel w-[15%] mr-2 ml-2 text-blue-800 min-w-[70px]",
        children: label
      },
      void 0,
      !1,
      {
        fileName: "app/components/CheckoutFormField.tsx",
        lineNumber: 26,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
      "input",
      {
        className: "label__FormRowInput w-full py-3 pr-4 ml-2 bg-slate-100 focus-visible:outline-none",
        id,
        type: inputType,
        placeholder,
        required,
        autoComplete,
        value,
        onChange,
        name
      },
      void 0,
      !1,
      {
        fileName: "app/components/CheckoutFormField.tsx",
        lineNumber: 32,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/CheckoutFormField.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/components/styledComponents/FieldsetGroup.tsx
var import_jsx_dev_runtime40 = require("react/jsx-dev-runtime");
function FieldsetGroup({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
    "fieldset",
    {
      className: `my-4 mx-0 p-0
     border-none bg-blue-50 drop-shadow-md rounded `,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/styledComponents/FieldsetGroup.tsx",
      lineNumber: 7,
      columnNumber: 5
    },
    this
  );
}

// app/components/ShippingDetailsInputs.tsx
var import_jsx_dev_runtime41 = require("react/jsx-dev-runtime");
function ShippingDetailsInputs({
  fulfillmentDetails,
  setFulfillmentDetails
}) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(FieldsetGroup, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
      CheckoutFormField,
      {
        label: (_a = fulfillmentDetails.shippingName) != null && _a.length ? "name" : "",
        id: "shippingName",
        name: "shippingName",
        inputType: "text",
        placeholder: (_b = fulfillmentDetails.shippingName) != null && _b.length ? "" : "name",
        required: !0,
        autoComplete: "name",
        value: fulfillmentDetails.shippingName,
        onChange: (e) => {
          setFulfillmentDetails({
            ...fulfillmentDetails,
            [e.target.name]: e.target.value
          });
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/ShippingDetailsInputs.tsx",
        lineNumber: 16,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
      CheckoutFormField,
      {
        label: (_c = fulfillmentDetails.shippingAddressLine1) != null && _c.length ? "address" : "",
        id: "shippingAddressLine1",
        name: "shippingAddressLine1",
        inputType: "text",
        placeholder: (_d = fulfillmentDetails.shippingAddressLine1) != null && _d.length ? "" : "address line 1",
        required: !0,
        autoComplete: "address-line1",
        value: fulfillmentDetails.shippingAddressLine1,
        onChange: (e) => {
          setFulfillmentDetails({
            ...fulfillmentDetails,
            [e.target.name]: e.target.value
          });
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/ShippingDetailsInputs.tsx",
        lineNumber: 32,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
      CheckoutFormField,
      {
        label: ((_e = fulfillmentDetails.shippingAddressLine2) != null && _e.length, ""),
        id: "shippingAddressLine2",
        name: "shippingAddressLine2",
        inputType: "text",
        placeholder: (_f = fulfillmentDetails.shippingAddressLine2) != null && _f.length ? "" : "address line 2",
        required: !1,
        autoComplete: "address-line2",
        value: fulfillmentDetails.shippingAddressLine2,
        onChange: (e) => {
          setFulfillmentDetails({
            ...fulfillmentDetails,
            [e.target.name]: e.target.value
          });
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/ShippingDetailsInputs.tsx",
        lineNumber: 54,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
      CheckoutFormField,
      {
        label: (_g = fulfillmentDetails.shippingCity) != null && _g.length ? "city" : "",
        id: "shippingCity",
        name: "shippingCity",
        inputType: "text",
        placeholder: (_h = fulfillmentDetails.shippingCity) != null && _h.length ? "" : "city",
        required: !0,
        autoComplete: "address-level2",
        value: fulfillmentDetails.shippingCity,
        onChange: (e) => {
          setFulfillmentDetails({
            ...fulfillmentDetails,
            [e.target.name]: e.target.value
          });
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/ShippingDetailsInputs.tsx",
        lineNumber: 74,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
      CheckoutFormField,
      {
        label: (_i = fulfillmentDetails.shippingState) != null && _i.length ? "state" : "",
        id: "shippingState",
        name: "shippingState",
        inputType: "text",
        placeholder: (_j = fulfillmentDetails.shippingState) != null && _j.length ? "" : "state",
        required: !0,
        autoComplete: "address-level1",
        value: fulfillmentDetails.shippingState,
        onChange: (e) => {
          setFulfillmentDetails({
            ...fulfillmentDetails,
            [e.target.name]: e.target.value
          });
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/ShippingDetailsInputs.tsx",
        lineNumber: 90,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
      CheckoutFormField,
      {
        label: (_k = fulfillmentDetails.shippingPostal_code) != null && _k.length ? "zip" : "",
        id: "shippingPostal_code",
        name: "shippingPostal_code",
        inputType: "text",
        placeholder: (_l = fulfillmentDetails.shippingPostal_code) != null && _l.length ? "" : "zip",
        required: !0,
        autoComplete: "postal-code",
        value: fulfillmentDetails.shippingPostal_code,
        onChange: (e) => {
          setFulfillmentDetails({
            ...fulfillmentDetails,
            [e.target.name]: e.target.value
          });
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/ShippingDetailsInputs.tsx",
        lineNumber: 106,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/ShippingDetailsInputs.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/components/CustomerDetailsInputs.tsx
var import_jsx_dev_runtime42 = require("react/jsx-dev-runtime");
function CustomerDetailsInputs({
  customerDetails,
  setCustomerDetails
}) {
  var _a, _b, _c, _d, _e, _f;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(FieldsetGroup, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
      CheckoutFormField,
      {
        label: (_a = customerDetails.customerName) != null && _a.length ? "name" : "",
        id: "customerName",
        name: "customerName",
        inputType: "text",
        placeholder: (_b = customerDetails.customerName) != null && _b.length ? "" : "name",
        required: !0,
        autoComplete: "name",
        value: customerDetails.customerName,
        onChange: (e) => {
          setCustomerDetails({
            ...customerDetails,
            [e.target.name]: e.target.value
          });
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/CustomerDetailsInputs.tsx",
        lineNumber: 14,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
      CheckoutFormField,
      {
        label: (_c = customerDetails.customerPhone) != null && _c.length ? "phone" : "",
        id: "customerPhone",
        name: "customerPhone",
        inputType: "text",
        placeholder: (_d = customerDetails.customerPhone) != null && _d.length ? "" : "phone",
        required: !0,
        autoComplete: "phone",
        value: customerDetails.customerPhone,
        onChange: (e) => {
          setCustomerDetails({
            ...customerDetails,
            [e.target.name]: e.target.value
          });
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/CustomerDetailsInputs.tsx",
        lineNumber: 30,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
      CheckoutFormField,
      {
        label: (_e = customerDetails.customerEmail) != null && _e.length ? "email" : "",
        id: "customerEmail",
        name: "customerEmail",
        inputType: "email",
        placeholder: (_f = customerDetails.customerEmail) != null && _f.length ? "" : "email",
        required: !0,
        autoComplete: "email",
        value: customerDetails.customerEmail,
        onChange: (e) => {
          setCustomerDetails({
            ...customerDetails,
            [e.target.name]: e.target.value
          });
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/CustomerDetailsInputs.tsx",
        lineNumber: 46,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/CustomerDetailsInputs.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/components/styledComponents/InputRow.tsx
var import_jsx_dev_runtime43 = require("react/jsx-dev-runtime");
function InputRow({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "label__input-row w-full py-3 px-3  bg-blue-50 items-center flex", children }, void 0, !1, {
    fileName: "app/components/styledComponents/InputRow.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/icons/StoreFrontIcon.tsx
var import_jsx_dev_runtime44 = require("react/jsx-dev-runtime");
function StoreFrontIcon() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_jsx_dev_runtime44.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-5 w-5 inline mr-2",
      viewBox: "0 0 18 18",
      fill: "currentColor",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("path", { d: "M14.6 16H3.4c-.442 0-.8-.358-.8-.8V7.554C1.648 7 1 5.98 1 4.8V4c0-.12.032-.232.08-.336L2.684.442C2.82.172 3.096 0 3.4 0h11.2c.304 0 .58.17.716.442 0 0 1.602 3.214 1.604 3.222.048.104.08.216.08.336v.8c0 1.18-.648 2.2-1.6 2.754V15.2c0 .442-.358.8-.8.8zm-.8-9.6c.882 0 1.6-.718 1.6-1.6h-3.2c0 .882.718 1.6 1.6 1.6zm0 8V8c-.954 0-1.814-.42-2.4-1.086C10.814 7.58 9.954 8 9 8s-1.814-.42-2.4-1.086C6.014 7.58 5.154 8 4.2 8v6.4h1.6v-4c0-.442.358-.8.8-.8h4.8c.442 0 .8.358.8.8v4h1.6zM2.6 4.8c0 .882.718 1.6 1.6 1.6.882 0 1.6-.718 1.6-1.6H2.6zm8 0H7.4c0 .882.718 1.6 1.6 1.6.882 0 1.6-.718 1.6-1.6zM3.894 1.6l-.8 1.6h11.812l-.8-1.6H3.894zM7.4 14.4h3.2v-3.2H7.4v3.2z" }, void 0, !1, {
        fileName: "app/icons/StoreFrontIcon.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/icons/StoreFrontIcon.tsx",
      lineNumber: 4,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/icons/StoreFrontIcon.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/icons/ShippingTruckIcon.tsx
var import_jsx_dev_runtime45 = require("react/jsx-dev-runtime");
function ShippingTruckIcon() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_jsx_dev_runtime45.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-5 w-5 inline mr-2",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
        "path",
        {
          d: "M17.816 14c-.415-1.162-1.514-2-2.816-2-1.302 0-2.4.838-2.816 2H12v-4h6v4h-.184zM15 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM5 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM2 4h8v10H7.816C7.4 12.838 6.302 12 5 12c-1.302 0-2.4.838-2.816 2H2V4zm13.434 1l1.8 3H12V5h3.434zm4.424 3.485l-3-5C16.678 3.185 16.35 3 16 3h-4c0-.552-.448-1-1-1H1c-.552 0-1 .448-1 1v12c0 .552.448 1 1 1h1.185C2.6 17.162 3.698 18 5 18s2.4-.838 2.816-2h4.37c.413 1.162 1.512 2 2.814 2s2.4-.838 2.816-2H19c.552 0 1-.448 1-1V9c0-.18-.05-.36-.142-.515z",
          fillRule: "evenodd"
        },
        void 0,
        !1,
        {
          fileName: "app/icons/ShippingTruckIcon.tsx",
          lineNumber: 10,
          columnNumber: 9
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/icons/ShippingTruckIcon.tsx",
      lineNumber: 4,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/icons/ShippingTruckIcon.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
var ShippingTruckIcon_default = ShippingTruckIcon;

// app/components/PickupChoiceInputs.tsx
var import_jsx_dev_runtime46 = require("react/jsx-dev-runtime");
function PickupChoiceInputs({
  fulfillmentDetails,
  setFulfillmentDetails,
  pickupLocations
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(FieldsetGroup, { children: pickupLocations.map((pickupLocation) => /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(InputRow, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "label__radio__input pr-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
      "input",
      {
        className: "input-radio",
        type: "radio",
        value: pickupLocation.name,
        checked: fulfillmentDetails.pickupLocation === pickupLocation.name,
        name: "pickupLocation",
        id: `checkout_id_pickup_${pickupLocation.name}`,
        onChange: (e) => {
          setFulfillmentDetails({
            ...fulfillmentDetails,
            pickupLocation: e.target.value
          });
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/PickupChoiceInputs.tsx",
        lineNumber: 23,
        columnNumber: 15
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/PickupChoiceInputs.tsx",
      lineNumber: 22,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
      "label",
      {
        className: `flex flex-col cursor-pointer ${fulfillmentDetails.pickupLocation === pickupLocation.name ? "text-blue-800" : "text-gray-700"}`,
        htmlFor: `checkout_id_pickup_${pickupLocation.name}`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "pickupAddress text-left", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("p", { className: "pickup-locationName", children: pickupLocation.name }, void 0, !1, {
            fileName: "app/components/PickupChoiceInputs.tsx",
            lineNumber: 49,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("p", { className: "text-sm", children: pickupLocation.pickupAddressLine1 }, void 0, !1, {
            fileName: "app/components/PickupChoiceInputs.tsx",
            lineNumber: 50,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("p", { className: "text-sm", children: pickupLocation.pickupAddressLine2 }, void 0, !1, {
            fileName: "app/components/PickupChoiceInputs.tsx",
            lineNumber: 51,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("p", { className: "text-sm", children: [
            pickupLocation.pickupCity,
            ", ",
            pickupLocation.pickupState,
            pickupLocation.pickupZip
          ] }, void 0, !0, {
            fileName: "app/components/PickupChoiceInputs.tsx",
            lineNumber: 52,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/PickupChoiceInputs.tsx",
          lineNumber: 48,
          columnNumber: 15
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/PickupChoiceInputs.tsx",
        lineNumber: 40,
        columnNumber: 13
      },
      this
    )
  ] }, pickupLocation.name, !0, {
    fileName: "app/components/PickupChoiceInputs.tsx",
    lineNumber: 21,
    columnNumber: 11
  }, this)) }, void 0, !1, {
    fileName: "app/components/PickupChoiceInputs.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/styles/formStyles.css
var formStyles_default = "/build/_assets/formStyles-5XFXKFFC.css";

// app/routes/reviewCart.tsx
var import_jsx_dev_runtime47 = require("react/jsx-dev-runtime");
function links4() {
  return [{ rel: "stylesheet", href: formStyles_default }];
}
var loader7 = async () => {
  let query3 = '*[_type == "pickupLocation"]';
  return await sanity_default.fetch(query3);
};
function ReviewCart() {
  let pickupLocations = (0, import_react36.useLoaderData)(), navigation = (0, import_react36.useNavigation)(), submit = (0, import_react36.useSubmit)(), [customerDetails, setCustomerDetails] = (0, import_react35.useState)({
    customerName: "",
    customerEmail: "",
    customerPhone: ""
  }), [fulfillmentDetails, setFulfillmentDetails] = (0, import_react35.useState)({
    method: "pickup",
    pickupLocation: ""
  }), cartItems = useCartItems(), shippingCost = calcTotalPrice(cartItems) < 4999 ? 1e3 : 0, [searchParams] = (0, import_react36.useSearchParams)(), warnings = searchParams.getAll("warnings"), handleSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.set(
      "orderDetails",
      JSON.stringify({ customerDetails, fulfillmentDetails, cart: cartItems })
    ), submit(formData, { method: "POST", action: "/pay" });
  };
  return cartItems.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(PageHeading, { text: "Review Your Cart" }, void 0, !1, {
      fileName: "app/routes/reviewCart.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(ContentContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
      CartSummary,
      {
        cartItems,
        shipping: fulfillmentDetails.method === "shipping",
        shippingCost
      },
      void 0,
      !1,
      {
        fileName: "app/routes/reviewCart.tsx",
        lineNumber: 86,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/reviewCart.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(ContentContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("form", { onSubmit: handleSubmit, children: [
      warnings && /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("ul", { children: warnings.map(
        (warning, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("li", { children: warning }, i, !1, {
          fileName: "app/routes/reviewCart.tsx",
          lineNumber: 98,
          columnNumber: 15
        }, this)
      ) }, void 0, !1, {
        fileName: "app/routes/reviewCart.tsx",
        lineNumber: 96,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/reviewCart.tsx",
        lineNumber: 95,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("legend", { className: " text-blue-800 text-left", children: "contact" }, void 0, !1, {
        fileName: "app/routes/reviewCart.tsx",
        lineNumber: 103,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
        CustomerDetailsInputs,
        {
          customerDetails,
          setCustomerDetails
        },
        void 0,
        !1,
        {
          fileName: "app/routes/reviewCart.tsx",
          lineNumber: 104,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("legend", { className: "text-left text-blue-800", children: "fulfillment " }, void 0, !1, {
        fileName: "app/routes/reviewCart.tsx",
        lineNumber: 108,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(FieldsetGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(InputRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "label__radio__input pr-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
            "input",
            {
              className: "input-radio",
              type: "radio",
              value: "pickup",
              checked: fulfillmentDetails.method === "pickup",
              name: "fulfillmentMethod",
              id: "checkout_id_delivery_pickup",
              onChange: () => setFulfillmentDetails({
                ...fulfillmentDetails,
                method: "pickup"
              })
            },
            void 0,
            !1,
            {
              fileName: "app/routes/reviewCart.tsx",
              lineNumber: 112,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/reviewCart.tsx",
            lineNumber: 111,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
            "label",
            {
              className: `flex flex-col cursor-pointer ${fulfillmentDetails.method === "pickup" ? "text-blue-800" : "text-gray-700"}`,
              htmlFor: "checkout_id_delivery_pickup",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("span", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(StoreFrontIcon, {}, void 0, !1, {
                  fileName: "app/routes/reviewCart.tsx",
                  lineNumber: 136,
                  columnNumber: 19
                }, this),
                "free pickup"
              ] }, void 0, !0, {
                fileName: "app/routes/reviewCart.tsx",
                lineNumber: 135,
                columnNumber: 17
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/reviewCart.tsx",
              lineNumber: 127,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/reviewCart.tsx",
          lineNumber: 110,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(InputRow, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "label__radio__input pr-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
            "input",
            {
              className: "input-radio",
              type: "radio",
              value: "shipping",
              checked: fulfillmentDetails.method === "shipping",
              name: "fulfillmentMethod",
              id: "checkout_id_delivery_shipping",
              onChange: () => setFulfillmentDetails({
                ...fulfillmentDetails,
                method: "shipping"
              })
            },
            void 0,
            !1,
            {
              fileName: "app/routes/reviewCart.tsx",
              lineNumber: 143,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/reviewCart.tsx",
            lineNumber: 142,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
            "label",
            {
              className: `flex flex-col cursor-pointer items-start ${fulfillmentDetails.method === "shipping" ? "text-blue-800" : "text-gray-700"}`,
              htmlFor: "checkout_id_delivery_shipping",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("span", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(ShippingTruckIcon_default, {}, void 0, !1, {
                    fileName: "app/routes/reviewCart.tsx",
                    lineNumber: 167,
                    columnNumber: 19
                  }, this),
                  shippingCost === 1e3 ? "shipping : $10 " : "shipping : free  "
                ] }, void 0, !0, {
                  fileName: "app/routes/reviewCart.tsx",
                  lineNumber: 166,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("span", { className: "text-sm text-amber-800", children: shippingCost == 1e3 ? "free on orders over $50" : " " }, void 0, !1, {
                  fileName: "app/routes/reviewCart.tsx",
                  lineNumber: 172,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/reviewCart.tsx",
              lineNumber: 158,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/reviewCart.tsx",
          lineNumber: 141,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/reviewCart.tsx",
        lineNumber: 109,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_framer_motion.AnimatePresence, { mode: "wait", initial: !1, children: [
        fulfillmentDetails.method === "shipping" && /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
          import_framer_motion.motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.3 },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("legend", { className: "text-left text-blue-800", children: "ship to:" }, void 0, !1, {
                fileName: "app/routes/reviewCart.tsx",
                lineNumber: 188,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
                ShippingDetailsInputs,
                {
                  fulfillmentDetails,
                  setFulfillmentDetails
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/reviewCart.tsx",
                  lineNumber: 189,
                  columnNumber: 17
                },
                this
              )
            ]
          },
          "shipping",
          !0,
          {
            fileName: "app/routes/reviewCart.tsx",
            lineNumber: 181,
            columnNumber: 13
          },
          this
        ),
        fulfillmentDetails.method === "pickup" && /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
          import_framer_motion.motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.3 },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("legend", { className: "text-left text-blue-800", children: "pickup location" }, void 0, !1, {
                fileName: "app/routes/reviewCart.tsx",
                lineNumber: 203,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
                PickupChoiceInputs,
                {
                  fulfillmentDetails,
                  setFulfillmentDetails,
                  pickupLocations
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/reviewCart.tsx",
                  lineNumber: 206,
                  columnNumber: 17
                },
                this
              )
            ]
          },
          "pickup",
          !0,
          {
            fileName: "app/routes/reviewCart.tsx",
            lineNumber: 196,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/reviewCart.tsx",
        lineNumber: 179,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
        "button",
        {
          type: "submit",
          className: `${navigation.state === "submitting" ? "bg-gray-400" : "bg-green-400"} px-12 py-4 rounded-lg w-full`,
          disabled: navigation.state === "submitting",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
              "input",
              {
                name: "cart",
                value: JSON.stringify(cartItems),
                type: "hidden"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/reviewCart.tsx",
                lineNumber: 222,
                columnNumber: 13
              },
              this
            ),
            navigation.state === "submitting" ? "calculating..." : "looks good!",
            " "
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/reviewCart.tsx",
          lineNumber: 215,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/reviewCart.tsx",
      lineNumber: 93,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/reviewCart.tsx",
      lineNumber: 92,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/reviewCart.tsx",
    lineNumber: 83,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(ContentContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "my-12 text-center text-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("p", { children: "You're cart is empty!!" }, void 0, !1, {
    fileName: "app/routes/reviewCart.tsx",
    lineNumber: 77,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/reviewCart.tsx",
    lineNumber: 76,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/reviewCart.tsx",
    lineNumber: 75,
    columnNumber: 7
  }, this);
}
function ErrorBoundary5() {
  let error = (0, import_react36.useRouteError)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(ErrorContainer, { error }, void 0, !1, {
    fileName: "app/routes/reviewCart.tsx",
    lineNumber: 239,
    columnNumber: 10
  }, this);
}

// app/routes/writeOrder.tsx
var writeOrder_exports = {};
__export(writeOrder_exports, {
  ErrorBoundary: () => ErrorBoundary6,
  loader: () => loader8
});
var import_node2 = require("@remix-run/node"), import_react37 = require("@remix-run/react");

// node_modules/nanoid/index.js
var import_crypto = require("crypto");
var POOL_SIZE_MULTIPLIER = 128, pool, poolOffset, fillPool = (bytes) => {
  !pool || pool.length < bytes ? (pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER), (0, import_crypto.randomFillSync)(pool), poolOffset = 0) : poolOffset + bytes > pool.length && ((0, import_crypto.randomFillSync)(pool), poolOffset = 0), poolOffset += bytes;
}, random = (bytes) => (fillPool(bytes -= 0), pool.subarray(poolOffset - bytes, poolOffset)), customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << 31 - Math.clz32(alphabet.length - 1 | 1)) - 1, step = Math.ceil(1.6 * mask * defaultSize / alphabet.length);
  return (size = defaultSize) => {
    let id = "";
    for (; ; ) {
      let bytes = getRandom(step), i = step;
      for (; i--; )
        if (id += alphabet[bytes[i] & mask] || "", id.length === size)
          return id;
    }
  };
}, customAlphabet = (alphabet, size = 21) => customRandom(alphabet, size, random);

// app/lib/sanity/adjustSanityStock.ts
async function adjustSanityStock(cartItems) {
  let sanityApi = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2023-05-15/data/mutate/production`, adjustQuantityMutations = cartItems.map((cartItem) => ({
    patch: {
      id: cartItem._id,
      dec: {
        stock: cartItem.quantity
      }
    }
  }));
  return await fetch(sanityApi, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`
    },
    body: JSON.stringify({ mutations: adjustQuantityMutations })
  }).then((res) => res.json()).then((result2) => result2).catch((error) => {
    console.error("ERROR ADJUSTING PRODUCT STOCK", error);
  });
}

// app/lib/sanity/writeOrder.tsx
var nanoid = customAlphabet("1234567890abcdef", 10);
async function writeOrderToSanity(orderDetails) {
  let orderDate = (/* @__PURE__ */ new Date()).toISOString(), orderNumber = nanoid(), { customerName, customerEmail, customerPhone } = orderDetails.customerDetails, {
    method,
    pickupLocation,
    shippingName,
    shippingAddressLine1,
    shippingAddressLine2,
    shippingCity,
    shippingPostal_code,
    shippingState
  } = orderDetails.fulfillmentDetails, configuredOrderItems = orderDetails.cart.map((cartItem) => ({
    name: cartItem.name,
    grind: cartItem.grind,
    quantity: cartItem.quantity,
    _key: nanoid()
  })), doc = {
    _type: "order",
    customerName,
    customerEmail,
    customerPhone,
    number: orderNumber,
    total: orderDetails.total,
    orderItems: configuredOrderItems,
    orderDate,
    deliveryMethod: method,
    pickupLocation: method === "shipping" ? "--" : pickupLocation,
    shippingName,
    shippingAddressLine1,
    shippingAddressLine2,
    shippingCity,
    shippingState,
    shippingZip: shippingPostal_code,
    // !customerComments,
    shipped: !1,
    stripe_id: orderDetails.id
  };
  await sanity_default.create(doc).then(() => adjustSanityStock(orderDetails.cart)).catch((err) => {
    throw console.error("err", err), `Error creating order / writing to sanity: ${err}`;
  });
}

// app/lib/stripePaymentIntent.ts
var import_stripe = __toESM(require("stripe")), stripe = new import_stripe.default(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01"
});
async function createPaymentIntent(orderDetails) {
  let { fulfillmentDetails } = orderDetails;
  if (fulfillmentDetails.method === "shipping")
    return await stripe.paymentIntents.create({
      amount: orderDetails.total,
      receipt_email: orderDetails.customerDetails.customerEmail,
      shipping: {
        name: orderDetails.customerDetails.customerName,
        address: {
          line1: fulfillmentDetails.shippingAddressLine1,
          line2: fulfillmentDetails.shippingAddressLine2,
          city: fulfillmentDetails.shippingCity,
          state: fulfillmentDetails.shippingState,
          postal_code: fulfillmentDetails.shippingPostal_code
        }
      },
      currency: "usd",
      automatic_payment_methods: {
        enabled: !1
      },
      description: JSON.stringify(orderDetails.cart),
      metadata: {
        customerDetails: JSON.stringify(orderDetails.customerDetails),
        fulfillmentDetails: JSON.stringify(fulfillmentDetails)
      }
    });
  if (fulfillmentDetails.method === "pickup")
    return await stripe.paymentIntents.create({
      amount: orderDetails.total,
      receipt_email: orderDetails.customerDetails.customerEmail,
      currency: "usd",
      automatic_payment_methods: {
        enabled: !0
      },
      description: JSON.stringify(orderDetails.cart),
      metadata: {
        customerDetails: JSON.stringify(orderDetails.customerDetails),
        fulfillmentDetails: JSON.stringify(fulfillmentDetails)
      }
    });
}
async function retrievePaymentIntent(id) {
  return await stripe.paymentIntents.retrieve(id);
}

// app/routes/writeOrder.tsx
var import_jsx_dev_runtime48 = require("react/jsx-dev-runtime"), loader8 = async ({ request }) => {
  let id = new URL(request.url).searchParams.get("payment_intent");
  if (!id)
    return null;
  let paymentIntent = await retrievePaymentIntent(id), customerDetails = JSON.parse(paymentIntent.metadata.customerDetails), fulfillmentDetails = JSON.parse(
    paymentIntent.metadata.fulfillmentDetails
  ), cartItems = JSON.parse(paymentIntent.description), orderId = paymentIntent.id, total = paymentIntent.amount_received;
  return await writeOrderToSanity({
    cart: cartItems,
    customerDetails,
    fulfillmentDetails,
    total,
    id: orderId
  }).catch((err) => {
    throw console.error(err), Error(err);
  }), (0, import_node2.redirect)(`/success?payment_intent=${id}`);
};
function ErrorBoundary6() {
  let error = (0, import_react37.useRouteError)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(ErrorContainer, { error }, void 0, !1, {
    fileName: "app/routes/writeOrder.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  ErrorBoundary: () => ErrorBoundary7,
  default: () => Contact,
  loader: () => loader9
});
var import_react38 = require("@remix-run/react"), import_react39 = require("react");
var import_react40 = require("@portabletext/react");
var import_jsx_dev_runtime49 = require("react/jsx-dev-runtime"), loader9 = async ({ request }) => {
  var _a;
  let query3 = "*[_type == 'contactPage']", requestUrl = new URL(request == null ? void 0 : request.url), preview = ((_a = requestUrl == null ? void 0 : requestUrl.searchParams) == null ? void 0 : _a.get("preview")) === process.env.SANITY_PREVIEW_SECRET, initialData = await getClient(preview).fetch(query3);
  return {
    contactContent: filterDataToSingleItem(
      initialData,
      preview
    ),
    preview,
    query: query3,
    queryParams: null
  };
};
function Contact() {
  let { contactContent, preview, queryParams, query: query3 } = (0, import_react38.useLoaderData)(), [data, setData] = (0, import_react39.useState)(contactContent);
  return contactContent ? /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("main", { children: [
    preview && /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
      Preview,
      {
        data,
        setData,
        query: query3,
        queryParams
      },
      void 0,
      !1,
      {
        fileName: "app/routes/contact.tsx",
        lineNumber: 60,
        columnNumber: 9
      },
      this
    ),
    (contactContent == null ? void 0 : contactContent.heading) && /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(PageHeading, { text: contactContent == null ? void 0 : contactContent.heading }, void 0, !1, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(ContentContainer, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_react40.PortableText, { value: contactContent == null ? void 0 : contactContent.content }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
        SocialLinks,
        {
          instagramHandle: contactContent == null ? void 0 : contactContent.instagramHandle,
          twitterHandle: contactContent == null ? void 0 : contactContent.twitterHandle,
          facebookId: contactContent == null ? void 0 : contactContent.facebookId
        },
        void 0,
        !1,
        {
          fileName: "app/routes/contact.tsx",
          lineNumber: 72,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 58,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
    ErrorContainer,
    {
      error: "There was an error retrieving the content for this page"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/contact.tsx",
      lineNumber: 52,
      columnNumber: 7
    },
    this
  );
}
function ErrorBoundary7() {
  let error = (0, import_react38.useRouteError)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(ErrorContainer, { error }, void 0, !1, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 83,
    columnNumber: 10
  }, this);
}

// app/routes/success.tsx
var success_exports = {};
__export(success_exports, {
  ErrorBoundary: () => ErrorBoundary8,
  default: () => Success,
  loader: () => loader10
});
var import_react41 = require("react"), import_react42 = require("@remix-run/react");
var import_jsx_dev_runtime50 = require("react/jsx-dev-runtime"), loader10 = async ({ request }) => {
  let id = new URL(request.url).searchParams.get("payment_intent");
  if (!id)
    return null;
  let paymentIntent = await retrievePaymentIntent(id), customerDetails = JSON.parse(paymentIntent.metadata.customerDetails), fulfillmentDetails = JSON.parse(
    paymentIntent.metadata.fulfillmentDetails
  ), cartItems = JSON.parse(paymentIntent.description), orderId = paymentIntent.id, total = paymentIntent.amount_received;
  return {
    cart: cartItems,
    customerDetails,
    fulfillmentDetails,
    total,
    id: orderId
  };
};
function Success() {
  let orderDetails = (0, import_react42.useLoaderData)(), cartItems = orderDetails == null ? void 0 : orderDetails.cart, customerDetails = orderDetails == null ? void 0 : orderDetails.customerDetails, fulfillmentDetails = orderDetails == null ? void 0 : orderDetails.fulfillmentDetails;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(ContentContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("h2", { className: "text-xl font-bold pb-2", children: "Thank You For Your Order!" }, void 0, !1, {
      fileName: "app/routes/success.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "pb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("p", { children: "Check your email for a receipt of your order" }, void 0, !1, {
        fileName: "app/routes/success.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("p", { children: [
        "We'll contact you when your order",
        (fulfillmentDetails == null ? void 0 : fulfillmentDetails.method) === "pickup" ? " is ready for pickup" : " ships"
      ] }, void 0, !0, {
        fileName: "app/routes/success.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/success.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "py-4 max-w-xl mx-auto border-t-2 border-b-2 border-gray-300", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("h3", { className: "text-xl font-bold", children: "your order: " }, void 0, !1, {
        fileName: "app/routes/success.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "p-2 grid grid-cols-orderSummary place-content-center", children: [
        cartItems == null ? void 0 : cartItems.map((cartItem) => /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_react41.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("p", { className: "w-10 justify-self-end self-center text-xl", children: cartItem.quantity }, void 0, !1, {
            fileName: "app/routes/success.tsx",
            lineNumber: 59,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "flex flex-col flex-grow ml-4 text-left pr-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("p", { children: cartItem.name }, void 0, !1, {
              fileName: "app/routes/success.tsx",
              lineNumber: 63,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("p", { className: "text-sm", children: cartItem.grind + " bean" }, void 0, !1, {
              fileName: "app/routes/success.tsx",
              lineNumber: 64,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/success.tsx",
            lineNumber: 62,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("p", { children: `$${formatMoney(cartItem.price * cartItem.quantity)}` }, void 0, !1, {
            fileName: "app/routes/success.tsx",
            lineNumber: 66,
            columnNumber: 17
          }, this)
        ] }, cartItem.variant_id, !0, {
          fileName: "app/routes/success.tsx",
          lineNumber: 58,
          columnNumber: 15
        }, this)),
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("p", { children: "" }, void 0, !1, {
          fileName: "app/routes/success.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("p", { className: "justify-self-end", children: "shipping:" }, void 0, !1, {
          fileName: "app/routes/success.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("p", { children: `$${formatMoney(fulfillmentDetails == null ? void 0 : fulfillmentDetails.shippingCost)}` }, void 0, !1, {
          fileName: "app/routes/success.tsx",
          lineNumber: 71,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("p", { children: "" }, void 0, !1, {
          fileName: "app/routes/success.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("p", { className: "justify-self-end font-bold text-lg", children: "Total:" }, void 0, !1, {
          fileName: "app/routes/success.tsx",
          lineNumber: 73,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("p", { className: "font-bold text-lg", children: [
          "$",
          formatMoney(orderDetails == null ? void 0 : orderDetails.total)
        ] }, void 0, !0, {
          fileName: "app/routes/success.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/success.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/success.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "flex justify-evenly pt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("h3", { className: "font-bold text-lg pb-2", children: "sold to:" }, void 0, !1, {
          fileName: "app/routes/success.tsx",
          lineNumber: 81,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "grid place-content-center  pb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("p", { className: "justify-self-start", children: customerDetails == null ? void 0 : customerDetails.customerName }, void 0, !1, {
            fileName: "app/routes/success.tsx",
            lineNumber: 83,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("p", { className: "justify-self-start", children: customerDetails == null ? void 0 : customerDetails.customerEmail }, void 0, !1, {
            fileName: "app/routes/success.tsx",
            lineNumber: 86,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("p", { className: "justify-self-start", children: customerDetails == null ? void 0 : customerDetails.customerPhone }, void 0, !1, {
            fileName: "app/routes/success.tsx",
            lineNumber: 89,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/success.tsx",
          lineNumber: 82,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/success.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this),
      (fulfillmentDetails == null ? void 0 : fulfillmentDetails.method) === "pickup" ? /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("h3", { className: "text-lg font-bold pb-2", children: "Pickup at:" }, void 0, !1, {
          fileName: "app/routes/success.tsx",
          lineNumber: 96,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "grid place-content-center  pb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("p", { className: "justify-self-start", children: fulfillmentDetails.pickupLocation }, void 0, !1, {
          fileName: "app/routes/success.tsx",
          lineNumber: 98,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/success.tsx",
          lineNumber: 97,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/success.tsx",
        lineNumber: 95,
        columnNumber: 13
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("h3", { className: "text-lg font-bold pb-2", children: "ship to: " }, void 0, !1, {
          fileName: "app/routes/success.tsx",
          lineNumber: 105,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "grid place-content-center pb-3 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("p", { className: "justify-self-start", children: fulfillmentDetails == null ? void 0 : fulfillmentDetails.shippingName }, void 0, !1, {
            fileName: "app/routes/success.tsx",
            lineNumber: 107,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("p", { className: "justify-self-start", children: fulfillmentDetails == null ? void 0 : fulfillmentDetails.shippingAddressLine1 }, void 0, !1, {
            fileName: "app/routes/success.tsx",
            lineNumber: 110,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("p", { className: "justify-self-start", children: fulfillmentDetails == null ? void 0 : fulfillmentDetails.shippingAddressLine2 }, void 0, !1, {
            fileName: "app/routes/success.tsx",
            lineNumber: 113,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("p", { className: "justify-self-start", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("span", { children: fulfillmentDetails == null ? void 0 : fulfillmentDetails.shippingCity }, void 0, !1, {
              fileName: "app/routes/success.tsx",
              lineNumber: 117,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("span", { children: fulfillmentDetails == null ? void 0 : fulfillmentDetails.shippingPostal_code }, void 0, !1, {
              fileName: "app/routes/success.tsx",
              lineNumber: 118,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/success.tsx",
            lineNumber: 116,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/success.tsx",
          lineNumber: 106,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/success.tsx",
        lineNumber: 104,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/success.tsx",
      lineNumber: 79,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/success.tsx",
    lineNumber: 42,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/success.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}
function ErrorBoundary8() {
  let error = (0, import_react42.useRouteError)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(ErrorContainer, { error }, void 0, !1, {
    fileName: "app/routes/success.tsx",
    lineNumber: 131,
    columnNumber: 10
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  ErrorBoundary: () => ErrorBoundary9,
  default: () => Index,
  loader: () => loader11
});
var import_react44 = require("@remix-run/react");

// app/components/HomeHero.tsx
var import_react43 = require("@portabletext/react"), import_jsx_dev_runtime51 = require("react/jsx-dev-runtime");
function HomeHero({
  pageContent
}) {
  return pageContent != null && pageContent.imageUrl ? /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { className: "grid place-content-center bg-slate-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
      "img",
      {
        className: "row-span-full col-span-full w-screen",
        src: pageContent == null ? void 0 : pageContent.imageUrl,
        alt: ""
      },
      void 0,
      !1,
      {
        fileName: "app/components/HomeHero.tsx",
        lineNumber: 12,
        columnNumber: 7
      },
      this
    ),
    (pageContent == null ? void 0 : pageContent.overlayText1) && /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { className: "grid row-span-full col-span-full relative place-items-center  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { className: "bg-slate-900/50 text-slate-50 w-2/3 p-[5%] text-center", children: (pageContent == null ? void 0 : pageContent.overlayText1) && /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_react43.PortableText, { value: pageContent == null ? void 0 : pageContent.overlayText1 }, void 0, !1, {
      fileName: "app/components/HomeHero.tsx",
      lineNumber: 21,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/HomeHero.tsx",
      lineNumber: 19,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/HomeHero.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/HomeHero.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this) : null;
}

// app/components/FeaturedItems.tsx
var import_jsx_dev_runtime52 = require("react/jsx-dev-runtime");
function FeaturedItems({
  allCoffee,
  referringPath,
  previewQuery,
  featureHeading
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("div", { className: "px-4 py-2 w-full flex flex-col items-center", children: [
    featureHeading && /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("div", { className: "py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(PageHeading, { text: featureHeading }, void 0, !1, {
      fileName: "app/components/FeaturedItems.tsx",
      lineNumber: 20,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/FeaturedItems.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("div", { className: "py-2 flex flex-wrap justify-center gap-4", children: allCoffee.map((coffee) => /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
      CoffeeCard_default,
      {
        coffee,
        previewQuery
      },
      coffee.name,
      !1,
      {
        fileName: "app/components/FeaturedItems.tsx",
        lineNumber: 25,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/FeaturedItems.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/FeaturedItems.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
var FeaturedItems_default = FeaturedItems;

// app/routes/_index.tsx
var import_react45 = require("react");
var import_jsx_dev_runtime53 = require("react/jsx-dev-runtime"), loader11 = async ({ request }) => {
  var _a;
  let query3 = `{
    "pageContent": *[_id == "homePage" ] {
      _id,
    "imageUrl": bgImage1.asset->url,
    overlayText1,
    coffeeSectionHeading,
    coffeeText,
    transitionText1
    },
    "coffee": *[_type == "coffee" && stock > 0] {
      _id,
      name,
      roastLevel,
      description,
      roastDate,
      stock, 
      slug{current},
      price
    }
  }`, requestUrl = new URL(request == null ? void 0 : request.url), previewQuery = requestUrl.search, referringPath = requestUrl.pathname, preview = ((_a = requestUrl == null ? void 0 : requestUrl.searchParams) == null ? void 0 : _a.get("preview")) === process.env.SANITY_PREVIEW_SECRET, initialData = await sanity_default.fetch(query3), pageContent = filterDataToSingleItem(
    initialData.pageContent,
    preview
  );
  return {
    initialData: { coffee: filterDataToDrafts(initialData.coffee, preview), pageContent },
    referringPath,
    preview,
    previewQuery,
    query: query3,
    queryParams: null
  };
};
function Index() {
  var _a;
  let {
    initialData,
    preview,
    query: query3,
    previewQuery,
    queryParams,
    referringPath
  } = (0, import_react44.useLoaderData)(), [data, setData] = (0, import_react45.useState)(initialData);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("main", { className: "w-min-[320px] p-4", children: [
    preview && /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(
      Preview,
      {
        data,
        setData,
        query: query3,
        queryParams
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 84,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(HomeHero, { pageContent: initialData == null ? void 0 : initialData.pageContent }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 92,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(
      FeaturedItems_default,
      {
        featureHeading: (_a = initialData == null ? void 0 : initialData.pageContent) == null ? void 0 : _a.coffeeSectionHeading,
        allCoffee: initialData.coffee,
        referringPath: referringPath + "coffee/",
        previewQuery
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 93,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 82,
    columnNumber: 5
  }, this);
}
function ErrorBoundary9() {
  let error = (0, import_react44.useRouteError)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(ErrorContainer, { error }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 104,
    columnNumber: 10
  }, this);
}

// app/routes/coffee.tsx
var coffee_exports = {};
__export(coffee_exports, {
  ErrorBoundary: () => ErrorBoundary10,
  default: () => CoffeeRoot
});
var import_react46 = require("@remix-run/react");
var import_jsx_dev_runtime54 = require("react/jsx-dev-runtime");
function CoffeeRoot() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_react46.Outlet, {}, void 0, !1, {
    fileName: "app/routes/coffee.tsx",
    lineNumber: 5,
    columnNumber: 10
  }, this);
}
function ErrorBoundary10() {
  let error = (0, import_react46.useRouteError)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(ErrorContainer, { error }, void 0, !1, {
    fileName: "app/routes/coffee.tsx",
    lineNumber: 10,
    columnNumber: 10
  }, this);
}

// app/routes/events.tsx
var events_exports = {};
__export(events_exports, {
  default: () => Events,
  loader: () => loader12
});
var import_react47 = require("@remix-run/react"), import_react48 = require("react");
var import_jsx_dev_runtime55 = require("react/jsx-dev-runtime"), loader12 = async ({ request }) => {
  var _a;
  let query3 = `{
    "pageData": *[_type == 'eventsPage'],
    "events": *[_type == 'event']
  }`, requestUrl = new URL(request == null ? void 0 : request.url), preview = ((_a = requestUrl == null ? void 0 : requestUrl.searchParams) == null ? void 0 : _a.get("preview")) === process.env.SANITY_PREVIEW_SECRET, initialData = await getClient(preview).fetch(query3);
  return {
    initialData: { events: filterDataToDrafts(initialData.events, preview), pageData: initialData.pageData },
    preview,
    query: query3,
    queryParams: null
  };
};
function Events() {
  var _a, _b;
  let { initialData, preview, query: query3, queryParams } = (0, import_react47.useLoaderData)(), [data, setData] = (0, import_react48.useState)(initialData), pageData = filterDataToSingleItem(data.pageData, preview);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("main", { children: [
    preview && /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
      Preview,
      {
        data,
        setData,
        query: query3,
        queryParams
      },
      void 0,
      !1,
      {
        fileName: "app/routes/events.tsx",
        lineNumber: 45,
        columnNumber: 9
      },
      this
    ),
    (pageData == null ? void 0 : pageData.heading) && /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(PageHeading, { text: pageData == null ? void 0 : pageData.heading }, void 0, !1, {
      fileName: "app/routes/events.tsx",
      lineNumber: 53,
      columnNumber: 29
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("ul", { className: "flex flex-col mx-auto mt-6", children: ((_a = data.events) == null ? void 0 : _a.length) > 0 && ((_b = data.events) == null ? void 0 : _b.map((event) => /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
      TwoColContainer,
      {
        heading: event.title,
        image: event.mainImage,
        date: event.date,
        content: event.description
      },
      void 0,
      !1,
      {
        fileName: "app/routes/events.tsx",
        lineNumber: 59,
        columnNumber: 15
      },
      this
    ) }, event._id, !1, {
      fileName: "app/routes/events.tsx",
      lineNumber: 58,
      columnNumber: 13
    }, this))) }, void 0, !1, {
      fileName: "app/routes/events.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/events.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  ErrorBoundary: () => ErrorBoundary11,
  default: () => About,
  loader: () => loader13
});
var import_react49 = require("@remix-run/react"), import_react50 = require("react");
var import_react51 = require("@portabletext/react");
var import_jsx_dev_runtime56 = require("react/jsx-dev-runtime"), loader13 = async ({ request }) => {
  var _a;
  let query3 = "*[_type == 'aboutPage']", requestUrl = new URL(request == null ? void 0 : request.url), preview = ((_a = requestUrl == null ? void 0 : requestUrl.searchParams) == null ? void 0 : _a.get("preview")) === process.env.SANITY_PREVIEW_SECRET;
  return {
    initialData: await getClient(preview).fetch(query3),
    preview,
    query: query3,
    queryParams: null
  };
};
function About() {
  let { initialData, preview, queryParams, query: query3 } = (0, import_react49.useLoaderData)(), [data, setData] = (0, import_react50.useState)(initialData), aboutContent = filterDataToSingleItem(initialData, preview);
  return aboutContent ? /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("main", { children: [
    preview && /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(
      Preview,
      {
        data,
        setData,
        query: query3,
        queryParams
      },
      void 0,
      !1,
      {
        fileName: "app/routes/about.tsx",
        lineNumber: 54,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(
      PageHeading,
      {
        text: aboutContent.heading ? aboutContent.heading : "about"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/about.tsx",
        lineNumber: 61,
        columnNumber: 7
      },
      this
    ),
    aboutContent.content && /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(ContentContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_react51.PortableText, { value: aboutContent.content }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 66,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/about.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(
    ErrorContainer,
    {
      error: "There was an error retrieving the content for this page"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/about.tsx",
      lineNumber: 46,
      columnNumber: 7
    },
    this
  );
}
function ErrorBoundary11() {
  let error = (0, import_react49.useRouteError)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(ErrorContainer, { error }, void 0, !1, {
    fileName: "app/routes/about.tsx",
    lineNumber: 74,
    columnNumber: 10
  }, this);
}

// app/routes/blog.tsx
var blog_exports = {};
__export(blog_exports, {
  ErrorBoundary: () => ErrorBoundary12,
  default: () => blog_default
});
var import_react52 = require("@remix-run/react");
var import_jsx_dev_runtime57 = require("react/jsx-dev-runtime");
function BlogRoot() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(import_react52.Outlet, {}, void 0, !1, {
    fileName: "app/routes/blog.tsx",
    lineNumber: 5,
    columnNumber: 10
  }, this);
}
function ErrorBoundary12() {
  let error = (0, import_react52.useRouteError)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(ErrorContainer, { error }, void 0, !1, {
    fileName: "app/routes/blog.tsx",
    lineNumber: 9,
    columnNumber: 10
  }, this);
}
var blog_default = BlogRoot;

// app/routes/pay.tsx
var pay_exports = {};
__export(pay_exports, {
  ErrorBoundary: () => ErrorBoundary13,
  action: () => action,
  default: () => Pay
});
var import_node3 = require("@remix-run/node"), import_react53 = require("@remix-run/react"), import_react_stripe_js2 = require("@stripe/react-stripe-js"), import_stripe_js = require("@stripe/stripe-js"), import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/lib/checkAvailability.ts
function checkAvailability(cartKeyedByName, availableCoffee) {
  let warningMessages = [];
  for (let itemName in cartKeyedByName)
    cartKeyedByName[itemName].inStock < cartKeyedByName[itemName].quantity && warningMessages.push(
      `There are only ${cartKeyedByName[itemName].inStock} ${itemName} in stock`
    ), availableCoffee.includes(cartKeyedByName[itemName].name) || warningMessages.push(`${itemName} is no longer available`);
  return warningMessages;
}

// app/lib/calcVerifiedTotal.ts
function calcVerifiedTotal(obj) {
  let total = 0;
  for (let item in obj) {
    let itemTotal = obj[item].price * obj[item].quantity;
    total += itemTotal;
  }
  return total;
}

// app/lib/reduceCartByName.ts
function reduceCartByName(cart) {
  return cart.reduce((acc, cartItem) => {
    let key = cartItem.name;
    return acc[key] ? (acc[key].quantity = acc[key].quantity + cartItem.quantity, acc) : {
      ...acc,
      [key]: {
        ...cartItem
      }
    };
  }, {});
}

// app/lib/calcShipping.tsx
function calcShipping(verifiedTotal, fulfillmentDetails) {
  return fulfillmentDetails.method === "pickup" ? 0 : verifiedTotal < 4999 ? 1e3 : 0;
}

// app/routes/pay.tsx
var import_jsx_dev_runtime58 = require("react/jsx-dev-runtime"), stripePromise = (0, import_stripe_js.loadStripe)("pk_test_CkfBPTwVc1IMB6BXSDsSytR8"), action = async ({ request }) => {
  let orderDetailsBody = (await request.formData()).get("orderDetails");
  (0, import_tiny_invariant.default)(
    typeof orderDetailsBody == "string",
    "cart not submitted properly; must be a string"
  );
  let orderDetails = JSON.parse(orderDetailsBody), cart = orderDetails.cart, cartKeyedByName = reduceCartByName(cart), coffeeInCart = Object.keys(cartKeyedByName), sanityQuery = `*[_type == "coffee" && name in ${JSON.stringify(
    coffeeInCart
  )} && !(_id in path("drafts.**"))] {name, price, stock}`, inventory = await getClient().fetch(sanityQuery), availableCoffee = inventory.map((item) => item.name);
  inventory.forEach((coffee) => {
    let key = coffee.name;
    cartKeyedByName[key].price = coffee.price, cartKeyedByName[key].inStock = coffee.stock;
  });
  let warningMessages = checkAvailability(cartKeyedByName, availableCoffee);
  if (warningMessages.length > 0)
    return (0, import_node3.redirect)(
      `reviewCart/?warnings=${warningMessages.join("&warnings=")}`
    );
  let subtotal = calcVerifiedTotal(cartKeyedByName), shippingCost = calcShipping(subtotal, orderDetails.fulfillmentDetails);
  orderDetails.fulfillmentDetails.shippingCost = shippingCost;
  let verifiedOrderDetails = {
    cart,
    total: subtotal + shippingCost,
    customerDetails: orderDetails.customerDetails,
    fulfillmentDetails: orderDetails.fulfillmentDetails,
    id: null
  };
  return { paymentIntent: await createPaymentIntent(verifiedOrderDetails).catch(
    (err) => {
      throw Error(err);
    }
  ), orderDetails, shippingCost };
};
function Pay() {
  let { paymentIntent } = (0, import_react53.useActionData)();
  if (!paymentIntent || !paymentIntent.client_secret)
    throw Error("there was an Error connecting to stripe");
  let options = {
    clientSecret: paymentIntent.client_secret
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_react_stripe_js2.Elements, { stripe: stripePromise, options, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_react53.Outlet, {}, void 0, !1, {
    fileName: "app/routes/pay.tsx",
    lineNumber: 96,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/pay.tsx",
    lineNumber: 95,
    columnNumber: 5
  }, this);
}
function ErrorBoundary13() {
  let error = (0, import_react53.useRouteError)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(ErrorContainer, { error }, void 0, !1, {
    fileName: "app/routes/pay.tsx",
    lineNumber: 102,
    columnNumber: 10
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-FBEMZJJZ.js", imports: ["/build/_shared/chunk-K4IGUXJN.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-2RPKLTLN.js", imports: ["/build/_shared/chunk-P7US7VX2.js", "/build/_shared/chunk-RZYPGIBG.js", "/build/_shared/chunk-MSI2JHC4.js", "/build/_shared/chunk-FA365L74.js", "/build/_shared/chunk-OEGABVTA.js", "/build/_shared/chunk-IJZ47F4G.js", "/build/_shared/chunk-QG5R4JZQ.js", "/build/_shared/chunk-6BOJMI3J.js", "/build/_shared/chunk-5UVRLDM4.js", "/build/_shared/chunk-OWECZNTA.js", "/build/_shared/chunk-GLXFTQ6X.js", "/build/_shared/chunk-ZH7WQN56.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-54SHCOPW.js", imports: ["/build/_shared/chunk-DSKKKA23.js", "/build/_shared/chunk-Y7JZLAY7.js", "/build/_shared/chunk-7GLJR3S3.js", "/build/_shared/chunk-SDNDRYFR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-2YYP25G3.js", imports: ["/build/_shared/chunk-7GLJR3S3.js", "/build/_shared/chunk-YA6OA27S.js", "/build/_shared/chunk-SDNDRYFR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/blog": { id: "routes/blog", parentId: "root", path: "blog", index: void 0, caseSensitive: void 0, module: "/build/routes/blog-LYCZTCDY.js", imports: ["/build/_shared/chunk-SDNDRYFR.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/blog.$slug": { id: "routes/blog.$slug", parentId: "routes/blog", path: ":slug", index: void 0, caseSensitive: void 0, module: "/build/routes/blog.$slug-JKKM6NAL.js", imports: ["/build/_shared/chunk-RZYPGIBG.js", "/build/_shared/chunk-ZIMNVFXJ.js", "/build/_shared/chunk-MSI2JHC4.js", "/build/_shared/chunk-Y7JZLAY7.js", "/build/_shared/chunk-FA365L74.js", "/build/_shared/chunk-6BOJMI3J.js", "/build/_shared/chunk-YA6OA27S.js", "/build/_shared/chunk-ZH7WQN56.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/blog._index": { id: "routes/blog._index", parentId: "routes/blog", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/blog._index-F6LJRKWF.js", imports: ["/build/_shared/chunk-BNE7TXGW.js", "/build/_shared/chunk-ZIMNVFXJ.js", "/build/_shared/chunk-MSI2JHC4.js", "/build/_shared/chunk-Y7JZLAY7.js", "/build/_shared/chunk-FA365L74.js", "/build/_shared/chunk-6BOJMI3J.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/coffee": { id: "routes/coffee", parentId: "root", path: "coffee", index: void 0, caseSensitive: void 0, module: "/build/routes/coffee-MFMM52JB.js", imports: ["/build/_shared/chunk-SDNDRYFR.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/coffee.$coffeeSlug": { id: "routes/coffee.$coffeeSlug", parentId: "routes/coffee", path: ":coffeeSlug", index: void 0, caseSensitive: void 0, module: "/build/routes/coffee.$coffeeSlug-CE55JLLH.js", imports: ["/build/_shared/chunk-RZYPGIBG.js", "/build/_shared/chunk-ZIMNVFXJ.js", "/build/_shared/chunk-MSI2JHC4.js", "/build/_shared/chunk-Y7JZLAY7.js", "/build/_shared/chunk-FA365L74.js", "/build/_shared/chunk-IJZ47F4G.js", "/build/_shared/chunk-6BOJMI3J.js", "/build/_shared/chunk-OWECZNTA.js", "/build/_shared/chunk-GLXFTQ6X.js", "/build/_shared/chunk-YA6OA27S.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/coffee._index": { id: "routes/coffee._index", parentId: "routes/coffee", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/coffee._index-ANA7O577.js", imports: ["/build/_shared/chunk-DSKKKA23.js", "/build/_shared/chunk-RZYPGIBG.js", "/build/_shared/chunk-Y7JZLAY7.js", "/build/_shared/chunk-FA365L74.js", "/build/_shared/chunk-7GLJR3S3.js", "/build/_shared/chunk-QG5R4JZQ.js", "/build/_shared/chunk-ZH7WQN56.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-NYC4P2BE.js", imports: ["/build/_shared/chunk-7GLJR3S3.js", "/build/_shared/chunk-YA6OA27S.js", "/build/_shared/chunk-SDNDRYFR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/events": { id: "routes/events", parentId: "root", path: "events", index: void 0, caseSensitive: void 0, module: "/build/routes/events-BMQNWFXV.js", imports: ["/build/_shared/chunk-BNE7TXGW.js", "/build/_shared/chunk-ZIMNVFXJ.js", "/build/_shared/chunk-Y7JZLAY7.js", "/build/_shared/chunk-7GLJR3S3.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/pay": { id: "routes/pay", parentId: "root", path: "pay", index: void 0, caseSensitive: void 0, module: "/build/routes/pay-LJYZ5T4F.js", imports: ["/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-MU2G26UA.js", "/build/_shared/chunk-SDNDRYFR.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/pay._index": { id: "routes/pay._index", parentId: "routes/pay", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/pay._index-DKS7JFSA.js", imports: ["/build/_shared/chunk-5UVRLDM4.js", "/build/_shared/chunk-OWECZNTA.js", "/build/_shared/chunk-GLXFTQ6X.js", "/build/_shared/chunk-YA6OA27S.js", "/build/_shared/chunk-ZH7WQN56.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/reviewCart": { id: "routes/reviewCart", parentId: "root", path: "reviewCart", index: void 0, caseSensitive: void 0, module: "/build/routes/reviewCart-LPJNI65O.js", imports: ["/build/_shared/chunk-7GLJR3S3.js", "/build/_shared/chunk-YA6OA27S.js", "/build/_shared/chunk-SDNDRYFR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/success": { id: "routes/success", parentId: "root", path: "success", index: void 0, caseSensitive: void 0, module: "/build/routes/success-QTYWHLFS.js", imports: ["/build/_shared/chunk-YA6OA27S.js", "/build/_shared/chunk-SDNDRYFR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/writeOrder": { id: "routes/writeOrder", parentId: "root", path: "writeOrder", index: void 0, caseSensitive: void 0, module: "/build/routes/writeOrder-GHCFVS3Q.js", imports: ["/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-SDNDRYFR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 } }, version: "5f0dfa5b", hmr: void 0, url: "/build/manifest-5F0DFA5B.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !1, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/coffee.$coffeeSlug": {
    id: "routes/coffee.$coffeeSlug",
    parentId: "routes/coffee",
    path: ":coffeeSlug",
    index: void 0,
    caseSensitive: void 0,
    module: coffee_coffeeSlug_exports
  },
  "routes/coffee._index": {
    id: "routes/coffee._index",
    parentId: "routes/coffee",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: coffee_index_exports
  },
  "routes/blog._index": {
    id: "routes/blog._index",
    parentId: "routes/blog",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: blog_index_exports
  },
  "routes/blog.$slug": {
    id: "routes/blog.$slug",
    parentId: "routes/blog",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: blog_slug_exports
  },
  "routes/pay._index": {
    id: "routes/pay._index",
    parentId: "routes/pay",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: pay_index_exports
  },
  "routes/reviewCart": {
    id: "routes/reviewCart",
    parentId: "root",
    path: "reviewCart",
    index: void 0,
    caseSensitive: void 0,
    module: reviewCart_exports
  },
  "routes/writeOrder": {
    id: "routes/writeOrder",
    parentId: "root",
    path: "writeOrder",
    index: void 0,
    caseSensitive: void 0,
    module: writeOrder_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/success": {
    id: "routes/success",
    parentId: "root",
    path: "success",
    index: void 0,
    caseSensitive: void 0,
    module: success_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/coffee": {
    id: "routes/coffee",
    parentId: "root",
    path: "coffee",
    index: void 0,
    caseSensitive: void 0,
    module: coffee_exports
  },
  "routes/events": {
    id: "routes/events",
    parentId: "root",
    path: "events",
    index: void 0,
    caseSensitive: void 0,
    module: events_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/pay": {
    id: "routes/pay",
    parentId: "root",
    path: "pay",
    index: void 0,
    caseSensitive: void 0,
    module: pay_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=server.js.map
