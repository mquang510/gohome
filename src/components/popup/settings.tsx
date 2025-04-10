import React, { useMemo } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { settingText } from '../../utils/language-vi.ts';
import { Form } from 'react-bootstrap';
import { animalRunningTime, obstacleLevel } from '../../utils/constants.ts';
import _ from 'lodash'
import { useOption } from '../../hooks/Options.ts';

export default function SettingPopup({ isOpenSetting, onUpdate, onHide, settings } : any) {
    const levelKeys = useMemo(() => {
        return _.keys(obstacleLevel)
    }, [])
    const levelValues: number[] = useMemo(() => {
        return _.map(levelKeys, (key) => obstacleLevel[key as keyof typeof obstacleLevel])
    }, [])
    const levelTextValues: string[] = useMemo(() => {
        const levelTextKeys = _.keys(settingText.level)
        return _.map(levelTextKeys, (key) => settingText.level[key as keyof typeof settingText.level])
    }, [])
    const timeKeys = useMemo(() => {
        return _.keys(animalRunningTime)
    }, [])
    const timeValues: number[] = useMemo(() => {
        return _.map(timeKeys, (key) => animalRunningTime[key as keyof typeof animalRunningTime])
    }, [])
    
    const timeTextValues: string[] = useMemo(() => {
        const timeTextKeys = _.keys(settingText.time)
        return _.map(timeTextKeys, (key) => settingText.time[key as keyof typeof settingText.time])
    }, [])
    const level = useOption(settings.level)
    const time = useOption(settings.time)
    const onUpdating = () => {
        onUpdate({
            level: level.value,
            time: time.value
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
                            defaultChecked={level.value === levelValues[index]}
                            label={levelTextValues[index]}
                            name="group1"
                            type={'radio'}
                            onChange={(e) => { level.onChange(levelValues[index]) }}
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
                            defaultChecked={time.value === timeValues[index]}
                            label={timeTextValues[index]}
                            name="group2"
                            type={'radio'}
                            onChange={(e) => { time.onChange(timeValues[index]) }}
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