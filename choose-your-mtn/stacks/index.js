import ChooseYourMountain from "./MyStack";
// V1 upgrade for Stack is optional
// Need to get functional Stack working
export default function main(app) {
  app.setDefaultFunctionProps({
    // runtime: "nodejs14.x",
    srcPath: "backend",
    // bundle: {
    //   format: "esm",
    // },
  });
  // app.setDefaultRemovalPolicy("destroy");
  // app.stack(ChooseYourMountain);
  new ChooseYourMountain(app, "choose-your-mtn");
}