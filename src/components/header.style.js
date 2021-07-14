import styled from "styled-components";

export const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
    align-content:center;
    justify-content : space-between;
    height: 65px;
    width: 100% ;
    background-color: black;
    padding-left: 25px ;
    padding-right: 25px ;
`;

export const Button = styled.p`
    color: ${(props) => (props.disabled ? "grey" : "#fff")}; 
    cursor: ${(props) => (props.disabled ? "cursor" : "pointer")};
    font-size: 18px;
    &:hover{
        color:#F29F05;
    }
    margin-left: auto; 
    margin-right: auto;
    padding-right:20px;
`;

export const SortWrapper = styled.div`
    display:flex;
    flex-direction:row;
    align-content:center;
    width:800px;
    padding-right:100px;
    justify-content : space-around;
`;

export const SlideWrapper = styled.div`
    flex-direction:row;
    width:100px;
    height:10px;
    margin-top:18px;
    padding-left:100px;
    margin-left:-150px;
`;

export const Text = styled.p`
    color: ${(props) => (props.disabled ? "grey" : "#fff")};
    font-size: 18px;
    padding-left:10px;
    padding-right:0px;
`;

export const GNA = styled.div`
    margin-left:150px
`

export const Logo = styled.img`
    width: 50px;
    height: 50px;
    margin-right: -200px;
    margin-top:8px;
`;