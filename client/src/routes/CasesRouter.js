/**
 * Dependencies
 */

import React from "react";
import { PrivateRoute } from "./helpers/index";
import {
    Search,
    ErrorBoundary,
    CaseForm,
    UserCaseShow,
    MediatorCasesShow,
    CaseShow
} from "../views/index";
import uuid from "uuid";

import { CaseDetails, CourtForm, OutsideCourtForm } from "../components/index";

/**
 * Define router
 */

const RootRouter = [
    
    <PrivateRoute
        key={uuid.v4()}
        exact
         path="/cases"
        component={UserCaseShow}
        errorBoundary={ErrorBoundary}
    />,
    <PrivateRoute
        key={uuid.v4()}
        exact
        path="/cases/new"
        component={CaseForm}
        errorBoundary={ErrorBoundary}
    />,
    <PrivateRoute
        key={uuid.v4()}
        path="/cases/new/court"
        component={CourtForm}
        errorBoundary={ErrorBoundary}
    />,
    <PrivateRoute
        key={uuid.v4()}
        path="/cases/new/outside"
        component={OutsideCourtForm}
        errorBoundary={ErrorBoundary}
    />,
    // <PrivateRoute
    //     key={uuid.v4()}
    //     path="/cases/:id/mediator-search"
    //     component={Search}
    //     errorBoundary={ErrorBoundary}
    // />,
    // <PrivateRoute
    //     key={uuid.v4()}
    //      path="/cases/:id"
    //     component={CaseDetails}
    //     errorBoundary={ErrorBoundary}
    // />,
    <PrivateRoute
        key={uuid.v4()}
        exact
        path="/mediator-cases"
        component={MediatorCasesShow}
        errorBoundary={ErrorBoundary}
    />,
];

/**
 * Export router
 */

export default RootRouter;
