import React from 'react'

const Notes = () => {
    const text =`
    ASSPL-Amazon Seller Services Pvt. Ltd., ARIPL-Amazon Retail India Pvt. Ltd.(only where Amazon Retail India Pvt. Ltd.fulfillment center is co-located)
         Customers desirous of availing input GST credit are requested to create a Business account and purchase on Amazon.in/business from Business
                                       eligible offersPlease note that this invoice is not a demand for payment. `
                    
  
  return (
    
    <main className="text-blue-400 leading-4 flex flex-wrap justify-center items-center">

       <p style={{ fontSize : "8px" }}>  
        <pre>
                  {text}      
  
         </pre>      
       </p>       
           {/* client ID  1000.P5LJNAUPW1WY6J9HFV4531H1ZOJI8L */}
           {/* Client secret e5a2ac6f3113c1b4700d5027f0bbe428c76146f8f0 */}
      </main>
  )
}

export default Notes
