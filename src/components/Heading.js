import React from 'react'
import styled from 'styled-components';

const SectT = styled.div`
  margin-bottom: 45px;
	text-align: center;
`;
const Span = styled.div`
  font-size: 16px;
	color: #18d26e;
	text-transform: uppercase;
	font-weight: 700; 
`;
const Head = styled.h2`
  color: #000;
	font-size: 32px;
	font-weight: 600;
	text-transform: uppercase;
	margin-top: 8px;
`;

export const Heading = ({ title, parr}) => {
  return (
    <div className="col-lg-12">
      <SectT className="section-title">
         <Span>{title}</Span>
         <Head>{parr}</Head>
      </SectT>
    </div>
  )
}