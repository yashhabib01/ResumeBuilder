import { FaFileExport, FaFileImport } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import React, { memo, useContext, useState } from 'react';
import * as styles from './Actions.module.css';
import { useDispatch } from '../../../../contexts/ResumeContext';
import Button from '../../../shared/Button';
import Heading from '../../../shared/Heading';
// import Input from '../../../shared/Input';
import ModalContext from '../../../../contexts/ModalContext';

const Actions = ({ id }) => {
  const { t } = useTranslation();

  // const [loadDemoText, setLoadDemoText] = useState(
  //   t('builder.actions.loadDemoData.button'),
  // );
  const [resetText, setResetText] = useState(
    t('builder.actions.resetEverything.button'),
  );

  const dispatch = useDispatch();
  const { emitter, events } = useContext(ModalContext);

  const handleImport = () => emitter.emit(events.IMPORT_MODAL);

  const handleExport = () => emitter.emit(events.EXPORT_MODAL);

  // const getSharableUrl = () => {
  //   const shareId = state.id;
  //   return `https://rxresu.me/r/${shareId}`;
  // };

  // const handleOpenLink = () => {
  //   if (typeof window !== `undefined`) {
  //     window && window.open(getSharableUrl());
  //   }
  // };

  const handleReset = () => {
    if (resetText === t('builder.actions.resetEverything.button')) {
      setResetText(t('shared.buttons.confirmation'));
      return;
    }

    setResetText(t('builder.actions.resetEverything.button'));
    dispatch({ type: 'reset_data' });
  };

  return (
    <section>
      <Heading id={id} />

      <div className={styles.container}>
        <h5>{t('builder.actions.import.heading')}</h5>

        <p className="leading-loose">{t('builder.actions.import.text')}</p>

        <div className="mt-4 flex">
          <Button icon={FaFileImport} onClick={handleImport}>
            {t('builder.actions.import.button')}
          </Button>
        </div>
      </div>

      <div className={styles.container}>
        <h5>{t('builder.actions.export.heading')}</h5>

        <p className="leading-loose">{t('builder.actions.export.text')}</p>

        <div className="mt-4 flex">
          <Button icon={FaFileExport} onClick={handleExport}>
            {t('builder.actions.export.button')}
          </Button>
        </div>
      </div>

      {/*
    
    <div className={styles.container}>
        <h5>{t('builder.actions.loadDemoData.button')}</h5>

        <p className="leading-loose">
          {t('builder.actions.loadDemoData.text')}
        </p>

        <div className="mt-4 flex">
          <Button onClick={handleLoadDemo}>{loadDemoText}</Button>
        </div>
      </div>
    */}

      <div className={styles.container}>
        <h5>{t('builder.actions.resetEverything.button')}</h5>

        <p className="leading-loose">
          {t('builder.actions.resetEverything.text')}
        </p>

        <div className="mt-4 flex">
          <Button onClick={handleReset}>{resetText}</Button>
        </div>
      </div>
    </section>
  );
};

export default memo(Actions);
