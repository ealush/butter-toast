import styled from 'styled-components';
import { rgba, setSaturation } from 'polished';
import { Base } from '../sharedStyles';
import {
    $white,
    $grey_800,
    $red_700,
    $orange_800,
    $blue_800,
    $green_600
} from '../colors';

export const SCHEME_GREY = 'scheme-grey';
export const SCHEME_RED = 'scheme-red';
export const SCHEME_ORANGE = 'scheme-orange';
export const SCHEME_GREEN = 'scheme-green';
export const SCHEME_BLUE = 'scheme-blue';

const schemeColor = (scheme, alpha = 1) => {
    let color;
    switch (scheme) {
        case SCHEME_RED:
            color = $red_700;
            break;
        case SCHEME_ORANGE:
            color = $orange_800;
            break;
        case SCHEME_GREEN:
            color = $green_600;
            break;
        case SCHEME_BLUE:
            color = $blue_800;
            break;
        case SCHEME_GREY:
        default:
            color = $grey_800;
            break;
    }

    return rgba(color, alpha);
};

const Div = styled(Base)`
    ${({ hasOnClick }) => hasOnClick ? 'cursor: pointer;' : ''}
    background-color: ${({ scheme }) => schemeColor(scheme)};
    min-height: 50px;
    width: ${({ hasIcon }) => hasIcon ? '350' : '300'}px;
    color: ${$white};

    strong.title {
        color: ${$white};
        font-size: 15px;
    }

    div.content {
        padding-top: 5px;
        color: ${$white};
    }

    button.btn-dismiss {
        position: absolute;
        right: 0;
        top: 0;
        padding: 5px 10px;
        text-align: center;
        text-decoration: none;
        font-size: 14px;
        color: ${rgba($white, .5)};
        transition: color .4s;
        border: none;
        outline: none;
        background: none;
        cursor: pointer;

        &:hover {
            color: ${rgba($white, .8)};
        }

        &:active {
            color: ${rgba($white, 1)};
        }
    }
`;

export default Div;
