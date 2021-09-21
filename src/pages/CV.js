import React from 'react';

//components
import Header from '../components/Header';
import PDFReader from '../components/PDFReader'

import CVpdf from '../pdfFiles/Danjal_Berg_CV_EN.pdf'

const CV = () => {

  return (
    <>
      <Header />
      <PDFReader PDF={CVpdf}/>
    </>
  )
}

export default CV;
