import { useEffect, useState } from 'react';
import styles from './WithLoadingDelay.module.css';

const WithLoadingDelay = (props) => {
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    setTimeout(() => setHidden(false), 2000);
  }, []);
  const loadingCard = (
    <div className={styles.loadingSpace}>
      <svg version="1.1" id="loader" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 30 180">
        <rect x="5" y="70" width="28" height="8" fill="#EFEFEFB2">
          <animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0s" dur="0.6s" repeatCount="indefinite" />
        </rect>
        <rect x="5" y="80" width="28" height="8" fill="#EFEFEFB2">
          <animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0.2s" dur="0.6s" repeatCount="indefinite" />
        </rect>
        <rect x="5" y="90" width="28" height="8" fill="#EFEFEFB2">
          <animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0.4s" dur="0.6s" repeatCount="indefinite" />
        </rect>
      </svg>
    </div>
  );
  return hidden ? loadingCard : props.children;
};
export default WithLoadingDelay;
