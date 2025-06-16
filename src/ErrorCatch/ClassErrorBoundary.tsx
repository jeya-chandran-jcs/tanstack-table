import { Component,type ReactNode, type ErrorInfo } from "react";

interface ErrorProps{
    children:ReactNode
}

interface StateProps{
    hasError:boolean,
    error:Error | null
}

export default class ClassErrorBoundary extends Component<ErrorProps,StateProps>{
    constructor(props:ErrorProps){
        super(props);
        this.state={
            hasError:false,
            error:null
        }        
    }

    static getDerivedStateFromError(error:Error):StateProps{
        return {hasError:true,error}
    }
                                                                    
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("error caught by error boundary",error,"errorinfo",errorInfo)
    }

    render(){
        if(this.state.hasError){
            return(
                <div className="min-h-screen w-full flex justify-center items-center ">
                        <div className="p-4 m-4 border border-red-400 bg-red-100 text-red-700 rounded-lg">
                            <h2 className="text-lg font-bold mb-2">Something wen wrong in the table!!</h2>
                            <p>{this.state.error?.message}</p>
                        </div>
                </div>
            )
        }        

        return this.props.children
    }
}

