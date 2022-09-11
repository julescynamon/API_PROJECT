import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './spinner.module.scss';

const Spinner = () => {
    return <FontAwesomeIcon icon={faSpinner} className={styles.spinner} />;
};

export default Spinner;