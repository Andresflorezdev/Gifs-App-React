import { useRef, useState } from 'react';
import { getGifsByQuery } from '../actions/get-gifs-by-query.action';
import type { Gif } from '../interfaces/gif.interface';

// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
    const [gifs, setGifs] = useState<Gif[]>([]);
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    const gifsCache = useRef<Record<string, Gif[]>>({});

    const handleTermClicked = async(term: string) => {
        if (gifsCache.current[term]) {
            setGifs(gifsCache.current[term]);
            return;
        }
        
        const gifs = await getGifsByQuery(term);
        setGifs(gifs);
        gifsCache.current[term] = gifs
    };
    
    const handleSearch = async( query: string = '' ) => {
        // Convertir el query a minusculas y eliminar espacios en blanco
        query = query.trim().toLocaleLowerCase();
        // Validar que el Query No este vacio
        if (query.length === 0) return;
        // evitar busquedas duplicadas
        if (previousTerms.includes(query)) return;
        // Actualizar previousTerms agregando el nuevo término al inicio 
        // y limitando a 8 elementos máximo, es decir no puede ser un arreglo de más de 8.
        setPreviousTerms([ query, ...previousTerms].slice(0, 8));
    
        const gifs = await getGifsByQuery(query);
        setGifs(gifs);

        gifsCache.current[query] = gifs
        //console.log(gifsCache);
    };
    return {
        // Properties
        gifs,
        previousTerms,

        // Methods
        handleSearch,
        handleTermClicked,
    };
};
