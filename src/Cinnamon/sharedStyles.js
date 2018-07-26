import styled from 'styled-components';
import { POS_BOTTOM } from '../ButterToast/styles';
import {
    $grey_300,
    $grey_500
} from './colors';

const Base = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    font-size: 11px;
    line-height: 14px;
    position: relative;
    box-sizing: border-box;
    box-shadow: 0 3px 15px ${$grey_300};
    transition: box-shadow .3s;
    overflow: hidden;
    z-index: 1;

    > span {
        flex: 1;
        padding: 10px ${({ dismissible }) => dismissible ? '45' : '10'}px 10px ${({ hasIcon }) => hasIcon ? '50' : '10'}px;
    }

    .btn-dismiss {
        z-index: 3;
    }

    &:hover {
        box-shadow: 0 3px 20px ${$grey_500};
    }

    @keyframes showIcon {
        ${({ trayPosition = {} }) => {
            const prefix = trayPosition.vertical === POS_BOTTOM ? '' : '-';
            return `0% { transform: translateY(${prefix}100%); opacity: 0;}`
        }}
        60% { transform: opacity: 1; }
        100% { transform: translateY(0); opacity: 1; }
    }

    .bt-icon {
        top: 0;
        bottom: 0;
        left: 0;
        width: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        animation: showIcon .4s ease 0s forwards;
    }
`;

export {
    Base
};
