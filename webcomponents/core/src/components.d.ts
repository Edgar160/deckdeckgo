/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  DeckdeckgoAttributeDefinition,
  DeckdeckgoDeckDefinition,
  DeckdeckgoSlideDefinition,
} from '@deckdeckgo/types';

export namespace Components {
  interface DeckgoDeck {
    'blockSlide': (block: boolean) => Promise<void>;
    'cloneBackground': boolean;
    'deleteActiveSlide': () => Promise<void>;
    'doPrint': () => Promise<void>;
    'embedded': boolean;
    'getActiveIndex': () => Promise<number>;
    'getDeckDefinition': () => Promise<DeckdeckgoDeckDefinition>;
    'getLength': () => Promise<number>;
    'getSlideDefinition': (index: number) => Promise<DeckdeckgoSlideDefinition>;
    'initSlideSize': () => Promise<void>;
    'isBeginning': () => Promise<boolean>;
    'isEnd': () => Promise<boolean>;
    'isMobile': () => Promise<boolean>;
    'keyboard': boolean;
    'loadBackground': () => Promise<void>;
    'reveal': boolean;
    'revealOnMobile': boolean;
    'slideNext': (slideAnimation?: boolean, emitEvent?: boolean) => Promise<void>;
    'slidePrev': (slideAnimation?: boolean, emitEvent?: boolean) => Promise<void>;
    'slideTo': (index: number, speed?: number, emitEvent?: boolean) => Promise<void>;
    'toggleFullScreen': () => Promise<void>;
    'toggleKeyboardAssist': (state: boolean) => Promise<void>;
    'transition': 'slide' | 'fade' | 'none';
  }
  interface DeckgoPager {
    'activeIndex': number;
    'length': number;
  }
  interface DeckgoReveal {
    'allElementsHidden': boolean;
    'allElementsRevealed': boolean;
    'hide': () => Promise<void>;
    'hideAll': () => Promise<void>;
    'reveal': () => Promise<void>;
    'revealAll': () => Promise<void>;
  }
  interface DeckgoRevealList {
    'allElementsHidden': boolean;
    'allElementsRevealed': boolean;
    'hide': () => Promise<void>;
    'hideAll': () => Promise<void>;
    'listTag': string;
    'reveal': () => Promise<void>;
    'revealAll': () => Promise<void>;
  }
}

declare global {


  interface HTMLDeckgoDeckElement extends Components.DeckgoDeck, HTMLStencilElement {}
  var HTMLDeckgoDeckElement: {
    prototype: HTMLDeckgoDeckElement;
    new (): HTMLDeckgoDeckElement;
  };

  interface HTMLDeckgoPagerElement extends Components.DeckgoPager, HTMLStencilElement {}
  var HTMLDeckgoPagerElement: {
    prototype: HTMLDeckgoPagerElement;
    new (): HTMLDeckgoPagerElement;
  };

  interface HTMLDeckgoRevealElement extends Components.DeckgoReveal, HTMLStencilElement {}
  var HTMLDeckgoRevealElement: {
    prototype: HTMLDeckgoRevealElement;
    new (): HTMLDeckgoRevealElement;
  };

  interface HTMLDeckgoRevealListElement extends Components.DeckgoRevealList, HTMLStencilElement {}
  var HTMLDeckgoRevealListElement: {
    prototype: HTMLDeckgoRevealListElement;
    new (): HTMLDeckgoRevealListElement;
  };
  interface HTMLElementTagNameMap {
    'deckgo-deck': HTMLDeckgoDeckElement;
    'deckgo-pager': HTMLDeckgoPagerElement;
    'deckgo-reveal': HTMLDeckgoRevealElement;
    'deckgo-reveal-list': HTMLDeckgoRevealListElement;
  }
}

declare namespace LocalJSX {
  interface DeckgoDeck {
    'cloneBackground'?: boolean;
    'embedded'?: boolean;
    'keyboard'?: boolean;
    'onDeckDidLoad'?: (event: CustomEvent<void>) => void;
    'onMouseInactivity'?: (event: CustomEvent<boolean>) => void;
    'onSlideDrag'?: (event: CustomEvent<number>) => void;
    'onSlideNextDidAnimate'?: (event: CustomEvent<void>) => void;
    'onSlideNextDidChange'?: (event: CustomEvent<number>) => void;
    'onSlidePrevDidAnimate'?: (event: CustomEvent<void>) => void;
    'onSlidePrevDidChange'?: (event: CustomEvent<number>) => void;
    'onSlideToChange'?: (event: CustomEvent<number>) => void;
    'onSlideWillChange'?: (event: CustomEvent<number>) => void;
    'onSlidesDidLoad'?: (event: CustomEvent<any>) => void;
    'reveal'?: boolean;
    'revealOnMobile'?: boolean;
    'transition'?: 'slide' | 'fade' | 'none';
  }
  interface DeckgoPager {
    'activeIndex'?: number;
    'length'?: number;
    'onPagerClick'?: (event: CustomEvent<void>) => void;
  }
  interface DeckgoReveal {
    'allElementsHidden'?: boolean;
    'allElementsRevealed'?: boolean;
  }
  interface DeckgoRevealList {
    'allElementsHidden'?: boolean;
    'allElementsRevealed'?: boolean;
    'listTag'?: string;
  }

  interface IntrinsicElements {
    'deckgo-deck': DeckgoDeck;
    'deckgo-pager': DeckgoPager;
    'deckgo-reveal': DeckgoReveal;
    'deckgo-reveal-list': DeckgoRevealList;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'deckgo-deck': LocalJSX.DeckgoDeck & JSXBase.HTMLAttributes<HTMLDeckgoDeckElement>;
      'deckgo-pager': LocalJSX.DeckgoPager & JSXBase.HTMLAttributes<HTMLDeckgoPagerElement>;
      'deckgo-reveal': LocalJSX.DeckgoReveal & JSXBase.HTMLAttributes<HTMLDeckgoRevealElement>;
      'deckgo-reveal-list': LocalJSX.DeckgoRevealList & JSXBase.HTMLAttributes<HTMLDeckgoRevealListElement>;
    }
  }
}


