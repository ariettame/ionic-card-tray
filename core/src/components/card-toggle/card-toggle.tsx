import { Component, ComponentInterface, Host, h } from '@stencil/core';

import { getIonMode } from '../../global/ionic-global';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
@Component({
  tag: 'ion-card-toggle',
  styleUrls: {
    ios: 'card-toggle.ios.scss',
    md: 'card-toggle.md.scss'
  }
})
export class CardToggle implements ComponentInterface {
  toggleContent() {

  }
  render() {
    const mode = getIonMode(this);
    return (
      <Host
        class={{
          [mode]: true,

          // Used internally for styling
          [`card-toggle-${mode}`]: true
        }}
      >
        <toggle-bar onClick={toggleContent}><ion-icon class="arrow" name="ios-arrow-down"></ion-icon><toggle-text><slot></slot></toggle-text></toggle-bar>
      </Host>
    );
  }
}
