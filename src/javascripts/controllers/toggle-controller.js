import { Controller } from 'stimulus';

class ToggleController extends Controller {
  connect() {
    this.controllerToggleClass = this.data.get('controller-toggle-class');
  }

  toggle(event) {
    this.element.classList.toggle(this.controllerToggleClass);

    event.currentTarget.blur(); // Chrome will keep focused button within viewport unless blurred.
  }
}

export {
  ToggleController,
  ToggleController as default,
};
