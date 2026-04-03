import { GifsList } from './gifs/components/GifsList'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'

import { useGifs } from './gifs/hooks/useGifs'

export const GifsApp = () => {

  const {handleSearch, previousTerms, handleTermClicked, gifs} = useGifs();

  return(
    <>
        {/* Header */ }
        <CustomHeader title='Buscador de Gifs' description='Descubre y comparte el gifs' />

        {/* Search */ }
        <SearchBar placeholder='Buscador de Gifs'
        onQuery={handleSearch}
        />

        {/* Busquedas Previas */ }
        <PreviousSearches searches={previousTerms} onLabelCliked={handleTermClicked} />

        {/* Gifs */ }
        {/* GifsList: Props => gifs: Gif[] */}
        <GifsList gifs={gifs}/>
        
    </>
  );
};
