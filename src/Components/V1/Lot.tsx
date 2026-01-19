import type {FC} from "react";
import type {Lot} from "../../types/CartouchePaniersV1/lot";

/* Props */
type LotProps = {
  lot: Lot;
};

const LotComponent: FC<LotProps> = (lotProp) => {

    return (
        <div key={lotProp.lot.id}>
            {lotProp.lot.gainsBriiAffiche} économisés
        </div>
    )

};

export default LotComponent;