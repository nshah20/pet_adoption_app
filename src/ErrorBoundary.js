import React, {Component} from 'react';
import {Link, Redirect} from '@reach/router';

class ErrorBoundary extends Component {
    state = {hasError: false, redirect: false};
    static getDerivedStateFromError(){
        return {hasError: true};
    }
    componentDidCatch(err,info){
        console.error("ErrorBoundary caught an error", err, info);
    }
    componentDidUpdate(){
        if(this.state.hasError){
            setTimeout(() => this.setState({redirect: true}), 5000);
        }
    }
    render(){
        if(this.state.redirect){
            return <Redirect to="/"/>
        }
        if(this.state.hasError){
            return (<h1>Error with this listing. <Link to="/">Click Here</Link></h1>)
        }
        return this.props.children;
    }
}

export default ErrorBoundary;