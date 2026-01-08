import type { FC } from "react";

type PlusMoinsProps = {
  quantite: number;
};

/* Composant de modification quantité au panier */
const PlusMoins: FC<PlusMoinsProps> = ({ quantite }) => {
  return (
    <div className="plusmoins">
      <button>-</button>
      {quantite}
      <button>+</button>
    </div>
  );
};

export default PlusMoins;
export { type PlusMoinsProps };
