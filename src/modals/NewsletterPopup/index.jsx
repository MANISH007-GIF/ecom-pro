import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, CheckBox, Img, Input, Text } from "components";
import C06NewsletterPopupNewsletter from "components/C06NewsletterPopupNewsletter";

const NewsletterPopupModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[46%]"
      overlayClassName="bg-black-900_a2 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <C06NewsletterPopupNewsletter
          className="bg-white-A700 flex flex-col items-center justify-start p-2 md:px-5 rounded-lg w-full"
          offer={
            <Text className="leading-[150.00%] mt-3 text-base text-center text-gray-500 w-[94%] sm:w-full">
              <span className="text-gray-500 font-poppins font-normal">
                Subscribe to our newlletter and Save your{" "}
              </span>
              <span className="text-orange-600 font-poppins font-semibold">
                20% money
              </span>
              <span className="text-gray-500 font-poppins font-normal">
                {" "}
                with discount code today.
              </span>
            </Text>
          }
        />
      </div>
    </ModalProvider>
  );
};

export default NewsletterPopupModal;
