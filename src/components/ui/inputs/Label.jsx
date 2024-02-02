import styled from "styled-components";


const fontSizes={
    sm:'0.8rem',
    md:'1rem',
    lg:'1.2rem'
};


const lineHights={
    sm: 1.2,
    md: 1.4,
    lg: 1.6,
};

const Label=styled.label`
    font-family: Arial;
    font-size: ${(props)=>fontSizes[props.size] ?? '1rem'};
    color: #222;
    line-hight: ${(props)=>lineHights[props.line] ?? 1.3};
    user-select: none;
`;



export default Label;