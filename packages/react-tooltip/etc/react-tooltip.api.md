## API Report File for "@fluentui/react-tooltip"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { Alignment } from '@fluentui/react-positioning';
import { ComponentProps } from '@fluentui/react-utilities';
import { ComponentState } from '@fluentui/react-utilities';
import { Position } from '@fluentui/react-positioning';
import * as React_2 from 'react';
import { RequiredProps } from '@fluentui/react-utilities';
import { ResolvedShorthandProps } from '@fluentui/react-utilities';
import { ShorthandProps } from '@fluentui/react-utilities';

// @public (undocumented)
export const internal__TooltipContext: React_2.Context<TooltipContext>;

// @public
export const renderTooltip: (state: TooltipState) => JSX.Element;

// @public
export const renderTooltipProvider: (state: TooltipProviderState) => JSX.Element;

// @public
export const renderTooltipTrigger: (state: TooltipTriggerState) => JSX.Element;

// @public
export type ShowTooltipArgs = {
    tooltip: TooltipImperativeHandle;
    trigger: HTMLElement;
    target?: HTMLElement | null;
    showDelay?: number;
    hideDelay?: number;
};

// @public
export const Tooltip: React_2.ForwardRefExoticComponent<TooltipProps & React_2.RefAttributes<HTMLElement>>;

// @public
export type TooltipContext = {
    TooltipComponent: React_2.FC<TooltipProps & React_2.RefAttributes<HTMLElement>>;
    tooltipManager: TooltipManager | undefined;
};

// @public
export type TooltipDefaultedProps = 'position' | 'align' | 'offset';

// @public (undocumented)
export interface TooltipImperativeHandle {
    hide: () => void;
    show: (target: HTMLElement) => void;
}

// @public
export interface TooltipManager {
    hideAll: () => void;
    hideTooltip: (trigger: HTMLElement) => void;
    onPointerEnterTooltip: () => void;
    onPointerLeaveTooltip: () => void;
    showTooltip: (args: ShowTooltipArgs) => void;
}

// @public (undocumented)
export interface TooltipProps extends ComponentProps, React_2.HTMLAttributes<HTMLElement> {
    align?: Alignment;
    arrow?: ShorthandProps<React_2.HTMLAttributes<HTMLElement> & React_2.RefAttributes<HTMLElement>>;
    componentRef?: React_2.Ref<TooltipImperativeHandle>;
    noArrow?: boolean;
    offset?: number;
    position?: Position;
    subtle?: boolean;
}

// @public
export const TooltipProvider: React_2.ForwardRefExoticComponent<TooltipProviderProps & React_2.RefAttributes<HTMLElement>>;

// @public (undocumented)
export interface TooltipProviderProps extends ComponentProps, React_2.HTMLAttributes<HTMLElement> {
}

// @public (undocumented)
export type TooltipProviderState = ComponentState<React_2.RefObject<HTMLElement>, TooltipProviderProps & {
    tooltipManager: TooltipManager;
}>;

// @public
export type TooltipShorthandProps = 'arrow';

// @public
export const tooltipShorthandProps: TooltipShorthandProps[];

// @public (undocumented)
export type TooltipState = ComponentState<React_2.Ref<HTMLElement>, TooltipProps & {
    visible: boolean;
}, TooltipShorthandProps, TooltipDefaultedProps>;

// @public
export const TooltipTrigger: React_2.FunctionComponent<TooltipTriggerProps>;

// @public
export type TooltipTriggerChildProps = Pick<React_2.HTMLAttributes<HTMLElement>, 'onPointerEnter' | 'onPointerLeave' | 'onFocus' | 'onBlur' | 'aria-describedby' | 'aria-labelledby'>;

// @public
export type TooltipTriggerDefaultedProps = 'tooltip';

// @public (undocumented)
export interface TooltipTriggerProps extends Pick<TooltipProps, 'position' | 'align' | 'subtle' | 'noArrow' | 'offset'> {
    children: React_2.ReactElement<React_2.HTMLAttributes<HTMLElement>> | ((props: TooltipTriggerChildProps) => React_2.ReactNode);
    hideDelay?: number;
    onlyIfTruncated?: boolean;
    showDelay?: number;
    targetRef?: React_2.RefObject<HTMLElement>;
    tooltip: ShorthandProps<TooltipProps>;
    type?: 'description' | 'label';
}

// @public
export type TooltipTriggerShorthandProps = typeof tooltipTriggerShorthandProps[number];

// @public
export const tooltipTriggerShorthandProps: readonly ["tooltip"];

// @public (undocumented)
export type TooltipTriggerState = RequiredProps<ResolvedShorthandProps<TooltipTriggerProps & {
    tooltipManager: TooltipManager | undefined;
    tooltipRef: React_2.MutableRefObject<TooltipImperativeHandle | null>;
}, TooltipTriggerShorthandProps>, TooltipTriggerDefaultedProps>;

// @public
export const useTooltip: (props: TooltipProps, ref: React_2.Ref<HTMLElement>, defaultProps?: TooltipProps | undefined) => TooltipState;

// @public (undocumented)
export const useTooltipContext: () => TooltipContext;

// @public (undocumented)
export const useTooltipManager: () => TooltipManager;

// @public
export const useTooltipProvider: (props: TooltipProviderProps, ref: React_2.Ref<HTMLElement>, defaultProps?: TooltipProviderProps | undefined) => TooltipProviderState;

// @public
export const useTooltipStyles: (state: TooltipState) => TooltipState;

// @public
export const useTooltipTrigger: (props: TooltipTriggerProps, defaultProps?: TooltipTriggerProps | undefined) => TooltipTriggerState;


// (No @packageDocumentation comment for this package)

```
