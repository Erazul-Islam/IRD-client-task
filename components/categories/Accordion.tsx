/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import { useGetCategory, useGetSubCategory } from "@/hooks/categories.hook";
import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";

import React from 'react';

const AccordionComponent = () => {

  const { data } = useGetCategory()
  // console.log("category", data)

  const { data: Subcategory } = useGetSubCategory()

  // console.log("sub-category", Subcategory)

  return (
    <div className="bg-none mt-6 text-black">
      <div
        className="max-h-[550px]  overflow-y-scroll p-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300"
      >
        {data?.map((item) => (
          <div key={item?.id}>
            <Accordion  selectionMode="single">
              <AccordionItem
                key={item?.id}
                aria-label={item?.cat_name_en}
                startContent={
                  <Avatar
                    isBordered
                    color="primary"
                    radius="lg"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                  />
                }
                subtitle={`Subcategory ${item?.no_of_subcat}`}
                title={item?.name}
              >
                <div className="bg-none"></div>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccordionComponent;