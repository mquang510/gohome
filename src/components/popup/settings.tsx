import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { settingText } from '../../utils/language-vi.ts';
import { Form } from 'react-bootstrap';
import { animalRunningTime, obstacleLevel } from '../../utils/constants.ts';
import _ from 'lodash'

export default function SettingPopup({ isOpenSetting, onUpdate, onHide, settings } : any) {
    const levelKeys = _.keys(obstacleLevel)
    const levelValues: number[] = _.map(levelKeys, (key) => obstacleLevel[key as keyof typeof obstacleLevel])
    const levelTextKeys = _.keys(settingText.level)
    const levelTextValues: string[] = _.map(levelTextKeys, (key) => settingText.level[key as keyof typeof settingText.level])
    const timeKeys = _.keys(animalRunningTime)
    const timeValues: number[] = _.map(timeKeys, (key) => animalRunningTime[key as keyof typeof animalRunningTime])
    const timeTextKeys = _.keys(settingText.time)
    const timeTextValues: string[] = _.map(timeTextKeys, (key) => settingText.time[key as keyof typeof settingText.time])
    const [level, setLevel] = useState(settings.level)
    const [time, setTime] = useState(settings.time)
    const onChangeLevel = (index: number) => {
        setLevel(levelValues[index])
    }
    const onChangeTime = (index: number) => {
        setTime(timeValues[index])
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
                    {levelKeys.map((key, index) => (
                        <Form.Check
                            inline
                            defaultChecked={level === levelValues[index]}
                            label={levelTextValues[index]}
                            name="group1"
                            type={'radio'}
                            onChange={(e) => { onChangeLevel(index) }}
                            id={`inline-${key}-1`}
                        />
                    ))}
                </div>
            </div>
            <div className='mb-3 border-top'>
                <div>
                    {settingText.animal.speed}
                </div>
                <div>
                    {timeKeys.map((key, index) => (
                    <Form.Check
                            inline
                            defaultChecked={time === timeValues[index]}
                            label={timeTextValues[index]}
                            name="group2"
                            type={'radio'}
                            onChange={(e) => { onChangeTime(index) }}
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