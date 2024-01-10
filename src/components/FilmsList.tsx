/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import { FilmType } from '../mocks/films';
import MovieCard from './MovieCard';
interface FilmsListProps {
  filmsList: FilmType[];
  onClickHandler: (item: FilmType) => void;
}
///final
const FilmsList: React.FC<FilmsListProps> = ({ filmsList, onClickHandler }) => {
  const [maxFilms, setMaxFilms] = useState(8);
  useEffect(() => {
    setMaxFilms(8);
  }, [filmsList]);
  return (
    <>
      <div className="catalog__films-list">
        {filmsList.map((item, index) => {
          if (index < maxFilms) {
            return (
              <MovieCard
                key={item.id}
                filmId={item.id}
                filmName={item.filmName}
                promo={item.promo}
                film={item}
                //onMouseEnter={() => setActiveCard(item.id)}
                //onMouseLeave={() => setActiveCard(-1)}
                onClickHandler={onClickHandler}
              />
            );
          }
        })}
      </div>
      {maxFilms < filmsList.length && (
        <div className="catalog__more">
          <button
            className="catalog__button"
            type="button"
            onClick={() => setMaxFilms(maxFilms + 8)}
          >
            Show more
          </button>
        </div>
      )}
    </>
  );
};
export default FilmsList;
