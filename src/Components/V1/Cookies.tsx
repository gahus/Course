import type { FC } from 'react'
import { getAllCookies} from '../../Services/CookieService'

export const CookiesComponent: FC = () => {

const cookies: Record<string,string> = getAllCookies();

return <div style={{borderStyle: 'double'}}>
    Valeurs des cookies
    {Object.entries(cookies).map(([key, value]) => (
        <div>{key} - {value}</div>
    ))
    
    }
    </div>
};


export default CookiesComponent;


