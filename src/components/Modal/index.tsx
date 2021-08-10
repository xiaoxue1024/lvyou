import { Icon } from 'antd-mobile';
import CreatePortal from '@/components/CreatePortal';
import React, { Component } from 'react';
import styles from './index.css';

interface ModalProps {
  show: boolean;
  onClose: any;
}

export default class Modal extends Component<any, any> {

  constructor(props: ModalProps) {
    super(props);
  }

  handleClose = () => {
    const { onClose } = this.props
    onClose()
  };

  render() {
    const { show } = this.props;
    return (
      <>
        {show ? (
          <CreatePortal>
            <div className={styles.body}>
              {this.props.children}
              <Icon type={'cross'} size={'lg'} className={styles.close} onClick={this.handleClose} />
            </div>
          </CreatePortal>
        ) : null}
      </>
    );
  }
}
