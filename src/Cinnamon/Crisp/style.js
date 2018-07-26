import styled from 'styled-components';
import { rgba, setSaturation } from 'polished';
import { Base } from '../sharedStyles';
import {
    $white,
    $grey_600,
    $red_600,
    $orange_A200,
    $indigo_600,
    $blue_600,
    $green_600
} from '../colors';

export const SCHEME_GREY = 'scheme-grey';
export const SCHEME_RED = 'scheme-red';
export const SCHEME_ORANGE = 'scheme-orange';
export const SCHEME_PURPLE = 'scheme-purple';
export const SCHEME_GREEN = 'scheme-green';
export const SCHEME_BLUE = 'scheme-blue';

const schemeColor = (scheme, alpha = 1) => {
    let color;
    switch (scheme) {
        case SCHEME_RED:
            color = $red_600;
            break;
        case SCHEME_ORANGE:
            color = $orange_A200;
            break;
        case SCHEME_PURPLE:
            color = $indigo_600;
            break;
        case SCHEME_GREEN:
            color = $green_600;
            break;
        case SCHEME_BLUE:
            color = $blue_600;
            break;
        case SCHEME_GREY:
        default:
            color = $grey_600;
            break;
    }

    return rgba(color, alpha);
};

const Div = styled(Base)`
    ${({ hasOnClick }) => hasOnClick ? 'cursor: pointer;' : ''}
    background-color: ${$white};
    min-height: 50px;
    width: ${({ hasIcon }) => hasIcon ? '350' : '300'}px;
    border-radius: 5px;
    color: ${({ scheme }) => schemeColor(scheme)};

    strong.title {
        font-size: 15px;
    }

    div.content {
        padding-top: 5px;
        color: ${({ scheme }) => setSaturation(0.2, schemeColor(scheme, 0.6))};
    }

    button.btn-dismiss {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: 40px;
        text-align: center;
        text-decoration: none;
        font-size: 22px;
        color: ${({ scheme }) => schemeColor(scheme, 0.6)};
        transition: background-color .4s;
        border: none;
        outline: none;
        background: none;
        cursor: pointer;

        &:hover {
            background-color: ${({ scheme }) => schemeColor(scheme, 0.05)};
        }

        &:active {
            background-color: ${({ scheme }) => schemeColor(scheme, 0.1)};
        }
    }
`;

export default Div;
