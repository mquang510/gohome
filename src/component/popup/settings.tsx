import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { settingText } from '../../common/language-vi';
import { Form } from 'react-bootstrap';
import { animalRunningTime, obstacleLevel } from '../../common/constants';
import _ from 'lodash'

export default function SettingPopup({ isOpenSetting, onUpdate, onHide, settings } : any) {
    const levelKeys = _.keys(obstacleLevel)
    const timeKeys = _.keys(animalRunningTime)
    const [level, setLevel] = useState(settings.level)
    const [time, setTime] = useState(settings.time)
    const onChangeLevel = (e: any, key: any) => {
        setLevel(obstacleLevel[key])
    }
    const onChangeTime = (e: any, key: any) => {
        setTime(animalRunningTime[key])
    }
    const onUpdating = (e: any) => {
        onUpdate({
            level: level,
            time: time
        })
    }
    return (
    <>
      <Modal show={isOpenSetting} centered={true}>
        <Modal.Header>
          <Modal.Title>{settingText.header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='mb-3'>
                <div>
                    {settingText.animal.number}
                </div>
                <div>
                    {levelKeys.map((key) => (
                        <Form.Check
                            inline
                            defaultChecked={level === obstacleLevel[key]}
                            label={settingText.level[key]}
                            name="group1"
                            type={'radio'}
                            onChange={(e) => { onChangeLevel(e, key) }}
                            id={`inline-${key}-1`}
                        />
                    ))}
                </div>
            </div>
            <div className='mb-3'>
                <div>
                    {settingText.animal.speed}
                </div>
                <div>
                    {timeKeys.map((key) => (
                    <Form.Check
                            inline
                            defaultChecked={time === animalRunningTime[key]}
                            label={settingText.time[key]}
                            name="group2"
                            type={'radio'}
                            onChange={(e) => { onChangeTime(e, key) }}
                            id={`inline-${key}-2`}
                        />
                    ))}
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="light" onClick={onHide}>
                {settingText.buttons.cancel}
            </Button>
            <Button variant="primary" type="submit" onClick={onUpdating}>
                {settingText.buttons.update}
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}