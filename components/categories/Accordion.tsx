/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import { useGetCategory, useGetSubCategory } from "@/hooks/categories.hook";
import { Category, Subcategory } from "@/types";
import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";

import React from 'react';




const AccordionComponent = () => {

  const { data : categories } = useGetCategory()
  // console.log("category", data)

  const { data: subcategories} = useGetSubCategory()



  return (
    <div className="bg-none mt-6 text-black">
      <div
        className="max-h-[550px]  overflow-y-scroll p-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300"
      >
        {categories?.map((category : Category) => {
          // Filter subcategories matching the current category's cat_id
          const matchingSubcategories = subcategories?.filter(
            (subcat : Subcategory) => subcat.cat_id === category.cat_id
          );

          return (
            <div key={category?.id}>
              <Accordion selectionMode="single">
                <AccordionItem
                  key={category?.id}
                  startContent={
                    <Avatar
                      isBordered
                      color="primary"
                      radius="lg"
                      src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    />
                  }
                  subtitle={`Subcategory : ${matchingSubcategories?.length || 0}`}
                  title={<span className="text-[#393939] text-sm font-semibold">{category.cat_name_en}</span>}
                  
                >
                  <div className="bg-none pl-4">
                    {matchingSubcategories?.map((subcat : Subcategory) => (
                      <div key={subcat?.id} className="mb-2 gap-4 text-sm text-[#373737]">
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
    </div>
  );
};

export default AccordionComponent;