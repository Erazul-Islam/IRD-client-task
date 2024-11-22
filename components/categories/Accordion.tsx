/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */

import { useGetCategory, useGetSubCategory } from "@/hooks/categories.hook";
import { Category, Subcategory } from "@/types";
import { Accordion, AccordionItem, } from "@nextui-org/react";


import React from 'react';

interface AccordionProps {
  handleCategoryClick: (id: number) => void;
}


const AccordionComponent : React.FC<AccordionProps> = ({ handleCategoryClick }) => {

  const { data: categories } = useGetCategory()

  const { data: subcategories } = useGetSubCategory()

  const categoryIcons: Record<string, string> = {
    "duar_gurutto": "https://i.ibb.co.com/z4KJjzH/duar-gurutto.png",
    "zikirer_fozilot": "https://i.ibb.co.com/wg5h3ny/zikirer-fozilot.png",
    "dua_kobuler_somoy": "https://i.ibb.co.com/qB5jPnB/dua-kobuler-somoy.png",
    "jader_dua_kobul_hoy": "https://i.ibb.co.com/PFW2w12/jader-dua-kobul-hoy.png",
    "sokal_sondha": "https://i.ibb.co.com/LnJsF0L/sokal-sondha.png",
    "ghum": "https://i.ibb.co.com/tKmcbDM/ghum.png",
    "poshak": "https://i.ibb.co.com/rxSP3H5/poshak.png",
    "bari": "https://i.ibb.co.com/Vv0bn5R/bari.png",
    "toilet": "https://i.ibb.co.com/NmdQF8g/toilet.png",
    "azan_ikamot": "https://i.ibb.co.com/LdGZ7zc/azan-ikamot.png",
  }

  return (
    <div className="bg-none mt-4 text-black">
      <div
        className="max-h-[550px] overflow-y-scroll scrollbar-thumb-blue-800 p-4"
      >
        {categories?.map((category: Category) => {
          const matchingSubcategories = subcategories?.filter(
            (subcat: Subcategory) => subcat.cat_id === category.cat_id
          );

          return (
            <div key={category?.id}>
              <Accordion >
                <AccordionItem
                  key={category?.id}
                  hideIndicator={true}
                  startContent={
                    <div className="text-[#393939]">
                      <img className="w-[50px] bg-[#CFE0E5] rounded-md" src={categoryIcons[category?.cat_icon]} alt={category?.cat_icon} />
                    </div>
                  }
                  title={<button onClick={() => handleCategoryClick(category.cat_id)}>
                    <div className="text-[#393939] flex justify-between text-sm" >
                      <span className="text-[#393939] text-left text-sm font-semibold">{category?.cat_name_en} <br />
                        <span className="text-xs text-[#7E7E7E] ml-0 mt-0">{`Subcategory : ${matchingSubcategories?.length || 0}`}</span>
                      </span>
                      <div className="">
                        <h1>{category?.no_of_dua}</h1>
                        Duas
                      </div>
                    </div>
                  </button>}

                >
                  <div className="bg-none pl-4">
                    {matchingSubcategories?.map((subcat: Subcategory) => (
                      <div key={subcat?.id} className="mb-2 mt-5 text-sm text-[#373737]">
                        {subcat?.subcat_name_en}
                      </div>
                    ))}
                  </div>
                </AccordionItem>
              </Accordion>
            </div>
          );
        })}
      </div>
      {/* {selectedCategoryId && <DaynamicData selectedCategoryId={selectedCategoryId} />} */}
    </div>
  );
};

export default AccordionComponent;