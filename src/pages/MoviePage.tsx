/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import FilmsList from '../components/FilmsList';
import { FilmType } from '../mocks/films';
import HeadGuest from './HeadGuest';

interface MoviePageProps {
  film: FilmType;
  filmsList: FilmType[];
  onClickHandler: (item: FilmType) => void;
}

const MoviePage: React.FC<MoviePageProps> = ({
  film,
  filmsList,
  onClickHandler,
}) => (
  <>
    <section className="film-card film-card--full">
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src={film.promo} alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <HeadGuest />

        <div className="film-card__wrap">
          <div className="film-card__desc">
            <h2 className="film-card__title">{film.filmName}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{film.genre.join(', ')}</span>
              <span className="film-card__year">{film.year}</span>
            </p>

            <div className="film-card__buttons">
              <Link
                to={`/player/${film.id}`}
                className="btn btn--play film-card__button"
                type="button"
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </Link>
              <Link
                to={'/myList'}
                className="btn btn--list film-card__button"
                type="button"
              >
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
                <span className="film-card__count">9</span>
              </Link>
              <Link
                to={`/films/${film.id}/reviews`}
                onClick={() => onClickHandler(film)}
                className="btn film-card__button"
              >
                Add review
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <div className="film-card__poster film-card__poster--big">
            <img
              src={film.poster}
              alt={film.filmName}
              width="218"
              height="327"
            />
          </div>

          <div className="film-card__desc">
            <nav className="film-nav film-card__nav">
              <ul className="film-nav__list">
                <li className="film-nav__item film-nav__item--active">
                  <a href="#" className="film-nav__link">
                    Overview
                  </a>
                </li>
                <li className="film-nav__item">
                  <a href="#" className="film-nav__link">
                    Details
                  </a>
                </li>
                <li className="film-nav__item">
                  <a href="#" className="film-nav__link">
                    Reviews
                  </a>
                </li>
              </ul>
            </nav>

            <div className="film-rating">
              <div className="film-rating__score">8,9</div>
              <p className="film-rating__meta">
                <span className="film-rating__level">Very good</span>
                <span className="film-rating__count">240 ratings</span>
              </p>
            </div>

            <div className="film-card__text">
              <p>
                In the 1930s, the Grand Budapest Hotel is a popular European ski
                resort, presided over by concierge Gustave H. (Ralph Fiennes).
                Zero, a junior lobby boy, becomes Gustave&apos;s friend and
                protege.
              </p>

              <p>
                Gustave prides himself on providing first-class service to the
                hotel&apos;s guests, including satisfying the sexual needs of
                the many elderly women who stay there. When one of
                Gustave&apos;s lovers dies mysteriously, Gustave finds himself
                the recipient of a priceless painting and the chief suspect in
                her murder.
              </p>

              <p className="film-card__director">
                <strong>Director: Wes Anderson</strong>
              </p>

              <p className="film-card__starring">
                <strong>
                  Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe
                  and other
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <FilmsList filmsList={filmsList} onClickHandler={onClickHandler} />
      </section>

      <footer className="page-footer">
        <div className="logo">
          <Link to={'/'} className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2023 What to watch by Ostroweb.</p>
        </div>
      </footer>
    </div>
  </>
);

export default MoviePage;
