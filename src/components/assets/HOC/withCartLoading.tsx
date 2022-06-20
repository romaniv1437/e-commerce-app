import React from "react";
import {useAppSelector} from "../../../hooks/redux";

function withCartLoading(Component:React.JSXElementConstructor<any>) {
    function ComponentWithRedirect(props:any) {
        const {isLoading} = useAppSelector(state => state.cartReducer)
        if (!isLoading) {
            return <Component {...props}/>
        }
        return <div>preloader</div>
    }
    return ComponentWithRedirect;
}

export default withCartLoading;