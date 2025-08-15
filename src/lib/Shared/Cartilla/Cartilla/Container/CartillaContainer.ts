import { CartillaServices } from "./../../../../../lib/Cartilla/Cartilla/Infraestructure/Service/CartillaService";
import { CartillaRepository } from "./../../../../../lib/Cartilla/Cartilla/Infraestructure/Repository/CartillaRepository";
import { AppCartillaCreate } from "./../../../../../lib/Cartilla/Cartilla/Application/CartillaCreate/AppCartillaCreate";
import { AppCartillaBuild } from "./../../../../../lib/Cartilla/Cartilla/Application/CartillaBuild/AppCartillaBuild";

export const CartillaContainer = async (): Promise<{ cartilla: CartillaServices }> => {

  const cartillaRepository = new CartillaRepository();
  
  return {
    cartilla: {
       create: new AppCartillaCreate(cartillaRepository)
      ,build: new AppCartillaBuild(cartillaRepository)
    },
  };
};