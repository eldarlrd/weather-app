import { css } from 'lit';

export const mainStyles = css`
  ::selection {
    background-color: var(--bg-primary);
  }

  :host {
    display: flex;
    font-weight: 300;
    min-height: 100dvh;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-family: 'Signika', sans-serif;
  }

  img {
    filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));
  }

  h1,
  h2,
  h3,
  h4,
  p,
  i {
    word-break: break-word;
    font-family: 'Signika', sans-serif;
    filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))
      drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
  }

  svg {
    scale: 4;
    z-index: -1;
    padding-top: 1.25rem;
  }

  #error {
    user-select: none;
  }

  #weather-container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  #current-weather {
    display: flex;
    margin-top: -1rem;
    align-items: center;
    flex-direction: column;

    & span {
      gap: 1rem;
      font-size: 4rem;
      display: inherit;
      line-height: 1rem;
      align-items: center;
      justify-content: center;
      margin-bottom: -1.5rem;
    }

    & div {
      display: inherit;
      width: fit-content;
      flex-direction: column;
      justify-content: center;

      & h4 {
        margin-top: -0.5rem;
      }
    }
  }

  #detailed-weather {
    display: grid;
    gap: 1rem 4rem;
    width: fit-content;
    margin-top: 0.5rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);

    & span {
      display: flex;
      align-items: center;
      flex-direction: column;

      & h3 {
        gap: 0.5rem;
        margin-top: -2px;
        display: inherit;
        align-items: center;
      }
    }
  }

  .forecast-list-elem {
    gap: 0 4rem;
    display: grid;
    place-items: center;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto;
    grid-template-areas:
      'item1 item4'
      'item2 item3';

    .forecast-day {
      grid-area: item1;
      font-weight: 600;
    }

    .forecast-temp {
      gap: 0.5rem;
      display: flex;
      grid-area: item2;
      align-items: center;

      & i {
        filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))
          drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
      }
    }

    .forecast-feel {
      grid-area: item3;
    }

    .forecast-wind {
      gap: 0.5rem;
      display: flex;
      grid-area: item4;
      align-items: center;

      & i {
        filter: drop-shadow(0 0 0 rgb(0 0 0)) !important;
      }
    }
  }

  .forecast-list-elem:not(:last-child) {
    border-bottom: 2px solid white;
  }

  @media (min-width: 48rem) {
    #weather-container {
      flex-direction: row;
      gap: 2rem;
    }

    .forecast-list-elem {
      gap: 0 4rem;
      place-items: normal;
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
      grid-template-areas: 'item1 item2 item3 item4';

      & > * {
        flex-basis: auto;
      }
    }
  }
`;
