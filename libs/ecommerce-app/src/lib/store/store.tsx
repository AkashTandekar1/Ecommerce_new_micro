import styled from 'styled-components';

import { createStore } from "redux";
import rootred from "../reducer";


const store = createStore(
    rootred
);


export default store;
