import React, { useState } from 'react';
import styles from './index.css';
import Modal from '@/components/Modal';

export default function() {

  const [show, setShow] = useState(true)

  const hanldClose = () => {
    setShow(false)
  }

  return (
    <div className={styles.normal}>
      <Modal show={show} onClose={hanldClose}/>
      <div>home</div>
    </div>
  );
}
