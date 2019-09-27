import { Component, ComponentInterface, Host, h, State, Prop, Method } from '@stencil/core';
import { getIonMode } from '../../global/ionic-global';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
@Component({
  tag: 'ion-card-tray',
  styleUrls: {
    ios: 'card-tray.ios.scss',
    md: 'card-tray.md.scss'
  }
})
export class CardTray implements ComponentInterface {
  @State() openContent = false;
  // @Prop({ mutable: true }) openContent: boolean = false;

  @Method()
  toggleContent() {
    console.log('here')
    this.openContent = !this.openContent
    console.log(this.openContent)
  }

  render() {
    const mode = getIonMode(this);
    return (
      <Host
        class={{
          [mode]: true,

          // Used internally for styling
          [`card-tray-${mode}`]: true
        }}
      >
        <tray-content closed={!this.openContent}><slot></slot></tray-content>
        <toggle-bar onClick={() => {this.toggleContent()}}><ion-icon class="arrow" name={this.openContent ? "ios-arrow-up" : "ios-arrow-down"}></ion-icon><toggle-text>View details</toggle-text></toggle-bar>
      </Host>
    );
  }
}
