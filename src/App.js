import Notes from "./components/Footer";
import TableData from "./components/TableData";
import React, { useRef } from 'react';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import { usePDF } from 'react-to-pdf';

// import { ComponentToPrint } from './ComponentToPrint';




function App() {

  const billing =`GHV MEDICAL ANCHOR PVT LTD,
3rd Floor, Capital Cyberscape Ullahwas,
Sector-59, Gurgaon,Haryana.` ,
  seller =`Richa & Co.,
Plot No. 30, 
Sector 6, Imt Manesar, 
Gurugram, Haryana 122051`
  const componentRef = useRef([]);

  const { toPDF, targetRef } = usePDF({filename: 'invoice.pdf'});

  return (
    <div className="App" >  
    <main >
      {/*logo*/}
      <div className="my-1 flex flex-row gap-4 mr-4 items-end justify-end">
      <ReactToPrint 
      trigger={() => <button className="bg-blue-400 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded">Print</button>} 
      content={() => componentRef.current}/>

      <button className="bg-blue-400 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded" onClick={() => toPDF()}>Download PDF</button>

      </div>  
      <div ref={componentRef}>
      <div className="p-7 m-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-3xl xl:mx-auto bg-white rounded shadow" ref={targetRef}>
      <header className="flex justify-between mb-5">
      <div>
        <h1 className="ml-5 font-bold tracking-wide text-3xl mb-3 ">
           <img src="https://dashboard.getinvoice.co/dboard/img/logo.png" alt="" className="w-40 h-16"/>
          </h1>
      </div>
        
        <div className="flex flex-col items-end justify-end">   
         
          <strong>
            Tax Invoice/Bill of Supply/Cash Memo
            </strong>
           <p>(Original For Recipient)</p>          
        </div>
       
      </header>
      {/* End logo */}
      <div className="flex justify-between">
        
          {/*Seller Details*/}  
      <section className="text-left text-sm flex flex-col items-start justify-start">
        <div className="flex flex-col" >
        <h2 className="text-l font-bold "  >
          Seller Details :
        </h2>
       <p className="font-sans capitalize mb-1">
        <pre>
          {seller}
        </pre>
       </p>
  
        
        </div>
        
        <div className="text-sm flex flex-row gap-2">
        <h2 className="text-sm font-bold" >
          PAN No. : 
        </h2>
        <p>
        IPS45W23
        </p>
        </div>
             
       <div className="text-sm flex flex-row gap-2">
       <h2 className="font-bold">
          GST Registration No. : 
        </h2>
        <p>
        5345A38725hGd45S
        </p>
       </div>
        
        <div className="flex flex-row gap-2">
        <h2 className="text-l font-bold">
          Place of Delivery : 
        </h2>
        <p>
        Haryana
        </p>
        </div>
        
      </section>
      {/*End Seller Details*/}

<div>
 {/*Billing Details*/}
 <section className="px-2 text-right text-sm flex flex-col items-end justify-end">
        <div className="flex flex-col items-end justify-end">
        <h2 className="text-l font-bold">
          Billing Details :
        </h2>
        <p>
          <pre>
          {billing}
          </pre>
        
        </p>
        </div>
        <div className="flex flex-row gap-2 items-end justify-end mb-1">
        <h2 className="text-l font-bold">
          State/UT Code :
        </h2>
        <p>29</p>
        </div>
        
      </section>
      {/*End Billing Details*/}
      {/*Shipping Details*/}
      <section className="px-2 text-right text-sm flex flex-col items-end justify-end">
        <div className="flex flex-col items-end justify-end">
        <h2 className="text-l font-bold ">
          Shipping Details :
        </h2>
        <p>
          <pre>
          {billing}
          </pre>
      
        </p>
        </div>
        <div className="flex flex-row gap-2 mb-1">
        <h2 className="text-l font-bold">
          State/UT Code :
        </h2>
        <p>29</p>
        </div>
       <div className="flex flex-row gap-2">
       <h2 className="text-l font-bold">
          Place Of Supply: 
        </h2>
        <p>
        Haryana
               </p>
       </div>
      
        
      </section>
      {/*End Shipping Details*/}
</div>
     
        </div>   

      {/* oRDER DETAILS */}
      <div className="text-right text-sm flex justify-between">
      <article className="my-2 flex items-start justify-start">
        <ul className="text-left">
          <li><span className="font-bold mr-1">Order No. :</span>098765443221</li>
          <li><span className="font-bold mr-1">Order Date :</span>28/06/2024</li>
        </ul>
      </article>
      {/* end Order details */}

 {/*Invoice Details*/}

    <article className="my-2 flex items-end justify-end" >
        <ul>
          <li> <span className="font-bold mr-1">Invoice No. : </span>I002</li>
          <li> <span className="font-bold mr-1">Invoice Details :</span>I002-DASEF</li>
          <li> <span className="font-bold mr-1"> Invoice Date : </span>25/04/2024</li>
          <li> <span className="font-bold mr-1"> Reverse Charge: </span>Yes/No</li>

        </ul>
      </article>
      {/*End Invoice Details*/}
      </div>  
     
      {/* Table of Item Details */}
        <TableData />
        <p className="font-semibold">
                  Whether tax is payable under reverse charge - No
      </p>
      {/* End Table of Item Details */}

      {/* Notes */}
      <section>
      <div className='p-7 flex flex-wrap items-center justify-center'>

         <Notes />
      </div>
      </section>
      {/* End Notes */}
      </div>
        </div>   
     
      </main>
  
     
    </div>
  );
}

export default App;
