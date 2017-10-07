import React, { Component } from 'react'
import {  Button, Modal, Tab, Checkbox, Form, Divider } from 'semantic-ui-react'
import "../semantic/dist/semantic.rtl.min.css";
import '../css/master.css';

class ModalExampleDimmer extends Component {
    state = { open: false }

    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })

    render() {
        
        const { open, dimmer } = this.state
        const panes = [
            {
                menuItem: 'ثبت نام', render: () => <Tab.Pane>
                    <Form>
                        <Form.Field>
                            <label>نام کاربری</label>
                            <input placeholder='EsmaeelK' />
                        </Form.Field>
                        <Form.Field>
                            <label>ایمیل</label>
                            <input placeholder='etc@example.com' type='email' />
                        </Form.Field>
                        <Form.Field>
                            <label>رمز عبور</label>
                            <input placeholder='***' type='password' />
                        </Form.Field>
                        <Form.Field>
                            <a href="#!">مشاهده قوانین</a>
                            <Divider hidden='true'/>
                            <Checkbox label= 'با تمام قوانین موافقت دارم'/>
                        </Form.Field>
                        <Button type='submit'>ثبت</Button>
                    </Form>
                </Tab.Pane>
            },
            {
                menuItem: 'ورود', render: () => <Tab.Pane>
                    <Form>
                        <Form.Field>
                            <label>نام کاربری</label>
                            <input placeholder='EsmaeelK' />
                        </Form.Field>
                        <Form.Field>
                            <label>رمز عبور</label>
                            <input placeholder='***' type='password' />
                        </Form.Field>
                        <Form.Field>
                           
                            <Checkbox label= 'مرا به خاطر بسپار'/>
                            <Divider hidden='true'/>
                            <a href="#!">رمز عبور خود را فراموش کرده ام</a>
                            
                        </Form.Field>
                        <Button type='submit'>ورود</Button>
                    </Form>
        </Tab.Pane>
            },
        ];
        return (
            <div>
                <span onClick={this.show('blurring')}> ثبت نام / ورود </span>

                <Modal dimmer={dimmer} open={open} onClose={this.close}>
                    <Modal.Content>
                        <Modal.Description>
                            <Tab panes={panes} />
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </div>
        )
    }
}

export default ModalExampleDimmer

