import React from 'react'
import { Collapse } from 'react-collapse';
import { FaPlus, FaMinus } from "react-icons/fa";


const AccordianItem = ({ open, toggle, title, items, key }) => {
    return (
        <div className='pt-[10px]' key={key}>
            <div className='flex items-center justify-between cursor-pointer' onClick={toggle}>
                <p className='font-bold'>{title}</p>
                <div>
                    {
                        open ? <FaMinus /> : <FaPlus />
                    }
                </div>
            </div>
            <Collapse isOpened={open}>
                <div className='flex flex-col gap-2 mt-4'>
                    {
                        items?.map((e) => (
                            <a key={e} href="#" className='text-inverted'>{e}</a>
                        ))
                    }
                </div>
            </Collapse>
        </div>
    )
}

export default AccordianItem
