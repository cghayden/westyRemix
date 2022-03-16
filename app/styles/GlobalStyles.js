// assign to styled in order for prettier to recognize and format
const GlobalStyles = `
  :root {
    --red: #ff4949;
    --black: #2e2e2e;
    --yellow: #ffc600;
    --white: #f7fbf8;
    --grey: #efefef;
    --darkGray: hsla(132, 5%, 38%, 1);
    --singleOriginGreen: hsl(146, 13%, 90%); /* #e2e9e5 */
    --singleOriginText: hsl(145, 10%, 20%);
    --blendGreen: hsl(145, 10%, 70%);
    --blendText: hsl(145, 10%, 20%);
    --darkGreen: hsl(145, 30%, 30%)
    --navPanelGreen: hsla(120, 25%, 95%, 1);
    --lightGray: hsla(129, 20%, 93%, 1);
    --stripeBlue: #829fff;
    --redFlame: hsla(15, 61%, 51%, 1);
    --redFlameFade: hsla(15, 61%, 51%, 0.7);
    --blueYonder: hsla(217, 34%, 48%, 1);
    --blueYonderFade: hsla(217, 34%, 48%, 0.7);
    /* with blend green : */
    --raisinBlack: #2e282a;
    --mediumGreenText: #8b7c69;
    --blueBell: #a4a8d1;

    --dropShadow0: 1px 1px 0px 0px rgba(0, 0, 0, 0);
    --dropShadow1: 1px 1px 0px 0px rgba(0, 0, 0, 0.3);
    --dropShadow3: -6px 12px 14px 10px rgba(0, 0, 0, 0.3);
    --desktopBreakPoint: 768px;
  }
  * {
    box-sizing: border-box;
  }
  html {
    height: -webkit-fill-available;
  }
  body::-webkit-scrollbar-track {
    background: transparent;
  }
  body::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 6px;
  }
  #gatsby-focus-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
  }
  #___gatsby {
    min-height: 100vh;
  }
  body {
    font-family: 'Hind Siliguri', sans-serif;
    font-weight: 300;
    display: flex;
    flex-direction: column;
    background: var(--white);
    min-height: 100vh;
  }
  .alignCenter {
    text-align: center;
  }

  main {
    max-width: 1000px;
    width: 95%;
    min-width: 318px;
    margin: 0 auto 2rem auto;
    padding: 1rem 0;
    border-radius: 4px;
    h1,
    h2,
    h3,
    h4,
    h4,
    h5,
    h6 {
      margin: 1rem 0;
      /* margin-bottom: 1rem; */
    }
  }
  .content {
    color: var(---black);
    p {
      color: var(---black);
    }
  }

  p {
    margin: 2px;
    font-size: 1rem;
    line-height: 1.4;
    color: var(---black);

  }
  //-------BUTTON AND ANCHOR STYLES ----------------//

  // --- Default ---
  a,
  button {
    appearance: none;
    /* border: 0; */
    border-radius: 5px;
    background: transparent;
    color: inherit;
    /* min-width: 100px; */
    font: inherit;
    padding: 0.5rem 1rem;
    cursor: pointer;
    margin: 0;
    //anchors only:
    text-decoration: none;
    text-align: center;
    //if using a span inside button or a, this will keep it centered:
    display: inline-flex;
    align-items: center;
    justify-content: center;
    // for tansitions to outlined:
    border: 1px solid transparent;

    :disabled {
      cursor: not-allowed;
    }
    &.btn-icon {
      min-width: initial;
      text-align: center;
      padding: 0.25rem 0.5rem;
    }
    &.action-primary {
      background: var(--redFlame);
      color: white;
      box-shadow: var(--dropShadow1);

      &:active {
        background: var(--redFlameFade);
        box-shadow: var(--dropShadow0);
        outline: none;
      }
      &:focus {
        border: 1px solid hsl(200, 50%, 50%);
        outline: none;
        border-radius: 5px;
      }
    }
    &.action-secondary {
      background: var(--blueYonder);
      color: white;
      box-shadow: var(--dropShadow1);

      &:active {
        background: var(----blueYonderFade);
        box-shadow: var(--dropShadow0);
        outline: none;
      }
      &:focus {
        border: 1px solid hsl(200, 50%, 50%);
        outline: none;
        border-radius: 5px;
      }
    }
  }

  ul {
    list-style: none;
    padding: 0;
  }

  img {
    max-width: 100%;
  }

  .pageHeading {
    letter-spacing: 0.4px;
    color: var(--white);
    font-weight: 400;
    font-size: 28px;
  }

  .contentBox {
    background: var(--white);
    padding: 1rem;
    border-radius: 4px;
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
    h2 {
      margin-bottom: 1rem;
    }
  }
  
  .address {
    p {
      margin: 6px;
    }
  }
  .whiteText {
    color: var(--white);
  }
  .visuallyHidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  .hideOnDesktop {
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
  .hideOnMobile {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export default GlobalStyles;
