import React from 'react'

function SmIconCard({img, alt, text, styles = ""}) {
  return (
          <div className={`max-w-[400px] bg-[#EFF5E1] rounded-full flex justify-between items-center gap-5 p-2 ${styles}`}>
            <div className="w-[60px] min-w-[60px] aspect-square border-2 border-dashed border-[#2D3B36] rounded-full p-1 relative overflow-hidden">
              <div className="w-full aspect-square bg-[#2D3B36] flex justify-center items-center rounded-full">
                <img
                  className="w-[55%] aspect-square object-cover rounded-full"
                  src={img}
                  alt={alt}
                />
              </div>
            </div>

            <h4 className="font-['Inter_Reg'] text-[#2D3B36] text-[14px] leading-4.5">
              {text}
            </h4>
          </div>
  )
}

export default SmIconCard
