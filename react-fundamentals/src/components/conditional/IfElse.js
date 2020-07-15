export const If = props => {
    const elseChild = props.children.filter(child => {
        return child?.type?.name === 'Else';
    })[0];

    const ifChildren = props.children.filter(child => {
        return child !== elseChild;
    });

    if(props.expr){
        return ifChildren;
    } else if(elseChild) {
        return elseChild;
    } else {
        return false;
    }
};

export const Else = props => {
    return props.children;
}