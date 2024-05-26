"use client";

import Image from "next/image";

const CartModal = () => {

    const cartIems = true;

    return (
        <div className="w-max absolute p-4 rounded-md shadow-md bg-white top-12 right-0 flex flex-col gap-6 z-20">
            {!cartIems ? (
                <div className="">Cart is Empty</div>
            ) : (
                <div className="flex gap-4">
                    <Image src="https://images.pexels.com/photos/18525574/pexels-photo-18525574/free-photo-of-maca-em-branco-negocio-empresa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={72} height={96} className="object-cover rounded-md" />
                    <div className="flex flex-col justify-between w-full">
                        {/* TOP */}
                        <div className=""></div>
                        {/* TITLE */}
                        <div className="flex items-center justify-between gap-8">
                            <h3 className="font-semibold">Product Name</h3>
                            <div className="p-1 bg-gray-200 rounded-sm">$49</div>
                        </div>
                        {/* DESC */}
                        <div className="text-sm text-gray-500">
                            available
                        </div>
                        {/* BOTTOM */}
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Qty. 2</span>
                            <span className="text-blue-600">Remove</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartModal;