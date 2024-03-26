import styled from "styled-components";

export const Body = styled.div`
   background-color: #0c1821;
   height: 60px;
   display: flex;
   align-items: center;
   padding: 0 40px;
   color: #ccc0dc !important;
   justify-content: space-between;
`;

export const SessionLinks = styled.div`
   display: flex;
   width: 200px;
   justify-content: space-between;
`;

export const Link = styled.a`
   font-weight: bold;
   text-decoration: none;
   cursor: pointer;
   color: inherit;
`;

export const Children = styled.div`
   max-width: 1280px;
   display: flex;
   flex-direction: column;
   margin: 40px auto;
   padding: 0 40px;
`;

export const Div = styled.div`
   border: 1px solid #e0dedec3;
   display: flex;
   align-items: center;
`;

export const Title = styled.h1`
   color: black;
   font-weight: bold;
   font-size: 25px;
   padding: 20px 10px 20px 10px;
`;

export const Text = styled.p`
   color: black;
   font-weight: 500;
   padding-top: 6px;
   font-size: 13px;
`;

export const Button2 = styled.button`
   background-color: transparent;
   border: none;
   padding-left: 30px;
   padding-top: 8px;
   cursor: pointer;
`;
