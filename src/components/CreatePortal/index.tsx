import { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CreatePortal extends Component<any, any> {
  private body: HTMLElement | null;
  private readonly el: HTMLElement;

  constructor(props: any) {
    super(props);

    this.body = document.querySelector('body');
    this.el = document.createElement('dev');
  }

  componentDidMount() {
    this.el.setAttribute('id', 'portal-root');
    this.body = document.appendChild(this.el);
  }

  componentWillUnmount() {
    if (this.body) {
      this.body.removeChild(this.el);
    }
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
