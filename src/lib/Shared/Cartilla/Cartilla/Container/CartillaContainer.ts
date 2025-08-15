import { CartillaServices } from "./../../../../../lib/Cartilla/Cartilla/Infraestructure/Service/CartillaService";
import { CartillaRepository } from "./../../../../../lib/Cartilla/Cartilla/Infraestructure/Repository/CartillaRepository";
import { AppCartillaCreate } from "./../../../../../lib/Cartilla/Cartilla/Application/CartillaCreate/AppCartillaCreate";

export const CartillaContainer = async (): Promise<{ cartilla: CartillaServices }> => {

  const cartillaRepository = new CartillaRepository();
  
  return {
    cartilla: {
      create: new AppCartillaCreate(cartillaRepository)
    },
  };
};