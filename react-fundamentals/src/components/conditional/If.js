const If = props => {
    if(props.expr){
        return props.children;
    } else {
        return false;
    }
};

export default If;