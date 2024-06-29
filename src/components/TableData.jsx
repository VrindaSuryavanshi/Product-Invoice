import React, { useEffect, useState } from 'react'

const TableData = () => {

    const [unitPrice ,setUnitPrice] =useState(538.10);
    const [netAmount , setNetAmount] = useState(0);
    const [ supply , setSupply] = useState("MH");
    const [ delivery , setDelivery] = useState("MH");
    // const [igst , setIgst]

    useEffect(()=>{
        totalAmount();
        taxType();
        taxAmount();    
    },[]) ;


    var uamt ,qty=1 , discount=0;
    let cgst ,sgst, igst;

    const totalAmount =()=>{
        uamt=unitPrice * qty - discount;
            setNetAmount(uamt);
                 console.log(netAmount);  

    }
    const taxType =()=>{
        if(supply === delivery){
            cgst= (netAmount *0.025);
            sgst=cgst;
            // console.log(cgst);
 
        }else{
            igst= (netAmount *0.025); 
            // console.log(cgst);
        }
    }
    let taxAmt;
    const taxAmount = ()=>{
        if(supply === delivery){
             taxAmt = (netAmount * cgst); 
            // console.log(taxAmt);
 
        }else{

            taxAmt= (netAmount *igst); 
            // console.log(taxAmt);
        }
    }


  return (
    <div>
      <table width= "100%"
       >
        <thead>
             <tr 
             >
                <th >
                    Sl. No.
                </th>           
             
                <th>
                    Description
                </th>
             
             
                <th>
                    Unit Price
                </th>
             
             
                <th>
                    Qty.
                </th>

                <th>
                    Discount
                </th>
                
             
             
                <th>
                    Net Amount
                </th>
             
             
                <th>
                    Tax Rate
                </th>
             
             
                <th>
                    Tax Type
                </th>
             
             
                <th>
                    Tax Amount
                </th>
             
             
                <th>
                    Total Amount
                </th>
                </tr>

                <tr>
                    <td className='text-sm'>1</td>
                    <td className='text-sm leading-4'>
                        <p>
                            beatXP Vega Neo 1.43” AMOLED Bluetooth Calling Smartwatch,
                     60 Hz Refresh Rate, 500 Nits, Always on Display, 
                     Health Tracking.  
                        </p>
                       
                                        <br />
                                                        <p>
                                                  Shipping Charges
                              
                                                        </p>
                    </td>
                    <td className='text-sm flex flex-col gap-14 border-none'>
                        <span>
                        ₹999
                        </span>
                         <span>
                         ₹40
                         </span>
                   
                    </td>
                    <td className='text-sm'>1</td>
                    <td className='text-sm'>-</td>
                    <td className='text-sm flex flex-col gap-14 border-none'>
                    <span>
                        ₹999
                        </span>
                         <span>
                         ₹40
                         </span>
                    </td>
                    <td className='text-sm leading-6'><p>9%</p><p>9%</p><p>9%</p><p>9%</p></td>
                    <td className='text-sm leading-6'><p>CGST</p><p>SGST</p><p>CGST</p><p>SGST</p></td>
                    <td className='text-sm leading-6'><p>₹{999*0.09}</p><p>₹{999*0.09}</p><p>₹{3.6}</p><p>₹{3.6}</p></td>
                    <td className='text-sm flex flex-col gap-14 border-none'>
                    <span>
                        ₹1178.82
                        </span>
                         <span>
                         ₹47.20
                         </span>
                    </td>                </tr>

                <tr>
                    <td className='text-sm'>2</td>
                    <td className='text-sm leading-4'>
                        <p>
                                                truke , Fast Charging, Elegant Royal Design, Bluetooth 5.4, Noise Cancellation, Gaming Mode, 1Yr Warranty   

                        </p>
                                   <br />
                                     <span> Shipping Charges</span>
                   
                    </td>
                    <td className='text-sm flex flex-col gap-14 border-none'>
                    <span>
                        ₹799
                        </span>
                         <span>
                         ₹40
                         </span>
                    </td>
                    <td className='text-sm'>1</td>
                    <td className='text-sm'>-</td>
                    <td className='text-sm flex flex-col gap-14 border-none'>
                    <span>
                        ₹799
                        </span>
                         <span>
                         ₹40
                         </span>
                    </td>
                    <td className='text-sm leading-6'><p>9%</p><p>9%</p><p>9%</p><p>9%</p></td>
                    <td className='text-sm leading-6'><p>CGST</p><p>SGST</p><p>CGST</p><p>SGST</p></td>
                    <td className='text-sm leading-6'><p>₹{799*0.09}</p><p>₹{799*0.09}</p><p>₹3.6</p><p>₹3.6</p></td>
                    <td className='text-sm flex flex-col gap-14 border-none'>
                    <span>
                        ₹{942.82}
                        </span>
                         <span>
                         ₹47.20
                         </span>
                    </td>                </tr>
                <tr>
                   <td colSpan={8} className='text-left font-bold'><span>Total :</span></td>
                   <td className='bg-gray-200'>₹338.04</td>
                   <td className='bg-gray-200'>₹2216.04</td>
                </tr>
                <tr>
                   <td colSpan={10} className='text-left text-sm font-bold'><span>Amount In Words:</span> <br /><span>two thousand two hundred sixteen only</span></td>
                </tr>
                <tr>
                    <td colSpan={10} className=' font-bold'>
                        <div className='flex flex-col justify-end items-end'>
                      <span className='pb-2'>  For Richa & Co. :</span>
                   
                         <img src="https://www.shutterstock.com/shutterstock/photos/2046349127/display_1500/stock-vector-vector-signature-autograph-hand-drawn-scrawl-signature-handwritten-autograph-handwriting-2046349127.jpg"
                          alt="sign" className='w-52 h-16 border-' style={{align:"left"}}/>
                          <span>
                            Authorize Signature
                         </span>
                        </div>
                       
                         </td>
                </tr>
        </thead>
      </table>
    </div>
  )
}

export default TableData
