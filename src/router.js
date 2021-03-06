import React from "react";
import { dynamic, routerRedux, router as reactRouter } from "dva";
const { Route, Switch, Redirect } = reactRouter;
const { ConnectedRouter } = routerRedux;
import Layout from "./layouts";

const router = ({ history, app }) => {
    const routes = [
        {
            path: "/login",
            component: () => import("./pages/Login"),
        },
        {
            path: "/article",
            component: () => import("./pages/Article"),
        },
        {
            path: "/home",
            component: () => import("./pages/Home"),
        },
        {
            path: "/shop/shops",
            component: () => import("./pages/Shop"),
        },
        {
            path: "/user",
            component: () => import("./pages/User"),
        },
        {
            path: "/hooks",
            component: () => import("./pages/Hooks"),
        },
        {
            path: "/test",
            component: () => import("./pages/Test"),
        },
        {
            path: "/editor",
            component: () => import("./pages/Editor"),
        },
        {
            path: "/customForm",
            component: () => import("./pages/CustomForm"),
        },
        {
            path: "/covid19",
            component: () => import("./pages/COVID19"),
        },
        {
            path: "/contract/add",
            component: () => import("./pages/Contract/ContractAdd"),
        },
        {
            path: "/contract/add/:templateId",
            component: () =>
                import("./pages/Contract/ContractAdd/FillContract"),
        },
        {
            path: "/contract/contractHome",
            component: () => import("./pages/Contract/ContractHome"),
        },
        {
            path: "/contract/contractTemplateMgmt",
            component: () =>
                import("./pages/Contract/ContractTemplateManagement"),
        },
        {
            path: "/contract/contractFileMgmt",
            component: () => import("./pages/Contract/ContractFileManagement"),
        },
        {
            path: "/contract/contractBatchSign",
            component: () => import("./pages/Contract/ContractBatchSign"),
        },
    ];
    return (
        <ConnectedRouter history={history}>
            <Layout>
                <Switch>
                    <Redirect exact from="/" to="/home" />
                    {routes.map(({ path, component, ...rest }) => {
                        return (
                            <Route
                                exact
                                key={path}
                                path={path}
                                component={
                                    typeof component === "function"
                                        ? dynamic({ app, component, ...rest })
                                        : component
                                }
                            />
                        );
                    })}
                    <Route
                        component={dynamic({
                            app,
                            component: () => import("./pages/404"),
                        })}
                    />
                </Switch>
            </Layout>
        </ConnectedRouter>
    );
};

export default router;
