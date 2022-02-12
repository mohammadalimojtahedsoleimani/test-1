import React , { useState } from 'react';
import btcIcon from '../../assets/icon/asd123asd1231.jpg'
import style from "./Main.module.css"
import { Button , Modal } from 'react-bootstrap';

const Main = () => {
    const [ data , setData ] = useState ( 0 )
    const [ output , setOutput ] = useState ( 0 )
    const [ check , setCheck ] = useState ( true )
    const [ show , setShow ] = useState ( false )
    const changeHandler = ( event ) => {

        setData ( event.target.value )
        setOutput ( event.target.value * 10 )

    }
    const clickHandler = () => {
        setCheck ( ! check )
    }
    const modalButtonHandler = () => {
        setShow ( false )
        setData ( data - 1 )
        setOutput ( output + 10 )
    }

    return (
        <div className={ style.main }>
            <h4>Swap</h4>
            <button className={ style.swap } onClick={ clickHandler }>Switch</button>
            {
                check ?
                    [ <div className={ style.dataContainer }>

                        <input type="number" placeholder={ data } onChange={ changeHandler }/>

                        <span>{ data }</span>

                    </div> ,
                        <div className={ style.dataContainer }>
                            <input type="number" value={ output }/>

                            <span>{ output }</span>
                        </div>
                    ]
                    :
                    [ <div className={ style.dataContainer }>
                        <input type="number" value={ output }/>

                        <span>{ output }</span>
                    </div> ,
                        <div className={ style.dataContainer }>
                            <input type="number" placeholder={ data } onChange={ changeHandler }/>

                            <span>{ data }</span>
                        </div> ]

            }
            {
                output === 0 ?
                    <div className={ style.pEndContainer }>
                        <p>Enter amount</p>
                    </div>
                    :
                    <div className={ style.bEndContainer }>
                        <button onClick={ () => setShow ( true ) }>Swap</button>
                        <Modal show={ show }>
                            <Modal.Header>
                                Are you sure?
                            </Modal.Header>
                            <Modal.Body>
                                <p>{ data }</p>
                                <p>{ output }</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={ modalButtonHandler }>
                                    Swap
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>

            }

        </div>
    );
};

export default Main;
