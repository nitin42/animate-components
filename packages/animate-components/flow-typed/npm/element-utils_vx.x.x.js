// flow-typed signature: 6da0827bce8b391f2c7e8794b1393125
// flow-typed version: <<STUB>>/element-utils_v0.0.3/flow_v0.48.0

type Avoid$Nesting = (
 elementAs: string,
 props: Object,
 DisplayName: any
) => string;

type Get$Element$Type = (Component: any, props: Object) => string;

type Render$Function = (
 ComposedComponent: any,
 props: Object,
 state: Object,
 rest: any,
 DisplayName: any
) => ?React$Element<any>;

declare module "element-utils" {
 declare module.exports: {
   avoidNest: Avoid$Nesting,
   getElement: Get$Element$Type,
   Render: Render$Function
 };
}
