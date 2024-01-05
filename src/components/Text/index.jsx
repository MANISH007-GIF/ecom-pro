import React from "react";

const sizeClasses = {
  txtPoppinsMedium14Gray90001: "font-medium font-poppins",
  txtPoppinsSemiBold32GreenA700: "font-poppins font-semibold",
  txtPoppinsSemiBold56WhiteA700: "font-poppins font-semibold",
  txtPoppinsRegular32: "font-normal font-poppins",
  txtPoppinsSemiBold14: "font-poppins font-semibold",
  txtPoppinsSemiBold14GreenA700: "font-poppins font-semibold",
  txtPoppinsSemiBold16: "font-poppins font-semibold",
  txtPoppinsMedium20WhiteA700: "font-medium font-poppins",
  txtPoppinsSemiBold32WhiteA700: "font-poppins font-semibold",
  txtPoppinsRegular24WhiteA70099: "font-normal font-poppins",
  txtPoppinsRegular18Green800: "font-normal font-poppins",
  txtPoppinsSemiBold12: "font-poppins font-semibold",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtPoppinsRegular14WhiteA700: "font-normal font-poppins",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsRegular15: "font-normal font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsRegular14Green800: "font-normal font-poppins",
  txtPoppinsRegular14Bluegray900: "font-normal font-poppins",
  txtPoppinsRegular12WhiteA700cc: "font-normal font-poppins",
  txtPoppinsSemiBold24: "font-poppins font-semibold",
  txtPoppinsRegular14Gray700: "font-normal font-poppins",
  txtPoppinsRegular24: "font-normal font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsRegular16Gray700: "font-normal font-poppins",
  txtPoppinsRegular12Gray700: "font-normal font-poppins",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtPoppinsMedium14Gray600: "font-medium font-poppins",
  txtPoppinsRegular18Gray700: "font-normal font-poppins",
  txtPoppinsMedium24WhiteA70099: "font-medium font-poppins",
  txtPoppinsMedium16Gray600: "font-medium font-poppins",
  txtDMSansRegular468: "font-dmsans font-normal",
  txtPoppinsSemiBold40WhiteA700: "font-poppins font-semibold",
  txtPoppinsRegular20Gray600: "font-normal font-poppins",
  txtPoppinsRegular14WhiteA700a2: "font-normal font-poppins",
  txtPoppinsRegular16WhiteA70090: "font-normal font-poppins",
  txtPoppinsMedium12Gray800: "font-medium font-poppins",
  txtPoppinsRegular16Bluegray400: "font-normal font-poppins",
  txtPoppinsRegular24WhiteA700: "font-normal font-poppins",
  txtPoppinsRegular16WhiteA70099: "font-normal font-poppins",
  txtPoppinsRegular24WhiteA70087: "font-normal font-poppins",
  txtPoppinsMedium3904: "font-medium font-poppins",
  txtPoppinsRegular16Green80001: "font-normal font-poppins",
  txtPoppinsRegular11: "font-normal font-poppins",
  txtPoppinsSemiBold36: "font-poppins font-semibold",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsRegular13: "font-normal font-poppins",
  txtPoppinsSemiBold32: "font-poppins font-semibold",
  txtPoppinsRegular12Green90001: "font-normal font-poppins",
  txtPoppinsMedium24Green800: "font-medium font-poppins",
  txtPoppinsMedium18Black900: "font-medium font-poppins",
  txtPoppinsRegular16Gray60001: "font-normal font-poppins",
  txtPoppinsMedium16GreenA700: "font-medium font-poppins",
  txtPoppinsRegular20Gray60001: "font-normal font-poppins",
  txtPoppinsRegular14Bluegray400: "font-normal font-poppins",
  txtDMSansBold1152: "font-bold font-dmsans",
  txtPoppinsMedium14Black900: "font-medium font-poppins",
  txtPoppinsRegular14Gray60001: "font-normal font-poppins",
  txtPoppinsRegular14GreenA700: "font-normal font-poppins",
  txtPoppinsSemiBold14WhiteA700: "font-poppins font-semibold",
  txtPoppinsSemiBold40: "font-poppins font-semibold",
  txtPoppinsSemiBold40Black900: "font-poppins font-semibold",
  txtPoppinsRegular12WhiteA70099: "font-normal font-poppins",
  txtPoppinsRegular14Gray800: "font-normal font-poppins",
  txtPoppinsSemiBold48: "font-poppins font-semibold",
  txtPoppinsSemiBold24Gray900: "font-poppins font-semibold",
  txtPoppinsRegular14Gray400: "font-normal font-poppins",
  txtPoppinsSemiBold36WhiteA700: "font-poppins font-semibold",
  txtDancingScriptBold13: "font-bold font-dancingscript",
  txtPoppinsRegular12Gray600: "font-normal font-poppins",
  txtPoppinsMedium14Bluegray900: "font-medium font-poppins",
  txtPoppinsRegular24Gray500: "font-normal font-poppins",
  txtPoppinsMedium14Gray900: "font-medium font-poppins",
  txtPoppinsRegular18WhiteA700: "font-normal font-poppins",
  txtPoppinsMedium14Gray500: "font-medium font-poppins",
  txtPoppinsMedium10Gray500: "font-medium font-poppins",
  txtDMSansMedium72: "font-dmsans font-medium",
  txtPoppinsMedium32Black900: "font-medium font-poppins",
  txtPoppinsRegular16Bluegray900: "font-normal font-poppins",
  txtPoppinsMedium14GreenA700: "font-medium font-poppins",
  txtPoppinsRegular12WhiteA70087: "font-normal font-poppins",
  txtPoppinsRegular16WhiteA700: "font-normal font-poppins",
  txtPoppinsSemiBold32Black900: "font-poppins font-semibold",
  txtPoppinsRegular16GreenA700: "font-normal font-poppins",
  txtPoppinsMedium32: "font-medium font-poppins",
  txtPoppinsSemiBold56: "font-poppins font-semibold",
  txtPoppinsMedium16Gray90001: "font-medium font-poppins",
  txtPoppinsMedium14Gray60001: "font-medium font-poppins",
  txtPoppinsMedium12Gray90001: "font-medium font-poppins",
  txtPoppinsMedium24: "font-medium font-poppins",
  txtPoppinsRegular14Gray90001: "font-normal font-poppins",
  txtPoppinsRegular20Gray400: "font-normal font-poppins",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsSemiBold56Gray90001: "font-poppins font-semibold",
  txtSegoeScript16WhiteA700: "font-normal font-segoescript",
  txtPoppinsRegular16Gray500: "font-normal font-poppins",
  txtPoppinsMedium24WhiteA700: "font-medium font-poppins",
  txtPoppinsRegular11Gray800: "font-normal font-poppins",
  txtPoppinsMedium14Red400: "font-medium font-poppins",
  txtPoppinsSemiBold16WhiteA700: "font-poppins font-semibold",
  txtPoppinsMedium14Gray400: "font-medium font-poppins",
  txtPoppinsMedium14248: "font-medium font-poppins",
  txtPoppinsLight56: "font-light font-poppins",
  txtPoppinsSemiBold24WhiteA700: "font-poppins font-semibold",
  txtPoppinsMedium18WhiteA700: "font-medium font-poppins",
  txtSegoeScript16: "font-normal font-segoescript",
  txtSegoeScript14: "font-normal font-segoescript",
  txtPoppinsSemiBold72: "font-poppins font-semibold",
  txtPoppinsSemiBold18Green800: "font-poppins font-semibold",
  txtPoppinsRegular16Green90001: "font-normal font-poppins",
  txtPoppinsSemiBold18WhiteA700: "font-poppins font-semibold",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsMedium11: "font-medium font-poppins",
  txtPoppinsMedium16Black900: "font-medium font-poppins",
  txtPoppinsMedium12: "font-medium font-poppins",
  txtPoppinsMedium18Green800: "font-medium font-poppins",
  txtPoppinsMedium10: "font-medium font-poppins",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtPoppinsRegular18Gray90001: "font-normal font-poppins",
  txtPoppinsRegular18Gray600: "font-normal font-poppins",
  txtPoppinsSemiBold16GreenA700: "font-poppins font-semibold",
  txtPoppinsRegular16Gray90001: "font-normal font-poppins",
  txtPoppinsMedium3904Black900: "font-medium font-poppins",
  txtPoppinsRegular11Gray90001: "font-normal font-poppins",
  txtPoppinsMedium24Black900: "font-medium font-poppins",
  txtPoppinsRegular16Gray800: "font-normal font-poppins",
  txtPoppinsRegular32GreenA700: "font-normal font-poppins",
  txtPoppinsRegular14Gray600: "font-normal font-poppins",
  txtPoppinsMedium14WhiteA700cc: "font-medium font-poppins",
  txtPoppinsSemiBold24Orange600: "font-poppins font-semibold",
  txtPoppinsMedium12Gray500: "font-medium font-poppins",
  txtPoppinsMedium32Gray90001: "font-medium font-poppins",
  txtPoppinsSemiBold12Gray90001: "font-poppins font-semibold",
  txtPoppinsSemiBold48WhiteA700: "font-poppins font-semibold",
  txtPoppinsMedium14Green800: "font-medium font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
