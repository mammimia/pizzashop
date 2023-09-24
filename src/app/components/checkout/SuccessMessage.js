import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const SuccessMessage = ({ closeModal }) => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count > 0) {
      setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    } else {
      closeModal();
    }
  }, [count, closeModal]);

  return (
    <div
      className="flex flex-col justify-center items-center h-[100vh] lg:h-[600px]
  px-6"
    >
      <h2 className="text-2xl font-semibold text-center">
        Thank you! The order has been placed!
      </h2>
      <Image src="/success-1.gif" alt="" width={150} height={150} />
      <div>
        This window will close automatically in <span>{count}</span> seconds.
      </div>
    </div>
  );
};

export default SuccessMessage;
