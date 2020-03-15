import React from 'react';
import Streak from "../Streak";
import TestGlose from "../TestGlose";
import {action} from "@storybook/addon-actions";

export default {
    title: 'TestGlose',
    component: TestGlose,
};

export const NorskTilEngelsk = () => <TestGlose
    lang1={"norsk"}
    lang2={"engelsk"}
    lang1glose={"bil"}
    submitAction={action('submit glose')}
/>;

export const EngelskTilNorsk = () => <TestGlose
    lang1={"engelsk"}
    lang2={"norsk"}
    lang1glose={"flower"}
    submitAction={action('submit glose')}
/>;
