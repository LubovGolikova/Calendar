import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import PrimaryButton from "../components/PrimarryButton/PrimarryButton";
import PrimaryInput from "../components/PrimaryInput/PrimaryInput";
import PrimaryCalendar from "../components/PrimaryCalendar/PrimaryCalendar";

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
storiesOf('My Custom BTN', module)
    .add('ActiveButton',() => (
        <>
            <PrimaryButton color={"red"}
                           titleBtn={"test1"}
                           size={"Big"}/>
            <PrimaryButton color={"yellow"}
                           titleBtn={"test2"}
                           size={"Small"}/>
            <PrimaryButton color={"blue"}
                           titleBtn={"test3"}
                           size={"Middle"}/>
        </>
    ));
storiesOf('PrimaryInput', module)
    .add('Valid input', () => (
        <div style={{display:"flex", "flex-direction":"column"}}>
            <PrimaryInput
                placeholder={"Email"}
                type={'email'}
                errorMessage={"Email is not valid"}
                isDataValid={true}
                title={"Email"}
                value={"google@google.com"}/>
            <PrimaryInput
                placeholder={"Email"}
                type={'email'}
                errorMessage={"Email is not valid"}
                isDataValid={true}
                title={"Email"}
                value={""}/>
            <PrimaryInput
                placeholder={"Email"}
                type={'email'}
                errorMessage={"Email is not valid"}
                isDataValid={true}
                title={"Email"}
                value={"sdf0"}/>
            <PrimaryInput
                placeholder={"Password"}
                type={'password'}
                errorMessage={"Invalid password"}
                isDataValid={true}
                title={"Email"}
                value={"sdf"}/>
            </div>
    ));
storiesOf('My Custom Calendar', module)
    .add('Calendar',() => (
        <>
            <PrimaryCalendar />
        </>
    ));
