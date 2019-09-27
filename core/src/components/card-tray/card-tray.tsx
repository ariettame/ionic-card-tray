import { Component, ComponentInterface, Host, h, State, Method, Prop } from '@stencil/core';
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

  @Prop() moreString: string = "View details";
  @Prop() lessString: string = 'Hide details';


  @Method()
  toggleContent() {
    console.log(this.moreString)
    this.openContent = !this.openContent
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
        {console.log(this.moreString)}
        <tray-content closed={!this.openContent}><slot></slot></tray-content>
        <toggle-bar onClick={() => {this.toggleContent()}}><ion-icon class="arrow"
        name={this.openContent ? "ios-arrow-up" : "ios-arrow-down"}></ion-icon>
        <toggle-text>{this.openContent ? this.lessString : this.moreString}</toggle-text></toggle-bar>
      </Host>
    );
  }
}
