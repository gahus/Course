/* Le service peux être développé en RXjs ou autre chose*/ 
import {catchError, from, of, pipe, Observable, switchMap, map} from 'rxjs'
import type {Produit} from '../types/produit'

const BASE_URL = 'http://localhost:3000/produitsData'

type PageResponse = {
    first: number,
    prev: number|null,
    next: number|null,
    last: number,
    pages: number,
    items:number,
    data: Produit[],
}

function loadPage(pageNum: number, pageTaille:number):Observable<Produit[]> {
return from(
    fetch(`${BASE_URL}?_page=${pageNum}&_per_page=${pageTaille}`)
    ).pipe(
        switchMap(
        (responseHttp) => {
            if(!responseHttp.ok){
                throw new Error("Wrong HTTP status: "+ responseHttp.status)
            }
            return responseHttp.json() as Promise<PageResponse>
        }
    ),
    // extract produits from body response
    map(responseHttp => responseHttp.data),
        catchError((err)=>{
            console.log('Erreur: ', err)
            return of([] as Produit[])
            }
        )
    )

}

export {loadPage}
