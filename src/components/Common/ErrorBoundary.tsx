import React from "react";
import Error from "./Error";

interface IProp {
}

interface Istate {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<IProp, Istate> {
    constructor(props: IProp) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: any) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        // You can also log the error to an error reporting service
        //   logErrorToMyService(error, errorInfo);
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <Error />
            );
        }

        return this.props.children;
    }
}


export default ErrorBoundary;
