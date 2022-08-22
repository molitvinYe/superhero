import styled from "styled-components"

export const PaginateContainer = styled.div<{containerHeight: string}>`
  display: flex;

  position: sticky;
  right: 0;
  top: 0;

  height: ${props => props.containerHeight};

  .paginate_list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    height: 100%;
    width: 50px;

    box-sizing: border-box;
    padding: 10px 0;

    background-color: ${props => props.theme.palette.secondary.main};

    .paginate_link,
    .previous,
    .next,
    .break {
        cursor: pointer;

        display: block;
        text-align: center;

        width: 27px;
        height: 27px;

        color: ${props => props.theme.palette.primary.main};
        background: ${props => props.theme.bg.secondary};

        border-radius: ${props => props.theme.borderRadius};
        border: 1px solid  ${props => props.theme.palette.primary.main};

        &:hover {
          background: ${props => props.theme.bg.primary};
        }
    }

    .previous a,
    .next a,
    .break a {
      display: block;
      width: 100%;
      height: 100%;
    }

    .active {
      font-weight: bold;
      background: ${props => props.theme.bg.primary};
    }
  }
`