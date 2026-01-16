import type {FC} from "react";
import type {Lot} from "../../types/CartouchePaniersV1/lot";

const LotComponent: FC<Lot> = (lot) => {

    return (
        <div key={lot.id}>
            {lot.gainsBriiAffiche} économisés
        </div>
    )

};

export default LotComponent;