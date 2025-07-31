import Image from 'next/image'
import React from 'react'

import styles from '@/styles/login.module.scss';
import image from '@/public/images/loginimg.png';
import { Logo } from '@/assets/svgs';
function ImageScreen() {
  return (
    <div className={styles.imgScreenContainer}>
      <div className={styles.imgscreeninner}>
        <Logo width={138} height={36} />

        <div style={{ width: "600px", height: "338px",position:"relative" }}>
          <Image src={image} alt="" fill style={{ 
            objectFit: "cover",
            objectPosition: "center",
          }} />
        </div>
      </div>
    </div>
  );
}

export default ImageScreen