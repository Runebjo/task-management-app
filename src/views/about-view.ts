import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("about-view")
export class AboutView extends LitElement {
    render() {
        return html`
    <h2>About</h2>
    `
    }
}