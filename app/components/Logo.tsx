import { HandCoins, PiggyBank } from "lucide-react";
import React from "react";
import { isUserUsingMobile } from "../utils/isUserUsingMobile";

 function LogoDesktop(): React.JSX.Element {
  return (
    <a href="/" className="flex items-center gap-2">
      <HandCoins className="stroke h-11 w-11 stroke-green-500 stroke-[1.5]" />
      <p className="bg-gradient-to-r from-green-400 to-red-900 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        Elliot - Your personal wallet
      </p>
    </a>
  );
}

 function LogoMobile(): React.JSX.Element {
  return (
    <a href="/" className="flex items-center gap-2">
      <p className="bg-gradient-to-r from-green-400 to-red-900 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
      Elliot - Your personal wallet
      </p>
    </a>
  );
}

export function Logo (): React.JSX.Element {
 const isMobile = isUserUsingMobile()

 if(isMobile) {
  return <LogoMobile/>
 }

 return <LogoDesktop/>

}